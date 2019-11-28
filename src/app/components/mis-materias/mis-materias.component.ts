import { Component, OnInit } from '@angular/core';
import { MateriasService } from 'src/app/services/materias.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mis-materias',
  templateUrl: './mis-materias.component.html',
  styleUrls: ['./mis-materias.component.scss']
})
export class MisMateriasComponent implements OnInit {

  constructor(private materiasService: MateriasService, private authService: AuthService) { }

  listado = [];
  keys = [];

  ngOnInit() {
    this.obtenerMaterias();
  }

  obtenerMaterias() {
    this.materiasService.obtenerMaterias().subscribe((data: any) => {
      this.listado = data.filter((m) => m.profesor.id == this.authService.getUsuario().id);
    });
  }
}
