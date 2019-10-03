import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  ngOnInit() {
  }
  public lista: Array<Pelicula> = null;

  constructor() { }

  public MostrarElemento(event: Array<Pelicula>) {
    // console.log('Mostrar Elemento: ', event);
    this.lista = event;
    // console.log('Lista: ', this.lista);
  }

}
