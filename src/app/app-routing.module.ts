import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: '**', redirectTo: '/lista', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
