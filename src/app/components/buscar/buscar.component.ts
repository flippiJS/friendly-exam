import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  ngOnInit() {
  }
  public lista: Array<Libro> = null;

  constructor() { }

  public MostrarElemento(event: Array<Libro>) {
    // console.log('Mostrar Elemento: ', event);
    this.lista = event;
    // console.log('Lista: ', this.lista);
  }

}
