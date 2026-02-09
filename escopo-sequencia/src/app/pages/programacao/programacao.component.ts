import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinaEscopo, AnoSerieEscopo, BimestreEscopo, SemanaEscopo } from '../../data/models';
import { PROG_EM_DATA } from '../../data/prog-em.data';
import { TEC_INOV_DATA } from '../../data/tec-inov.data';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.css'
})
export class ProgramacaoComponent {
  disciplinas: DisciplinaEscopo[] = [PROG_EM_DATA, TEC_INOV_DATA];

  selectedDisciplina = signal<DisciplinaEscopo>(this.disciplinas[0]);
  selectedAno = signal<AnoSerieEscopo>(this.disciplinas[0].anos[0]);
  selectedBimestre = signal<BimestreEscopo>(this.disciplinas[0].anos[0].bimestres[0]);
  expandedSemana = signal<number | null>(null);

  anos = computed(() => this.selectedDisciplina().anos);
  bimestres = computed(() => this.selectedAno().bimestres);
  semanas = computed(() => this.selectedBimestre().semanas);

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
}
