import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpService) {
  }

  nuevoUsuario(request: any) {
    return this.http.post(`${environment.URL}/usuarios/`, request).pipe(response => response);
  }

  obtenerUsuarios(): any {
    return this.http.get(`${environment.URL}/usuarios/`).pipe(response => response);
  }

  obtenerProfesores(): any {
    return this.http.get(`${environment.URL}/usuarios/profesores`).pipe(response => response);
  }

}
