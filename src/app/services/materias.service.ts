import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private sto: StorageService) {
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
}
