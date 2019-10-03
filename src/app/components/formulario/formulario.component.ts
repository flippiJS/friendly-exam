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

  constructor(private librosService: LibrosService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addLibroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onRegistrar() {
    // si es invalido nada
    if (this.addLibroForm.invalid) {
      return;
    }
    const request = { libro: this.addLibroForm.value };

    this.librosService.addLibro(request).subscribe((rta: any) => {
      // console.log(rta);
      if (rta.ok) {
        console.log('Cargado');
      }
    });
  }
}
