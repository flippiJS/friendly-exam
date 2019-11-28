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
  keys= [];

  ngOnInit() {
    this.obtenerMaterias();
  }


  obtenerMaterias() {
    this.materiasService.obtenerMaterias().subscribe((data: any) => {
      this.listado = data;
      this.keys = Object.keys(this.listado[0]);
    });
  }

  public CargarLista() {
    this.obtenerMaterias();
  }
}
