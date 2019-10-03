import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() id: number;
  @Output() public recargar = new EventEmitter<boolean>();

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  public Eliminar(id: number) {
    console.log('Eliminaré el id: ' + id);
    this.peliculasService.deletePelicula(id).subscribe((rta: any) => {
      console.log('Respuesta de eliminar ', rta);
      if (rta.status == 200) {
        console.log('Emito el evento desde Button');
        this.recargar.emit(true);
      }
    });
  }
}
