import { Component, OnInit } from '@angular/core';
import { Actor } from '../../clases/actor';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'app-lista-actor',
  templateUrl: './lista-actor.component.html',
  styleUrls: ['./lista-actor.component.scss']
})
export class ListaActorComponent implements OnInit {
  public listado: Array<Actor>;
  constructor(private http: ActoresService) { }

  ngOnInit() {
    console.log('Llamo a traerLibros');
    this.CargarLista();
  }

  public CargarLista() {
    this.http.getActores().subscribe((data: any) => {
      /* console.log(data.rta);
      this.listado = data.rta; */
      console.log(data);
      this.listado = data;
    });
  }

  Recargar(event) {
    console.log('Event de listado' + event);
    if (event === true) {
      this.CargarLista();
    }
  }
}
