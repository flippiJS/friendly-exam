import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from '../../clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {
  @Input() lista: Array<Actor>;
  @Output() recargar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  public recargarLista(event) {
    console.log('Event de grilla ' + event);
    this.recargar.emit(event);
  }
}
