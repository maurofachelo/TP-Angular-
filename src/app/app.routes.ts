import { Routes } from '@angular/router';
import { ListaMotocicletasComponent } from './components/lista-motocicletas/lista-motocicletas.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PaginaInicioComponent },
  { path: 'motocicletas', component: ListaMotocicletasComponent },
  { path: '**', redirectTo: '/inicio' }
];