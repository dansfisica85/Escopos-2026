export interface MaterialLink {
  aula: number;
  titulo: string;
  link: string;
}

export interface MaterialPorAno {
  ano: string;
  bimestre: string;
  materiais: MaterialLink[];
}

export const MATERIAIS_ROBOTICA: MaterialPorAno[] = [
  {
    ano: '6º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Computadores e robôs: uma introdução', link: 'https://acervocmsp.educacao.sp.gov.br/147452/1519475.pdf' },
      { aula: 2, titulo: 'Entendendo a robótica', link: 'https://acervocmsp.educacao.sp.gov.br/144312/' },
      { aula: 3, titulo: 'Aprendendo a linguagem dos robôs', link: 'https://acervocmsp.educacao.sp.gov.br/145564/' },
      { aula: 4, titulo: 'O Mistério do micro:bit', link: 'https://acervocmsp.educacao.sp.gov.br/145846/' },
      { aula: 5, titulo: 'Emoções com o micro:bit: botões', link: 'https://acervocmsp.educacao.sp.gov.br/146147/' },
      { aula: 6, titulo: 'Emoções com o micro:bit - Parte 2', link: 'https://acervocmsp.educacao.sp.gov.br/146388/' },
      { aula: 7, titulo: 'Meu amigo robô', link: 'https://acervocmsp.educacao.sp.gov.br/146599/' },
    ]
  },
  {
    ano: '7º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Criando sons com o microbit - Parte I', link: 'https://acervocmsp.educacao.sp.gov.br/147053/1503490.pdf' },
      { aula: 2, titulo: 'Criando sons com o microbit - Parte II', link: 'https://acervocmsp.educacao.sp.gov.br/147235/' },
      { aula: 3, titulo: 'Termobit - Parte 1', link: 'https://acervocmsp.educacao.sp.gov.br/147261/' },
      { aula: 4, titulo: 'Termobit - Parte II', link: 'https://acervocmsp.educacao.sp.gov.br/147400/' },
      { aula: 5, titulo: 'Jogando com a matemática', link: 'https://acervocmsp.educacao.sp.gov.br/146960/' },
      { aula: 6, titulo: 'Vamos de novo: conhecendo os blocos de repetição', link: 'https://acervocmsp.educacao.sp.gov.br/147077/' },
      { aula: 7, titulo: 'Alarme de temperatura', link: 'https://acervocmsp.educacao.sp.gov.br/147921/' },
    ]
  },
  {
    ano: '8º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'A preguiça é a mãe do progresso?', link: 'https://acervocmsp.educacao.sp.gov.br/142955/1507123.pdf' },
      { aula: 2, titulo: 'Não fique bugado! Entenda o que faz um computador funcionar', link: 'https://acervocmsp.educacao.sp.gov.br/143483/1516377.pdf' },
      { aula: 3, titulo: 'Pedra, papel, tesoura!', link: 'https://acervocmsp.educacao.sp.gov.br/144484/' },
      { aula: 4, titulo: 'Caçadores do Campo Magnético Perdido', link: 'https://acervocmsp.educacao.sp.gov.br/145904/' },
      { aula: 5, titulo: 'Me dá um tempo? Controlando o tempo na robótica', link: 'https://acervocmsp.educacao.sp.gov.br/146260/' },
      { aula: 6, titulo: 'Plot-Art: desenhando no micro:bit com matemática', link: 'https://acervocmsp.educacao.sp.gov.br/146417/' },
      { aula: 7, titulo: 'Desanima não! Faça animações usando a matriz de LEDs', link: 'https://acervocmsp.educacao.sp.gov.br/146614/' },
    ]
  },
  {
    ano: '9º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Dispositivos Robóticos - Programando a Diversão', link: 'https://acervocmsp.educacao.sp.gov.br/143691/1520656.pdf' },
      { aula: 2, titulo: 'Luz, brinquedo, ação! – Adicionando movimento', link: 'https://acervocmsp.educacao.sp.gov.br/144596/' },
      { aula: 3, titulo: 'Reage, Brinquedo! – Programe a diversão!', link: 'https://acervocmsp.educacao.sp.gov.br/145995/' },
      { aula: 4, titulo: 'Controle Radical – Brinquedo controlado por rádio', link: 'https://acervocmsp.educacao.sp.gov.br/146313/' },
      { aula: 5, titulo: 'Brinquedos interativos: simulando comportamentos reativos', link: 'https://acervocmsp.educacao.sp.gov.br/146561/' },
      { aula: 6, titulo: 'Servo ataca! – Controle de movimento preciso', link: 'https://acervocmsp.educacao.sp.gov.br/146976/' },
      { aula: 7, titulo: 'Show de robótica: protótipo final em funcionamento', link: 'https://acervocmsp.educacao.sp.gov.br/147189/' },
    ]
  },
  {
    ano: '1ª série',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Pequenos dispositivos, Grandes ideias', link: 'https://acervocmsp.educacao.sp.gov.br/147452/1507749.pdf' },
      { aula: 2, titulo: 'Apresentando o micro:bit', link: 'https://acervocmsp.educacao.sp.gov.br/144312/1508240.pdf' },
      { aula: 3, titulo: 'Onde se criam os programas', link: 'https://acervocmsp.educacao.sp.gov.br/145564/1511065.pdf' },
      { aula: 4, titulo: 'Atividade desplugada', link: 'https://acervocmsp.educacao.sp.gov.br/145846/1514610.pdf' },
      { aula: 5, titulo: 'Olhos digitais: sentidos à la micro:bit', link: 'https://acervocmsp.educacao.sp.gov.br/146147/1518713.pdf' },
      { aula: 6, titulo: 'Olhos digitais: sentidos – Limitações', link: 'https://acervocmsp.educacao.sp.gov.br/146388/1520604.pdf' },
      { aula: 7, titulo: 'Quando um sensor não basta', link: 'https://acervocmsp.educacao.sp.gov.br/146599/1520623.pdf' },
    ]
  },
  {
    ano: '2ª/3ª séries',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Robótica sustentável: materializando ideias', link: 'https://acervocmsp.educacao.sp.gov.br/143696/1511028.pdf' },
      { aula: 2, titulo: 'Robótica sustentável: direção diferencial', link: 'https://acervocmsp.educacao.sp.gov.br/144108/1507063.pdf' },
      { aula: 3, titulo: 'Robótica sustentável: indo fundo no controle por rádio – Parte 1', link: 'https://acervocmsp.educacao.sp.gov.br/144580/1520463.pdf' },
      { aula: 4, titulo: 'Robótica sustentável: indo fundo no controle por rádio - Parte 2', link: 'https://acervocmsp.educacao.sp.gov.br/146025/1520699.pdf' },
      { aula: 5, titulo: 'Robótica sustentável: do Design ao Protótipo – Parte 1', link: 'https://acervocmsp.educacao.sp.gov.br/146256/1520561.pdf' },
      { aula: 6, titulo: 'Robótica sustentável: do Design ao Protótipo – Parte 2', link: 'https://acervocmsp.educacao.sp.gov.br/146391/1520578.pdf' },
      { aula: 7, titulo: 'Robótica sustentável - Corrida final: obstáculos e precisão!', link: 'https://acervocmsp.educacao.sp.gov.br/146692/1520693.pdf' },
    ]
  }
];
