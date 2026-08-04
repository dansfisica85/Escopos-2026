from __future__ import annotations

import argparse
import concurrent.futures
import hashlib
import json
import os
import re
import shutil
import time
import unicodedata
import urllib.parse
import urllib.request
import zipfile
from collections import defaultdict
from pathlib import Path, PurePosixPath
from xml.etree import ElementTree as ET


NS = {
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
}
RID = f"{{{NS['r']}}}id"

SLIDE_CONFIG = {
    73: ("2ª série", "Introdução a Python: funções e loops", 0, "professor"),
    74: ("2ª série", "Introdução a Python: funções e loops", 0, "estudante"),
    75: ("2ª série", "Ciência de dados: construindo uma análise de dados com Python", 4, "professor"),
    76: ("2ª série", "Ciência de dados: construindo uma análise de dados com Python", 4, "estudante"),
    77: ("3ª série", "Ciência de dados: prevendo padrões de qualidade de vida da turma", 0, "professor"),
    78: ("3ª série", "Ciência de dados: prevendo padrões de qualidade de vida da turma", 0, "estudante"),
    79: ("3ª série", "Página web: meu primeiro flashcard", 10, "professor"),
    80: ("3ª série", "Página web: meu primeiro flashcard", 10, "estudante"),
}

KIND_ORDER = {
    "manual-professor": 0,
    "guia-professor": 1,
    "gabarito-professor": 2,
    "desafio": 3,
    "material-estudante": 4,
    "slides-estudante": 5,
    "lista-exercicios": 6,
    "outro": 7,
}


def extract_slide_paths(package: zipfile.ZipFile) -> list[str]:
    presentation = ET.fromstring(package.read("ppt/presentation.xml"))
    relationships = ET.fromstring(package.read("ppt/_rels/presentation.xml.rels"))
    target_by_id = {rel.attrib["Id"]: rel.attrib["Target"] for rel in relationships}
    paths: list[str] = []
    for slide_id in presentation.findall(".//p:sldId", NS):
        target = target_by_id[slide_id.attrib[RID]]
        paths.append(str(PurePosixPath("ppt") / target).replace("ppt/../", ""))
    return paths


def extract_links(package: zipfile.ZipFile, slide_path: str) -> list[dict[str, str]]:
    names = set(package.namelist())
    root = ET.fromstring(package.read(slide_path))
    rel_path = str(PurePosixPath(slide_path).parent / "_rels" / (PurePosixPath(slide_path).name + ".rels"))
    relationships: dict[str, dict[str, str]] = {}
    if rel_path in names:
        rel_root = ET.fromstring(package.read(rel_path))
        relationships = {rel.attrib["Id"]: rel.attrib for rel in rel_root}

    links: list[dict[str, str]] = []
    seen: set[tuple[str, str]] = set()
    for run in root.findall(".//a:r", NS) + root.findall(".//a:fld", NS):
        label = "".join((node.text or "") for node in run.findall(".//a:t", NS)).strip()
        for hyperlink in run.findall(".//a:hlinkClick", NS):
            relation = relationships.get(hyperlink.attrib.get(RID, ""), {})
            url = relation.get("Target", "")
            pair = (label, url)
            if url.startswith(("http://", "https://")) and pair not in seen:
                links.append({"label": label or "Material", "url": url})
                seen.add(pair)
    return links


def classify(label: str) -> tuple[str, str, str]:
    normalized = label.casefold()
    if "material do professor" in normalized:
        return "manual-professor", "professor", "Manual do professor"
    if "guia do professor" in normalized:
        return "guia-professor", "professor", label
    if "gabarito do professor" in normalized and "desafio" not in normalized:
        return "gabarito-professor", "professor", label
    if "desafio" in normalized:
        return "desafio", "professor", label
    if "slide do estudante" in normalized:
        return "slides-estudante", "estudante", label
    if "lista de exercícios" in normalized:
        return "lista-exercicios", "estudante", label
    if "material digital" in normalized:
        audience = "professor" if "professor" in normalized else "estudante"
        kind = "guia-professor" if audience == "professor" else "material-estudante"
        return kind, audience, label
    return "outro", "ambos", label


