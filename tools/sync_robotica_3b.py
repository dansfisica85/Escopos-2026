#!/usr/bin/env python3
"""Sincroniza os materiais de Robotica do 3o bimestre.

O script le a pasta de origem sem altera-la, valida os PPTX/XLSX, cria nomes
ASCII deterministas para os assets de uma GitHub Release, prepara hardlinks
(com copia como fallback) e gera os artefatos de auditoria e dados TypeScript.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import sys
import unicodedata
import xml.etree.ElementTree as ET
import zipfile
from collections import Counter
from pathlib import Path
from typing import Any


RELEASE_TAG = "robotica-3b-2026"
RELEASE_BASE_URL = (
    "https://github.com/dansfisica85/Escopos-2026/releases/download/"
    f"{RELEASE_TAG}"
)

PRESENTATION_NS = "http://schemas.openxmlformats.org/presentationml/2006/main"
DRAWING_NS = "http://schemas.openxmlformats.org/drawingml/2006/main"
SPREADSHEET_NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
OFFICE_REL_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"

CORE_NS = {
    "dc": "http://purl.org/dc/elements/1.1/",
    "dcterms": "http://purl.org/dc/terms/",
    "cp": "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
}

SERIES_SPECS = [
    {
        "key": "ef-6",
        "asset_code": "ef-6ano",
        "cycle": "Ensino Fundamental: Anos Finais",
        "year": "6º ano",
        "scope_source": "pptx",
    },
    {
        "key": "ef-7",
        "asset_code": "ef-7ano",
        "cycle": "Ensino Fundamental: Anos Finais",
        "year": "7º ano",
        "scope_source": "pptx",
    },
    {
        "key": "ef-8",
        "asset_code": "ef-8ano",
        "cycle": "Ensino Fundamental: Anos Finais",
        "year": "8º ano",
        "scope_source": "pptx",
    },
    {
        "key": "ef-9",
        "asset_code": "ef-9ano",
        "cycle": "Ensino Fundamental: Anos Finais",
        "year": "9º ano",
        "scope_source": "pptx",
    },
    {
        "key": "em-1",
        "asset_code": "em-1serie",
        "cycle": "Ensino Médio",
        "year": "1ª série",
        "scope_source": "xlsx",
    },
    {
        "key": "em-23",
        "asset_code": "em-2e3series",
        "cycle": "Ensino Médio",
        "year": "2ª/3ª séries",
        "scope_source": "xlsx",
    },
]

OBJECTIVE_VERBS = {
    "analisar",
    "aplicar",
    "compreender",
    "construir",
    "criar",
    "desenvolver",
    "entender",
    "explicar",
    "explorar",
    "identificar",
    "integrar",
    "interpretar",
    "planejar",
    "programar",
    "projetar",
    "propor",
    "reconhecer",
    "refletir",
    "relacionar",
    "representar",
    "retomar",
    "testar",
    "utilizar",
}


def ascii_fold(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    return normalized.encode("ascii", "ignore").decode("ascii")


def ascii_slug(value: str) -> str:
    slug = ascii_fold(value).casefold()
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "sem-titulo"


def compact_text(value: str) -> str:
    return " ".join(value.split())


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(8 * 1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest().upper()


def core_metadata(archive: zipfile.ZipFile) -> dict[str, str | None]:
    if "docProps/core.xml" not in archive.namelist():
        return {}
    root = ET.fromstring(archive.read("docProps/core.xml"))
    result: dict[str, str | None] = {}
    for key, xpath in (
        ("title", "dc:title"),
        ("subject", "dc:subject"),
        ("creator", "dc:creator"),
        ("lastModifiedBy", "cp:lastModifiedBy"),
        ("created", "dcterms:created"),
        ("modified", "dcterms:modified"),
        ("keywords", "cp:keywords"),
        ("category", "cp:category"),
    ):
        element = root.find(xpath, CORE_NS)
        result[key] = element.text if element is not None else None
    return result


def slide_number(part_name: str) -> int:
    match = re.search(r"slide(\d+)\.xml$", part_name)
    if not match:
        raise ValueError(f"Nome de slide inesperado: {part_name}")
    return int(match.group(1))


def shape_texts(slide_root: ET.Element, min_length: int = 1) -> list[str]:
    allowed = {
        f"{{{PRESENTATION_NS}}}sp",
        f"{{{PRESENTATION_NS}}}graphicFrame",
    }
    texts: list[str] = []
    for node in slide_root.iter():
        if node.tag not in allowed:
            continue
        text = " ".join(
            compact_text(element.text or "")
            for element in node.iter(f"{{{DRAWING_NS}}}t")
            if (element.text or "").strip()
        )
        text = compact_text(text)
        if len(text) >= min_length:
            texts.append(text)
    return texts


def objective_score(text: str) -> int:
    score = 0
    for segment in re.split(r"[;.!?]+", ascii_fold(text).casefold()):
        words = re.findall(r"[a-z]+", segment)
        if words and words[0] in OBJECTIVE_VERBS:
            score += 1
    return score


def classify_slide_two(texts: list[str], source_name: str) -> tuple[str, str]:
    long_texts = [text for text in texts if len(text) >= 15]
    if len(long_texts) != 2:
        raise ValueError(
            f"{source_name}: esperado exatamente 2 blocos informativos no slide 2; "
            f"encontrados {len(long_texts)}"
        )
    first, second = long_texts
    first_score = objective_score(first)
    second_score = objective_score(second)
    if first_score > second_score:
        return second, first
    return first, second


def parse_title_slide(shapes: list[str], source_name: str) -> dict[str, Any]:
    normalized = [ascii_fold(shape).casefold() for shape in shapes]
    try:
        robotica_index = normalized.index("robotica")
        title = shapes[robotica_index + 1]
    except (ValueError, IndexError) as exc:
        raise ValueError(f"{source_name}: titulo nao localizado no slide 1") from exc

    header = " ".join(shapes)
    header_ascii = ascii_fold(header).casefold()
    lesson_match = re.search(r"\baulas?\s*0*(\d+)\s*e\s*0*(\d+)\b", header_ascii)
    if not lesson_match:
        raise ValueError(f"{source_name}: par de aulas nao localizado no slide 1")
    lesson_start, lesson_end = map(int, lesson_match.groups())
    if lesson_start % 2 != 1 or lesson_end != lesson_start + 1:
        raise ValueError(
            f"{source_name}: par de aulas inesperado {lesson_start} e {lesson_end}"
        )

    bimester_match = re.search(r"\b([1-4])\s*o?\s*bimestre\b", header_ascii)
    if not bimester_match:
        raise ValueError(f"{source_name}: bimestre nao localizado no slide 1")
    internal_bimester = int(bimester_match.group(1))

    if "ensino fundamental" in header_ascii:
        cycle = "Ensino Fundamental: Anos Finais"
        year_match = re.search(r"(?:^|\s)([6-9])\s*o(?:\s|$)", header_ascii)
        if not year_match:
            raise ValueError(f"{source_name}: ano EF nao localizado no slide 1")
        internal_year = int(year_match.group(1))
        series_key = f"ef-{internal_year}"
    elif "ensino medio" in header_ascii:
        cycle = "Ensino Médio"
        if "2 a e 3" in header_ascii:
            internal_year = "2ª/3ª séries"
            series_key = "em-23"
        elif any(re.fullmatch(r"1\s*a", value) for value in normalized):
            internal_year = "1ª série"
            series_key = "em-1"
        else:
            raise ValueError(f"{source_name}: serie EM nao localizada no slide 1")
    else:
        raise ValueError(f"{source_name}: ciclo nao localizado no slide 1")

    return {
        "title": title,
        "cycle": cycle,
        "seriesKey": series_key,
        "internalYear": internal_year,
        "internalBimester": internal_bimester,
        "lessonStart": lesson_start,
        "lessonEnd": lesson_end,
        "week": (lesson_start + 1) // 2,
        "rawShapes": shapes,
    }


def parse_presentation(path: Path) -> dict[str, Any]:
    with zipfile.ZipFile(path) as archive:
        slide_parts = sorted(
            (
                name
                for name in archive.namelist()
                if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)
            ),
            key=slide_number,
        )
        if len(slide_parts) < 2:
            raise ValueError(f"{path.name}: apresentacao com menos de 2 slides")

        parsed_slides: list[ET.Element] = []
        for part in slide_parts:
            parsed_slides.append(ET.fromstring(archive.read(part)))

        title_shapes = shape_texts(parsed_slides[0])
        details = parse_title_slide(title_shapes, path.name)
        contents, objectives = classify_slide_two(
            shape_texts(parsed_slides[1], min_length=15), path.name
        )
        metadata = core_metadata(archive)

    filename_ascii = ascii_fold(path.stem).casefold()
    filename_year_match = re.match(r"\s*([6-9])\s*o\s*ano\b", filename_ascii)
    filename_year = int(filename_year_match.group(1)) if filename_year_match else None

    details.update(
        {
            "sourcePath": str(path.resolve()),
            "sourceFile": path.name,
            "sizeBytes": path.stat().st_size,
            "sha256": sha256_file(path),
            "slideCount": len(slide_parts),
            "contents": contents,
            "objectives": objectives,
            "coreMetadata": metadata,
            "filenameYear": filename_year,
        }
    )
    return details


def workbook_cell_value(
    cell: ET.Element, shared_strings: list[str]
) -> str:
    cell_type = cell.attrib.get("t")
    value = cell.find(f"{{{SPREADSHEET_NS}}}v")
    if value is not None:
        raw = value.text or ""
        if cell_type == "s":
            return shared_strings[int(raw)]
        return raw
    if cell_type == "inlineStr":
        return "".join(
            element.text or ""
            for element in cell.iter(f"{{{SPREADSHEET_NS}}}t")
        )
    return ""


def parse_scope_workbook(path: Path) -> dict[str, Any]:
    with zipfile.ZipFile(path) as archive:
        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        relationships = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        relationship_map = {
            relation.attrib["Id"]: relation.attrib["Target"]
            for relation in relationships
        }

        shared_strings: list[str] = []
        if "xl/sharedStrings.xml" in archive.namelist():
            shared_root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
            for item in shared_root.findall(f"{{{SPREADSHEET_NS}}}si"):
                shared_strings.append(
                    "".join(
                        element.text or ""
                        for element in item.iter(f"{{{SPREADSHEET_NS}}}t")
                    )
                )

        sheets = workbook.find(f"{{{SPREADSHEET_NS}}}sheets")
        if sheets is None:
            raise ValueError("Planilha sem lista de abas")
        sheet_entries = list(sheets)
        if len(sheet_entries) != 1:
            raise ValueError(f"Esperada 1 aba; encontradas {len(sheet_entries)}")

        sheet_entry = sheet_entries[0]
        sheet_name = sheet_entry.attrib["name"]
        relationship_id = sheet_entry.attrib[f"{{{OFFICE_REL_NS}}}id"]
        target = relationship_map[relationship_id]
        if not target.startswith("xl/"):
            target = "xl/" + target.lstrip("/")
        sheet = ET.fromstring(archive.read(target))
        dimension = sheet.find(f"{{{SPREADSHEET_NS}}}dimension")

        rows: list[tuple[int, dict[str, str]]] = []
        for row in sheet.findall(f".//{{{SPREADSHEET_NS}}}row"):
            cells: dict[str, str] = {}
            for cell in row.findall(f"{{{SPREADSHEET_NS}}}c"):
                reference = cell.attrib["r"]
                column_match = re.match(r"[A-Z]+", reference)
                if not column_match:
                    continue
                cells[column_match.group(0)] = workbook_cell_value(
                    cell, shared_strings
                )
            rows.append((int(row.attrib["r"]), cells))

        scope: dict[str, dict[int, dict[str, Any]]] = {"em-1": {}, "em-23": {}}
        for row_number, cells in rows[1:]:
            cycle = compact_text(cells.get("B", ""))
            series = ascii_fold(compact_text(cells.get("C", ""))).casefold()
            bimester = ascii_fold(compact_text(cells.get("D", ""))).casefold()
            if cycle != "Ensino Médio" or not bimester.startswith("3"):
                continue
            if series.startswith("1"):
                series_key = "em-1"
            elif series.startswith("2") and "/3" in series:
                series_key = "em-23"
            else:
                continue

            week = int(float(cells.get("E", "0")))
            lesson_text = compact_text(cells.get("F", ""))
            lesson_match = re.search(r"0*(\d+)\s*e\s*0*(\d+)", lesson_text)
            if not lesson_match:
                raise ValueError(
                    f"{sheet_name}!F{row_number}: par de aulas invalido: {lesson_text!r}"
                )
            lesson_start, lesson_end = map(int, lesson_match.groups())
            scope[series_key][week] = {
                "sheet": sheet_name,
                "row": row_number,
                "week": week,
                "lessonStart": lesson_start,
                "lessonEnd": lesson_end,
                "title": compact_text(cells.get("J", "")),
                "contents": compact_text(cells.get("K", "")),
                "objectives": compact_text(cells.get("L", "")),
                "description": compact_text(cells.get("M", "")),
            }

        for series_key, weeks in scope.items():
            if sorted(weeks) != list(range(1, 8)):
                raise ValueError(
                    f"Escopo {series_key}: semanas esperadas 1..7; encontradas {sorted(weeks)}"
                )

        metadata = core_metadata(archive)

    return {
        "path": str(path.resolve()),
        "file": path.name,
        "sizeBytes": path.stat().st_size,
        "sha256": sha256_file(path),
        "sheet": sheet_name,
        "dimension": dimension.attrib.get("ref") if dimension is not None else None,
        "coreMetadata": metadata,
        "scope": scope,
    }


def deterministic_asset_name(deck: dict[str, Any], spec: dict[str, str]) -> str:
    title_slug = ascii_slug(deck["title"])
    if len(title_slug) > 72:
        suffix = hashlib.sha256(title_slug.encode("ascii")).hexdigest()[:8]
        title_slug = f"{title_slug[:63].rstrip('-')}-{suffix}"
    return (
        f"robotica-3b-{spec['asset_code']}-semana-{deck['week']:02d}-"
        f"aulas-{deck['lessonStart']:02d}-{deck['lessonEnd']:02d}-"
        f"{title_slug}.pptx"
    )


def discover_source(explicit: str | None) -> Path:
    if explicit:
        source = Path(explicit).expanduser().resolve()
        if not source.is_dir():
            raise FileNotFoundError(f"Pasta de origem nao encontrada: {source}")
        return source

    home = Path.home()
    desktop_roots = [home / "OneDrive" / "Área de Trabalho", home / "Desktop"]
    candidates: list[Path] = []
    for desktop in desktop_roots:
        if not desktop.is_dir():
            continue
        for child in desktop.iterdir():
            folded = ascii_fold(child.name).casefold()
            if (
                child.is_dir()
                and "robotica" in folded
                and "3" in folded
                and "bimestre" in folded
            ):
                candidates.append(child.resolve())
    if len(candidates) != 1:
        raise RuntimeError(
            "Nao foi possivel identificar uma unica pasta de origem. "
            f"Candidatas: {[str(path) for path in candidates]}"
        )
    return candidates[0]


def prepare_asset(source: Path, target: Path, expected_hash: str) -> str:
    if target.exists():
        if target.stat().st_size != source.stat().st_size:
            raise RuntimeError(f"Asset existente com tamanho divergente: {target}")
        try:
            same_file = os.path.samefile(source, target)
        except OSError:
            same_file = False
        if not same_file and sha256_file(target) != expected_hash:
            raise RuntimeError(f"Asset existente com hash divergente: {target}")
        return "hardlink" if same_file else "copy"

    try:
        os.link(source, target)
        return "hardlink"
    except OSError:
        shutil.copy2(source, target)
        return "copy"


def typescript_string(value: Any, indent: int = 2) -> str:
    return json.dumps(value, ensure_ascii=False, indent=indent)


def build_typescript(
    series_data: list[dict[str, Any]],
    pending: list[dict[str, Any]],
    release_assets: list[dict[str, Any]],
) -> str:
    return f"""// Arquivo gerado por tools/sync_robotica_3b.py. Nao editar manualmente.
