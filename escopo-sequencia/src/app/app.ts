import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-content">
        <h1 class="logo">📚 Escopo Sequência 2026</h1>
        <p class="subtitle">Secretaria da Educação do Estado de São Paulo</p>
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
    <main class="main-content">
      <router-outlet />
    </main>
  `,
  styleUrl: './app.css'
})
export class App {}
