import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
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
