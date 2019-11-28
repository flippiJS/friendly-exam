import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoUsuario'
})
export class TipoUsuarioPipe implements PipeTransform {
  transform(value: any, args?: any): string {
    value = parseInt(value);
    switch (value) {
      case 3:
        return 'Administrador';
      case 2:
        return 'Profesor';
      case 1:
        return 'Alumno';
    }
  }

}