import {{ BimestreEscopo }} from './models';

export const ROBOTICA_3B_RELEASE_TAG = {json.dumps(RELEASE_TAG)};
export const ROBOTICA_3B_RELEASE_BASE_URL = {json.dumps(RELEASE_BASE_URL)};

export interface Robotica3bSerie {{
  id: string;
  ciclo: string;
  anoSerie: string;
  bimestre: BimestreEscopo;
}}

export const ROBOTICA_3B_DATA: Robotica3bSerie[] = {typescript_string(series_data)};

export const ROBOTICA_3B_PENDING_PRESENTATIONS = {typescript_string(pending)} as const;

export const ROBOTICA_3B_RELEASE_ASSETS = {typescript_string(release_assets)} as const;
"""


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        help="Pasta de origem; se omitida, procura na Area de Trabalho.",
    )
    parser.add_argument(
        "--repo-root",
        help="Raiz do repositorio; padrao: pai da pasta tools deste script.",
    )
    args = parser.parse_args()

    script_path = Path(__file__).resolve()
    repo_root = (
        Path(args.repo_root).expanduser().resolve()
        if args.repo_root
        else script_path.parents[1]
    )
    source_dir = discover_source(args.source)
    pptx_files = sorted(source_dir.glob("*.pptx"), key=lambda path: path.name.casefold())
    xlsx_files = sorted(source_dir.glob("*.xlsx"), key=lambda path: path.name.casefold())
    if len(pptx_files) != 41:
        raise RuntimeError(f"Esperados 41 PPTX; encontrados {len(pptx_files)}")
    if len(xlsx_files) != 1:
        raise RuntimeError(f"Esperado 1 XLSX; encontrados {len(xlsx_files)}")

    workbook = parse_scope_workbook(xlsx_files[0])
    decks = [parse_presentation(path) for path in pptx_files]

    warnings: list[dict[str, Any]] = []
    for deck in decks:
        if deck["internalBimester"] != 3:
            warnings.append(
                {
                    "code": "internal-bimester-mismatch",
                    "sourceFile": deck["sourceFile"],
                    "detected": deck["internalBimester"],
                    "mapped": 3,
                    "reason": (
                        "O arquivo integra a sequencia do 3o bimestre e seu conteudo "
                        "retoma a apresentacao imediatamente anterior."
                    ),
                }
            )
        if (
            deck["filenameYear"] is not None
            and isinstance(deck["internalYear"], int)
            and deck["filenameYear"] != deck["internalYear"]
        ):
            warnings.append(
                {
                    "code": "filename-year-mismatch",
                    "sourceFile": deck["sourceFile"],
                    "filenameYear": deck["filenameYear"],
                    "slideYear": deck["internalYear"],
                    "mappedYear": deck["internalYear"],
                }
            )

    by_series_week: dict[tuple[str, int], dict[str, Any]] = {}
    for deck in decks:
        key = (deck["seriesKey"], deck["week"])
        if key in by_series_week:
            raise RuntimeError(
                f"Mapeamento duplicado para {key}: "
                f"{by_series_week[key]['sourceFile']} e {deck['sourceFile']}"
            )
        by_series_week[key] = deck

    specs_by_key = {spec["key"]: spec for spec in SERIES_SPECS}
    for deck in decks:
        spec = specs_by_key[deck["seriesKey"]]
        deck["assetName"] = deterministic_asset_name(deck, spec)
        deck["releaseUrl"] = f"{RELEASE_BASE_URL}/{deck['assetName']}"

    asset_names = [deck["assetName"] for deck in decks]
    duplicates = [name for name, count in Counter(asset_names).items() if count > 1]
    if duplicates:
        raise RuntimeError(f"Nomes de asset duplicados: {duplicates}")
    if any(not re.fullmatch(r"[a-z0-9.-]+", name) for name in asset_names):
        raise RuntimeError("Foi gerado um nome de asset fora do conjunto ASCII seguro")

    asset_dir = repo_root / "release-assets" / "robotica-3b"
    asset_dir.mkdir(parents=True, exist_ok=True)
    unexpected_assets = sorted(
        path.name
        for path in asset_dir.iterdir()
        if path.is_file() and path.name not in set(asset_names)
    )
    if unexpected_assets:
        raise RuntimeError(
            "A pasta de assets contem arquivos inesperados; nada foi removido: "
            f"{unexpected_assets}"
        )

    for deck in decks:
        source = Path(deck["sourcePath"])
        target = asset_dir / deck["assetName"]
        deck["assetPath"] = str(target.relative_to(repo_root)).replace("\\", "/")
        deck["linkMode"] = prepare_asset(source, target, deck["sha256"])

    series_data: list[dict[str, Any]] = []
    pending: list[dict[str, Any]] = []
    audit_series: list[dict[str, Any]] = []
    release_assets: list[dict[str, Any]] = []

    for spec in SERIES_SPECS:
        ts_weeks: list[dict[str, Any]] = []
        audit_weeks: list[dict[str, Any]] = []
        for week in range(1, 8):
            deck = by_series_week.get((spec["key"], week))
            field_sources: dict[str, str] = {}
            if spec["scope_source"] == "xlsx":
                scope_row = workbook["scope"][spec["key"]][week]
                title = scope_row["title"]
                contents = scope_row["contents"]
                objectives = scope_row["objectives"]
                field_sources = {
                    "title": f"{workbook['sheet']}!J{scope_row['row']}",
                    "contents": f"{workbook['sheet']}!K{scope_row['row']}",
                    "objectives": f"{workbook['sheet']}!L{scope_row['row']}",
                }
                lesson_start = scope_row["lessonStart"]
                lesson_end = scope_row["lessonEnd"]
                if deck and not objectives:
                    objectives = deck["objectives"]
                    field_sources["objectives"] = "pptx-slide-2-fallback"
                    warnings.append(
                        {
                            "code": "xlsx-objectives-empty",
                            "seriesKey": spec["key"],
                            "week": week,
                            "cell": f"{workbook['sheet']}!L{scope_row['row']}",
                            "fallbackSourceFile": deck["sourceFile"],
                        }
                    )
            else:
                if deck is None:
                    raise RuntimeError(f"Apresentacao EF ausente para {spec['key']} semana {week}")
                title = deck["title"]
                contents = deck["contents"]
                objectives = deck["objectives"]
                lesson_start = deck["lessonStart"]
                lesson_end = deck["lessonEnd"]
                field_sources = {
                    "title": "pptx-slide-1",
                    "contents": "pptx-slide-2",
                    "objectives": "pptx-slide-2",
                }

            if not title or not contents or not objectives:
                raise RuntimeError(
                    f"Campos obrigatorios vazios em {spec['key']} semana {week}: "
                    f"titulo={bool(title)}, conteudos={bool(contents)}, objetivos={bool(objectives)}"
                )

            lesson_label = f"Aulas {lesson_start} e {lesson_end}"
            lesson: dict[str, Any] = {
                "aulaSala": lesson_label,
                "titulo": title,
                "formato": "Apresentação (PPTX)" if deck else "Apresentação pendente",
                "objetivos": objectives,
                "conteudos": contents,
            }
            presentation: dict[str, Any]
            if deck:
                lesson["materialLink"] = deck["releaseUrl"]
                presentation = {
                    "status": "available",
                    "sourceFile": deck["sourceFile"],
                    "assetName": deck["assetName"],
                    "assetPath": deck["assetPath"],
                    "releaseUrl": deck["releaseUrl"],
                    "sizeBytes": deck["sizeBytes"],
                    "sha256": deck["sha256"],
                    "slideCount": deck["slideCount"],
                    "linkMode": deck["linkMode"],
                }
                release_assets.append(
                    {
                        "seriesId": spec["key"],
                        "week": week,
                        "lessons": lesson_label,
                        "title": title,
                        "assetName": deck["assetName"],
                        "url": deck["releaseUrl"],
                        "sizeBytes": deck["sizeBytes"],
                        "sha256": deck["sha256"],
                    }
                )
            else:
                if spec["key"] != "em-23" or week != 7:
                    raise RuntimeError(
                        f"Apresentacao inesperadamente ausente: {spec['key']} semana {week}"
                    )
                lesson["materialPendente"] = True
                pending_item = {
                    "seriesId": spec["key"],
                    "cycle": spec["cycle"],
                    "year": spec["year"],
                    "bimester": "3º Bimestre",
                    "week": week,
                    "lessons": lesson_label,
                    "title": title,
                    "reason": "Apresentação não encontrada na pasta de origem.",
                }
                pending.append(pending_item)
                presentation = {"status": "pending", **pending_item}

            ts_weeks.append({"numero": week, "aulas": [lesson]})
            audit_weeks.append(
                {
                    "week": week,
                    "lessonStart": lesson_start,
                    "lessonEnd": lesson_end,
                    "title": title,
                    "contents": contents,
                    "objectives": objectives,
                    "fieldSources": field_sources,
                    "presentation": presentation,
                }
            )

        series_data.append(
            {
                "id": spec["key"],
                "ciclo": spec["cycle"],
                "anoSerie": spec["year"],
                "bimestre": {"bimestre": "3º Bimestre", "semanas": ts_weeks},
            }
        )
        audit_series.append(
            {
                "id": spec["key"],
                "cycle": spec["cycle"],
                "year": spec["year"],
                "scopeSource": spec["scope_source"],
                "weeks": audit_weeks,
            }
        )

    inventory: list[dict[str, Any]] = []
    for deck in sorted(
        decks,
        key=lambda item: (
            next(i for i, spec in enumerate(SERIES_SPECS) if spec["key"] == item["seriesKey"]),
            item["week"],
        ),
    ):
        inventory.append(
            {
                "sourcePath": deck["sourcePath"],
                "sourceFile": deck["sourceFile"],
                "sizeBytes": deck["sizeBytes"],
                "sha256": deck["sha256"],
                "slideCount": deck["slideCount"],
                "coreMetadata": deck["coreMetadata"],
                "titleSlide": {
                    "title": deck["title"],
                    "cycle": deck["cycle"],
                    "internalYear": deck["internalYear"],
                    "internalBimester": deck["internalBimester"],
                    "lessonStart": deck["lessonStart"],
                    "lessonEnd": deck["lessonEnd"],
                },
                "mapping": {
                    "seriesId": deck["seriesKey"],
                    "week": deck["week"],
                    "assetName": deck["assetName"],
                    "assetPath": deck["assetPath"],
                    "releaseUrl": deck["releaseUrl"],
                    "linkMode": deck["linkMode"],
                },
            }
        )

    total_weeks = sum(len(series["bimestre"]["semanas"]) for series in series_data)
    material_links = sum(
        "materialLink" in lesson
        for series in series_data
        for week in series["bimestre"]["semanas"]
        for lesson in week["aulas"]
    )
    asset_files = sorted(asset_dir.glob("*.pptx"))
    validation = {
        "sourcePptxCount": len(pptx_files),
        "sourceXlsxCount": len(xlsx_files),
        "mappedPresentationCount": len(inventory),
        "releaseAssetCount": len(asset_files),
        "seriesCount": len(series_data),
        "weekCount": total_weeks,
        "materialLinkCount": material_links,
        "pendingPresentationCount": len(pending),
        "hardlinkCount": sum(deck["linkMode"] == "hardlink" for deck in decks),
        "copyCount": sum(deck["linkMode"] == "copy" for deck in decks),
    }
    expected_validation = {
        "sourcePptxCount": 41,
        "sourceXlsxCount": 1,
        "mappedPresentationCount": 41,
        "releaseAssetCount": 41,
        "seriesCount": 6,
        "weekCount": 42,
        "materialLinkCount": 41,
        "pendingPresentationCount": 1,
    }
    for key, expected in expected_validation.items():
        if validation[key] != expected:
            raise RuntimeError(
                f"Validacao falhou para {key}: esperado {expected}, obtido {validation[key]}"
            )

    for deck in decks:
        target = repo_root / deck["assetPath"]
        if target.stat().st_size != deck["sizeBytes"]:
            raise RuntimeError(f"Tamanho divergente no asset: {target}")
        if not os.path.samefile(Path(deck["sourcePath"]), target):
            if sha256_file(target) != deck["sha256"]:
                raise RuntimeError(f"Hash divergente no asset: {target}")

    audit = {
        "schemaVersion": 1,
        "release": {
            "tag": RELEASE_TAG,
            "baseUrl": RELEASE_BASE_URL,
            "assetDirectory": str(asset_dir.relative_to(repo_root)).replace("\\", "/"),
        },
        "sourceDirectory": str(source_dir),
        "scopeWorkbook": {
            key: value for key, value in workbook.items() if key != "scope"
        },
        "validation": validation,
        "warnings": warnings,
        "pendingPresentations": pending,
        "series": audit_series,
        "files": inventory,
    }

    audit_path = repo_root / "tools" / "robotica-3b-audit.json"
    ts_path = repo_root / "escopo-sequencia" / "src" / "app" / "data" / "robotica-3b.data.ts"
    audit_path.write_text(
        json.dumps(audit, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    ts_path.write_text(
        build_typescript(series_data, pending, release_assets), encoding="utf-8"
    )

    print(json.dumps(validation, ensure_ascii=False, indent=2))
    print(f"Audit: {audit_path}")
    print(f"TypeScript: {ts_path}")
    print(f"Assets: {asset_dir}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        print(f"ERRO: {error}", file=sys.stderr)
        raise
