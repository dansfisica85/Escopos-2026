export interface AulaEscopo {
  aulaSala: string;
  titulo: string;
  formato?: string;
  objetivos: string;
  conteudos: string;
  entregaProjeto?: boolean;
  materialLink?: string;
}

export interface SemanaEscopo {
  numero: number;
  data?: string;
  unidade?: string;
  aulas: AulaEscopo[];
  especial?: string;
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
