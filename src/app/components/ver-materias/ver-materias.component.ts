import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-ver-materias',
  templateUrl: './ver-materias.component.html',
  styleUrls: ['./ver-materias.component.scss']
})
export class VerMateriasComponent implements OnInit {

  constructor(private materiasService: MateriasService) { }

  listado = [];

  ngOnInit() {
    this.obtenerMaterias();
  }


  obtenerMaterias() {
    this.listado = this.materiasService.obtenerMaterias();
  }

  public CargarLista() {
    this.obtenerMaterias();
  }
}
