import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-examenes',
  templateUrl: './tabla-examenes.component.html',
  styleUrls: ['./tabla-examenes.component.scss']
})
export class TablaExamenesComponent implements OnInit {

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