import { DisciplinaEscopo } from './models';

export const ROBOTICA_EM_DATA: DisciplinaEscopo = {
  id: 'robotica-em',
  nome: 'Robótica',
  ciclo: 'Ensino Médio',
  categoria: 'robotica',
  anos: [
    // ===================== 1ª SéRIE =====================
    {
      anoSerie: '1ª série',
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
                  titulo: 'Pequenos dispositivos, Grandes ideias – Invertendo a aula com o micro:bit',
                  objetivos: 'Comparar computadores com videogames, celulares e microcontroladores. Identificar recursos embarcados no micro:bit.',
                  conteudos: 'Computadores, aparelhos e micro:bit. Pitch. Sala de aula invertida.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: 'Apresentando o micro:bit com as nossas palavras',
                  objetivos: 'Compreender o papel dos microcontroladores, reconhecendo os recursos embarcados na placa micro:bit.',
                  conteudos: 'Sala de aula invertida. Pitch – Recursos da placa micro:bit.'
                }
              ]
            },
            {
              numero: 3,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: 'Onde se criam os programas',
                  objetivos: 'Compreender o papel das IDEs no processo de programação, reconhecendo a versatilidade do MakeCode.',
                  conteudos: 'IDE e sua relação com a programação e robótica. Resolução de problemas e aplicações. Recursos da programação em blocos.'
                }
              ]
            },
            {
              numero: 4,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: 'Atividade desplugada – Um outro jeito de aprender',
                  objetivos: 'Compreender que tudo em excesso faz mal. Experimentar aprendizagem com atividades desplugadas. Identificar a matemática nas brincadeiras.',
                  conteudos: 'Tecnologia e saúde. Atividades plugadas e desplugadas. Brincadeiras, matemática e interação. Input/output.'
                }
              ]
            },
            {
              numero: 5,
              data: '09 a 13/03',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: 'Olhos digitais: sentidos à la micro:bit',
                  objetivos: 'Estabelecer analogias entre os 5 sentidos e os sensores. Compreender diferença entre sensores analógicos e digitais. Criar sistema de vigilância com sensor PIR.',
                  conteudos: 'Sensores – Input/Output (analogia com o corpo humano). Sensores analógicos e digitais. Sensor PIR.'
                }
              ]
            },
            {
              numero: 6,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: 'Olhos digitais: sentidos à la micro:bit – Limitações',
                  objetivos: 'Investigar comportamentos inesperados do sensor PIR e suas causas. Julgar adequação do sensor PIR. Criar proposta de redesign.',
                  conteudos: 'Limitações técnicas. Adaptações/Redesign.'
                }
              ]
            },
            {
              numero: 7,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: 'Quando um sensor não basta, o pensamento computacional prevalece',
                  objetivos: 'Identificar os três eixos do acelerômetro. Explicar diferença entre evento de chacoalhar e leitura direta. Usar valores de X e Y para controlar LED. Comparar dados de aceleração transformados em algo visual.',
                  conteudos: 'Eixos X, Y e Z (movimento lateral, frontal e vertical). Representação visual na matriz de LEDs. Pensamento computacional aplicado.'
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
                  titulo: 'Do vapor ao chip: autômatos',
                  objetivos: 'Diferenciar robôs, androides e autômatos. Identificar papel dos grandes relógios medievais. Analisar evolução dos mecanismos. Explicar princípios incorporados às indústrias. Relacionar tecnologias da Primeira Revolução Industrial com sistemas automatizados.',
                  conteudos: 'Robôs, androides e autômatos. Grandes relógios medievais. Guildas de relojoeiros. Dos Cames aos cartões perfurados. Mecanização das indústrias. Reflexos na computação moderna.'
                }
              ]
            },
            {
              numero: 2,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Autômato Maker: Ideias em Movimento – Parte 1',
                  objetivos: 'Distinguir diferenças entre autômato e robô moderno. Relacionar controle de movimento com alavancas. Descrever as partes de um autômato. Conhecer proposta de competição.',
                  conteudos: 'Conceitos básicos de autômatos. Partes que compõem um autômato. Alavancas. Formato do came. Competição de robótica – OBR artística.'
                }
              ]
            },
            {
              numero: 3,
              data: '11 a 15/05',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Autômato Maker – Parte 2',
                  objetivos: 'Refletir criticamente sobre os desafios. Analisar como remix contribui para originalidade. Investigar influência da pesquisa. Aplicar princípios da cultura maker para construir caixa expositora.',
                  conteudos: 'Desafios do processo criativo. Remix de ideias. Cames e controle de movimento. Montar a caixa de exposição.'
                }
              ]
            },
            {
              numero: 4,
              data: '18 a 22/05',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Autômato Maker – Parte 3',
                  objetivos: 'Entender relações entre alavancas e cames para controlar movimentos. Aplicar cultura maker para construir autômato. Aplicar motor DC controlado pelo micro:bit.',
                  conteudos: 'O came e o programa do autômato. Alavancas e esforço físico e mecnico. Engates para eixos de motores. Finalizar montagem.'
                }
              ]
            },
            {
              numero: 5,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Autômato Maker: Desafio – Parte 1',
                  objetivos: 'Entender como autômatos foram utilizados no Carnaval no Brasil. Identificar diferenças entre LED comum e LED endereçável. Controlar LEDs da shield usando Neopixel.',
                  conteudos: 'Escolas de samba e Festival Folclórico de Parintins. LED endereçável RGB. Controlar LEDs usando extensão da shield.'
                }
              ]
            },
            {
              numero: 6,
              data: '08 a 12/06',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Autômato Maker: Desafio – Parte 2',
                  objetivos: 'Prototipar segundo came para adicionar movimento. Prototipar segundo braço móvel remixando o projeto anterior. Aplicar novos componentes. Personalizar para competição.',
                  conteudos: 'Diferentes cames, diferentes movimentos. Transferência de aprendizagem – modificar o autômato.'
                }
              ]
            },
            {
              numero: 7,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Autômato Maker: Desafio – Hora da competição',
                  objetivos: 'Finalizar protótipos com acabamentos e personalizações. Apresentar protótipos na competição. Avaliar de acordo com critérios preestabelecidos.',
                  conteudos: 'Diferentes cames, diferentes movimentos. Transferência de aprendizagem. Apresentação da competição.'
                }
              ]
            }
          ]
        }
      ]
    },
    // ===================== 2ª/3ª SéRIES =====================
    {
      anoSerie: '2ª/3ª séries',
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
                  titulo: '[Competição de Robótica] Robótica sustentável: Materializando ideias',
                  objetivos: 'Compreender o papel da robótica sustentável na formação cidadã. Relacionar ciclo de produção com ODS e economia circular. Estimular protagonismo juvenil.',
                  conteudos: 'Robótica sustentável. ODS da ONU. Economia circular. Conexão com o cotidiano e projeto do carrinho. Competição de robótica.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Robótica sustentável: Direção diferencial',
                  objetivos: 'Compreender importância de ambientes de testes. Analisar uso da direção diferencial. Aplicar direção diferencial nos motores.',
                  conteudos: 'Ambiente de testes. Direção diferencial. Programação e teste de funcionamento.'
                }
              ]
            },
            {
              numero: 3,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Robótica sustentável: Indo a fundo no controle por rádio – Parte 1',
                  objetivos: 'Aplicar lógica de controle às funções. Entender como funciona o sistema de rádio controle com micro:bits.',
                  conteudos: 'Reaproveitamento de programas. Princépios de mapeamento lógico (emissor/receptor).'
                }
              ]
            },
            {
              numero: 4,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Robótica sustentável: Indo a fundo no controle por rádio – Parte 2',
                  objetivos: 'Entender como reaproveitar a estrutura no sistema de rádio controle. Testar programas e fazer ajustes.',
                  conteudos: 'Reaproveitamento de programas. Código do receptor.'
                }
              ]
            },
            {
              numero: 5,
              data: '09 a 13/03',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Robótica sustentável: Do Design ao Protótipo – Parte 1',
                  objetivos: 'Compreender o que é carro conceito. Criar chassi Tadpole. Projetar encaixes com simetria. Testar funcionalidade.',
                  conteudos: 'Carro conceito. Projetos feitos a mão e alternativas.'
                }
              ]
            },
            {
              numero: 6,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Robótica sustentável: Do Design ao Protótipo – Parte 2',
                  objetivos: 'Entender competições estudantis de robótica no Brasil. Ajustar código para melhorar precisão. Apresentar protótipo funcional.',
                  conteudos: 'Recorte das peças. Montagem e fixação da shield, motores e eixos. Testes finais e ajustes.'
                }
              ]
            },
            {
              numero: 7,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Robótica sustentável: Corrida final: obstáculos e precisão!',
                  objetivos: 'Testar funcionalidade do protótipo em situação real de competição. Participar de competição de robótica.',
                  conteudos: 'OBR – Lego League & circuito de testes. Corrida de obstáculos com avaliação de desempenho.'
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
                  titulo: '[Competição de Robótica] Jurassic Maker: O que é Robótica Artéstica?',
                  objetivos: 'Identificar o que é robótica artística. Explicar como a robótica pode se integrar à arte.',
                  conteudos: 'Introdução à Modalidade de Robótica Artéstica da OBR. Conceitos de robótica e arte integrados. Exemplos inspiradores.'
                }
              ]
            },
            {
              numero: 2,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aulas 3 e 4',
                  titulo: '[Competição de Robótica] Jurassic Maker: Transformando papelão em um dinossauro',
                  objetivos: 'Planejar um projeto de robótica artística. Esquematizar ideias. Desenvolver estrutura básica com materiais recicláveis.',
                  conteudos: 'Conceito de cultura maker e reaproveitamento de materiais. Etapas de planejamento. Estruturação de formas tridimensionais.'
                }
              ]
            },
            {
              numero: 3,
              data: '11 a 15/05',
              aulas: [
                {
                  aulaSala: 'Aulas 5 e 6',
                  titulo: '[Competição de Robótica] Jurassic Maker: Improvisar, Criar e Resolver',
                  objetivos: 'Montar suportes articulados com materiais alternativos. Avaliar estabilidade. Projetar soluções improvisadas.',
                  conteudos: 'Pan Tilt (bi-articulados) de papelão. Parafusos. Encaixes sem cola: durabilidade e reutilização.'
                }
              ]
            },
            {
              numero: 4,
              data: '18 a 22/05',
              aulas: [
                {
                  aulaSala: 'Aulas 7 e 8',
                  titulo: '[Competição de Robótica] Jurassic Maker – Modelando o T-Rex',
                  objetivos: 'Modelar peças estruturais do robô. Usar técnicas de corte e encaixe. Avaliar encaixes para estabilidade.',
                  conteudos: 'Recorte de gabaritos. Montar e colar. Teste dos encaixes.'
                }
              ]
            },
            {
              numero: 5,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aulas 9 e 10',
                  titulo: '[Competição de Robótica] Jurassic Maker – Dando vida ao boneco',
                  objetivos: 'Programar movimentos simples com servos. Relacionar comandos com movimentos físicos. Mapear movimentos em funções.',
                  conteudos: 'Controle de servomotores. Laços e blocos personalizados. Funções.'
                }
              ]
            },
            {
              numero: 6,
              data: '08 a 12/06',
              aulas: [
                {
                  aulaSala: 'Aulas 11 e 12',
                  titulo: '[Competição de Robótica] Jurassic Maker – Ele está vivo!!!',
                  objetivos: 'Avaliar como laço for melhora o controle de movimento. Criar blocos personalizados para modular. Escrever funções para movimentos coordenados.',
                  conteudos: 'Controle e precisão. Criação de blocos personalizados no Makecode. Otimização de código.'
                }
              ]
            },
            {
              numero: 7,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aulas 13 e 14',
                  titulo: '[Competição de Robótica] Jurassic Maker – Prototipagem criativa e avaliação final',
                  objetivos: 'Integrar todas as partes e sistemas. Testar e ajustar funcionalidades. Propor ideias de novos protótipos. Participar de competição baseada na OBR artística.',
                  conteudos: 'Limitações dos servos. Estímulo à criação de protótipos autorais. OBR. Apresentação da competição.'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
