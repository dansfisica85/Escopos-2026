# 📚 Escopo Sequência 2026

> Plataforma web interativa para consulta dos **Escopos e Sequências Didáticas** das disciplinas de **Programação**, **Tecnologia e Inovação** e **Robótica** da **Secretaria da Educação do Estado de São Paulo** — ano letivo de **2026**.

---

## 🎯 Objetivo

Facilitar o acesso de professores e coordenadores pedagógicos aos conteúdos planejados para cada semana letiva, organizados por:

- **Disciplina** (Programação EM, Tecnologia e Inovação, Robótica EF, Robótica EM)
- **Ano/Série** (6º ao 9º ano do Ensino Fundamental e 1ª a 3ª séries do Ensino Médio)
- **Bimestre** (1º ao 4º)
- **Semana** (cards expansíveis com detalhes de cada aula)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
| --- | --- | --- |
| **Angular** | 21.1.0 | Framework principal da aplicação SPA |
| **TypeScript** | 5.9.2 | Linguagem de desenvolvimento com tipagem estática |
| **Angular Router** | 21.1.0 | Navegação entre páginas (Programação ↔ Robótica) |
| **Angular Signals** | 21.1.0 | Gerenciamento de estado reativo dos filtros e expansões |
| **RxJS** | 7.8 | Programação reativa (dependência do Angular) |
| **Angular CLI** | 21.1.3 | Ferramentas de build, serve e scaffold |
| **esbuild** | (via @angular/build) | Bundler de produção ultrarrápido |
| **Vercel** | — | Plataforma de deploy e hospedagem |
| **CSS3** | — | Estilização com Flexbox, gradientes, media queries e animações |
| **HTML5** | — | Estrutura semântica dos templates |

---

## 📁 Estrutura do Projeto

```text
escopo-sequencia/
├── vercel.json                  # Configuração de SPA rewrites para Vercel
├── angular.json                 # Configuração do projeto Angular
├── package.json                 # Dependências e scripts npm
├── tsconfig.json                # Configuração do TypeScript
├── public/
│   └── favicon.ico              # Ícone da aba do navegador
├── src/
│   ├── index.html               # HTML raiz da aplicação
│   ├── main.ts                  # Bootstrap da aplicação Angular
│   ├── styles.css               # Estilos globais (reset, fontes, cores base)
│   └── app/
│       ├── app.ts               # Componente raiz (header, navegação, footer)
│       ├── app.css              # Estilos do layout principal
│       ├── app.config.ts        # Configuração de providers (Router)
│       ├── app.routes.ts        # Definição das rotas da aplicação
│       ├── data/
│       │   ├── models.ts        # Interfaces TypeScript dos dados
│       │   ├── prog-em.data.ts  # Dados: Programação Ensino Médio
│       │   ├── tec-inov.data.ts # Dados: Tecnologia e Inovação (6º-9º)
│       │   ├── robotica-ef.data.ts  # Dados: Robótica Anos Finais
│       │   ├── robotica-em.data.ts  # Dados: Robótica Ensino Médio
│       │   └── materiais-robotica.ts # Links de materiais didáticos
│       └── pages/
│           ├── programacao/
│           │   ├── programacao.component.ts   # Lógica da página
│           │   ├── programacao.component.html # Template da página
│           │   └── programacao.component.css  # Estilos da página
│           └── robotica/
│               ├── robotica.component.ts      # Lógica da página
│               ├── robotica.component.html    # Template da página
│               └── robotica.component.css     # Estilos da página
```

---

## 🧩 Arquitetura e Padrões

### Standalone Components

Todos os componentes usam a API standalone do Angular 21 (`standalone: true`), sem necessidade de NgModules.

### Signals (Estado Reativo)

O gerenciamento de estado dos filtros (disciplina, ano, bimestre, semana expandida) é feito inteiramente com **Angular Signals** (`signal()` e `computed()`), garantindo reatividade sem overhead de change detection.

### Modelo de Dados

Hierarquia tipada com interfaces TypeScript:

```text
DisciplinaEscopo
  └── AnoSerieEscopo[]
        └── BimestreEscopo[]
              └── SemanaEscopo[]
                    └── AulaEscopo[]
```

