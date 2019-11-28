import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alumnos-en-materias',
  templateUrl: './alumnos-en-materias.component.html',
  styleUrls: ['./alumnos-en-materias.component.scss']
})
export class AlumnosEnMateriasComponent implements OnInit {

  constructor(private materiasService: MateriasService, public authService:AuthService) { }

  listado = [];
  keys= [];

  ngOnInit() {
    this.obtenerMaterias();
  }


  obtenerMaterias() {
    this.materiasService.materiasPorAlumno(this.authService.getUsuario().id).subscribe((data: any) => {
      this.listado = data;
    });
  }
}
