import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})

export class BusquedaComponent implements OnInit {
  @Output() public buscar = new EventEmitter<Pelicula[]>();
  public busquedaGroup: FormGroup;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.busquedaGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }

  public Buscar() {
    const nombre: string = this.busquedaGroup.value.nombre;

    this.peliculasService.getPeliculas().subscribe((data: Array<Pelicula>) => {
      const auxArr: Array<Pelicula> = new Array<Pelicula>();

      for (const peli of data) {
        if (peli.nombre === nombre) {
          auxArr.push(peli);
        }
      }
      this.buscar.emit(auxArr);
    });
  }
}
