import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get isAuthenticated(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return usuario !== null;
  }

  public getTipo(): number {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return usuario.tipo;
  }

  public getUsuario(): number {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return usuario;
  }
}
