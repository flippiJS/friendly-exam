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

  inscribirseMateria(idMateria) {
    return this.http.post(`${environment.URL}/Inscriptions/`, { idSubject: idMateria }).pipe(response => response);
  }

  materiasPorAlumno() {
    return this.http.get(`${environment.URL}/Inscriptions/SubjectsByStudent`).pipe(response => response);
  }

  alumnosPorMateria() {
    return this.http.get(`${environment.URL}/Inscriptions/StudentBySubject`).pipe(response => response);
  }

  materiasPorProfesor() {
    return this.http.get(`${environment.URL}/Subject/SubjectByTeacher`).pipe(response => response);
  }
}
