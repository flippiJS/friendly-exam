import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notaAlumno'
})
export class NotaAlumnoPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    value = parseInt(value);
    switch (value) {
      case 1:
        return 'Deaprobado';
      case 2:
        return 'Deaprobado';
      case 3:
        return 'Deaprobado';
      case 4:
        return 'Aprobado';
      case 5:
        return 'Aprobado';
      case 6:
        return 'Aprobado';
      case 7:
        return 'Promocion';
      case 8:
        return 'Promocion';
      case 9:
        return 'Promocion';
      case 10:
        return 'Promocion';
    }
  }

}
