import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})

export class BusquedaComponent implements OnInit {
  @Output() public buscar = new EventEmitter<[]>();
  public busquedaGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.busquedaGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
  }

  public Buscar() {
    const nombre: string = this.busquedaGroup.value.nombre;

  }
}
