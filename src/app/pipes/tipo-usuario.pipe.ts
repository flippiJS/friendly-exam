import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoUsuario'
})
export class TipoUsuarioPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    value = parseInt(value);
    switch (value) {
      case 1:
        return 'Administrador';
      case 2:
        return 'Profesor';
      case 3:
        return 'Alumno';
    }
  }

}
