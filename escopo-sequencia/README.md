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

## 🆕 Melhorias e Novas Tecnologias

Consulte o arquivo [CHANGELOG.md](./CHANGELOG.md) para ver a lista detalhada de melhorias, novas tecnologias e correções implementadas.

---

## ⚠️ Observação sobre Materiais de Robótica

Alguns links de materiais didáticos de robótica utilizam o domínio `acervocmsp.educacao.sp.gov.br` e podem retornar erro **403 Forbidden** devido a restrições de acesso do portal. Isso ocorre por:
- Requisitos de autenticação/rede interna da Secretaria
- Materiais restritos a usuários logados ou rede escolar

**Solução sugerida:**
- Acesse a partir de uma rede da Secretaria ou com login institucional
- Caso o erro persista, entre em contato com o suporte do portal ou utilize materiais alternativos

---

## 👨‍💻 Desenvolvedor

Davi Antonino Nunes da Silva

- 📧 E-mail: <professordavi85@gmail.com>
- 📱 WhatsApp: (16) 99260-4315
- 🐺 [Artigli Notturni](https://open.spotify.com/intl-pt/artist/0IBe0S81z4uWoscwHEOQ1f?si=a4Ye9ZnLQSir4P_fPqj-ig)

---

## 📄 Licença

Projeto educacional desenvolvido para uso interno da rede pública estadual de São Paulo.
