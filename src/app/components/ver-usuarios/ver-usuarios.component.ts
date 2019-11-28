import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.scss']
})
export class VerUsuariosComponent implements OnInit {
  listado = [];
  keys = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.obtenerUsuarios().subscribe((data) => {
      this.listado = data;
      this.keys = Object.keys(this.listado[0]);
    });
  }

  public CargarLista() {
    this.obtenerUsuarios();
  }

}
