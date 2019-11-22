import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.scss']
})
export class VerUsuariosComponent implements OnInit {
  listado = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.listado = this.usuarioService.obtenerUsuario();
  }

  public CargarLista() {
    this.obtenerUsuarios();
  }

}
