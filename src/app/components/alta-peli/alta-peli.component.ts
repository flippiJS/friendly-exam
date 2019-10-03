import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alta-peli',
  templateUrl: './alta-peli.component.html',
  styleUrls: ['./alta-peli.component.scss']
})
export class AltaPeliComponent implements OnInit {
  public addPeliculaForm: FormGroup;
  isLoading = false;
  submitted = false;

  constructor(private peliculasService: PeliculasService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addPeliculaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      fechaEstreno: ['', [Validators.required]],
      cantidadPublico: ['', [Validators.required]],
      foto: ['', [Validators.required]],
    });
  }

  // para acceder facilmente a los controles del form
  get f() { return this.addPeliculaForm.controls; }

  onCrear() {
    this.submitted = true;
    // si es invalido nada
    if (this.addPeliculaForm.invalid) {
      return;
    }
    const request = this.addPeliculaForm.value;
    console.log('Cargare el obj: ' + request);
    this.peliculasService.addPelicula(request).subscribe((rta: any) => {
      console.log('Respuesta de alta ', rta);
      if (rta.status == 200) {
        console.log('Cargado');
      }
    });
  }
}

