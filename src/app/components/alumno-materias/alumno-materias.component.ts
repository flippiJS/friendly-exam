import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alumno-materias',
  templateUrl: './alumno-materias.component.html',
  styleUrls: ['./alumno-materias.component.scss']
})
export class AlumnoMateriasComponent implements OnInit {

  constructor(private materiasService: MateriasService, public authService:AuthService) { }

  listado = [];
  keys= [];

  ngOnInit() {
    this.obtenerMaterias();
  }
  
  obtenerMaterias() {
    this.materiasService.alumnosPorMateria(this.authService.getUsuario().id).subscribe((data: any) => {
      this.listado = data;
    });
  }
}
