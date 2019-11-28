import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() id: number;
  @Output() public recargar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public Eliminar(id: number) {
    console.log('Eliminaré el id: ' + id);
    this.recargar.emit(true);
  }
}