Cada `AulaEscopo` contém: título, formato, objetivos, conteúdos, flag de entrega de projeto e link opcional de material.

### Routing

### Routing

Duas rotas principais com redirect automático:

- `/programacao` → Programação EM + Tecnologia e Inovação
- `/robotica` → Robótica EF + Robótica EM
- `/` → redireciona para `/programacao`

---

## 🎨 Design e UX

- **Header fixo (sticky)** com gradiente azul institucional e abas de navegação
- **Filtros em cascata**: Disciplina → Ano/Série → Bimestre
- **Cards expansíveis** por semana com animação suave
- **Chips coloridos** para badges (números de aula, formato, projeto)
- **Layout responsivo** com breakpoints para mobile (≤600px)
- **Botão "Materiais Didáticos"** com link para apresentação de apoio
- **Footer** com informações do desenvolvedor e links de contato

---

## 📊 Dados Incluídos

| Disciplina | Ciclo | Anos/Séries | Semanas |
| --- | --- | --- | --- |
| Programação EM | Ensino Médio | 2ª e 3ª séries | ~36 semanas |
| Tecnologia e Inovação | Anos Finais (EF) | 6º ao 9º ano | ~36 semanas |
| Robótica EF | Anos Finais (EF) | 6º ao 9º ano | ~36 semanas |
| Robótica EM | Ensino Médio | 1ª, 2ª e 3ª séries | ~36 semanas |

Total: **4 disciplinas**, **10+ anos/séries**, **~144 semanas**, **~500+ aulas** detalhadas.

---

## 🚀 Como Rodar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm start
# Acesse http://localhost:4200

