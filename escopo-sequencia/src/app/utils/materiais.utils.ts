import { MaterialEscopo } from '../data/models';

export interface FonteMateriais {
  materialLink?: string;
  materiais?: readonly MaterialEscopo[];
}

const ROTULOS_TIPO: Record<string, string> = {
  apresentacao: 'Apresentação',
  desafio: 'Desafio',
  'gabarito-professor': 'Gabarito do professor',
  'guia-professor': 'Guia do professor',
  'lista-exercicios': 'Lista de exercícios',
  'manual-professor': 'Manual do professor',
  'material-digital': 'Material digital',
  'material-estudante': 'Material do estudante',
  'slides-estudante': 'Slides do estudante',
};

const ROTULOS_PUBLICO: Record<string, string> = {
  estudante: 'Estudante',
  professor: 'Professor',
  todos: 'Todos',
};

export function normalizarMateriais(
  fonte: FonteMateriais,
  adicionais: readonly MaterialEscopo[] = [],
  tituloLegado = 'Material digital',
): MaterialEscopo[] {
  const candidatos: MaterialEscopo[] = [
    ...(fonte.materiais ?? []),
    ...adicionais,
  ];

  const linkLegado = fonte.materialLink?.trim();
  if (linkLegado) {
    const formatoLegado = inferirFormatoMaterial(linkLegado);
    candidatos.push({
      titulo: tituloLegado,
      link: linkLegado,
      tipo: formatoLegado === 'PPT' || formatoLegado === 'PPTX'
        ? 'apresentacao'
        : 'material-digital',
      formato: formatoLegado,
    });
  }

  const linksVistos = new Set<string>();
  const arquivosVistos = new Set<string>();
  return candidatos.flatMap(material => {
    const link = material.link?.trim();
    const arquivo = obterChaveArquivo(link);
    if (!link || linksVistos.has(link) || (arquivo && arquivosVistos.has(arquivo))) return [];
    linksVistos.add(link);
    if (arquivo) arquivosVistos.add(arquivo);
    return [{ ...material, link }];
  });
}

function obterChaveArquivo(link?: string): string | undefined {
  if (!link) return undefined;
  const caminho = link.split(/[?#]/, 1)[0].replace(/\\/g, '/');
  const nomeCodificado = caminho.slice(caminho.lastIndexOf('/') + 1).trim();
  if (!nomeCodificado) return undefined;

  let nomeArquivo: string;
  try {
    nomeArquivo = decodeURIComponent(nomeCodificado);
  } catch {
    nomeArquivo = nomeCodificado;
  }

  return /\.[a-z0-9]{2,8}$/i.test(nomeArquivo)
    ? nomeArquivo.toLocaleLowerCase('pt-BR')
    : undefined;
}

export function inferirFormatoMaterial(link: string): string | undefined {
  const caminho = link.split(/[?#]/, 1)[0];
  const extensao = caminho.match(/\.([a-z0-9]+)$/i)?.[1];
  return extensao?.toUpperCase();
}

export function rotuloTipoMaterial(tipo?: string): string | undefined {
  if (!tipo) return undefined;
  return ROTULOS_TIPO[tipo] ?? tipo
    .split('-')
    .filter(Boolean)
    .map(parte => parte.charAt(0).toUpperCase() + parte.slice(1))
    .join(' ');
}

export function rotuloFormatoMaterial(material: MaterialEscopo): string | undefined {
  return material.formato?.toUpperCase() ?? inferirFormatoMaterial(material.link);
}

export function rotuloPublicoMaterial(publico?: string): string | undefined {
  if (!publico) return undefined;
  return ROTULOS_PUBLICO[publico] ?? publico;
}

export function iconeMaterial(material: MaterialEscopo): string {
  switch (rotuloFormatoMaterial(material)) {
    case 'PPT':
    case 'PPTX':
      return '📊';
    case 'DOC':
    case 'DOCX':
      return '📝';
    case 'XLS':
    case 'XLSX':
      return '📈';
    case 'PDF':
      return '📄';
    default:
      return '📎';
  }
}

export function extrairNumeroAula(aulaSala: string): number | undefined {
  const numero = aulaSala.match(/\d+/)?.[0];
  return numero ? Number(numero) : undefined;
}
