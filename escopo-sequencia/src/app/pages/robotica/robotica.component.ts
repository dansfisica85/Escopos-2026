import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaEscopo, AnoSerieEscopo, BimestreEscopo, SemanaEscopo } from '../../data/models';
import { ROBOTICA_EF_DATA } from '../../data/robotica-ef.data';
import { ROBOTICA_EM_DATA } from '../../data/robotica-em.data';
import { MATERIAIS_ROBOTICA, MaterialPorAno } from '../../data/materiais-robotica';
import { PlanoIaService } from '../../services/plano-ia.service';

@Component({
  selector: 'app-robotica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './robotica.component.html',
  styleUrl: './robotica.component.css'
})
export class RoboticaComponent {
  disciplinas: DisciplinaEscopo[] = [ROBOTICA_EF_DATA, ROBOTICA_EM_DATA];
  materiais = MATERIAIS_ROBOTICA;

  selectedDisciplina = signal<DisciplinaEscopo>(this.disciplinas[0]);
  selectedAno = signal<AnoSerieEscopo>(this.disciplinas[0].anos[0]);
  selectedBimestre = signal<BimestreEscopo>(this.disciplinas[0].anos[0].bimestres[0]);
  expandedSemana = signal<number | null>(null);

  generatingPlan = signal<number | null>(null);
  generatedMarkdown = signal<{ semana: number; markdown: string } | null>(null);

  anos = computed(() => this.selectedDisciplina().anos);
  bimestres = computed(() => this.selectedAno().bimestres);
  semanas = computed(() => this.selectedBimestre().semanas);

  materiaisAtuais = computed(() => {
    const ano = this.selectedAno().anoSerie.toLowerCase();
    return this.materiais.find(m => m.ano.toLowerCase() === ano);
  });

  constructor(private planoIaService: PlanoIaService) {}

  onDisciplinaChange(index: number) {
    const d = this.disciplinas[index];
    this.selectedDisciplina.set(d);
    this.selectedAno.set(d.anos[0]);
    this.selectedBimestre.set(d.anos[0].bimestres[0]);
    this.expandedSemana.set(null);
  }

  onAnoChange(index: number) {
    const a = this.selectedDisciplina().anos[index];
    this.selectedAno.set(a);
    this.selectedBimestre.set(a.bimestres[0]);
    this.expandedSemana.set(null);
  }

  onBimestreChange(index: number) {
    this.selectedBimestre.set(this.selectedAno().bimestres[index]);
    this.expandedSemana.set(null);
  }

  toggleSemana(numero: number) {
    this.expandedSemana.set(this.expandedSemana() === numero ? null : numero);
  }

  getMaterialLink(semanaNumero: number): string | null {
    const mat = this.materiaisAtuais();
    if (!mat) return null;
    const found = mat.materiais.find((m: { aula: number; link: string }) => m.aula === semanaNumero);
    return found ? found.link : null;
  }

  async gerarPlanoIA(semana: SemanaEscopo) {
    if (this.generatingPlan() === semana.numero) return;
    this.generatingPlan.set(semana.numero);
    this.generatedMarkdown.set(null);

    try {
      const request = this.planoIaService.buildRequest(
        this.selectedDisciplina().nome,
        this.selectedDisciplina().ciclo,
        this.selectedAno().anoSerie,
        this.selectedBimestre().bimestre,
        semana
      );

      const markdown = await this.planoIaService.gerarPlano(request);
      this.generatedMarkdown.set({ semana: semana.numero, markdown });
    } catch (error) {
      console.error('Erro ao gerar plano:', error);
      alert('Erro ao gerar plano de aula. Tente novamente.');
    } finally {
      this.generatingPlan.set(null);
    }
  }

  baixarPlano(semana: SemanaEscopo) {
    const gen = this.generatedMarkdown();
    if (!gen || gen.semana !== semana.numero) return;

    const filename = this.planoIaService.buildFilename(
      this.selectedDisciplina().nome,
      this.selectedAno().anoSerie,
      this.selectedBimestre().bimestre,
      semana.numero
    );
    this.planoIaService.downloadMarkdown(gen.markdown, filename);
  }
}
