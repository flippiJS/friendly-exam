import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public addUsuarioForm: FormGroup;
  isLoading: boolean = false;
  submitted = false;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addUsuarioForm = this.formBuilder.group({
      mail: ['', [Validators.required]],
      clave: ['', [Validators.required, Validators.minLength(1)]],
      clave2: ['', [Validators.required, Validators.minLength(1)]],
      tipo: ['', Validators.required]
    });
  }

  // para acceder facilmente a los controles del form
  get f() { return this.addUsuarioForm.controls; }

  onRegistrar() {
    this.submitted = true;
    // si es invalido nada
    if (this.addUsuarioForm.invalid) {
      return;
    }
    const request = this.addUsuarioForm.value;
    console.log('Cargare el obj: ' + request);
    this.usuarioService.addLibro(request).subscribe((rta: any) => {
      console.log('Respuesta de alta ', rta);
      if (rta.status == 200) {
        console.log('Cargado');
      }
    });
  }
}
