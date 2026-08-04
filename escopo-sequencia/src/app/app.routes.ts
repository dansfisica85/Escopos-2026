import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'programacao', pathMatch: 'full' },
  {
    path: 'programacao',
    title: 'Programação e Tecnologia | PEC Tecnologia',
    loadComponent: () =>
      import('./pages/programacao/programacao.component').then(
        module => module.ProgramacaoComponent,
      ),
  },
  {
    path: 'robotica',
    title: 'Robótica | PEC Tecnologia',
    loadComponent: () =>
      import('./pages/robotica/robotica.component').then(module => module.RoboticaComponent),
  },
];
