import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from "./guards/auth-guard.service";

// Reactive Forms
import { ReactiveFormsModule } from "@angular/forms";
// Http
import { HttpClientModule } from "@angular/common/http";
// Componentes
import { MenuComponent } from './components/menu/menu.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { StorageService } from './services/storage.service';
import { VerMailComponent } from './components/ver-mail/ver-mail.component';
import { VerMateriasComponent } from './components/ver-materias/ver-materias.component';
import { VerUsuariosComponent } from './components/ver-usuarios/ver-usuarios.component';
import { AltaMateriasComponent } from './components/alta-materias/alta-materias.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { TipoUsuarioPipe } from './pipes/tipo-usuario.pipe';
import { CupoDirective } from './directives/cupo.directive';
import { NotaAlumnoPipe } from './pipes/nota-alumno.pipe';
import { AnotarMateriasComponent } from './components/anotar-materias/anotar-materias.component';
import { AlumnoMateriasComponent } from './components/alumno-materias/alumno-materias.component';
import { MisMateriasComponent } from './components/mis-materias/mis-materias.component';
import { AlumnosEnMateriasComponent } from './components/alumnos-en-materias/alumnos-en-materias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaUsuarioComponent,
    VerMailComponent,
    VerMateriasComponent,
    VerUsuariosComponent,
    AltaMateriasComponent,
    TablaComponent,
    TablaUsuariosComponent,
    TipoUsuarioPipe,
    CupoDirective,
    NotaAlumnoPipe,
    AnotarMateriasComponent,
    AlumnoMateriasComponent,
    MisMateriasComponent,
    AlumnosEnMateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
