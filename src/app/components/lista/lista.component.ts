import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { TablaComponent } from '../tabla/tabla.component';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  public listado: Array<Pelicula>;
  constructor(private http: PeliculasService) { }

  ngOnInit() {
    console.log('Llamo a traerLibros');
    this.CargarLista();
  }

  public CargarLista() {
    this.http.getPeliculas().subscribe((data: any) => {
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
