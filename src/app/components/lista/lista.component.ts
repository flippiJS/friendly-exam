import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from '../../services/libros.service';
import { TablaComponent } from '../tabla/tabla.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements OnInit {
  public listado: Array<Libro>;
  constructor(private http: LibrosService) { }

  ngOnInit() {
    console.log('Llamo a traerLibros');
    this.CargarLista();
  }

  public CargarLista() {
    this.http.getLibros().subscribe((data: any) => {
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