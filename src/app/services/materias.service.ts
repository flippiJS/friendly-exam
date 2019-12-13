import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private http: HttpService) {
  }

  nuevaMateria(request: any) {
    return this.http.post(`${environment.URL}/materias/`, request).pipe(response => response);
  }

  obtenerMaterias() {
    return this.http.get(`${environment.URL}/materias/`).pipe(response => response);
  }

  obtenerMateriasDisponibles(usuario) {
    return this.http.post(`${environment.URL}/materias/disponibles`, {id: usuario}).pipe(response => response);
  }

  inscribirseMateria(materia, usuario) {
    return this.http.post(`${environment.URL}/inscripciones`, { materia: materia, usuario: usuario, nota: 0 }).pipe(response => response);
  }

  materiasPorAlumno(id: any) {
    return this.http.post(`${environment.URL}/materias/porAlumno`, {id: id}).pipe(response => response);
  }

  alumnosPorMateria(usuario: any) {
    return this.http.post(`${environment.URL}/materias/alumnosMateria`, {id: usuario}).pipe(response => response);
  }

  materiasPorProfesor() {
    return this.http.get(`${environment.URL}/materias/`).pipe(response => response);
  }

  nuevoExamen(examen: any) {
    return this.http.post(`${environment.URL}/examenes`, {examen: examen}).pipe(response => response);
  }

  obtenerExamenes() {
    return this.http.get(`${environment.URL}/examenes/`).pipe(response => response);
  }  
}
