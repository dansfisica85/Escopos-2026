export interface MaterialEscopo {
  titulo: string;
  link: string;
  tipo?: string;
  formato?: string;
  publico?: 'estudante' | 'professor' | 'todos';
}

export interface AulaEscopo {
  numero?: number;
  aulaSala: string;
  titulo: string;
  formato?: string;
  objetivos: string;
  conteudos: string;
  entregaProjeto?: boolean;
  materialLink?: string;
  materiais?: MaterialEscopo[];
  materialPendente?: boolean;
}

export interface SemanaEscopo {
  numero: number;
  data?: string;
  unidade?: string;
  aulas: AulaEscopo[];
  especial?: string;
  materiais?: MaterialEscopo[];
  materialPendente?: boolean;
}

export interface BimestreEscopo {
  bimestre: string;
  semanas: SemanaEscopo[];
}

export interface AnoSerieEscopo {
  anoSerie: string;
  bimestres: BimestreEscopo[];
}

export interface DisciplinaEscopo {
  id: string;
  nome: string;
  ciclo: string;
  categoria: 'programacao' | 'robotica';
  anos: AnoSerieEscopo[];
}
