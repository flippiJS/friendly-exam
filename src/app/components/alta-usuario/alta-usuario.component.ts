import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {
  public addUsuarioForm: FormGroup;
  isLoading = false;
  submitted = false;
  listadoTipos = [];
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addUsuarioForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      clave2: ['', [Validators.required]],
      tipo: ['', Validators.required],
      foto: ['', Validators.required],
    });

    this.listadoTipos = [
      { id: 1, descripcion: 'Administrador' },
      { id: 2, descripcion: 'Profesor' },
      { id: 3, descripcion: 'Alumno' },

    ];
    this.addUsuarioForm.controls.tipo.patchValue(this.listadoTipos[0].id);
  }
  // para acceder facilmente a los controles del form
  get f() { return this.addUsuarioForm.controls; }

  onCrear() {
    this.submitted = true;
    // si es invalido nada
    if (this.addUsuarioForm.invalid || (this.addUsuarioForm.value.clave !== this.addUsuarioForm.value.clave2)) {
      return;
    }
    const request = this.addUsuarioForm.value;
    console.log('Cargare el obj: ' + request);
    this.usuarioService.nuevoUsuario(request).subscribe((data) => {
      console.log('Cargado');
      this.onReset();
    });
  }

  onReset() {
    this.submitted = false;
    this.addUsuarioForm.reset();
  }

  getImagen(readerEvt) {
    //console.log('change no input file', readerEvt);
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.addUsuarioForm.value.foto = reader.result.toString();
    };
    reader.onerror = function (error) {
      console.log('Erro ao ler a imagem : ', error);
    };
  }

}

