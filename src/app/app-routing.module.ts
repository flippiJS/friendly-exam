import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { AltaPeliComponent } from './components/alta-peli/alta-peli.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { ListaActorComponent } from './components/lista-actor/lista-actor.component';
import { ListaPeliculaActorComponent } from './components/lista-pelicula-actor/lista-pelicula-actor.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'busqueda', component: BuscarComponent },
  {
    path: 'peliculas/alta', component: AltaPeliComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'actor/alta', component: AltaActorComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'actor/listado', component: ListaActorComponent },
  { path: 'actor/detail/:id', component: ListaPeliculaActorComponent },
  { path: 'peliculas/listado', component: ListaComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: '**', redirectTo: '/bienvenido', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