def safe_filename(url: str, used: dict[str, str]) -> str:
    basename = urllib.parse.unquote(Path(urllib.parse.urlparse(url).path).name)
    ascii_name = unicodedata.normalize("NFKD", basename).encode("ascii", "ignore").decode("ascii")
    ascii_name = re.sub(r"[^A-Za-z0-9._-]+", "_", ascii_name).strip("._")
    if not ascii_name:
        ascii_name = hashlib.sha1(url.encode()).hexdigest() + ".pdf"
    previous = used.get(ascii_name.casefold())
    if previous and previous != url:
        stem, suffix = os.path.splitext(ascii_name)
        ascii_name = f"{stem}_{hashlib.sha1(url.encode()).hexdigest()[:8]}{suffix}"
    used[ascii_name.casefold()] = url
    return ascii_name


def build_manifest(source: Path) -> list[dict[str, object]]:
    materials: list[dict[str, object]] = []
    used_names: dict[str, str] = {}
    with zipfile.ZipFile(source) as package:
        slide_paths = extract_slide_paths(package)
        for slide_number, (series, unit, offset, default_audience) in SLIDE_CONFIG.items():
            for link in extract_links(package, slide_paths[slide_number - 1]):
                label = link["label"]
                kind, audience, title = classify(label)
                if audience == "ambos":
                    audience = default_audience
                match = re.search(r"Aula\s+(\d+)", label, flags=re.IGNORECASE)
                internal_lesson = int(match.group(1)) if match else 1
                site_lesson = offset + internal_lesson
                # Na 2ª série, a avaliação da unidade ocupa as aulas 9 e 10.
                # A unidade 5679 retoma em Aula 11, portanto seus itens 5–8
                # correspondem às aulas 11–14 do escopo-sequência.
                if slide_number in (75, 76) and internal_lesson >= 5:
                    site_lesson += 2
                filename = safe_filename(link["url"], used_names)
                if kind == "manual-professor":
                    title = f"Manual do professor — {unit}"
                materials.append(
                    {
                        "series": series,
                        "unit": unit,
                        "site_lesson": site_lesson,
                        "internal_lesson": internal_lesson,
                        "title": title,
                        "kind": kind,
                        "audience": audience,
                        "format": "PDF",
                        "source_url": link["url"],
                        "filename": filename,
                        "source_slide": slide_number,
                    }
                )

    unique_urls = {item["source_url"] for item in materials}
    if len(materials) != 112 or len(unique_urls) != 112:
        raise RuntimeError(f"Expected 112 distinct materials, found {len(materials)} rows and {len(unique_urls)} URLs")
    lessons_by_series = {
        series: {int(item["site_lesson"]) for item in materials if item["series"] == series}
        for series in {str(item["series"]) for item in materials}
    }
    expected_lessons = set(range(1, 9)) | set(range(11, 15))
    for series, lessons in lessons_by_series.items():
        if lessons != expected_lessons:
            raise RuntimeError(
                f"Unexpected lesson mapping for {series}: {sorted(lessons)}"
            )
    return sorted(
        materials,
        key=lambda item: (
            str(item["series"]),
            int(item["site_lesson"]),
            KIND_ORDER.get(str(item["kind"]), 99),
            str(item["title"]),
        ),
    )


