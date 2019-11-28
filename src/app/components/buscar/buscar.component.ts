import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  ngOnInit() {
  }
  public lista: [] = null;

  constructor() { }

  public MostrarElemento(event) {
    // console.log('Mostrar Elemento: ', event);
    this.lista = event;
    // console.log('Lista: ', this.lista);
  }

}
