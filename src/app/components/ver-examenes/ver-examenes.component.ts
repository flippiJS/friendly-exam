import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-ver-examenes',
  templateUrl: './ver-examenes.component.html',
  styleUrls: ['./ver-examenes.component.scss']
})
export class VerExamenesComponent implements OnInit {
  constructor(private materiasService: MateriasService) { }

  listado = [];
  keys= [];

  ngOnInit() {
    this.obtenerExamenes();
  }


  obtenerExamenes() {
    this.materiasService.obtenerExamenes().subscribe((data: any) => {
      this.listado = data;
      this.keys = Object.keys(this.listado[0]);
    });
  }

  public CargarLista() {
    this.obtenerExamenes();
  }
}