def download_one(item: dict[str, object], output_dir: Path, retries: int = 4) -> dict[str, object]:
    destination = output_dir / str(item["filename"])
    if destination.exists() and destination.stat().st_size > 0:
        digest = hashlib.sha256(destination.read_bytes()).hexdigest()
        return {**item, "bytes": destination.stat().st_size, "sha256": digest, "downloaded": False}

    temporary = destination.with_suffix(destination.suffix + ".part")
    request = urllib.request.Request(str(item["source_url"]), headers={"User-Agent": "Mozilla/5.0"})
    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=120) as response, temporary.open("wb") as target:
                shutil.copyfileobj(response, target, length=1024 * 1024)
            if temporary.stat().st_size == 0:
                raise RuntimeError("empty download")
            temporary.replace(destination)
            digest = hashlib.sha256(destination.read_bytes()).hexdigest()
            return {**item, "bytes": destination.stat().st_size, "sha256": digest, "downloaded": True}
        except Exception as error:  # noqa: BLE001
            last_error = error
            temporary.unlink(missing_ok=True)
            if attempt < retries:
                time.sleep(attempt * 2)
    raise RuntimeError(f"Failed to download {item['source_url']}: {last_error}")


def download_all(materials: list[dict[str, object]], output_dir: Path, workers: int) -> list[dict[str, object]]:
    output_dir.mkdir(parents=True, exist_ok=True)
    results: list[dict[str, object]] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(download_one, item, output_dir) for item in materials]
        for completed, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            result = future.result()
            results.append(result)
            print(f"[{completed:03d}/{len(futures):03d}] {result['filename']} ({result['bytes']} bytes)", flush=True)
    return sorted(results, key=lambda item: str(item["filename"]))


def ts_quote(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def write_typescript(materials: list[dict[str, object]], destination: Path, release_tag: str) -> None:
    grouped: dict[str, dict[int, list[dict[str, object]]]] = defaultdict(lambda: defaultdict(list))
    for item in materials:
        grouped[str(item["series"])][int(item["site_lesson"])].append(item)

    lines = [
        "import { MaterialEscopo } from './models';",
        "",
        "// Gerado a partir dos hyperlinks dos slides 73–80 de Materiais Didáticos.pptx.",
        "// Abrange os 112 materiais oficiais do 3º bimestre de Programação.",
        "export const PROGRAMACAO_3B_MATERIAIS: Record<string, Record<number, MaterialEscopo[]>> = {",
    ]
    for series in ("2ª série", "3ª série"):
        lines.append(f"  {ts_quote(series)}: {{")
        for lesson in sorted(grouped[series]):
            lines.append(f"    {lesson}: [")
            for item in grouped[series][lesson]:
                asset_url = (
                    "https://github.com/dansfisica85/Escopos-2026/releases/download/"
                    + release_tag
                    + "/"
                    + urllib.parse.quote(str(item["filename"]), safe="._-")
                )
                lines.extend(
                    [
                        "      {",
                        f"        titulo: {ts_quote(str(item['title']))},",
                        f"        link: {ts_quote(asset_url)},",
                        f"        tipo: {ts_quote(str(item['kind']))},",
                        f"        formato: {ts_quote(str(item['format']))},",
                        f"        publico: {ts_quote(str(item['audience']))}",
                        "      },",
                    ]
                )
            lines.append("    ],")
        lines.append("  },")
    lines.extend(["};", ""])
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text("\n".join(lines), encoding="utf-8", newline="\n")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path)
    parser.add_argument("--download-dir", required=True, type=Path)
    parser.add_argument("--audit-json", required=True, type=Path)
    parser.add_argument("--typescript", required=True, type=Path)
    parser.add_argument("--release-tag", default="programacao-3b-2026")
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--skip-download", action="store_true")
    args = parser.parse_args()

    materials = build_manifest(args.source)
    if args.skip_download:
        results = materials
    else:
        results = download_all(materials, args.download_dir, max(1, args.workers))

    args.audit_json.parent.mkdir(parents=True, exist_ok=True)
    args.audit_json.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    write_typescript(materials, args.typescript, args.release_tag)
    print(json.dumps({"materials": len(materials), "downloaded_dir": str(args.download_dir)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
