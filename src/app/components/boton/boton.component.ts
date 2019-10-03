import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() idAuto: string;
  @Output() public borrar = new EventEmitter<boolean>();

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
  }

  public Eliminar(id: string) {
    // console.log('Eliminaré el id: ' + id);
    this.librosService.deleteLibro(id).subscribe((rta: any) => {
      console.log('Respuesta de eliminar ', rta);
      if (rta.resp === 'ok') {
        console.log('Emito el evento desde Button');
        this.borrar.emit(true);
      }
    });
  }
}
