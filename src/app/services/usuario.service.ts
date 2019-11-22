import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private sto: StorageService) {
    if (!this.sto.get('usuarios')) {
      this.sto.set('usuarios', []);
    }
  }

  nuevoUsuario(data) {
    const listUsuarios = this.sto.get('usuarios');
    listUsuarios.push(data);
    this.sto.set('usuarios', listUsuarios);
  }

  obtenerUsuario() {
    const listUsuarios = this.sto.get('usuarios');
    return listUsuarios;
  }
}
