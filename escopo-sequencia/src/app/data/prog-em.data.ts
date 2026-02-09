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
                  objetivos: 'Refletir sobre o uso de diferentes tecnologias para a construção de soluções computacionais. Relacionar tecnologias digitais com saberes escolares. Propor o uso responsável de IA.',
                  conteudos: 'Ferramentas e linguagens de programação. Uso de tecnologia para solucionar problemas do cotidiano escolar. Reflexão sobre o uso responsável de IA.'
                },
                {
                  aulaSala: 'Aula 4',
                  titulo: 'Inteligência artificial',
                  formato: 'Material digital',
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
        }
      ]
    }
  ]
};
