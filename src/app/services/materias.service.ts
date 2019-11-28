import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private sto: StorageService, private http: HttpService) {
    if (!this.sto.get('materias')) {
      this.sto.set('materias', []);
    }
  }
  nuevaMateria(data) {
    const listaMaterias = this.sto.get('materias');
    listaMaterias.push(data);
    this.sto.set('materias', listaMaterias);
  }

  obtenerMaterias() {
    const listaMaterias = this.sto.get('materias');
    return listaMaterias;
  }

  inscribirseMateria(idSubject: number) {
    return this.http.post(`${environment.URL}/Inscriptions/`, {idSubject: idSubject}).pipe(response => response);
  }

  materiasPorAlumno() {
    return this.http.get(`${environment.URL}/Inscriptions/SubjectsByStudent`).pipe(response => response);
  }
}
