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

  // Dialog de instruções
  semanaParaGerar = signal<SemanaEscopo | null>(null);
  showInstrucoesDialog = signal(false);
  instrucaoTexto = signal('');

  // Modal do plano + chat
  showPlanoModal = signal(false);
  chatMessages = signal<{ role: 'user' | 'ai'; text: string }[]>([]);
  chatInput = signal('');
  refinando = signal(false);

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

  abrirInstrucoes(semana: SemanaEscopo) {
    this.semanaParaGerar.set(semana);
    this.instrucaoTexto.set('');
    this.showInstrucoesDialog.set(true);
  }

  fecharDialogInstrucoes() {
    if (this.generatingPlan() !== null) return;
    this.showInstrucoesDialog.set(false);
  }

  async confirmarGeracao() {
    const semana = this.semanaParaGerar();
    if (!semana || this.generatingPlan() !== null) return;

    this.generatingPlan.set(semana.numero);
    this.generatedMarkdown.set(null);
    this.chatMessages.set([]);

    try {
      const request = this.planoIaService.buildRequest(
        this.selectedDisciplina().nome,
        this.selectedDisciplina().ciclo,
        this.selectedAno().anoSerie,
        this.selectedBimestre().bimestre,
        semana,
        this.instrucaoTexto()
      );

      const markdown = await this.planoIaService.gerarPlano(request);
      this.generatedMarkdown.set({ semana: semana.numero, markdown });
      this.showInstrucoesDialog.set(false);
      this.showPlanoModal.set(true);
    } catch (error) {
      console.error('Erro ao gerar plano:', error);
      alert('Erro ao gerar plano de aula. Tente novamente.');
    } finally {
      this.generatingPlan.set(null);
    }
  }

  fecharPlanoModal() {
    this.showPlanoModal.set(false);
  }

  async enviarMensagemChat() {
    const texto = this.chatInput().trim();
    const gen = this.generatedMarkdown();
    if (!texto || !gen || this.refinando()) return;

    this.chatMessages.update(msgs => [...msgs, { role: 'user' as const, text: texto }]);
    this.chatInput.set('');
    this.refinando.set(true);

    try {
      const novoMarkdown = await this.planoIaService.refinarPlano(gen.markdown, texto);
      this.generatedMarkdown.set({ semana: gen.semana, markdown: novoMarkdown });
      this.chatMessages.update(msgs => [...msgs, { role: 'ai' as const, text: 'Plano atualizado com sucesso!' }]);
    } catch (error) {
      console.error('Erro ao refinar plano:', error);
      this.chatMessages.update(msgs => [...msgs, { role: 'ai' as const, text: 'Erro ao refinar. Tente novamente.' }]);
    } finally {
      this.refinando.set(false);
    }
  }

  baixarPlanoModal() {
    const gen = this.generatedMarkdown();
    const semana = this.semanaParaGerar();
    if (!gen || !semana) return;

    const filename = this.planoIaService.buildFilename(
      this.selectedDisciplina().nome,
      this.selectedAno().anoSerie,
      this.selectedBimestre().bimestre,
      semana.numero
    );
    this.planoIaService.downloadMarkdown(gen.markdown, filename);
  }
}
