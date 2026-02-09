import { DisciplinaEscopo } from './models';

export const ROBOTICA_EF_DATA: DisciplinaEscopo = {
  id: 'robotica-ef',
  nome: 'Robótica',
  ciclo: 'Anos Finais',
  categoria: 'robotica' as const,
  anos: [
    // ===================== 6º ANO =====================
    {
      anoSerie: '6º ano',
      bimestres: [
        {
          bimestre: '1º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '02 a 06/02',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: 'Computadores e robôs: uma introdução',
                  objetivos: 'Reconhecer os principais periféricos de um computador. Relacionar com entradas e saídas.',
                  conteudos: 'Periféricos / entradas e saídas.',
                  materialLink: 'https://acervocmsp.educacao.sp.gov.br/147452/1519475.pdf'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: 'Entendendo a robótica',
                  objetivos: 'Compreender o conceito de robótica por meio de produções audiovisuais. Reconhecer o impacto da robótica no cotidiano.',
                  conteudos: 'Conceitos de robótica. Robôs e suas aplicações. História da robótica.'
                }
              ]
            },
            {
              numero: 3,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: 'Aprendendo a linguagem dos robôs',
                  objetivos: 'Compreender que existem diferentes formas de construir algoritmos. Reconhecer a programação em blocos como forma acessível.',
                  conteudos: 'Linguagem de programação em blocos na robótica. Linguagem natural x linguagem formal. Algoritmo e instruções.'
                }
              ]
            },
            {
              numero: 4,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: 'Mistérios do micro:bit',
                  objetivos: 'Explorar o ambiente de programação MakeCode. Identificar as principais ferramentas e funcionalidades.',
                  conteudos: 'Ambiente de programação do MakeCode. Menu de ferramentas. Estrutura dos blocos.'
                }
              ]
            },
            {
              numero: 5,
              data: '09 a 13/03',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: 'Emoções com o micro:bit: botões',
                  objetivos: 'Identificar os blocos de botões e blocos básicos do MakeCode. Explorar a comunicação no ambiente digital.',
                  conteudos: 'Comunicação digital com emojis. Blocos de entrada - botões. Blocos básicos - ícones.'
                }
              ]
            },
            {
              numero: 6,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: 'Emoções com o micro:bit: acelerômetro',
                  objetivos: 'Identificar o sensor acelerômetro na placa micro:bit. Construir um programa utilizando o sensor acelerômetro.',
                  conteudos: 'Representação de emoções no robô. Sensor acelerômetro no micro:bit. Bloco agitar no menu de entrada.'
                }
              ]
            },
            {
              numero: 7,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: 'Meu amigo robô',
                  objetivos: 'Construir um robô com materiais não estruturados, utilizando proposta de tema transversal.',
                  conteudos: 'Apresentação do problema. Desenvolvimento da proposta. Construção de protótipo de robô desplugado com tema saúde.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '22 a 30/04',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: 'Pensamento computacional',
                  objetivos: 'Identificar os pilares do pensamento computacional no contexto da robótica.',
                  conteudos: 'Pilares do pensamento computacional. Decomposição. Reconhecimento de padrões. Abstração. Algoritmos.'
                }
              ]
            },
            {
              numero: 2,
              data: '04 a 08/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Animais animados - Programando a matriz de LEDs',
                  objetivos: 'Explorar o menu de blocos básico do MakeCode na criação de animações na matriz de LEDs usando a fauna brasileira.',
                  conteudos: 'Fauna brasileira. Blocos básico (Pausa). Programação: animações no painel de LEDs. Competição de Robótica.'
                }
              ]
            },
            {
              numero: 3,
              data: '11 a 15/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Animais animados - Conhecendo o projeto',
                  objetivos: 'Explorar o que são engrenagens. Conhecer o projeto e proposta de competição.',
                  conteudos: 'O que são engrenagens. Tipos de engrenagem e aplicação. Apresentação do protótipo animais em movimento. Competição de projetos.'
                }
              ]
            },
            {
              numero: 4,
              data: '18 a 22/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Animais animados - Montando as engrenagens',
                  objetivos: 'Entender o que são engrenagens e sua função. Iniciar construção do protótipo com tema animais em extinção.',
                  conteudos: 'Construção do protótipo. Posicionamento das engrenagens para proporcionar o movimento.'
                }
              ]
            },
            {
              numero: 5,
              data: '25 a 29/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Animais animados - Incorporando a placa ao protótipo',
                  objetivos: 'Construir e finalizar cenário do protótipo. Aplicar o programa na placa micro:bit.',
                  conteudos: 'Código de programação. Finalizar construção do protótipo com montagem das engrenagens e cenário.'
                }
              ]
            },
            {
              numero: 6,
              data: '08 a 12/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Animais animados - Montando nossa apresentação',
                  objetivos: 'Customizar um protótipo com materiais não estruturados. Criar apresentação para a competição.',
                  conteudos: 'Customização de protótipo. Apresentação do protótipo.'
                }
              ]
            },
            {
              numero: 7,
              data: '15 a 19/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Animais animados - Hora da competição',
                  objetivos: 'Apresentar um protótipo de cenário móvel com animais animados na placa micro:bit.',
                  conteudos: 'Competição de projetos. Critérios de avaliação de um projeto.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        }
      ]
    },

    // ===================== 7º ANO =====================
    {
      anoSerie: '7º ano',
      bimestres: [
        {
          bimestre: '1º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '02 a 06/02',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: 'Criando sons com o micro:bit I',
                  objetivos: 'Conhecer conceitos básicos de notas musicais e oitavas. Experimentar blocos de música. Investigar capacidade da placa.',
                  conteudos: 'Notação europeia. Notas no teclado virtual. Oitavas. Blocos de música no MakeCode.',
                  materialLink: 'https://acervocmsp.educacao.sp.gov.br/147053/1503490.pdf'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: 'Criando sons com o micro:bit II',
                  objetivos: 'Identificar andamento (BPM). Explorar durações de tempo e intervalos. Experimentar variações de comandos.',
                  conteudos: 'O que é BPM. Relação do andamento na velocidade. Tempo e duração de notas musicais. Pausas na composição.'
                }
              ]
            },
            {
              numero: 3,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: 'TermoBit I',
                  objetivos: 'Identificar importância do termômetro. Entender funções pré-programadas. Identificar o sensor de temperatura.',
                  conteudos: 'Termômetro. Funções pré-programadas no menu de ferramentas. Sensor de temperatura no micro:bit.'
                }
              ]
            },
            {
              numero: 4,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: 'TermoBit II',
                  objetivos: 'Compreender diferentes aplicações do sensor de temperatura. Construir um programa para identificar temperaturas.',
                  conteudos: 'O sensor de temperatura do micro:bit. Bloco de temperatura. Programação.'
                }
              ]
            },
            {
              numero: 5,
              data: '09 a 13/03',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: 'Jogando com a matemática',
                  objetivos: 'Identificar blocos de matemática no MakeCode. Explorar operações matemáticas no código.',
                  conteudos: 'Blocos de matemática. Operações fundamentais. Números aleatórios. Programação.'
                }
              ]
            },
            {
              numero: 6,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: 'Vamos de novo: conhecendo os blocos de repetição',
                  objetivos: 'Identificar a função loop no MakeCode. Explorar blocos de repetição.',
                  conteudos: 'Função loops. Blocos de repetição.'
                }
              ]
            },
            {
              numero: 7,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: 'Alarme de temperatura',
                  objetivos: 'Explorar os recursos do sensor de temperatura e blocos de música no desenvolvimento de um alarme.',
                  conteudos: 'Sensor de temperatura. Blocos de música. Programação. Protótipo de alarme.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '22 a 30/04',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: 'Mecânica/hidráulica: introdução',
                  objetivos: 'Compreender o conceito de força hidráulica e suas aplicações. Identificar sistemas reais.',
                  conteudos: 'Mecânica/hidráulica: conceito. Exemplos de sistemas hidráulicos.'
                }
              ]
            },
            {
              numero: 2,
              data: '04 a 08/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Méo mecânica: Um elo entre a natureza e a engenharia - Parte 1',
                  objetivos: 'Explorar a conexão entre biomecânica e robótica. Conhecer a proposta de competição.',
                  conteudos: 'Competição de Robótica. Conexão entre a biomecânica e a robótica. Projeto da mão mecânica. Introdução ao paquímetro.'
                }
              ]
            },
            {
              numero: 3,
              data: '11 a 15/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Méo mecânica - Parte 2',
                  objetivos: 'Construir uma mão mecânica hidráulica. Implementar mecanismo de tração.',
                  conteudos: 'Processo de construção: Corte e montagem dos dedos. Mecanismo de tração por fios. Paquémetro.'
                }
              ]
            },
            {
              numero: 4,
              data: '18 a 22/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Méo mecânica - Parte 3',
                  objetivos: 'Construir a base da mão mecânica. Implementar movimento de abrir e fechar.',
                  conteudos: 'Processo de construção: base da mão e punho. Fixação dos dedos.'
                }
              ]
            },
            {
              numero: 5,
              data: '25 a 29/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Méo mecânica - Parte 4',
                  objetivos: 'Finalizar protótipo. Integrar sistema de controle.',
                  conteudos: 'Processo de construção: Integrar o sistema de controle ao protótipo. Sistema de controle.'
                }
              ]
            },
            {
              numero: 6,
              data: '08 a 12/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Méo mecânica - Parte 5',
                  objetivos: 'Testar funcionalidades da mão mecânica. Preparar apresentação para competição.',
                  conteudos: 'Apresentação do protótipo. Testes finais.'
                }
              ]
            },
            {
              numero: 7,
              data: '15 a 19/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Méo mecânica - Hora da competição',
                  objetivos: 'Apresentar protótipo na competição. Avaliar projetos dos colegas.',
                  conteudos: 'Competição de projetos. Critérios de avaliação.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        }
      ]
    },

    // ===================== 8º ANO =====================
    {
      anoSerie: '8º ano',
      bimestres: [
        {
          bimestre: '1º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '02 a 06/02',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: 'Explorando labirintos com senso de direção',
                  objetivos: 'Compreender os conceitos de direção e navegação. Explorar orientação com coordenadas no MakeCode.',
                  conteudos: 'Labirinto. Rosa dos ventos. Navegação por coordenadas.',
                  materialLink: 'https://acervocmsp.educacao.sp.gov.br/142955/1507123.pdf'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: 'Planejando a rota',
                  objetivos: 'Compreender o funcionamento da bússola. Criar programa que exibe direção na matriz de LEDs.',
                  conteudos: 'Direções. Bússola do micro:bit. Programação.',
                  materialLink: 'https://acervocmsp.educacao.sp.gov.br/143483/1516377.pdf'
                }
              ]
            },
            {
              numero: 3,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: 'Introdução à Shield do micro:bit',
                  objetivos: 'Conhecer a shield de expansão. Explorar componentes e servomotores.',
                  conteudos: 'Shield de expansão. Componentes da shield. Servomotores.'
                }
              ]
            },
            {
              numero: 4,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: 'Servomotores em ação',
                  objetivos: 'Programar servomotores. Controlar posição e velocidade.',
                  conteudos: 'Controle de servomotores. Programação de ângulos. Movimento preciso.'
                }
              ]
            },
            {
              numero: 5,
              data: '09 a 13/03',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: 'Construindo um semáforo inteligente',
                  objetivos: 'Construir um semáforo com LEDs. Compreender temporização.',
                  conteudos: 'LEDs. Semáforo. Temporização.'
                }
              ]
            },
            {
              numero: 6,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: 'Protótipo: semáforo interativo',
                  objetivos: 'Adicionar interatividade ao semáforo. Usar sensores e botões.',
                  conteudos: 'Sensor de luz. Botões. Interatividade.'
                }
              ]
            },
            {
              numero: 7,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: 'Semáforo inteligente: apresentação',
                  objetivos: 'Apresentar protótipo do semáforo inteligente.',
                  conteudos: 'Apresentação do projeto. Competição.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '22 a 30/04',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: '[Competição de Robótica] Braço mecnico: Introdução',
                  objetivos: 'Compreender conceitos de braço mecnico. Identificar tipos de juntas.',
                  conteudos: 'Introdução ao braço mecnico. Graus de liberdade. Tipos de juntas.'
                }
              ]
            },
            {
              numero: 2,
              data: '04 a 08/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Braço mecnico - Parte 1',
                  objetivos: 'Iniciar a construção do braço mecnico. Montar a base.',
                  conteudos: 'Servo e estrutura. Montagem da base. Competição de Robótica.'
                }
              ]
            },
            {
              numero: 3,
              data: '11 a 15/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Braço mecnico - Parte 2',
                  objetivos: 'Construir articulações do braço. Testar movimentos.',
                  conteudos: 'Montagem das articulações. Teste de movimentos.'
                }
              ]
            },
            {
              numero: 4,
              data: '18 a 22/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Braço mecnico - Parte 3',
                  objetivos: 'Construir e integrar sistema de garra.',
                  conteudos: 'Garra/pinça. Integração de servos.'
                }
              ]
            },
            {
              numero: 5,
              data: '25 a 29/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Braço mecnico - Parte 4',
                  objetivos: 'Programar movimentos do braço mecnico. Implementar sequências.',
                  conteudos: 'Programação do braço. Controle sequencial.'
                }
              ]
            },
            {
              numero: 6,
              data: '08 a 12/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Braço mecnico - Parte 5',
                  objetivos: 'Otimizar funcionamento do braço. Preparar apresentação.',
                  conteudos: 'Otimização. Teste funcional. Apresentação.'
                }
              ]
            },
            {
              numero: 7,
              data: '15 a 19/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Braço mecnico - Hora da competição',
                  objetivos: 'Apresentar braço mecnico na competição.',
                  conteudos: 'Competição de projetos. Avaliação.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        }
      ]
    },

    // ===================== 9º ANO =====================
    {
      anoSerie: '9º ano',
      bimestres: [
        {
          bimestre: '1º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '02 a 06/02',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: 'Introdução à IoT',
                  objetivos: 'Compreender o conceito de IoT. Identificar aplicações de IoT no cotidiano.',
                  conteudos: 'Internet das Coisas. Sensores conectados. Automação.',
                  materialLink: 'https://acervocmsp.educacao.sp.gov.br/143691/1520656.pdf'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: 'Comunicação entre micro:bits',
                  objetivos: 'Compreender comunicação sem fio entre micro:bits. Configurar grupos de rádio.',
                  conteudos: 'Rádio. Comunicação sem fio. Grupos de rádio.'
                }
              ]
            },
            {
              numero: 3,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: 'Enviando e recebendo dados',
                  objetivos: 'Enviar e receber dados entre micro:bits. Implementar comunicação.',
                  conteudos: 'Enviar e receber strings. Enviar e receber números. Comunicação digital.'
                }
              ]
            },
            {
              numero: 4,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: 'Sistema de alarme remoto',
                  objetivos: 'Criar sistema de alarme remoto usando micro:bits. Integrar sensores e rádio.',
                  conteudos: 'Sensor de movimento. Alarme remoto. Comunicação via rádio.'
                }
              ]
            },
            {
              numero: 5,
              data: '09 a 13/03',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: 'Projeto IoT: estação meteorológica',
                  objetivos: 'Construir estação meteorológica. Coletar e exibir dados ambientais.',
                  conteudos: 'Sensores de temperatura e luz. Coleta de dados. Monitoramento.'
                }
              ]
            },
            {
              numero: 6,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: 'Aprimorando a estação meteorológica',
                  objetivos: 'Transmitir dados da estação meteorológica. Aprimorar interface.',
                  conteudos: 'Transmissão de dados. Interface. Visualização de dados.'
                }
              ]
            },
            {
              numero: 7,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: 'Apresentação IoT',
                  objetivos: 'Apresentar projeto de IoT.',
                  conteudos: 'Apresentação do projeto. Competição.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '22 a 30/04',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 1 e 2',
                  titulo: '[Competição de Robótica] Carrinho robô: Introdução',
                  objetivos: 'Compreender o projeto do carrinho robô. Planejar design sustentável.',
                  conteudos: 'Robótica sustentável. Design de carrinho. Competição.'
                }
              ]
            },
            {
              numero: 2,
              data: '04 a 08/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Carrinho robô - Parte 1',
                  objetivos: 'Construir chassi do carrinho. Integrar motores.',
                  conteudos: 'Estrutura do chassi. Motores DC. Montagem inicial.'
                }
              ]
            },
            {
              numero: 3,
              data: '11 a 15/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Carrinho robô - Parte 2',
                  objetivos: 'Implementar direção diferencial. Programar movimentos.',
                  conteudos: 'Direção diferencial. Programação dos motores. Teste.'
                }
              ]
            },
            {
              numero: 4,
              data: '18 a 22/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Carrinho robô - Parte 3',
                  objetivos: 'Implementar controle remoto via rádio. Configurar emissor/receptor.',
                  conteudos: 'Controle por rádio. Emissor e receptor. Comunicação.'
                }
              ]
            },
            {
              numero: 5,
              data: '25 a 29/05',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Carrinho robô - Parte 4',
                  objetivos: 'Implementar seguidor de linha. Usar sensores para automação.',
                  conteudos: 'Sensor de linha. Seguidor de linha. Automação.'
                }
              ]
            },
            {
              numero: 6,
              data: '08 a 12/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Carrinho robô - Parte 5',
                  objetivos: 'Otimizar carrinho robô. Preparar para competição.',
                  conteudos: 'Otimização. Design final. Apresentação.'
                }
              ]
            },
            {
              numero: 7,
              data: '15 a 19/06',
              especial: 'Competição de Robótica',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Carrinho robô - Hora da competição',
                  objetivos: 'Participar da competição de robótica com o carrinho robô.',
                  conteudos: 'Competição. Corrida de obstáculos. Avaliação.',
                  entregaProjeto: true
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
