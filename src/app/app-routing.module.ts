import { AlumnosEnMateriasComponent } from './components/alumnos-en-materias/alumnos-en-materias.component';
import { AnotarMateriasComponent } from './components/anotar-materias/anotar-materias.component';
import { MisMateriasComponent } from './components/mis-materias/mis-materias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { VerMateriasComponent } from './components/ver-materias/ver-materias.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';
import { AltaMateriasComponent } from './components/alta-materias/alta-materias.component';
import { AlumnoMateriasComponent } from './components/alumno-materias/alumno-materias.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  {
    path: 'altaUsuario', component: AltaUsuarioComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 1 }
  },
  {
    path: 'altaMateria', component: AltaMateriasComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 1 }
  },
  {
    path: 'verMaterias', component: VerMateriasComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 1 }
  },
  {
    path: 'verUsuarios', component: VerUsuariosComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 1 }
  },
  {
    path: 'misMaterias', component: MisMateriasComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 2 }
  },
  {
    path: 'alumnoMaterias', component: AlumnoMateriasComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 2 }
  },
  {
    path: 'anotarMaterias', component: AnotarMateriasComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 3 }
  },
  {
    path: 'alumnoEnMaterias', component: AlumnosEnMateriasComponent,
    canActivate: [AuthGuardService],
    data: { expectedType: 3 }
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: '**', redirectTo: '/bienvenido', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
