import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/services/actores.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {
  public addActorForm: FormGroup;
  isLoading = false;
  submitted = false;

  constructor(private actoresService: ActoresService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addActorForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      nacionalidad: ['', Validators.required],
      fechaNcimiento: ['', Validators.required]
    });
  }
  // para acceder facilmente a los controles del form
  get f() { return this.addActorForm.controls; }

  onRegistrar() {
    this.submitted = true;
    // si es invalido nada
    if (this.addActorForm.invalid) {
      return;
    }
    const request = this.addActorForm.value;
    console.log('Cargare el obj: ' + request);
    this.actoresService.addActor(request).subscribe((rta: any) => {
      console.log('Respuesta de alta ', rta);
      if (rta.status == 200) {
        console.log('Cargado');
      }
    });
  }
}
