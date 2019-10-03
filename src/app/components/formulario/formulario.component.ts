import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public addLibroForm: FormGroup;
  isLoading: boolean = false;
  submitted = false;

  constructor(private librosService: LibrosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addLibroForm = this.formBuilder.group({
      marca: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.minLength(1)]],
      foto: ['', Validators.required]
    });
  }

  // para acceder facilmente a los controles del form
  get f() { return this.addLibroForm.controls; }

  onRegistrar() {
    this.submitted = true;
    // si es invalido nada
    if (this.addLibroForm.invalid) {
      return;
    }
    const request = this.addLibroForm.value;
    console.log('Cargare el obj: ' + request);
    this.librosService.addLibro(request).subscribe((rta: any) => {
      console.log('Respuesta de alta ', rta);
      if (rta.status == 200) {
        console.log('Cargado');
      }
    });
  }
}
