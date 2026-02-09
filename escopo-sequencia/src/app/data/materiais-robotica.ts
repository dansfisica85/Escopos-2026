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
    ]
  },
  {
    ano: '7º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Criando sons com o microbit - Parte I', link: 'https://acervocmsp.educacao.sp.gov.br/147053/1503490.pdf' },
    ]
  },
  {
    ano: '8º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'A preguiça é a mãe do progresso?', link: 'https://acervocmsp.educacao.sp.gov.br/142955/1507123.pdf' },
      { aula: 2, titulo: 'Não fique bugado! Entenda o que faz um computador funcionar', link: 'https://acervocmsp.educacao.sp.gov.br/143483/1516377.pdf' },
    ]
  },
  {
    ano: '9º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Dispositivos Robóticos - Programando a Diversão', link: 'https://acervocmsp.educacao.sp.gov.br/143691/1520656.pdf' },
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
