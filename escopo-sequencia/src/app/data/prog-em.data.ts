import { DisciplinaEscopo } from './models';

export const PROG_EM_DATA: DisciplinaEscopo = {
  id: 'prog-em',
  nome: 'Programação',
  ciclo: 'Ensino Médio',
  categoria: 'programacao' as const,
  anos: [
    // ===================== 2ª SÉRIE =====================
    {
      anoSerie: '2ª série',
      bimestres: [
        {
          bimestre: '1º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '02 a 06/02',
              unidade: 'Introdução à computação: tecnologias na sociedade do futuro',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Tecnologia no dia a dia',
                  formato: 'Material digital',
                  materialLink: 'materiais/5646_AULA01_AULA01_ALUNO.pdf',
                  objetivos: 'Identificar a presença e o uso de tecnologias digitais no trabalho. Compreender os impactos das tecnologias na evolução das profissões. Analisar como a tecnologia pode promover um mundo mais justo.',
                  conteudos: 'Transformações digitais no trabalho. Adaptação profissional e novas carreiras. Tecnologia e ODS (ONU).'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Vamos inspecionar',
                  formato: 'Vídeo',
                  objetivos: 'Utilizar a ferramenta Inspecionar para visualizar o código web. Analisar a estrutura de páginas web e modificar seu conteúdo. Avaliar a autenticidade de informações para combater fake news.',
                  conteudos: 'Ferramentas de desenvolvedor (F12). Tags HTML e estrutura web. Verificação de informações e Fake News.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'O que veremos nas aulas?',
                  formato: 'Material digital',
                  materialLink: 'materiais/5646_AULA03_AULA03_ALUNO.pdf',
                  objetivos: 'Refletir sobre o uso de diferentes tecnologias para a construção de soluções computacionais. Relacionar tecnologias digitais com saberes escolares. Propor o uso responsável de IA.',
                  conteudos: 'Ferramentas e linguagens de programação. Uso de tecnologia para solucionar problemas do cotidiano escolar. Reflexão sobre o uso responsável de IA.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Inteligência artificial',
                  formato: 'Material digital',
                  materialLink: 'materiais/5646_AULA04_AULA04_ALUNO.pdf',
                  objetivos: 'Compreender os fundamentos da Inteligência Artificial. Comparar a IA com a inteligência humana. Analisar os riscos e benefícios do uso da IA.',
                  conteudos: 'Fundamentos e tipos de IA. Comparativo IA vs. inteligência humana. Potenciais, riscos e limites da IA.',
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
              unidade: 'Lógica de programação: criando arte interativa com P5.js',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Iniciando nossa jornada',
                  formato: 'Vídeo',
                  objetivos: 'Compreender os conceitos básicos de funções em JavaScript. Aplicar comandos básicos de desenho no P5.js. Modificar parâmetros para ajustar posição e tamanho.',
                  conteudos: 'Fundamentos de programação com JavaScript usando P5.js. Funções setup() e draw(). Manipulação de coordenadas.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Adicionando outras formas',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar comandos line() e triangle() no P5.js. Criar novas formas e elementos visuais. Relembrar login e recuperação de projetos.',
                  conteudos: 'Recuperação e gerenciamento de projetos. Comandos de desenho line() e triangle(). Manipulação de coordenadas X e Y.'
                }
              ]
            },
            {
              numero: 5,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Colorindo nosso desenho',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar conceitos de cores em código usando o P5.js. Criar novos elementos visuais. Documentar o código com comentários.',
                  conteudos: 'Cores predefinidas e hexadecimal no P5.js. Outros comandos para formas geométricas. Comentários para documentação de código.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Efeito Monalisa',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar conceitos de mapeamento para restringir movimentação de elementos gráficos. Analisar a lógica de posicionamento. Criar animação interativa com cursor do mouse.',
                  conteudos: 'Comando map() para limitar o movimento. Conceito de variáveis em programação. Declaração de variáveis e organização de código.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 6,
              data: '09 a 13/03',
              especial: 'Avaliação da unidade: Introdução à computação + Lógica P5.js',
              aulas: []
            },
            {
              numero: 7,
              data: '16 a 20/03',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Novo projeto: quente frio',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar conceitos de coordenadas aleatórias. Compreender a diferença entre números inteiros e decimais. Testar e depurar código usando console.log().',
                  conteudos: 'Comando random() para sortear valor aleatório. Diferenciação entre inteiros e decimais. Corrigir bugs a partir de testes.'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Será que podemos utilizar Pitágoras?',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar operadores lógicos para combinar condições. Compreender conceito de distância. Implementar Teorema de Pitágoras para calcular distâncias.',
                  conteudos: 'Uso de operadores lógicos (e). Conceito de distância em plano cartesiano. Aplicação do Teorema de Pitágoras.'
                }
              ]
            },
            {
              numero: 8,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Comandos em Javascript',
                  formato: 'Vídeo',
                  objetivos: 'Compreender o uso da função dist() do P5JS. Aplicar conceito de distância para ajustar comportamento visual. Associar diferentes abordagens para calcular distâncias.',
                  conteudos: 'Ajuste do tamanho de um círculo baseado na distância do cursor. Uso da função dist(). Comparação de métodos de cálculo de distância.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Quente frio dinâmico',
                  formato: 'Vídeo',
                  objetivos: 'Revisar o código para identificar e remover variáveis desnecessárias. Aplicar o comando constrain para limitar o movimento. Modificar a dificuldade do projeto.',
                  conteudos: 'Identificação e remoção de código redundante. Uso do comando constrain. Ajuste da dificuldade de um jogo interativo.',
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
              especial: 'Avaliação de unidade: Lógica de programação P5.js',
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
              unidade: 'Modelo Computacional: Simulação com planilhas',
              aulas: [
                {
                  aulaSala: 'Aula 21',
                  titulo: 'Criando uma planilha do zero',
                  formato: 'Vídeo',
                  objetivos: 'Nomear os principais elementos de uma planilha. Compreender a importância da organização de dados. Demonstrar como criar uma planilha no Google Planilhas.',
                  conteudos: 'Acesso e criação de planilha. Estrutura: células, colunas e linhas. Inserção e organização de informações.'
                },
                {
                  aulaSala: 'Aula 22',
                  titulo: 'Formatando a planilha',
                  formato: 'Vídeo',
                  objetivos: 'Listar as principais ferramentas de formatação. Descrever a importância da formatação. Aplicar estilos e cores.',
                  conteudos: 'Ajuste de colunas e mesclagem de células. Personalização de textos, fontes e cores. Cores alternadas.'
                }
              ]
            },
            {
              numero: 13,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aula 23',
                  titulo: 'Fórmulas e cálculos',
                  formato: 'Vídeo',
                  objetivos: 'Nomear as células e colunas utilizadas para cálculos. Explicar como utilizar fórmulas básicas de multiplicação e soma. Aplicar as fórmulas para ajustar valores.',
                  conteudos: 'Uso de fórmulas matemáticas no Google Planilhas. Aplicação da multiplicação e soma. Exploração de funções.'
                },
                {
                  aulaSala: 'Aula 24',
                  titulo: 'Extraindo informações com gráficos',
                  formato: 'Vídeo',
                  objetivos: 'Nomear os principais tipos de gráficos. Explicar como os gráficos ajudam na interpretação de dados. Aplicar a criação e personalização de gráficos.',
                  conteudos: 'Seleção de dados e inserção de gráficos. Personalização de gráficos. Atualização dinâmica.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 14,
              data: '11 a 15/05',
              especial: 'Avaliação: Modelo Computacional - Simulação com planilhas',
              aulas: []
            },
            {
              numero: 15,
              data: '18 a 22/05',
              unidade: 'Modelo Computacional: Simulação com planilhas',
              aulas: [
                {
                  aulaSala: 'Aula 27',
                  titulo: 'Fórmulas matemáticas',
                  formato: 'Vídeo',
                  objetivos: 'Listar células e referências utilizadas para cálculos de porcentagem. Explicar como utilizar fórmulas para calcular valores com porcentagem. Aplicar fórmulas dinâmicas para simular cenários.',
                  conteudos: 'Identificação e organização de células. Cálculo de porcentagens e reservas financeiras. Criação de simulações financeiras dinâmicas.'
                },
                {
                  aulaSala: 'Aula 28',
                  titulo: 'Fórmulas em planilhas',
                  formato: 'Vídeo',
                  objetivos: 'Localizar células e referências para cálculos. Explicar como fixar células. Aplicar fórmulas para prever aumentos.',
                  conteudos: 'Preenchimento automático para séries numéricas. Aplicação de porcentagem. Fixação de células ($).'
                }
              ]
            },
            {
              numero: 16,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aula 29',
                  titulo: 'Modelo computacional',
                  formato: 'Vídeo',
                  objetivos: 'Identificar erros em cálculos de reserva anual. Explicar como rendimentos impactam no acúmulo. Aplicar fórmulas para calcular valor acumulado com juros.',
                  conteudos: 'Correção e fixação de células. Adição de rendimentos sobre valores acumulados.'
                },
                {
                  aulaSala: 'Aula 30',
                  titulo: 'Compartilhando a Planilha',
                  formato: 'Vídeo',
                  objetivos: 'Analisar dados e testar diferentes cenários. Formatar valores como moeda. Criar gráficos para representar visualmente o crescimento.',
                  conteudos: 'Expansão dos dados e verificação de fórmulas. Formatação de planilhas. Inserção e personalização de gráficos.',
                  entregaProjeto: true
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
              unidade: 'Introdução a python - desafios de programação pt 1',
              aulas: [
                {
                  aulaSala: 'Aula 33',
                  titulo: 'Introdução ao Google Colab',
                  formato: 'Vídeo',
                  objetivos: 'Compreender conceitos básicos do Google Colab. Aplicar comando print para exibir textos em Python. Criar variáveis simples.',
                  conteudos: 'Introdução ao Colab, criação de notebooks e execução de células. Uso do print. Criação e manipulação de variáveis.'
                },
                {
                  aulaSala: 'Aula 34',
                  titulo: 'Calculando pontos',
                  formato: 'Vídeo',
                  objetivos: 'Identificar variáveis para representar categorias. Calcular resultados combinando variáveis matematicamente. Apresentar resultados usando strings formatadas.',
                  conteudos: 'Armazenamento de valores em variáveis. Operações matemáticas com variáveis. Concatenação de string e variável.'
                }
              ]
            },
            {
              numero: 19,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aula 35',
                  titulo: 'Distribuindo itens',
                  formato: 'Vídeo',
                  objetivos: 'Coletar entradas do usuário com input. Implementar cálculos matemáticos. Exibir resultados com print e mensagens claras.',
                  conteudos: 'Uso de input para obter valores. Divisão inteira, soma e multiplicação. Quantidades proporcionais.'
                },
                {
                  aulaSala: 'Aula 36',
                  titulo: 'Usando condicionais',
                  formato: 'Vídeo',
                  objetivos: 'Coletar entradas de dados do usuário. Utilizar if e else para validar cenários. Validar capacidade de transporte.',
                  conteudos: 'Entrada de dados com input. Estruturas condicionais (if/else). Mensagens dinâmicas.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 20,
              data: '22 a 26/06',
              especial: 'Avaliação: Modelo Computacional + Introdução a Python',
              aulas: []
            },
            {
              numero: 21,
              data: '29/06 a 03/07',
              especial: 'Recuperação do bimestre',
              aulas: []
            }
          ]
        },
        {
          bimestre: '3º Bimestre',
          semanas: [
            {
              numero: 26,
              data: '27/07 a 31/07',
              unidade: 'Introdução a python: funções e loops',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Aprofundando condicionais',
                  formato: 'Vídeo',
                  objetivos: 'Implementar condições encadeadas (if, elif, else) para validar múltiplos cenários em um programa. Controlar o fluxo lógico do programa com base em entradas fornecidas pelos usuários. Exibir os resultados baseados em regras condicionais utilizando mensagens claras.',
                  conteudos: 'Uso de if, elif e else para decisões múltiplas. Entrada de dados (input) Modelagem e verificação de cenários complexos com múltiplas condições.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Funções e cálculos',
                  formato: 'Vídeo',
                  objetivos: 'Definir funções personalizadas em Python utilizando def para resolver problemas específicos. Calcular resultados baseados em dados fornecidos, aplicando operadores matemáticos e funções embutidas. Retornar valores de uma função e utilizá-los em outros contextos do programa.',
                  conteudos: 'Estruturação de funções para cálculos específicos. Identificação do maior valor em um conjunto de números usando função embutida max. Organização do código para garantir execução correta e legibilidade.'
                }
              ]
            },
            {
              numero: 27,
              data: '03/08 a 07/08',
              unidade: 'Introdução a python: funções e loops',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Cálculo iterativo',
                  formato: 'Vídeo',
                  objetivos: 'Implementar laços de repetição com a estrutura for para executar ações repetitivas. Utilizar a função range() para definir intervalos numéricos em Python. Exibir cálculos iterativos formatados de maneira clara e compreensível.',
                  conteudos: 'Uso de for para iterar sobre intervalos definidos. Definição de intervalos de números para iterações usando range. Formatação de saída para apresentar cálculos.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Criando desafios',
                  formato: 'Vídeo',
                  objetivos: 'Desenvolver a habilidade de formular problemas computacionais claros e resolvíveis. Elaborar enunciados de desafios que utilizem as estruturas aprendidas em Python. Promover a troca de conhecimentos ao compartilhar e resolver desafios propostos por colegas.',
                  conteudos: 'Formulação de problemas. Aplicação das ferramentas aprendidas (laços, funções, condicionais). Troca de desafios entre grupos ou indivíduos para prática e feedback.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 28,
              data: '10/08 a 14/08',
              unidade: 'Ciência de dados: construindo uma análise de dados com Python',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Análise exploratória',
                  formato: 'Material digital',
                  materialLink: 'materiais/5679_Aula01_Aula05_ALUNO.pdf',
                  objetivos: 'Identificar padrões em dados coletados a partir de temas escolhidos, utilizando conceitos básicos de análise de dados. Elaborar perguntas investigativas que direcionem a coleta de dados para uma análise exploratória. Relacionar diferentes tipos de dados coletados com o tema escolhido, propondo hipóteses iniciais.',
                  conteudos: 'Introdução à análise exploratória de dados Definição de temática e perguntas Reflexão sobre coleta de dados'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Criando formulários',
                  formato: 'Material digital',
                  materialLink: 'materiais/5679_Aula02_Aula06_ALUNO.pdf',
                  objetivos: 'Construir formulários digitais utilizando ferramentas online para coletar dados. Identificar formatos de perguntas adequados para análises de dados, considerando clareza e relevância. Compartilhar formulários com diferentes públicos, expandindo a amostra de respostas coletadas.',
                  conteudos: 'Introdução ao Google Forms Configuração de perguntas Distribuição do formulário'
                }
              ]
            },
            {
              numero: 29,
              data: '17/08 a 21/08',
              unidade: 'Ciência de dados: construindo uma análise de dados com Python',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Publicando dados',
                  formato: 'Vídeo',
                  objetivos: 'Transferir dados coletados em formulários online para o Google Planilhas, organizando-os para análise. Publicar e compartilhar dados no formato CSV, garantindo acessibilidade para análise em ferramentas externas. Refletir sobre a clareza e a organização dos dados publicados, visando facilitar a interpretação por terceiros.',
                  conteudos: 'Navegação na aba de respostas e visualização dos dados preenchidos. Conversão de respostas em tabelas organizadas e adição de carimbo de data/hora. Procedimento para compartilhar o link do arquivo com valores separados por vírgulas, destacando sua utilidade para análises no Google Colab e outros softwares.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Introdução ao Google Colab',
                  formato: 'Vídeo',
                  objetivos: 'Configurar o Google Colab para leitura e manipulação de dados utilizando a biblioteca pandas. Criar e organizar células de texto e código no Google Colab para descrever e implementar análises. Ler arquivos CSV no Google Colab e visualizar tabelas de dados para análise inicial.',
                  conteudos: 'Criação de notebooks, organização de células de texto e código, e formatação de títulos e descrições. Uso do Pandas para manipulação de dados, configurando o ambiente de programação. Importação de arquivos CSV a partir de links publicados e visualização em formato tabular.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 30,
              data: '24/08 a 28/08',
              especial: 'Avaliação da unidade: Introdução a python: funções e loops',
              aulas: []
            },
            {
              numero: 31,
              data: '31/08 a 04/09',
              unidade: 'Ciência de dados: construindo uma análise de dados com Python',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Gráficos e insights',
                  formato: 'Vídeo',
                  objetivos: 'Gerar histogramas a partir de dados tabulares usando a biblioteca Pandas. Identificar valores atípicos (outliers) em histogramas e interpretar o significado deles nos dados analisados. Elaborar resumos descritivos das informações extraídas dos gráficos, conectando-os aos objetivos da pesquisa.',
                  conteudos: 'Uso do método .hist para visualização gráfica de colunas específicas. Identificação de padrões, tendências e outliers nos histogramas gerados. Inserção de resumos em células de texto no Google Colab, conectando os dados gráficos às inferências iniciais.'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Explorando frequências',
                  formato: 'Vídeo',
                  objetivos: 'Utilizar o método value_counts do Pandas para agrupar e contar ocorrências em colunas de dados. Identificar e interpretar padrões e valores discrepantes (outliers) nos dados analisados. Comparar a distribuição dos dados coletados para levantar hipóteses sobre o comportamento das amostras.',
                  conteudos: 'Uso do Pandas para agrupar e contar valores únicos em colunas específicas de uma tabela de dados. Interpretação dos resultados agrupados, identificando comportamentos atípicos e frequências predominantes. Introdução ao método para sumarizar estatísticas dos dados (describe), incentivando a exploração individual para aprofundamento.'
                }
              ]
            },
            {
              numero: 32,
              data: '07/09 a 11/09',
              unidade: 'Ciência de dados: construindo uma análise de dados com Python',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Analisando médias',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar o método describe do Pandas para obter uma visão estatística dos dados, incluindo contagens, médias e percentis. Comparar média e mediana para identificar a influência de outliers nos dados analisados. Resumir os insights obtidos a partir das estatísticas descritivas para interpretar tendências e padrões nos dados.',
                  conteudos: 'Extração de estatísticas básicas como média, desvio padrão, mínimos, máximos e percentis. Cálculo e comparação para avaliar a presença de outliers e compreender a distribuição dos dados. Organização e documentação das descobertas em células de texto para facilitar a interpretação e análise subsequente.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Revisão do notebook',
                  formato: 'Vídeo',
                  objetivos: 'Revisar e organizar o notebook do Google Colab, adicionando descrições claras e detalhadas em todas as etapas da análise. Inserir resumos e destaques em pontos-chave do código e dos resultados para facilitar o entendimento por terceiros. Refletir sobre os resultados obtidos e propor novas perguntas ou melhorias para futuras análises de dados.',
                  conteudos: 'Inclusão de informações contextuais, como data da coleta de dados, e descrição detalhada de etapas e resultados. Documentação dos principais insights e aspectos mais relevantes da análise de dados. Reflexão sobre lacunas, melhorias e possibilidades de segmentação para futuras coletas e interpretações de dados.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 33,
              data: '14/09 a 18/09',
              especial: 'Semana para nivelamento',
              aulas: []
            },
            {
              numero: 34,
              data: '21/09 a 25/09',
              especial: 'Avaliação da unidade: Ciência de dados: construindo uma análise de dados com Python',
              aulas: []
            }
          ]
        }
      ]
    },
    // ===================== 3ª SÉRIE =====================
    {
      anoSerie: '3ª série',
      bimestres: [
        {
          bimestre: '1º Bimestre',
          semanas: [
            {
              numero: 1,
              data: '02 a 06/02',
              unidade: 'Mídias digitais: sua apresentação com autor IA',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Apresentações com IA',
                  formato: 'Material digital',
                  materialLink: 'materiais/5641_AULA01_AULA01_ALUNO.pdf',
                  objetivos: 'Identificar os elementos que compõem uma boa apresentação. Compreender o conceito de IA generativa. Relacionar situações do cotidiano com o uso de IA.',
                  conteudos: 'A importância das apresentações na vida acadêmica e profissional. Introdução à IA generativa. Planejamento inicial.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Do roteiro à estrutura',
                  formato: 'Vídeo',
                  objetivos: 'Interpretar um roteiro de apresentação. Aplicar instruções em ferramenta de IA. Organizar esqueleto com início, meio e fim.',
                  conteudos: 'Leitura e análise de roteiro. Uso de IA generativa. Criação do esqueleto textual.'
                }
              ]
            },
            {
              numero: 2,
              data: '09 a 13/02',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Do texto ao slide',
                  formato: 'Vídeo',
                  objetivos: 'Transformar esqueleto textual em estrutura visual de slides. Adaptar conteúdos gerados por IA para estilo pessoal. Selecionar modelos visuais adequados.',
                  conteudos: 'Conversão de esqueleto textual em apresentação visual. Curadoria de elementos visuais.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Engenharia de prompt',
                  formato: 'Vídeo',
                  objetivos: 'Revisar criticamente conteúdos gerados por IA. Planejar organização dos slides com estrutura lógica. Desenvolver prompts específicos e objetivos.',
                  conteudos: 'Análise crítica de textos gerados por IA. Construção de prompts eficazes. Organização final dos slides.',
                  entregaProjeto: true
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
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'Melhorando o design',
                  formato: 'Vídeo',
                  objetivos: 'Aprimorar apresentação visual com ajustes de design. Inserir elementos visuais como imagens geradas por IA. Selecionar recursos gráficos adequados.',
                  conteudos: 'Melhoria da legibilidade dos slides. Inclusão de imagens complementares. Uso de IA integrada ao Canva.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Apresentação em vídeo',
                  formato: 'Vídeo',
                  objetivos: 'Explorar recursos multimídia. Utilizar ferramentas digitais para gravar apresentações. Demonstrar autonomia na escolha.',
                  conteudos: 'Gravação de apresentações com áudio e vídeo no Canva. Inserção de voz gerada por IA. Publicação e exportação (mp4).'
                }
              ]
            },
            {
              numero: 5,
              data: '02 a 06/03',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Hora da ação',
                  formato: 'Vídeo',
                  objetivos: 'Executar a apresentação final. Refletir sobre clareza, autoria e organização. Validar se a apresentação cumpre critérios.',
                  conteudos: 'Apresentação final em vídeo. Verificação de autoria, clareza e narrativa. Compartilhamento e publicação.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'AutorIA',
                  formato: 'Material digital',
                  materialLink: 'materiais/5641_AULA08_AULA08_ALUNO.pdf',
                  objetivos: 'Refletir criticamente sobre o processo com IA. Avaliar pontos positivos e negativos do uso de IA. Reconhecer o papel da autoria e criatividade.',
                  conteudos: 'Avaliação crítica do uso da IA. Identificação de momentos de autonomia criativa. Expressão de percepções sobre tecnologia.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 6,
              data: '09 a 13/03',
              especial: 'Avaliação: Mídias digitais - sua apresentação com autor IA',
              aulas: []
            },
            {
              numero: 7,
              data: '16 a 20/03',
              unidade: 'Planilhas: analisando dados sobre acessibilidade na sua comunidade pt 1',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Construindo o formulário',
                  formato: 'Vídeo',
                  objetivos: 'Utilizar o Google Formulários para criar uma pesquisa quantitativa. Elaborar perguntas eficazes. Organizar e formatar perguntas.',
                  conteudos: 'Google Formulários. Pesquisa Quantitativa. Tipos de Perguntas.'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'Formulário com seções',
                  formato: 'Vídeo',
                  objetivos: 'Implementar lógica condicional em formulários. Revisar e finalizar formulário. Publicar e compartilhar, ajustando privacidade.',
                  conteudos: 'Lógica Condicional em Formulários. Publicação. Privacidade de Dados.'
                }
              ]
            },
            {
              numero: 8,
              data: '23 a 27/03',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Primeiros passos com planilhas',
                  formato: 'Vídeo',
                  objetivos: 'Exportar dados de formulário para Google Planilhas. Organizar dados, renomeando e manipulando colunas. Aplicar filtros para explorar dados.',
                  conteudos: 'Google Planilhas. Exportação de Dados. Filtragem de Dados.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Visualizando seus dados',
                  formato: 'Vídeo',
                  objetivos: 'Classificar e organizar dados. Gerar gráficos adequados (pizza, histograma). Interpretar gráficos para extrair conclusões.',
                  conteudos: 'Classificação de dados. Tipos de Gráficos. Interpretação Visual de Dados.'
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
              especial: 'Avaliação: Planilhas pt 1',
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
              unidade: 'Planilhas pt 2',
              aulas: [
                {
                  aulaSala: 'Aula 21',
                  titulo: 'Fórmulas e estatística',
                  formato: 'Vídeo',
                  objetivos: 'Aplicar fórmulas MÉDIA e MEDIANA. Utilizar CONT.SE para quantificar ocorrências. Explorar estatísticas da coluna.',
                  conteudos: 'Fórmulas MÉDIA, MEDIANA, CONT.SE. Análise Estatística Básica. Identificação de Discrepâncias.',
                  entregaProjeto: true
                },
                {
                  aulaSala: 'Aula 22',
                  titulo: 'Introdução à criação de apresentações',
                  formato: 'Vídeo',
                  objetivos: 'Utilizar Canva IA para iniciar criação de apresentações. Fornecer instruções claras à IA. Estruturar apresentação baseada em resultados da pesquisa.',
                  conteudos: 'Canva IA. Geração de Apresentações. Estruturação de Conteúdo.'
                }
              ]
            },
            {
              numero: 13,
              data: '04 a 08/05',
              aulas: [
                {
                  aulaSala: 'Aula 23',
                  titulo: 'Apresentação com dados e gráficos',
                  formato: 'Vídeo',
                  objetivos: 'Integrar elementos visuais e gráficos dinâmicos no Canva. Vincular dados do Google Planilhas ao Canva. Comparar visualmente diferentes conjuntos de dados.',
                  conteudos: 'Integração Canva-Planilhas. Geração de Gráficos no Canva. Visualização Comparativa de Dados.'
                },
                {
                  aulaSala: 'Aula 24',
                  titulo: 'Compartilhando seu projeto',
                  formato: 'Vídeo',
                  objetivos: 'Refinar design e identidade visual. Utilizar IA para gerar e integrar imagens. Preparar e compartilhar apresentação final.',
                  conteudos: 'Design de Apresentações. Geração de Imagens com IA. Estratégias de Compartilhamento.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 14,
              data: '11 a 15/05',
              especial: 'Avaliação: Planilhas pt 2',
              aulas: []
            },
            {
              numero: 15,
              data: '18 a 22/05',
              unidade: 'Segurança digital com criptografia em python',
              aulas: [
                {
                  aulaSala: 'Aula 27',
                  titulo: 'Criptografando informações',
                  objetivos: 'Compreender o princípio básico da criptografia por substituição. Implementar cifra simples com iteração de strings. Analisar a transformação de caracteres.',
                  conteudos: 'Criptografia por substituição. Iteração de strings em Python. Conversão de tipos (int, str).'
                },
                {
                  aulaSala: 'Aula 28',
                  titulo: 'Criptografando letras',
                  objetivos: 'Converter caracteres em ASCII e vice-versa. Construir tabela de substituição. Desenvolver função de cifra de substituição.',
                  conteudos: 'Conversão de tipos. Tabela ASCII e função ord(). Cifras de substituição com tabelas.'
                }
              ]
            },
            {
              numero: 16,
              data: '25 a 29/05',
              aulas: [
                {
                  aulaSala: 'Aula 29',
                  titulo: 'Refinando a cifra',
                  objetivos: 'Aplicar lógica condicional para tratar diferentes tipos de caracteres. Refinar algoritmos para lidar com exceções. Testar robustez com entradas variadas.',
                  conteudos: 'Estruturas condicionais (if/else). Tratamento de exceções em criptografia. Refinamento de algoritmos.'
                },
                {
                  aulaSala: 'Aula 30',
                  titulo: 'Hash',
                  objetivos: 'Compreender o conceito de transformar texto em valor numérico único. Implementar transformação baseada em acumulação de valores. Analisar implicações quanto à reversibilidade.',
                  conteudos: 'Introdução a funções hash. Acumulação de valores numéricos. Transformações unidirecionais de dados.'
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
                  titulo: 'Hash aprimorado',
                  objetivos: 'Modificar algoritmo de hash para que a ordem influencie o resultado. Organizar código em função reutilizável. Compreender a importância de limitar o tamanho de um hash.',
                  conteudos: 'Hashing sensível à ordem. Reutilização de código com funções. Operador módulo para limitar valores.'
                },
                {
                  aulaSala: 'Aula 34',
                  titulo: 'Autenticação segura',
                  objetivos: 'Aplicar funções hash para armazenar e verificar senhas. Comparar hashes para autenticação. Compreender a importância de náo armazenar senhas em texto claro.',
                  conteudos: 'Autenticação de senhas com hash. Segurança no armazenamento de credenciais. Comparação de valores hash.'
                }
              ]
            },
            {
              numero: 19,
              data: '15 a 19/06',
              aulas: [
                {
                  aulaSala: 'Aula 35',
                  titulo: 'Combinações',
                  objetivos: 'Compreender conceito de ataque de força bruta. Utilizar biblioteca itertools para gerar combinações. Analisar eficiência de testar todas as possibilidades.',
                  conteudos: 'Ataques de força bruta. Geração de combinações com itertools. Listas e iteração em Python.'
                },
                {
                  aulaSala: 'Aula 36',
                  titulo: 'Ataque de força bruta',
                  objetivos: 'Simular ataque de força bruta para quebrar senha com hash. Analisar relação entre tamanho da senha e dificuldade do ataque. Identificar importância de senhas fortes.',
                  conteudos: 'Simulação de ataque de força bruta. Dicionários de caracteres. Impacto do tamanho da senha na segurança.'
                }
              ]
            },
            {
              numero: 20,
              data: '22 a 26/06',
              especial: 'Avaliação: Segurança digital com criptografia em python',
              aulas: []
            },
            {
              numero: 21,
              data: '29/06 a 03/07',
              especial: 'Recuperação do bimestre',
              aulas: []
            }
          ]
        },
        {
          bimestre: '3º Bimestre',
          semanas: [
            {
              numero: 26,
              data: '27/07 a 31/07',
              unidade: 'Ciência de dados: prevendo padrões de qualidade de vida da turma',
              aulas: [
                {
                  aulaSala: 'Aula 1',
                  titulo: 'Planejando a investigação',
                  formato: 'Vídeo',
                  objetivos: 'Compreender o ciclo de ciência de dados e a importância da ordenação e aleatoriedade para a organização de informações. Implementar algoritmos clássicos (Bubble Sort e Fisher-Yates) e estruturas de repetição para manipular listas dinâmicas. Construir sistemas de decisão lógica e pontuação utilizando variáveis acumuladoras e operadores condicionais encadeados.',
                  conteudos: 'Estruturas de Controle e Repetição: Laços for e while, condicionais if/elif/else e funções de intervalo range(). Manipulação de Listas: Métodos append, pop, remove, fatiamento (slicing), ordenação (sort) e embaralhamento (shuffle). Lógica e Abstração: Ciclo de Ciência de Dados, algoritmos de troca (swapping), importação de bibliotecas e depuração de índices.'
                },
                {
                  aulaSala: 'Aula 2',
                  titulo: 'Primeiros gráficos',
                  formato: 'Vídeo',
                  objetivos: 'Identificar o histograma como uma ferramenta visual para representar a distribuição de frequências de um conjunto de dados. Empregar a biblioteca matplotlib.',
                  conteudos: 'Visualização de Dados: Importação da biblioteca matplotlib.pyplot e funções de plotagem (hist, show). Customização de Gráficos: Parâmetros de barras (bins), cores, rótulos de eixos (xlabel, ylabel) e títulos. Exploração de Ferramentas: Uso de IA para descoberta de novos tipos de gráficos e sistemas de cores (nomes e hexadecimais).'
                }
              ]
            },
            {
              numero: 27,
              data: '03/08 a 07/08',
              unidade: 'Ciência de dados: prevendo padrões de qualidade de vida da turma',
              aulas: [
                {
                  aulaSala: 'Aula 3',
                  titulo: 'Resumindo dados em poucos números',
                  formato: 'Vídeo',
                  objetivos: 'Diferenciar as medidas de tendência central (média e mediana) e de dispersão (desvio padrão) para interpretar conjuntos de dados. Calcular estatísticas descritivas básicas utilizando a biblioteca numpy e aplicá-las em contextos reais. Avaliar criticamente situações em que a média pode não representar fielmente a realidade de um grupo, utilizando a mediana como alternativa.',
                  conteudos: 'Estatística Descritiva: Conceitos de média, mediana e desvio padrão aplicados à análise de dados. Biblioteca Numpy: Uso das funções np.mean, np.median e np.std para processamento numérico. Visualização Estatística: Plotagem de linhas de tendência (axvline) e áreas de variação (axvspan) em histogramas.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Modelos: simulando para entender',
                  formato: 'Vídeo',
                  objetivos: 'Compreender o conceito de modelo computacional como uma representação simplificada da realidade para fins de estudo e previsão. Simular grandes conjuntos de dados utilizando a distribuição normal e parâmetros estatísticos (média e desvio padrão). Analisar a influência do tamanho da amostra (parâmetro size) na formação da curva de distribuição de um fenômeno natural.',
                  conteudos: 'Modelagem Computacional: Definição de modelos, parâmetros (loc, scale) e utilidade das simulações na ciência. Distribuição Normal: Geração de dados aleatórios com np.random.normal e visualização de densidade populacional. Exploração de Fenômenos: Uso de distribuições alternativas (uniforme, exponencial, poisson) para simular diferentes contextos reais.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 28,
              data: '10/08 a 14/08',
              unidade: 'Ciência de dados: prevendo padrões de qualidade de vida da turma',
              aulas: [
                {
                  aulaSala: 'Aula 5',
                  titulo: 'A regra 68-95-99,7 e por que amostras pequenas mentem',
                  formato: 'Vídeo',
                  objetivos: 'Demonstrar a regra empírica da distribuição normal (68-95-99,7) através de testes computacionais com grandes volumes de dados. Avaliar o impacto da variabilidade amostral, reconhecendo que amostras pequenas podem gerar estimativas imprecisas da realidade. Empregar ferramentas de IA para a depuração de erros de execução e interpretação de mensagens do sistema em Python.',
                  conteudos: 'Regra Empírica: Concentração de dados em torno da média dentro de 1, 2 e 3 desvios padrões. Variabilidade Amostral: Diferença entre a média populacional e as médias estimadas por amostras de diferentes tamanhos (np.random.choice). Depuração de Erros: Identificação e correção de falhas de lógica e sintaxe, como o acesso a índices fora do intervalo ou tamanhos de amostra inválidos.'
                },
                {
                  aulaSala: 'Aula 6',
                  titulo: 'Intervalo de confiança',
                  formato: 'Vídeo',
                  objetivos: 'Calcular o intervalo de confiança utilizando o erro padrão para quantificar a incerteza estatística de uma amostra. Interpretar o intervalo de confiança como uma faixa de probabilidade que contém o valor real da média populacional. Empregar analogias e explicações conceituais assistidas por IA para traduzir termos técnicos abstratos em linguagem acessível.',
                  conteudos: 'Incerteza Amostral: Conceitos de erro padrão e a relação entre desvio padrão e tamanho da amostra (np.sqrt). Intervalos de Confiança (IC): Aplicação prática das margens de 95% (2 sigma) e 99% (3 sigma) em Python. Estratégias de Estudo: Uso de analogias para compreensão de conceitos estatísticos e desenvolvimento de funções reutilizáveis.'
                }
              ]
            },
            {
              numero: 29,
              data: '17/08 a 21/08',
              unidade: 'Ciência de dados: prevendo padrões de qualidade de vida da turma',
              aulas: [
                {
                  aulaSala: 'Aula 7',
                  titulo: 'Quando o IC funciona... e quando ele falha',
                  formato: 'Vídeo',
                  objetivos: 'Demonstrar a eficácia do intervalo de confiança (IC) através de experimentos repetidos de simulação (Monte Carlo). Analisar criticamente as limitações dos modelos estatísticos em cenários do mundo real, como pesquisas eleitorais e fenômenos voláteis. Distinguir entre incerteza estatística (tamanho da amostra) e incerteza temporal ou metodológica (viés e mudanças rápidas).',
                  conteudos: 'Validação de Modelos: Teste de cobertura de múltiplos intervalos de confiança e taxa de acerto em relação à média verdadeira. Dinâmicas de Dados: Diferenciação entre fenômenos estáveis (lentos) e fenômenos voláteis (rápidos) e o impacto na validade da pesquisa. Pensamento Crítico e IA: Investigação de casos reais de erro em pesquisas e uso de ferramentas de IA para verificação de afirmações históricas.'
                },
                {
                  aulaSala: 'Aula 8',
                  titulo: 'Coleta real, análise e compartilhamento',
                  formato: 'Vídeo',
                  objetivos: 'Executar o ciclo completo de uma pesquisa de ciência de dados, desde a coleta de dados reais até a comunicação dos resultados obtidos. Comparar dados reais da turma com os modelos teóricos simulados, identificando discrepâncias e padrões específicos do grupo. Sintetizar descobertas complexas em conclusões acessíveis, utilizando suporte de IA para refinar a linguagem e identificar limitações metodológicas.',
                  conteudos: 'Integração de Dados: Importação e manipulação de arquivos CSV utilizando a biblioteca pandas e integração de funções personalizadas. Análise Comparativa: Confronto entre estatísticas amostrais reais (média, desvio e IC) e parâmetros de modelos simulados. Comunicação Científica: Elaboração de relatórios, interpretação de intervalos de confiança sem jargão técnico e reconhecimento de vieses de pesquisa.',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 30,
              data: '24/08 a 28/08',
              especial: 'Avaliação da unidade: Ciência de dados: prevendo padrões de qualidade de vida da turma',
              aulas: []
            },
            {
              numero: 31,
              data: '31/08 a 04/09',
              unidade: 'Página web: meu primeiro flashcard',
              aulas: [
                {
                  aulaSala: 'Aula 11',
                  titulo: 'Combatendo a desinformação',
                  formato: 'Material digital',
                  materialLink: 'materiais/5686_Aula01_Aula11_ALUNO.pdf',
                  objetivos: 'Compreender o fenômeno das notícias falsas e seu impacto social. Analisar a importância da verificação de informações online. Elaborar flashcards manuais para diferenciar informações verdadeiras e falsas.',
                  conteudos: 'Notícias Falsas (Fake News). Verificação de Informações. Flashcards (Técnica de Estudo).'
                },
                {
                  aulaSala: 'Aula 12',
                  titulo: 'HTML: o esqueleto da Web',
                  formato: 'Material digital',
                  materialLink: 'materiais/5686_Aula02_Aula12_ALUNO.pdf',
                  objetivos: 'Configurar o ambiente de desenvolvimento utilizando o Visual Studio Code Web. Criar a estrutura básica de um documento HTML (head, body, header, main e footer). Compreender a função das principais tags HTML para a organização de conteúdo.',
                  conteudos: 'Visual Studio Code Web. Estrutura HTML (Tags head, body, header, main, footer). Organização de Documentos Web.'
                }
              ]
            },
            {
              numero: 32,
              data: '07/09 a 11/09',
              unidade: 'Página web: meu primeiro flashcard',
              aulas: [
                {
                  aulaSala: 'Aula 13',
                  titulo: 'Hierarquia de informação',
                  formato: 'Vídeo',
                  objetivos: 'Inserir títulos, links e navegação em um documento HTML. Estruturar o conteúdo principal utilizando tags semânticas como article e div. Incorporar imagens e parágrafos para compor o flashcard.',
                  conteudos: 'Tags HTML Semânticas (H1, H2, nav, article). Links e Imagens em HTML (a href, img src alt). Estruturação de Conteúdo com div e p.'
                },
                {
                  aulaSala: 'Aula 14',
                  titulo: 'Hora de estilizar a página',
                  formato: 'Vídeo',
                  objetivos: 'Criar e conectar um arquivo CSS a um documento HTML. Utilizar classes para identificar e estilizar elementos específicos. Aplicar propriedades CSS para controlar margens, preenchimentos, largura e altura.',
                  conteudos: 'CSS (Cascading Style Sheets). Seletores de Classe CSS. Propriedades de Layout (margin, padding, width, height).',
                  entregaProjeto: true
                }
              ]
            },
            {
              numero: 33,
              data: '14/09 a 18/09',
              especial: 'Semana para nivelamento',
              aulas: []
            },
            {
              numero: 34,
              data: '21/09 a 25/09',
              especial: 'Avaliação da unidade: Página web: meu primeiro flashcard',
              aulas: []
            }
          ]
        }
      ]
    }
  ]
};
