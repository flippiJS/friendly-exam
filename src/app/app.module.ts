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
import { ListaComponent } from './components/lista/lista.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BotonComponent } from './components/boton/boton.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { AltaPeliComponent } from './components/alta-peli/alta-peli.component';
import { AltaActorComponent } from './components/alta-actor/alta-actor.component';
import { ListaActorComponent } from './components/lista-actor/lista-actor.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { ListaPeliculaActorComponent } from './components/lista-pelicula-actor/lista-pelicula-actor.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    TablaComponent,
    FormularioComponent,
    BotonComponent,
    BusquedaComponent,
    BuscarComponent,
    BienvenidoComponent,
    AltaPeliComponent,
    AltaActorComponent,
    ListaActorComponent,
    TablaActorComponent,
    ListaPeliculaActorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