# 3. Build de produção
npm run build
# Output em dist/escopo-sequencia/
```

---

## ☁️ Deploy no Vercel

O projeto está configurado para deploy no **Vercel** com:

- **Framework Preset**: Angular
- **Build Command**: `ng build`
- **Output Directory**: `dist/escopo-sequencia/browser`
- **SPA Rewrites**: configurado em `vercel.json` para redirecionar todas as rotas ao `index.html`

---

## ✨ Funcionalidades Principais

### Filtros em Cascata
- **Disciplina**: Selecione entre Programação EM, Tecnologia e Inovação, Robótica EF ou Robótica EM
- **Ano/Série**: Acesso aos anos específicos de cada ciclo (EF: 6º-9º; EM: 1ª-3ª)
- **Bimestre**: Navegação entre os 4 bimestres do ano letivo
- **Expansão por Semana**: Cards expansíveis para visualizar detalhes das aulas semana por semana

### Visualização de Aulas
Cada aula apresenta:
- **Número da aula** (sequência do ano)
- **Título** descritivo do conteúdo
- **Formato**: Aula teórica, prática, laboratorial, revisão, avaliação
- **Habilidades BNCC**: Objetivos pedagógicos específicos
- **Conteúdos**: Tópicos abordados na semana
- **Marcador de Projeto**: Identifica semanas com entregas de projetos
- **Materiais Didáticos**: Links para apresentações e recursos complementares (quando disponíveis)

### Experiência do Usuário
- **Interface intuitiva** com navegação clara e visual
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Busca visual rápida**: Filtros dinâmicos para encontrar conteúdo específico
- **Design acessível**: Cores contrastantes, tipografia legível, componentes bem espaçados
- **Tema institucional**: Comunica-se com a identidade visual da Secretaria da Educação

---

## 🎓 Contexto Educacional

Este projeto atende às necessidades da educação pública do Estado de São Paulo, alinhado com:

- **Base Nacional Comum Curricular (BNCC)**: Habilidades estruturadas conforme diretrizes nacionais
- **Proposta Curricular SP**: Organização em bimestres conforme calendário letivo
- **Programas de Inovação**: Tecnologia e Inovação (TI) e Robótica para todos os ciclos
- **Disciplina de Programação**: Novo componente curricular para Ensino Médio (2ª e 3ª séries)

Serve como ferramenta de planejamento para:
- ✅ Professores: Consultar sequência didática, objetivos e materiais
- ✅ Coordenadores Pedagógicos: Monitorar alinhamento curricular
- ✅ Gestores: Visualizar panorama geral de conteúdos por disciplina/ano
- ✅ Alunos: Conhecer o planejamento e materiais de apoio

---

## 🔧 Requisitos do Sistema

- **Node.js**: versão 18.x ou superior
- **npm**: versão 9.x ou superior (instalado automaticamente com Node.js)
- **Navegadores suportados**: 
  - Chrome/Edge versão 120+
  - Firefox versão 115+
  - Safari versão 16+

---

## 🔍 Componentes Principais

### Componente `ProgramacaoComponent`
Gerencia a exibição de Programação EM e Tecnologia e Inovação com:
- Seleção de disciplina especializada
- Filtros de ano/série, bimestre e semana
- Renderização dinâmica de aulas
- Estado sincronizado via Signals

### Componente `RoboticaComponent`
Gerencia a exibição de Robótica EF e Robótica EM com:
- Visualização de dois ciclos na mesma página
- Lado a lado (desktop) ou em abas (mobile)
- Materiais didáticos específicos integrados
- Mesma reatividade de estado

### Reutilização de Código
Ambos os componentes compartilham:
- Modelos de dados tipados
- Lógica de filtragem
- Estrutura visual similar
- Padrão de expansão de cards

---

## 🆕 Melhorias e Histórico

Consulte o arquivo [CHANGELOG.md](./CHANGELOG.md) para ver a lista detalhada de melhorias, novas tecnologias e correções implementadas na evolução do projeto.

## 📝 Manutenção e Atualização de Dados

O projeto inclui os dados de escopo em **4 arquivos CSV** na raiz do repositório:

- `Prog EM.csv` - Programação Ensino Médio
- `TEC E INOV.csv` - Tecnologia e Inovação (Anos Finais)
- `ROBÓTICA EF.csv` - Robótica Ensino Fundamental
- `ROB EM.csv` - Robótica Ensino Médio

Além disso:
- `Material de robótica.md` - Documentação e links de materiais didáticos
- `materiais-robotica.ts` - Dados estruturados dos materiais no código

### Como Atualizar os Dados

1. **Editar os arquivos CSV** com as informações atualizadas (disciplinas, aulas, conteúdos)
2. **Processar os dados** e convertê-los para o formato TypeScript (interfaces nas pastas `data/`)
3. **Testar localmente** com `npm start` para validar a apresentação
4. **Fazer build de produção** com `npm run build`
5. **Deploy automático** via Vercel ao fazer commit na branch main

Cada semana letiva é identificada com aulas numeradas sequencialmente, permitindo rastreamento claro do progresso anual.

---

## 🌐 Plataforma de Hospedagem

### Vercel

O projeto está hospedado na plataforma **Vercel**, oferecendo:

- **Deploy automático**: Atualizado sempre que há commit na branch `main`
- **CDN global**: Distribuição rápida de conteúdo em todo o Brasil
- **HTTPS nativo**: Segurança em todas as conexões
- **Redirects SPA**: Configurado para Single Page Application com `vercel.json`
- **Analytics**: Monitora uso e acesso dos usuários
- **Preview URLs**: Testes de novas versões antes do merge

**URL de Produção**: Disponível via dashboard do Vercel

---

## 💡 Possíveis Extensões Futuras

- 📊 **Dashboard de Analytics**: Visualização de capítulos mais acessados
- 🔍 **Busca Global**: Buscar por tema, habilidade ou número de aula
- 📥 **Exportação**: Gerar PDFs com escopo de um semestre ou ano
- 🔐 **Login de Professores**: Salvar preferências e anotações pessoais
- 📱 **App Mobile**: Aplicativo nativo iOS/Android
- 🌐 **Integração com LMS**: Importar/exportar para Google Classroom, Moodle
- 🗣️ **Múltiplos Idiomas**: Suporte para escolas bilíngues

---

Davi Antonino Nunes da Silva

- 📧 E-mail: <professordavi85@gmail.com>
- 📱 WhatsApp: (16) 99260-4315
- 🐺 [Artigli Notturni](https://open.spotify.com/intl-pt/artist/0IBe0S81z4uWoscwHEOQ1f?si=a4Ye9ZnLQSir4P_fPqj-ig)

---

## 📄 Licença

Projeto educacional desenvolvido para uso interno da rede pública estadual de São Paulo.
