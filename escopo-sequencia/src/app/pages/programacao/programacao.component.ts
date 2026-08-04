import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AulaEscopo,
  DisciplinaEscopo,
  AnoSerieEscopo,
  BimestreEscopo,
  MaterialEscopo,
  SemanaEscopo,
} from '../../data/models';
import { PROG_EM_DATA } from '../../data/prog-em.data';
import { PROGRAMACAO_3B_MATERIAIS } from '../../data/programacao-3b-materiais.data';
import { TEC_INOV_DATA } from '../../data/tec-inov.data';
import { PlanoIaService } from '../../services/plano-ia.service';
import {
  extrairNumeroAula,
  iconeMaterial,
  normalizarMateriais,
  rotuloFormatoMaterial,
  rotuloPublicoMaterial,
  rotuloTipoMaterial,
} from '../../utils/materiais.utils';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.css'
})
export class ProgramacaoComponent {
  disciplinas: DisciplinaEscopo[] = [PROG_EM_DATA, TEC_INOV_DATA];
  readonly iconeMaterial = iconeMaterial;
  readonly rotuloFormatoMaterial = rotuloFormatoMaterial;
  readonly rotuloPublicoMaterial = rotuloPublicoMaterial;
  readonly rotuloTipoMaterial = rotuloTipoMaterial;

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

  getMateriaisSemana(semana: SemanaEscopo): MaterialEscopo[] {
    return normalizarMateriais(semana);
  }

  getMateriaisAula(aula: AulaEscopo): MaterialEscopo[] {
    return normalizarMateriais(
      aula,
      this.getMateriaisProgramacao3b(aula),
      `Material digital — ${aula.titulo}`,
    );
  }

  getQuantidadeMateriaisSemana(semana: SemanaEscopo): number {
    const links = [
      ...this.getMateriaisSemana(semana),
      ...semana.aulas.flatMap(aula => this.getMateriaisAula(aula)),
    ].map(material => material.link);
    return new Set(links).size;
  }

  private getMateriaisProgramacao3b(aula: AulaEscopo): MaterialEscopo[] {
    if (
      this.selectedDisciplina().id !== PROG_EM_DATA.id ||
      this.selectedBimestre().bimestre !== '3º Bimestre'
    ) {
      return [];
    }

    const numeroAula = aula.numero ?? extrairNumeroAula(aula.aulaSala);
    if (!numeroAula) return [];

    return PROGRAMACAO_3B_MATERIAIS[this.selectedAno().anoSerie]?.[numeroAula] ?? [];
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
