import { DisciplinaEscopo } from './models';

export const TEC_INOV_DATA: DisciplinaEscopo = {
  id: 'tec-inov',
  nome: 'Tecnologia e Inovação',
  ciclo: 'Anos Finais',
  categoria: 'programacao',
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
              unidade: 'Introdução à computação: iniciando meus estudos',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Primeiros passos na tecnologia',
                  formato: 'Material digital',
                  objetivos: 'Identificar os três eixos principais que estruturam o ensino de tecnologia: pensamento computacional, mundo digital e cultura digital. Explicar pensamento computacional e seus quatro pilares fundamentais. Descrever conceitos iniciais de projeto tecnológico pessoal.',
                  conteudos: 'Eixos estruturantes da tecnologia. Pilares do pensamento computacional: decomposição, reconhecimento de padrões, abstração e algoritmo. Planejamento inicial de projetos criativos.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Entrada e saída no computador',
                  formato: 'Material digital',
                  objetivos: 'Listar principais dispositivos tecnológicos na escola. Explicar diferenças entre dispositivos de entrada e saída. Classificar corretamente os dispositivos.',
                  conteudos: 'Identificação dos dispositivos tecnológicos na escola. Dispositivos de entrada (mouse, teclado, microfone, câmera). Dispositivos de saída (monitor, impressora, projetor, caixa de som).'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Explorando o mouse',
                  formato: 'Material digital',
                  objetivos: 'Identificar partes e funcionalidades do mouse. Utilizar o mouse para clicar, arrastar e soltar blocos no Start Lab.',
                  conteudos: 'Dispositivo de entrada: o mouse. Interação com blocos de programação no Start Lab.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Criando com Teclado',
                  formato: 'Material digital',
                  objetivos: 'Identificar principais comandos do teclado no Start Lab. Reconhecer a função do bloco diga.',
                  conteudos: 'Exploração do teclado. Uso da bandeira verde e blocos de Eventos. Personalização de mensagens.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 3,
              data: '16 a 20/02',
              especial: 'Semana Carnaval (Feriados e Planejamento/Replanejamento)',
              aulas: []
            },
            {
              numero: 4,
              data: '23 a 27/02',
              unidade: 'Cultura Digital: uma aventura no fórum com Cody',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Explorando a cultura digital',
                  formato: 'Material digital',
                  objetivos: 'Identificar comportamentos respeitosos e inadequados nas interações digitais. Aplicar princípios de respeito e ética.',
                  conteudos: 'Reflexão sobre emoções nas interações digitais. Importância do comportamento respeitoso. Regras de convivência.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'O poder das respostas',
                  formato: 'Material digital',
                  objetivos: 'Aplicar estratégias para responder de maneira respeitosa. Diferenciar respostas respeitosas de impulsivas.',
                  conteudos: 'Conceito de pirâmide das emoções. Identificação de respostas impulsivas e reflexivas.'
                }
              ]
            },
            {
              numero: 5,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Tirando dúvidas corretamente',
                  formato: 'Material digital',
                  objetivos: 'Aplicar estratégias para fazer perguntas claras no fórum. Analisar exemplos de perguntas inadequadas.',
                  conteudos: 'Como fazer perguntas claras e objetivas. Estratégias de criação de boas perguntas.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Desvendando a Obsolescência Programada',
                  formato: 'Material digital',
                  objetivos: 'Compreender o conceito de obsolescência programada e seus impactos. Analisar as consequências ambientais.',
                  conteudos: 'Conceito de obsolescência programada. Impactos ambientais do lixo eletrônico. Soluções para consumo sustentável.'
                }
              ]
            },
            {
              numero: 6,
              data: '09 a 13/03',
              especial: 'Avaliação da unidade: Introdução à computação + Cultura Digital',
              aulas: []
            },
            {
              numero: 7,
              data: '16 a 20/03',
              unidade: 'Lógica de programação: exploração criativa pt1',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Iniciando a exploração',
                  formato: 'Vídeo',
                  objetivos: 'Selecionar personagens na biblioteca. Duplicar e editar personagens. Renomear personagens.',
                  conteudos: 'Ambientalização no StartLab. Criação e edição de personagens. Composição e personalização.'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Ensinando o computador',
                  formato: 'Vídeo',
                  objetivos: 'Conhecer a área de código do StartLab. Localizar blocos de eventos, controle e aparência. Implementar algoritmo para alterar fantasias.',
                  conteudos: 'Revisão e continuação do projeto. Introdução à programação no StartLab. Criação de sequências de animação.'
                }
              ]
            },
            {
              numero: 8,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Reconhecendo padrões',
                  formato: 'Vídeo',
                  objetivos: 'Reconhecer padrões e automatizar tarefas. Depurar e refinar códigos.',
                  conteudos: 'Programação no StartLab. Adicionar e modificar fantasias. Otimização de códigos com blocos de controle.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Explorando cenários',
                  formato: 'Vídeo',
                  objetivos: 'Diferenciar atores e cenários no StartLab. Modificar cenários. Comparar ferramentas de edição.',
                  conteudos: 'Seleção e adição de cenários. Copiar e colar elementos visuais. Diferenças nas ferramentas de edição.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 9,
              data: '30/03 a 02/04',
              especial: 'Semana para nivelamento',
              aulas: []
            },
            {
              numero: 10,
              data: '06 a 10/04',
              especial: 'Avaliação: Lógica de programação pt 1',
              aulas: []
            },
            {
              numero: 11,
              data: '13 a 17/04',
              especial: 'Recuperação do bimestre',
              aulas: []
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 12,
              data: '22 a 30/04',
              unidade: 'Lógica de programação: exploração criativa pt 2',
              aulas: [
                {
                  aulaSala: 'Aula 21',
                  titulo: 'Cenários criativos',
                  objetivos: 'Modificar cenários variados. Implementar algoritmo que troca cenários. Compartilhar projeto.',
                  conteudos: 'Criação de cenários personalizados. Programação da troca de cenários. Salvar e compartilhar.'
                },
                {
                  aulaSala: 'Aula 22',
                  titulo: 'Cartão animado',
                  objetivos: 'Utilizar atores e cenários para cartão animado. Identificar boas práticas de segurança online.',
                  conteudos: 'Escolha de temas. Seleção de atores. Noções de segurança online.'
                }
              ]
            },
            {
              numero: 13,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aula 23',
                  titulo: 'Efeitos divertidos',
                  objetivos: 'Compreender efeitos visuais em personagens. Aplicar repetição com aumento e retorno de valores.',
                  conteudos: 'Efeitos visuais (cor e turbilhão). Lógica de repetição.'
                },
                {
                  aulaSala: 'Aula 24',
                  titulo: 'Reutilização de Código',
                  objetivos: 'Reutilizar e adaptar códigos. Experimentar efeitos visuais diferentes.',
                  conteudos: 'Algoritmos com repetições positivas e negativas. Abstração e reutilização.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 14,
              data: '11 a 15/05',
              especial: 'Avaliação: Lógica pt 2',
              aulas: []
            },
            {
              numero: 15,
              data: '18 a 22/05',
              unidade: 'Tipos de dados: criando uma coleção de máquinas',
              aulas: [
                {
                  aulaSala: 'Aula 27',
                  titulo: 'Criando um concurso de máquinas',
                  objetivos: 'Compreender a proposta do projeto. Identificar necessidade de organizar itens em coleções.',
                  conteudos: 'O que é uma coleção. Coleção de elementos. Planejamento de Projeto Interativo.'
                },
                {
                  aulaSala: 'Aula 28',
                  titulo: 'Criando fantasias',
                  objetivos: 'Utilizar ferramentas de desenho. Nomear fantasias. Compreender representação por números, textos e imagens.',
                  conteudos: 'Ferramentas de desenho (Start Lab). Representação de Dados. Organização de Fantasias/Atores.'
                }
              ]
            },
            {
              numero: 16,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aula 29',
                  titulo: 'Sorteando elementos',
                  objetivos: 'Aplicar blocos de evento. Utilizar \'Mudar fantasia para\'. Implementar número aleatório.',
                  conteudos: 'Blocos de Eventos. Blocos de Aparência. Bloco de operadores (número aleatório).'
                },
                {
                  aulaSala: 'Aula 30',
                  titulo: 'Adicionando interação',
                  objetivos: 'Criar botão interativo. Utilizar bloco \'Diga\'. Implementar \'Pergunte e Espere\'.',
                  conteudos: 'Criação de Botões. Blocos de Aparência (Diga). Sensores (Pergunte e Espere).'
                }
              ]
            },
            {
              numero: 17,
              data: '01 a 03/06',
              especial: 'Semana para nivelamento',
              aulas: []
            },
            {
              numero: 18,
              data: '08 a 12/06',
              aulas: [
                {
                  aulaSala: 'Aula 33',
                  titulo: 'Validando respostas',
                  objetivos: 'Aplicar condicional \'Se Então\'. Utilizar operadores de comparação (contém). Compreender tipo booleano.',
                  conteudos: 'Estruturas condicionais (Se Então). Operadores de comparação. Tipo de dado Booleano.'
                },
                {
                  aulaSala: 'Aula 34',
                  titulo: 'Comparando respostas',
                  objetivos: 'Diferenciar operadores \'igualdade\' e \'contém\'. Utilizar sensor \'nome da fantasia de ator\'.',
                  conteudos: 'Operador de igualdade. Sensor Nome da Fantasia. Validação dinâmica.'
                }
              ]
            },
            {
              numero: 19,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aula 35',
                  titulo: 'Melhorando a experiência',
                  objetivos: 'Implementar \'Se então senão\'. Criar mensagens personalizadas para acertos e erros.',
                  conteudos: 'Blocos de Controle (Se então senão). Feedback ao usuário. Design de interação (UX).'
                },
                {
                  aulaSala: 'Aula 36',
                  titulo: 'Reflexão',
                  objetivos: 'Refletir sobre conexão dos novos conhecimentos. Formular perguntas e desafios futuros.',
                  conteudos: 'Revisão de conceitos. Processo de aprendizagem e reflexão.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 20,
              data: '22 a 26/06',
              especial: 'Avaliação: Tipos de dados',
              aulas: []
            },
            {
              numero: 21,
              data: '29/06 a 03/07',
              especial: 'Recuperação do bimestre',
              aulas: []
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
              unidade: 'Introdução à computação: conhecendo o teclado e o mouse',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Méos no teclado',
                  formato: 'Vídeo',
                  objetivos: 'Recordar padrão QWERTY e funções das teclas. Compreender posicionamento correto das mãos. Aplicar combinações de teclas.',
                  conteudos: 'Uso das teclas Caps Lock, Shift e AltGr. Inserção de acentos e símbolos. Exploração do teclado QWERTY.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Atalhos em ação',
                  formato: 'Vídeo',
                  objetivos: 'Conhecer atalhos de teclado. Explicar combinações Ctrl e Shift. Aplicar atalhos para editar textos.',
                  conteudos: 'Atalhos essenciais (seleção, copiar/colar, desfazer, salvar). Atalhos de formatação. Atividade gamificada.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Mouse e seus botões',
                  formato: 'Vídeo',
                  objetivos: 'Identificar funções do clique simples, duplo e triplo. Aplicar clique duplo para selecionar palavras.',
                  conteudos: 'Funções do clique simples, duplo e triplo. Posicionamento do cursor.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Mais funções do mouse',
                  formato: 'Vídeo',
                  objetivos: 'Conhecer arrastar e soltar. Compreender menus contextuais do botão direito.',
                  conteudos: 'Operações do mouse (segurar e arrastar). Coordenação motora. Uso do botão direito.'
                }
              ]
            },
            {
              numero: 3,
              data: '16 a 20/02',
              especial: 'Semana Carnaval',
              aulas: []
            },
            {
              numero: 4,
              data: '23 a 27/02',
              unidade: 'Introdução à computação: aprofundando meus estudos',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Pacote de dados',
                  formato: 'Material digital',
                  objetivos: 'Reconhecer conceito de transmissão de dados. Compreender importância de pacotes de dados.',
                  conteudos: 'Conceito de transmissão de dados. Divisão de informações em pacotes.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Regras de transmissão de dados',
                  formato: 'Vídeo',
                  objetivos: 'Identificar conceito de protocolo. Aplicar regras de transmissão em simulação.',
                  conteudos: 'Conceito e função dos protocolos na internet. Simulação de transmissão de dados.'
                }
              ]
            },
            {
              numero: 5,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'A internet: endereços e dados',
                  formato: 'Vídeo',
                  objetivos: 'Identificar IP e DNS. Explicar transmissão de dados em pacotes e função dos servidores.',
                  conteudos: 'Protocolos da Internet: IP e DNS. Transmissão de dados e pacotes. Servidores.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Organizando arquivos digitais',
                  formato: 'Vídeo',
                  objetivos: 'Identificar formatos de arquivos (.zip, .gif, .jpg). Compreender compactação de arquivos.',
                  conteudos: 'Conceito de arquivos compactados (.zip). Download e extração. Organização em pastas.'
                }
              ]
            },
            {
              numero: 6,
              data: '09 a 13/03',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 7,
              data: '16 a 20/03',
              unidade: 'Segurança Cibernética: práticas para proteção digital pt 1',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Rastros na Internet',
                  formato: 'Material digital',
                  objetivos: 'Compreender diferença entre dados e informações digitais. Identificar práticas inseguras. Refletir sobre rastros digitais.',
                  conteudos: 'Diferença entre dados e informações digitais. Interações online geram perfis pessoais. Segurança digital.'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Ameaças digitais',
                  formato: 'Material digital',
                  objetivos: 'Analisar como dados pessoais são usados em golpes. Relacionar ameaças a comportamentos inseguros.',
                  conteudos: 'Tipos de ameaças: malware e phishing. Estratégias de golpistas. Dicas de prevenção.'
                }
              ]
            },
            {
              numero: 8,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Desinformação online',
                  formato: 'Material digital',
                  objetivos: 'Analisar engenharia social e desinformação. Reconhecer riscos de exposição de dados.',
                  conteudos: 'Engenharia social e fake news. Manipulação de conteúdo. Riscos do compartilhamento.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Empatia digital',
                  formato: 'Material digital',
                  objetivos: 'Refletir sobre atitudes que impactam segurança digital. Reconhecer importância da empatia online.',
                  conteudos: 'Ações individuais e segurança digital. Empatia e respeito. Riscos de conteúdos ofensivos.'
                }
              ]
            },
            {
              numero: 9,
              data: '30/03 a 02/04',
              especial: 'Nivelamento',
              aulas: []
            },
            {
              numero: 10,
              data: '06 a 10/04',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 11,
              data: '13 a 17/04',
              especial: 'Recuperação',
              aulas: []
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 12,
              data: '22 a 30/04',
              unidade: 'Segurança Cibernética pt 2',
              aulas: [
                {
                  aulaSala: 'Aula 21',
                  titulo: 'Planejando nosso roteiro',
                  objetivos: 'Planejar produto digital sobre segurança. Selecionar formato e mensagem adequada.',
                  conteudos: 'Escolha do tema, formato e mensagem. Estrutura narrativa. Roteirização.',
                  entregaProjeto: true
                },
                {
                  aulaSala: 'Aula 22',
                  titulo: 'Produção criativa',
                  objetivos: 'Aplicar conhecimentos para iniciar produção digital. Utilizar ferramentas tecnológicas.',
                  conteudos: 'Interface do Start Lab. Criação de personagens, cenários e fantasias. Início da produção.'
                }
              ]
            },
            {
              numero: 13,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aula 23',
                  titulo: 'Finalização do produto',
                  objetivos: 'Finalizar produto digital. Revisar elementos técnicos e narrativos.',
                  conteudos: 'Inserção e organização de blocos de programação. Coordenação de diálogos e transições.'
                },
                {
                  aulaSala: 'Aula 24',
                  titulo: 'Hora de compartilhar',
                  objetivos: 'Apresentar produto digital. Refletir sobre conhecimentos adquiridos.',
                  conteudos: 'Compartilhamento e apresentação. Discussão sobre aprendizados em segurança digital.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 14,
              data: '11 a 15/05',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 15,
              data: '18 a 22/05',
              unidade: 'Análise de algoritmos: debugando a lógica do número primo',
              aulas: [
                {
                  aulaSala: 'Aula 27',
                  titulo: 'Debugar o código',
                  objetivos: 'Configurar ambiente de programação. Utilizar bloco \'pergunte e espere\'. Criar variáveis.',
                  conteudos: 'Ambiente de programação visual (Start Lab). Variáveis e atribuição de valores. Interação com o usuário.'
                },
                {
                  aulaSala: 'Aula 28',
                  titulo: 'Lógica condicional',
                  objetivos: 'Identificar padrões numéricos a partir do resto da divisão. Implementar estruturas condicionais.',
                  conteudos: 'Estruturas Condicionais (If/Else). Variáveis de Controle de Fluxo. Depuração.'
                }
              ]
            },
            {
              numero: 16,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aula 29',
                  titulo: 'Laços de repetição',
                  objetivos: 'Decompor problema complexo em etapas menores. Implementar laços de repetição. Utilizar variáveis para contar.',
                  conteudos: 'Conceito de número primo. Laços de repetição (loops). Contadores.'
                },
                {
                  aulaSala: 'Aula 30',
                  titulo: 'Classificando números com lógica',
                  objetivos: 'Finalizar lógica de verificação de primos. Utilizar fantasias de atores para representar estados.',
                  conteudos: 'Lógica de classificação (primo/não primo). Controle de fluxo. Interação visual com atores.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 17,
              data: '01 a 03/06',
              especial: 'Nivelamento',
              aulas: []
            },
            {
              numero: 18,
              data: '08 a 12/06',
              aulas: [
                {
                  aulaSala: 'Aula 33',
                  titulo: 'Bugs de memória',
                  objetivos: 'Criar variável para lista de números divisíveis. Concatenar strings. Reinicializar variáveis.',
                  conteudos: 'Concatenação de strings. Armazenamento de listas. Inicialização de variáveis.'
                },
                {
                  aulaSala: 'Aula 34',
                  titulo: 'Teste de mesa',
                  objetivos: 'Aplicar técnica de teste de mesa. Identificar e depurar erros lógicos.',
                  conteudos: 'Teste de mesa (desk checking). Depuração (debugging). Análise de variáveis.'
                }
              ]
            },
            {
              numero: 19,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aula 35',
                  titulo: 'Organizando códigos',
                  objetivos: 'Organizar código em blocos lógicos. Criar blocos personalizados para modularizar.',
                  conteudos: 'Modularização de código. Funções/blocos personalizados. Organização e legibilidade.'
                },
                {
                  aulaSala: 'Aula 36',
                  titulo: 'Bugs de tempo',
                  objetivos: 'Otimizar performance para números grandes. Implementar parada antecipada.',
                  conteudos: 'Otimização de algoritmos. Controle de fluxo (parar script). Eficiência computacional.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 20,
              data: '22 a 26/06',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 21,
              data: '29/06 a 03/07',
              especial: 'Recuperação',
              aulas: []
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
              unidade: 'Introdução à computação: explorando recursos de edição de texto',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Conhecendo o explorador de arquivos',
                  formato: 'Material digital',
                  objetivos: 'Identificar partes básicas de navegação do computador. Entender explorador de arquivos. Criar e nomear pastas.',
                  conteudos: 'Estrutura básica do computador. Tipos de arquivo. Organização de arquivos e pastas.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Iniciando o roteiro dos sonhos',
                  formato: 'Vídeo',
                  objetivos: 'Abrir e salvar documentos no Google Docs. Realizar pesquisas seguras. Inserir textos simples.',
                  conteudos: 'Editores de texto (Docs). Pesquisa segura na internet. Organização básica de texto.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Adicionando imagens e símbolos',
                  formato: 'Vídeo',
                  objetivos: 'Inserir imagens explorando direitos autorais. Inserir símbolos e emojis. Ajustar disposição das imagens.',
                  conteudos: 'Inserção de imagens. Símbolos e emojis. Layout e disposição de imagens.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Estilizando o texto',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar formatação de fonte, cor, tamanho e alinhamento. Utilizar estilos para títulos. Usar atalhos.',
                  conteudos: 'Formatação de fonte. Alinhamento de texto. Estilos de título e subtítulo.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 3,
              data: '16 a 20/02',
              especial: 'Carnaval',
              aulas: []
            },
            {
              numero: 4,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Comparando locais com tabelas',
                  formato: 'Vídeo',
                  objetivos: 'Criar e editar tabelas. Ajustar bordas, alinhamento.',
                  conteudos: 'Criação e edição de tabelas. Formatação. Comparação de dados.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Revisão ortográfica',
                  formato: 'Vídeo',
                  objetivos: 'Utilizar corretor ortográfico e gramatical. Realizar leitura crítica.',
                  conteudos: 'Corretor ortográfico. Revisão textual. Atalhos de navegação.'
                }
              ]
            },
            {
              numero: 5,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Criando um menu de navegação',
                  formato: 'Vídeo',
                  objetivos: 'Utilizar estilos de título para sumário automático. Atualizar sumário.',
                  conteudos: 'Sumário automático. Estilos de título. Navegação estruturada.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Apresentando o projeto',
                  formato: 'Material digital',
                  objetivos: 'Exportar como PDF. Organizar apresentação. Preparar apresentação oral.',
                  conteudos: 'Exportação de documentos (PDF). Técnicas de apresentação oral.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 6,
              data: '09 a 13/03',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 7,
              data: '16 a 20/03',
              unidade: 'Lógica de programação: jogos, arte e criatividade pt 1',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Pega pega',
                  formato: 'Vídeo',
                  objetivos: 'Relembrar regras do pega pega. Movimentar personagem com mouse. Localizar personagens e cenários.',
                  conteudos: 'Personagens e cenários. Movimentar com ponteiro do mouse. Laço de repetição (sempre).'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Correr ou deslizar?',
                  formato: 'Vídeo',
                  objetivos: 'Compreender bloco mova passos. Identificar diferenças entre blocos de movimento. Critério de parada.',
                  conteudos: 'Blocos de movimento. Critério de parada. Estrutura condicional (se então).'
                }
              ]
            },
            {
              numero: 8,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Quem é mais rápido?',
                  formato: 'Vídeo',
                  objetivos: 'Localizar blocos de controle. Compreender variáveis. Experimentar valores de incremento.',
                  conteudos: 'Criação de variável. Incremento. Condição inicial.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Pega pega e esconde esconde',
                  formato: 'Vídeo',
                  objetivos: 'Implementar esconder/mostrar personagens. Depurar erros de visibilidade. Assegurar estado inicial.',
                  conteudos: 'Eventos em programação. Controle de aparência. Depuração de código.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 9,
              data: '30/03 a 02/04',
              especial: 'Nivelamento',
              aulas: []
            },
            {
              numero: 10,
              data: '06 a 10/04',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 11,
              data: '13 a 17/04',
              especial: 'Recuperação',
              aulas: []
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 12,
              data: '22 a 30/04',
              unidade: 'Lógica de programação: jogos, arte e criatividade pt 2',
              aulas: [
                {
                  aulaSala: 'Aula 21',
                  titulo: 'Desenho com caneta',
                  objetivos: 'Localizar e aplicar extensão da caneta no StartLab. Compreender funcionalidades. Modificar tamanho.',
                  conteudos: 'Extensão da caneta. Cores e tamanhos. Seleção de tamanho do ator.'
                },
                {
                  aulaSala: 'Aula 22',
                  titulo: 'Caneta simétrica',
                  objetivos: 'Reconhecer plano cartesiano do StartLab. Reconhecer padrões para reutilizar. Aplicar efeitos de aparência.',
                  conteudos: 'Duplicar atores e códigos. Operadores matemáticos. Plano cartesiano.'
                }
              ]
            },
            {
              numero: 13,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aula 23',
                  titulo: 'Mais canetas',
                  objetivos: 'Manipular coordenadas x e y. Reconhecer padrões para reutilizar. Identificar trechos que alteram simetria.',
                  conteudos: 'Duplicar atores e códigos. Operadores matemáticos. Plano cartesiano.'
                },
                {
                  aulaSala: 'Aula 24',
                  titulo: 'Levanta a caneta',
                  objetivos: 'Modificar visualização de personagens. Diferenciar critério se do senão. Compreender levantar e usar caneta.',
                  conteudos: 'Recursos da extensão da caneta. Reutilização de códigos. Blocos de controle.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 14,
              data: '11 a 15/05',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 15,
              data: '18 a 22/05',
              unidade: 'Recursão: desenhando padrões que se repetem',
              aulas: [
                {
                  aulaSala: 'Aula 27',
                  titulo: 'Contagem regressiva',
                  objetivos: 'Criar contagem regressiva. Adicionar cenários e atores. Diferenciar laços de repetição.',
                  conteudos: 'Contagem regressiva. Configuração de cenários. Blocos de repetição.'
                },
                {
                  aulaSala: 'Aula 28',
                  titulo: 'Comunicação dos atores',
                  objetivos: 'Fazer atores se comunicarem. Automatizar contagem com laços. Utilizar variáveis.',
                  conteudos: 'Transmissão de mensagem. Laço de repetição. Variáveis.'
                }
              ]
            },
            {
              numero: 16,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aula 29',
                  titulo: 'Iteração x Recursão',
                  objetivos: 'Comparar métodos iterativo e recursivo. Aplicar recursão. Criar funções personalizadas.',
                  conteudos: 'Método iterativo. Método recursivo. Critério de parada.'
                },
                {
                  aulaSala: 'Aula 30',
                  titulo: 'Recursão no dia a dia',
                  objetivos: 'Resolver problemas com algoritmos recursivos. Utilizar recursão com múltiplos parâmetros.',
                  conteudos: 'Recursão com múltiplos parâmetros. Critério de parada. Multiplicação em recursão.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 17,
              data: '01 a 03/06',
              especial: 'Nivelamento',
              aulas: []
            },
            {
              numero: 18,
              data: '08 a 12/06',
              aulas: [
                {
                  aulaSala: 'Aula 33',
                  titulo: 'Arte generativa',
                  objetivos: 'Criar arte generativa com programação. Utilizar extensão da caneta para formas geométricas.',
                  conteudos: 'Arte generativa. Eventos. Extensão da caneta.'
                },
                {
                  aulaSala: 'Aula 34',
                  titulo: 'Desenhos recursivos',
                  objetivos: 'Transformar desenhos de laços em código recursivo. Implementar funções recursivas.',
                  conteudos: 'Recursão para desenhos. Critério de parada. Decremento de parâmetros.'
                }
              ]
            },
            {
              numero: 19,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aula 35',
                  titulo: 'Constelações dinâmicas',
                  objetivos: 'Criar desenhos recursivos variados com múltiplos parâmetros. Aplicar números aleatórios.',
                  conteudos: 'Recursão com múltiplos parâmetros. Números aleatórios.'
                },
                {
                  aulaSala: 'Aula 36',
                  titulo: 'Criando padrões naturais',
                  objetivos: 'Recriar padrões naturais usando recursão. Aplicar ângulo dourado (137,5°). Compreender Fibonacci.',
                  conteudos: 'Recursão em padrões naturais. Ângulo dourado. Sequência de Fibonacci.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 20,
              data: '22 a 26/06',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 21,
              data: '29/06 a 03/07',
              especial: 'Recuperação',
              aulas: []
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
              unidade: 'Redes sociais: conteúdo que se conecta com algoritmos',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Introdução às Redes Sociais',
                  formato: 'Material digital',
                  objetivos: 'Analisar o cenário de uso da internet no Brasil. Identificar intencionalidades dos usuários. Distinguir características das plataformas.',
                  conteudos: 'Uso da Internet e Redes Sociais no Brasil. Intencionalidade do Usuário. Diversidade de Plataformas.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Algoritmo das redes sociais',
                  formato: 'Vídeo',
                  objetivos: 'Explicar conceito de algoritmo nas redes. Analisar fatores de entrega de conteúdo. Identificar estratégias de viralização.',
                  conteudos: 'Algoritmos de Redes Sociais. Interesse, Engajamento e Relevância. Criação de Conteúdo Digital.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Primeira postagem no Canva',
                  formato: 'Material digital',
                  objetivos: 'Utilizar o Canva para designs de postagens. Selecionar e estilizar textos. Personalizar fundo.',
                  conteudos: 'Introdução ao Canva. Edição de Texto e Fontes. Personalização de Backgrounds.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Animando textos',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar efeitos de animação no Canva. Gerenciar camadas e linha do tempo.',
                  conteudos: 'Animação de Texto no Canva. Edição de Vídeo e Camadas. Sincronização.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 3,
              data: '16 a 20/02',
              especial: 'Carnaval',
              aulas: []
            },
            {
              numero: 4,
              data: '23 a 27/02',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Elementos visuais no Canva',
                  formato: 'Vídeo',
                  objetivos: 'Buscar e inserir elementos gráficos. Diferenciar imagens com/sem direitos autorais. Aplicar molduras.',
                  conteudos: 'Busca de Elementos Gráficos. Direitos Autorais e Creative Commons. Molduras e Upload.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Efeitos e camadas',
                  formato: 'Vídeo',
                  objetivos: 'Criar efeitos visuais complexos. Gerenciar ordem das camadas. Sincronizar animações.',
                  conteudos: 'Criação de Efeitos de Digitação. Gerenciamento de Camadas. Sincronização de Animações.'
                }
              ]
            },
            {
              numero: 5,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Efeitos sonoros',
                  formato: 'Vídeo',
                  objetivos: 'Incorporar efeitos sonoros ao projeto. Sincronizar áudios com animações.',
                  conteudos: 'Inserção de Efeitos Sonoros. Sincronização de éudio e Vídeo. Recursos de éudio.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Compartilhando o post',
                  formato: 'Material digital',
                  objetivos: 'Elaborar legendas e hashtags eficazes. Configurar compartilhamento. Exportar como vídeo.',
                  conteudos: 'Criação de Legendas e Hashtags. Opções de Compartilhamento. Exportação para Redes Sociais.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 6,
              data: '09 a 13/03',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 7,
              data: '16 a 20/03',
              unidade: 'Educação Midiática: o poder da informação pt 1',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Desvendando fake news',
                  formato: 'Material digital',
                  objetivos: 'Analisar postagens para avaliar confiabilidade. Aplicar tabela de análise.',
                  conteudos: 'Compartilhamento de informações. Critérios de avaliação de confiabilidade. Responsabilidade e ética.'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Criando postagens confiáveis',
                  formato: 'Material digital',
                  objetivos: 'Compreender impacto das redes sociais. Criar post informativo. Avaliar confiabilidade de informações.',
                  conteudos: 'Criação de conteúdo responsável. Verificação de informações.'
                }
              ]
            },
            {
              numero: 8,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Protegendo seus dados',
                  formato: 'Material digital',
                  objetivos: 'Identificar tipos de dados pessoais. Reconhecer riscos. Compreender importância de proteger dados.',
                  conteudos: 'Tipos de dados. Riscos no compartilhamento. Privacidade e segurança online.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Entendendo os algoritmos',
                  formato: 'Vídeo',
                  objetivos: 'Compreender funcionamento dos algoritmos. Analisar dados comportamentais.',
                  conteudos: 'Algoritmos nas redes sociais. Perfis comportamentais. Impacto dos dados.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 9,
              data: '30/03 a 02/04',
              especial: 'Nivelamento',
              aulas: []
            },
            {
              numero: 10,
              data: '06 a 10/04',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 11,
              data: '13 a 17/04',
              especial: 'Recuperação',
              aulas: []
            }
          ]
        },
        {
          bimestre: '2º Bimestre',
          semanas: [
            {
              numero: 12,
              data: '22 a 30/04',
              unidade: 'Educação Midiática: o poder da informação pt 2',
              aulas: [
                {
                  aulaSala: 'Aula 21',
                  titulo: 'Desvendando termos de uso',
                  objetivos: 'Analisar termos de uso das plataformas. Compreender direitos e deveres do usuário.',
                  conteudos: 'Termos de Uso e Política de Privacidade. Consequências dos termos de uso.'
                },
                {
                  aulaSala: 'Aula 22',
                  titulo: 'Hora da segurança digital',
                  objetivos: 'Identificar cláusulas sobre dados pessoais. Discutir direitos do usuário.',
                  conteudos: 'Direitos do usuário nos termos de uso. Análise crítica.'
                }
              ]
            },
            {
              numero: 13,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aula 23',
                  titulo: 'Impacto de tecnologias no cotidiano',
                  objetivos: 'Refletir sobre uso de dispositivos digitais e valores pessoais. Avaliar impacto do tempo de tela.',
                  conteudos: 'Reflexão sobre valores e hábitos digitais. Pesquisa de informações. Estruturação de argumentação.'
                },
                {
                  aulaSala: 'Aula 24',
                  titulo: 'Hora do debate',
                  objetivos: 'Compreender diferentes perspectivas sobre tecnologia. Desenvolver argumentos sólidos. Propor soluções.',
                  conteudos: 'Estruturação do debate. Propostas de conscientização. Argumentação.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 14,
              data: '11 a 15/05',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 15,
              data: '18 a 22/05',
              unidade: 'O uso da IA para compreender e transformar realidades sociais',
              aulas: [
                {
                  aulaSala: 'Aula 27',
                  titulo: 'Mapeando problemas',
                  objetivos: 'Identificar problemas sociais na comunidade. Categorizar problemas. Organizar registros em pastas digitais.',
                  conteudos: 'Identificação de problemas sociais. Categorização. Organização em ambientes digitais.'
                },
                {
                  aulaSala: 'Aula 28',
                  titulo: 'Início da investigação',
                  objetivos: 'Definir o problema social. Buscar dados em fontes confiáveis. Avaliar confiabilidade.',
                  conteudos: 'Definição e contextualização. Busca e seleção de fontes. Registro e organização.'
                }
              ]
            },
            {
              numero: 16,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aula 29',
                  titulo: 'Fontes, narrativas e visões',
                  objetivos: 'Compreender como problema social é narrado de formas diferentes. Comparar dados e narrativas. Analisar impacto do viés.',
                  conteudos: 'Conceituação de viés. Análise comparativa de fontes. Impacto do viés.'
                },
                {
                  aulaSala: 'Aula 30',
                  titulo: 'Análise de dados com IA',
                  objetivos: 'Utilizar ferramentas de IA para organizar dados. Identificar padrões e lacunas. Verificar erros da IA.',
                  conteudos: 'Uso de IA para organização. Identificação de padrões. Verificação de vieses.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 17,
              data: '01 a 03/06',
              especial: 'Nivelamento',
              aulas: []
            },
            {
              numero: 18,
              data: '08 a 12/06',
              aulas: [
                {
                  aulaSala: 'Aula 33',
                  titulo: 'Do problema à solução',
                  objetivos: 'Propor soluções fundamentadas em dados. Justificar relevância e impacto social. Utilizar IA com senso crítico.',
                  conteudos: 'Desenvolvimento de soluções baseadas em dados. Justificativa e impacto social.'
                },
                {
                  aulaSala: 'Aula 34',
                  titulo: 'Desigualdade Digital',
                  objetivos: 'Analisar como desigualdade digital afeta soluções. Pesquisar dados sobre cobertura de internet.',
                  conteudos: 'Análise da desigualdade digital. Avaliação de acessibilidade. Adaptação de soluções.'
                }
              ]
            },
            {
              numero: 19,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aula 35',
                  titulo: 'Criando a apresentação',
                  objetivos: 'Criar conteúdo digital visualmente atraente. Aplicar Creative Commons. Utilizar IA para materiais.',
                  conteudos: 'Criação de conteúdo digital. Boas práticas de direitos autorais. Ferramentas de IA.'
                },
                {
                  aulaSala: 'Aula 36',
                  titulo: 'Apresentar, avaliar e refletir',
                  objetivos: 'Apresentar solução. Participar de avaliação e feedback. Refletir sobre aprendizagens.',
                  conteudos: 'Apresentação de projetos. Avaliação e feedback entre pares. Reflexão sobre o processo.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 20,
              data: '22 a 26/06',
              especial: 'Avaliação',
              aulas: []
            },
            {
              numero: 21,
              data: '29/06 a 03/07',
              especial: 'Recuperação',
              aulas: []
            }
          ]
        }
      ]
    }
  ]
};
