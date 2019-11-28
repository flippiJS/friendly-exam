import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() lista:[];
  @Input() columnas:[];
  @Input() keys:[];
  @Output() recargar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  public recargarLista(event) {
    console.log('Event de grilla ' + event);
    this.recargar.emit(event);
  }
}
