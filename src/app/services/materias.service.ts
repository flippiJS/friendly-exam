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
    return this.http.post(`${environment.URL}/materias/disponibles`, {usuario}).pipe(response => response);
  }

  inscribirseMateria(materia, usuario) {
    return this.http.post(`${environment.URL}/materia/inscribir`, { materia: materia, usuario: usuario }).pipe(response => response);
  }

  materiasPorAlumno() {
    return this.http.get(`${environment.URL}/materias/porAlumno`).pipe(response => response);
  }

  alumnosPorMateria() {
    return this.http.get(`${environment.URL}/Inscriptions/StudentBySubject`).pipe(response => response);
  }

  materiasPorProfesor() {
    return this.http.get(`${environment.URL}/Subject/SubjectByTeacher`).pipe(response => response);
  }
}
