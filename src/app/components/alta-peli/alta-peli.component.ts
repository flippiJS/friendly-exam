import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-alta-peli',
  templateUrl: './alta-peli.component.html',
  styleUrls: ['./alta-peli.component.scss']
})
export class AltaPeliComponent implements OnInit {
  public addPeliculaForm: FormGroup;
  isLoading = false;
  submitted = false;
  listadoActores = [];
  constructor(private peliculasService: PeliculasService, private formBuilder: FormBuilder, private actoresService: ActoresService) {
  }

  ngOnInit() {
    this.addPeliculaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      fechaEstreno: ['', [Validators.required]],
      cantidadPublico: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      actorPrincipal: ['', [Validators.required]]
    });

    this.actoresService.getActores().subscribe((data: any) => {
      console.log(data);
      this.listadoActores = data;
      this.addPeliculaForm.controls.actorPrincipal.patchValue(this.listadoActores[0].id);

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

    const exist = this.listadoActores.find((act) => {
      return this.addPeliculaForm.value.actorPrincipal == act.nombre + ' ' + act.apellido;
    });

    if (!exist) {
      this.addPeliculaForm.controls.actorPrincipal.setErrors({ incorrect: true });
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


  onReset() {
    this.submitted = false;
    this.addPeliculaForm.reset();
  }

}

