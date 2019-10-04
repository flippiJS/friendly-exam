import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/services/actores.service';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-lista-pelicula-actor',
  templateUrl: './lista-pelicula-actor.component.html',
  styleUrls: ['./lista-pelicula-actor.component.scss']
})
export class ListaPeliculaActorComponent implements OnInit {

  constructor(private actoresService: ActoresService, private http: PeliculasService) { }
  actor = {};
  listado = [];

  ngOnInit() {
    this.CargarLista();
  }

  public CargarLista() {
    const id = 6;
    this.actoresService.getActor(id).subscribe((data: any) => {
      console.log(data);
      this.actor = data;
    });

    this.http.getPeliculas().subscribe((data: any) => {
      /* console.log(data.rta);
      this.listado = data.rta; */
      console.log(data);
      this.listado = data.filter(film => film.actorPrincipal == id);
    });

  }

}
