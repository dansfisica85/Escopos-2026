import { Routes } from '@angular/router';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { RoboticaComponent } from './pages/robotica/robotica.component';

export const routes: Routes = [
  { path: '', redirectTo: 'programacao', pathMatch: 'full' },
  { path: 'programacao', component: ProgramacaoComponent },
  { path: 'robotica', component: RoboticaComponent },
];
