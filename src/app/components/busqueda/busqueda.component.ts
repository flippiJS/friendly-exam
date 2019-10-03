import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Libro, LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  @Output() public buscar = new EventEmitter<Libro[]>();
  public busquedaGroup: FormGroup;

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.busquedaGroup = new FormGroup({
      modelo: new FormControl('', [Validators.required])
    });
  }

  public Buscar() {
    const modelo: string = this.busquedaGroup.value.modelo;

    this.librosService.getLibros().subscribe((data: Array<Libro>) => {
      const auxArr: Array<Libro> = new Array<Libro>();

      for (const libro of data) {
        // console.log(auto);
        if (libro.marca === modelo) {
          auxArr.push(libro);
        }
      }

      this.buscar.emit(auxArr);
    });
  }
}
