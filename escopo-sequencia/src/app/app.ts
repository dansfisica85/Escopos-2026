import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="header-top">
          <div>
            <h1 class="logo">📚 Escopo Sequência 2026</h1>
            <p class="subtitle">Secretaria da Educação do Estado de São Paulo</p>
          </div>
          <button class="about-btn" (click)="toggleAbout()" title="Sobre o Projeto">
            <span>ℹ️</span> <span class="about-btn-text">Sobre o Projeto</span>
          </button>
        </div>
      </div>
      <nav class="nav-tabs">
        <a routerLink="/programacao" routerLinkActive="active" class="nav-tab">
          <span class="tab-icon">💻</span>
          <span>Programação e Tecnologia</span>
        </a>
        <a routerLink="/robotica" routerLinkActive="active" class="nav-tab">
          <span class="tab-icon">🤖</span>
          <span>Robótica</span>
        </a>
      </nav>
    </header>

    <!-- Painel Sobre o Projeto -->
    @if (showAbout()) {
      <div class="about-overlay" (click)="toggleAbout()"></div>
      <aside class="about-panel">
        <div class="about-panel-header">
          <h2>📖 Sobre o Projeto</h2>
          <button class="about-close" (click)="toggleAbout()" title="Fechar">&times;</button>
        </div>
        <div class="about-panel-body">

          <section class="about-section">
            <h3>🎯 Objetivo</h3>
            <p>Plataforma web interativa para consulta dos <strong>Escopos e Sequências Didáticas</strong> das disciplinas de <strong>Programação</strong>, <strong>Tecnologia e Inovação</strong> e <strong>Robótica</strong> da <strong>Secretaria da Educação do Estado de São Paulo</strong> — ano letivo de <strong>2026</strong>.</p>
            <p>Facilita o acesso de professores e coordenadores pedagógicos aos conteúdos planejados para cada semana letiva, organizados por disciplina, ano/série, bimestre e semana.</p>
          </section>

          <section class="about-section">
            <h3>🛠️ Tecnologias Utilizadas</h3>
            <table class="about-table">
              <thead>
                <tr><th>Tecnologia</th><th>Versão</th><th>Finalidade</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Angular</strong></td><td>21.1.0</td><td>Framework principal SPA</td></tr>
                <tr><td><strong>TypeScript</strong></td><td>5.9.2</td><td>Tipagem estática</td></tr>
                <tr><td><strong>Angular Router</strong></td><td>21.1.0</td><td>Navegação entre páginas</td></tr>
                <tr><td><strong>Angular Signals</strong></td><td>21.1.0</td><td>Estado reativo dos filtros</td></tr>
                <tr><td><strong>RxJS</strong></td><td>7.8</td><td>Programação reativa</td></tr>
                <tr><td><strong>Angular CLI</strong></td><td>21.1.3</td><td>Build, serve e scaffold</td></tr>
                <tr><td><strong>esbuild</strong></td><td>via &#64;angular/build</td><td>Bundler de produção</td></tr>
                <tr><td><strong>Vercel</strong></td><td>—</td><td>Deploy e hospedagem</td></tr>
                <tr><td><strong>CSS3</strong></td><td>—</td><td>Flexbox, gradientes, animações</td></tr>
                <tr><td><strong>HTML5</strong></td><td>—</td><td>Templates semânticos</td></tr>
              </tbody>
            </table>
          </section>

          <section class="about-section">
            <h3>🧩 Arquitetura e Padrões</h3>
            <div class="about-card">
              <h4>Standalone Components</h4>
              <p>Todos os componentes usam a API standalone do Angular 21 (<code>standalone: true</code>), sem necessidade de NgModules.</p>
            </div>
            <div class="about-card">
              <h4>Signals (Estado Reativo)</h4>
              <p>O gerenciamento de estado dos filtros (disciplina, ano, bimestre, semana expandida) é feito com <strong>Angular Signals</strong> (<code>signal()</code> e <code>computed()</code>), garantindo reatividade sem overhead de change detection.</p>
            </div>
            <div class="about-card">
              <h4>Modelo de Dados</h4>
              <p>Hierarquia tipada com interfaces TypeScript:</p>
              <pre class="about-code">DisciplinaEscopo
  └── AnoSerieEscopo[]
        └── BimestreEscopo[]
              └── SemanaEscopo[]
                    └── AulaEscopo[]</pre>
              <p>Cada <code>AulaEscopo</code> contém: título, formato, objetivos, conteúdos, flag de entrega de projeto e link opcional de material.</p>
            </div>
            <div class="about-card">
              <h4>Routing</h4>
              <p>Duas rotas principais com redirect automático:</p>
              <ul>
                <li><code>/programacao</code> → Programação EM + Tecnologia e Inovação</li>
                <li><code>/robotica</code> → Robótica EF + Robótica EM</li>
                <li><code>/</code> → redireciona para <code>/programacao</code></li>
              </ul>
            </div>
          </section>

          <section class="about-section">
            <h3>📁 Estrutura do Projeto</h3>
            <pre class="about-code">escopo-sequencia/
├── vercel.json            # SPA rewrites para Vercel
├── angular.json           # Config do projeto Angular
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── src/
│   ├── index.html         # HTML raiz
│   ├── main.ts            # Bootstrap Angular
│   ├── styles.css         # Estilos globais
│   └── app/
│       ├── app.ts         # Componente raiz
│       ├── app.css        # Estilos do layout
│       ├── app.config.ts  # Providers
│       ├── app.routes.ts  # Rotas
│       ├── data/          # Dados e interfaces
│       └── pages/         # Componentes de página</pre>
          </section>

          <section class="about-section">
            <h3>🎨 Design e UX</h3>
            <ul class="about-features">
              <li>🔒 <strong>Header fixo (sticky)</strong> com gradiente azul institucional e abas de navegação</li>
              <li>🔗 <strong>Filtros em cascata</strong>: Disciplina → Ano/Série → Bimestre</li>
              <li>📂 <strong>Cards expansíveis</strong> por semana com animação suave</li>
              <li>🏷️ <strong>Chips coloridos</strong> para badges (nº de aula, formato, projeto)</li>
              <li>📱 <strong>Layout responsivo</strong> com breakpoints para mobile (≤600px)</li>
              <li>📚 <strong>Botão "Materiais Didáticos"</strong> com link para material de apoio</li>
              <li>👤 <strong>Footer</strong> com informações do desenvolvedor</li>
            </ul>
          </section>

          <section class="about-section">
            <h3>📊 Dados Incluídos</h3>
            <table class="about-table">
              <thead>
                <tr><th>Disciplina</th><th>Ciclo</th><th>Anos/Séries</th></tr>
              </thead>
              <tbody>
                <tr><td>Programação EM</td><td>Ensino Médio</td><td>2ª e 3ª séries</td></tr>
                <tr><td>Tecnologia e Inovação</td><td>Anos Finais (EF)</td><td>6º ao 9º ano</td></tr>
                <tr><td>Robótica EF</td><td>Anos Finais (EF)</td><td>6º ao 9º ano</td></tr>
                <tr><td>Robótica EM</td><td>Ensino Médio</td><td>1ª, 2ª e 3ª séries</td></tr>
              </tbody>
            </table>
            <p class="about-highlight">Total: <strong>4 disciplinas</strong> · <strong>10+ anos/séries</strong> · <strong>~144 semanas</strong> · <strong>~500+ aulas</strong> detalhadas</p>
          </section>

          <section class="about-section">
            <h3>🚀 Como Rodar Localmente</h3>
            <pre class="about-code"># Instalar dependências
npm install

# Servidor de desenvolvimento
npm start
# Acesse http://localhost:4200

# Build de produção
npm run build</pre>
          </section>

          <section class="about-section">
            <h3>☁️ Deploy no Vercel</h3>
            <ul class="about-features">
              <li>⚙️ <strong>Framework Preset</strong>: Angular</li>
              <li>🔨 <strong>Build Command</strong>: <code>ng build</code></li>
              <li>📂 <strong>Output Directory</strong>: <code>dist/escopo-sequencia/browser</code></li>
              <li>🔄 <strong>SPA Rewrites</strong>: configurado em <code>vercel.json</code></li>
            </ul>
          </section>

          <section class="about-section about-dev">
            <h3>👨‍💻 Desenvolvedor</h3>
            <p><strong>Davi Antonino Nunes da Silva</strong></p>
            <p>📧 <a href="mailto:professordavi85@gmail.com">professordavi85&#64;gmail.com</a></p>
            <p>📱 <a href="https://wa.me/5516992604315" target="_blank" rel="noopener">(16) 99260-4315</a></p>
            <p>🐺 <a href="https://open.spotify.com/intl-pt/artist/0IBe0S81z4uWoscwHEOQ1f?si=a4Ye9ZnLQSir4P_fPqj-ig" target="_blank" rel="noopener">Artigli Notturni</a></p>
          </section>

          <section class="about-section">
            <p class="about-license">📄 Projeto educacional desenvolvido para uso interno da rede pública estadual de São Paulo.</p>
          </section>

        </div>
      </aside>
    }

    <section class="support-banner" aria-labelledby="support-banner-title">
      <div class="support-banner-icon" aria-hidden="true">💚</div>
      <div class="support-banner-content">
        <h2 id="support-banner-title">Apoie a continuidade do PEC Tecnologia</h2>
        <p>Nos últimos meses, minha vida mudou completamente. Enfrentei um infarto, um acidente, tratamentos e medicamentos de alto custo. Também perdi minhas funções como PEC de Tecnologia e PAEET do curso Técnico em Desenvolvimento de Sistemas, além de passar por situações difíceis de pressão e perseguição profissional.</p>
        <p>Mesmo diante de tudo isso, continuo trabalhando como professor e desenvolvedor, mantendo gratuitamente o site PEC Tecnologia, com materiais, projetos e recursos educacionais.</p>
        <p>Caso você conheça e valorize meu trabalho e possa contribuir, qualquer valor será muito bem-vindo para ajudar na manutenção e continuidade do projeto.</p>
        <p class="support-banner-pix"><strong>💚 PIX:</strong> <span class="support-banner-pix-key">professordavi85&#64;gmail.com</span></p>
        <p class="support-banner-thanks">Muito obrigado pelo apoio, pela confiança e por acreditar no meu trabalho.</p>
      </div>
    </section>

    <main class="main-content">
      <router-outlet />
    </main>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-dev-info" style="margin: 0 auto; align-items: center; text-align: center;">
          <p class="footer-dev">Desenvolvido por: <strong>Davi Antonino Nunes da Silva</strong></p>
          <p>E-mail: <a href="mailto:professordavi85@gmail.com">professordavi85&#64;gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/5516992604315" target="_blank" rel="noopener">(16) 99260-4315</a></p>
        </div>
        <p class="footer-brand">
          🐺 <a href="https://open.spotify.com/intl-pt/artist/0IBe0S81z4uWoscwHEOQ1f?si=a4Ye9ZnLQSir4P_fPqj-ig" target="_blank" rel="noopener">Artigli Notturni</a>
        </p>
      </div>
    </footer>
  `,
  styleUrl: './app.css'
})
export class App {
  showAbout = signal(false);

  constructor() {
    // Initialize Vercel Speed Insights
    injectSpeedInsights();
    // Initialize Vercel Web Analytics
    inject();
  }

  toggleAbout() {
    this.showAbout.update(v => !v);
  }
}
