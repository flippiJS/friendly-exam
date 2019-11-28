import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    let filter = args[0];
    if (filter) {
      switch (filter) {
        case 'Administrador':
          value = value.filter(user => user.tipo == 1)
          break;
        case 'Alumno':
          value = value.filter(user => user.tipo == 3)
          break;
        case 'Profesor':
          value = value.filter(user => user.tipo == 2)
          break;
      }
    }
    return value;
  }

}
