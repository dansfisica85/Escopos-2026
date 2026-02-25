import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemanaEscopo } from '../data/models';

export interface PlanoAulaRequest {
  disciplina: string;
  ciclo: string;
  anoSerie: string;
  bimestre: string;
  semana: number;
  instrucoes?: string;
  aulas: {
    aulaSala: string;
    titulo: string;
    objetivos: string;
    conteudos: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanoIaService {

  constructor(private http: HttpClient) {}

  gerarPlano(request: PlanoAulaRequest): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post<{ markdown: string }>('/api/generate-plan', request)
        .subscribe({
          next: (res) => resolve(res.markdown),
          error: (err) => reject(err)
        });
    });
  }

  downloadMarkdown(markdown: string, filename: string): void {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  buildRequest(
    disciplina: string,
    ciclo: string,
    anoSerie: string,
    bimestre: string,
    semana: SemanaEscopo,
    instrucoes?: string
  ): PlanoAulaRequest {
    return {
      disciplina,
      ciclo,
      anoSerie,
      bimestre,
      semana: semana.numero,
      instrucoes: instrucoes || undefined,
      aulas: semana.aulas.map(a => ({
        aulaSala: a.aulaSala,
        titulo: a.titulo,
        objetivos: a.objetivos,
        conteudos: a.conteudos,
      })),
    };
  }

  buildFilename(disciplina: string, anoSerie: string, bimestre: string, semana: number): string {
    const clean = (s: string) => s.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
    return `plano_${clean(disciplina)}_${clean(anoSerie)}_${clean(bimestre)}_semana${semana}.md`;
  }

  refinarPlano(markdownAtual: string, feedback: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post<{ markdown: string }>('/api/generate-plan', {
        refinar: true,
        markdownAtual,
        feedback
      }).subscribe({
        next: (res) => resolve(res.markdown),
        error: (err) => reject(err)
      });
    });
  }
}
