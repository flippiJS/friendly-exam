import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  public listado: [];
  constructor() { }

  ngOnInit() {
    console.log('Llamo a traerLibros');
    this.CargarLista();
  }

  public CargarLista() {

  }

  Recargar(event) {
    console.log('Event de listado' + event);
    if (event === true) {
      this.CargarLista();
    }
  }

}
