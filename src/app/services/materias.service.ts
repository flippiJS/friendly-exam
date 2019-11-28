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

  alumnosPorMateria() {
    return this.http.get(`${environment.URL}/Inscriptions/StudentBySubject`).pipe(response => response);
  }

  materiasPorProfesor() {
    return this.http.get(`${environment.URL}/Subject/SubjectByTeacher`).pipe(response => response);
  }
}
