import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-materias',
  templateUrl: './tabla-materias.component.html',
  styleUrls: ['./tabla-materias.component.scss']
})
export class TablaMateriasComponent implements OnInit {
  @Input() lista:[];
  @Output() recargar = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  public recargarLista(event) {
    console.log('Event de grilla ' + event);
    this.recargar.emit(event);
  }
}
