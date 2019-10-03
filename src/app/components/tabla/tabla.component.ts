import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Libro } from 'src/app/services/libros.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() lista: Array<Libro>;
  @Output() recargar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  public recargarLista(event) {
    console.log('Event de grilla ' + event);
    this.recargar.emit(event);
  }
}
