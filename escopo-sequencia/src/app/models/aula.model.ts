export interface Aula {
  aulaUnidade?: number | string;
  aulaSala: number | string;
  titulo: string;
  formato?: string;
  objetivos: string;
  conteudos: string;
  entregaProjeto?: boolean;
  habilidadeBNCC?: string;
  materialLink?: string;
}

export interface Semana {
  numero: number;
  data?: string;
  unidade?: string;
  aulas: Aula[];
  especial?: string; // For special weeks like "Carnaval", "Nivelamento", etc.
}

export interface BimestreData {
  bimestre: string;
  semanas: Semana[];
}

export interface AnoSerieData {
  anoSerie: string;
  bimestres: BimestreData[];
}

export interface DisciplinaData {
  nome: string;
  ciclo: string;
  anos: AnoSerieData[];
}

export interface MaterialRobotica {
  ano: string;
  bimestre: string;
  aulas: {
    numero: number;
    titulo: string;
    link: string;
  }[];
}
