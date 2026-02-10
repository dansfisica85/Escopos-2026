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
      { aula: 1, titulo: 'Computadores e robôs: uma introdução', link: 'materiais/1519475.pdf' },
      { aula: 2, titulo: 'Entendendo a robótica', link: 'materiais/1503299.pdf' },
      { aula: 3, titulo: 'Aprendendo a linguagem dos robôs', link: 'materiais/1503877.pdf' },
      { aula: 4, titulo: 'Mistérios do micro:bit', link: 'materiais/1503515.pdf' },
      { aula: 5, titulo: 'Emoções com o micro:bit: botões', link: 'materiais/1516408.pdf' },
      { aula: 6, titulo: 'Emoções com o micro:bit: acelerômetro', link: 'materiais/1519491.pdf' },
      { aula: 7, titulo: 'Meu amigo robô', link: 'materiais/1518949.pdf' },
    ]
  },
  {
    ano: '7º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Criando sons com o micro:bit I', link: 'materiais/1503490.pdf' },
      { aula: 2, titulo: 'Criando sons com o micro:bit II', link: 'materiais/1503338.pdf' },
      { aula: 3, titulo: 'TermoBit I', link: 'materiais/1503404.pdf' },
      { aula: 4, titulo: 'TermoBit II', link: 'materiais/1503436.pdf' },
      { aula: 5, titulo: 'Jogando com a matemática', link: 'materiais/1504710.pdf' },
      { aula: 6, titulo: 'Vamos de novo: conhecendo os blocos de repetição', link: 'materiais/1518918.pdf' },
      { aula: 7, titulo: 'Alarme de temperatura', link: 'materiais/1516296.pdf' },
    ]
  },
  {
    ano: '8º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Explorando labirintos com senso de direção', link: 'materiais/1507123.pdf' },
      { aula: 2, titulo: 'Planejando a rota', link: 'materiais/1516377.pdf' },
      { aula: 3, titulo: 'Introdução à Shield do micro:bit', link: 'materiais/1518645.pdf' },
      { aula: 4, titulo: 'Servomotores em ação', link: 'materiais/1516350.pdf' },
      { aula: 5, titulo: 'Construindo um semáforo inteligente', link: 'materiais/1516417.pdf' },
      { aula: 6, titulo: 'Protótipo: semáforo interativo', link: 'materiais/1491265.pdf' },
      { aula: 7, titulo: 'Semáforo inteligente: apresentação', link: 'materiais/1516265.pdf' },
    ]
  },
  {
    ano: '9º Ano',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Introdução à IoT', link: 'materiais/1520656.pdf' },
      { aula: 2, titulo: 'Comunicação entre micro:bits', link: 'materiais/1520683.pdf' },
      { aula: 3, titulo: 'Enviando e recebendo dados', link: 'materiais/1519412.pdf' },
      { aula: 4, titulo: 'Sistema de alarme remoto', link: 'materiais/1493983.pdf' },
      { aula: 5, titulo: 'Projeto IoT: estação meteorológica', link: 'materiais/1519114.pdf' },
      { aula: 6, titulo: 'Aprimorando a estação meteorológica', link: 'materiais/1508935.pdf' },
      { aula: 7, titulo: 'Apresentação IoT', link: 'materiais/1475989.pdf' },
    ]
  },
  {
    ano: '1ª série',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Pequenos dispositivos, Grandes ideias', link: 'materiais/1511028.pdf' },
      { aula: 2, titulo: 'Apresentando o micro:bit', link: 'materiais/1507063.pdf' },
      { aula: 3, titulo: 'Onde se criam os programas', link: 'materiais/1520463.pdf' },
      { aula: 4, titulo: 'Atividade desplugada', link: 'materiais/1520699.pdf' },
      { aula: 5, titulo: 'Olhos digitais: sentidos à la micro:bit', link: 'materiais/1520561.pdf' },
      { aula: 6, titulo: 'Olhos digitais: sentidos – Limitações', link: 'materiais/1520578.pdf' },
      { aula: 7, titulo: 'Quando um sensor não basta', link: 'materiais/1520693.pdf' },
    ]
  },
  {
    ano: '2ª/3ª séries',
    bimestre: '1º Bimestre',
    materiais: [
      { aula: 1, titulo: 'Robótica sustentável: materializando ideias', link: 'materiais/1508240.pdf' },
      { aula: 2, titulo: 'Robótica sustentável: direção diferencial', link: 'materiais/1507749.pdf' },
      { aula: 3, titulo: 'Robótica sustentável: indo fundo no controle por rádio – Parte 1', link: 'materiais/1518713.pdf' },
      { aula: 4, titulo: 'Robótica sustentável: indo fundo no controle por rádio - Parte 2', link: 'materiais/1520604.pdf' },
      { aula: 5, titulo: 'Robótica sustentável: do Design ao Protótipo – Parte 1', link: 'materiais/1514610.pdf' },
      { aula: 6, titulo: 'Robótica sustentável: do Design ao Protótipo – Parte 2', link: 'materiais/1511065.pdf' },
      { aula: 7, titulo: 'Robótica sustentável - Corrida final: obstáculos e precisão!', link: 'materiais/1520623.pdf' },
    ]
  }
];
