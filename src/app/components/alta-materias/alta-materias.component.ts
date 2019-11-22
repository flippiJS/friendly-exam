import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-alta-materias',
  templateUrl: './alta-materias.component.html',
  styleUrls: ['./alta-materias.component.scss']
})
export class AltaMateriasComponent implements OnInit {
  public addMateriaForm: FormGroup;
  isLoading = false;
  submitted = false;
  listadoProfesores = [];
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private materiasService: MateriasService) { }

  ngOnInit() {
    this.addMateriaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      cuatrimestre: ['', [Validators.required]],
      cupos: ['', [Validators.required]],
      profesor: ['', Validators.required]
    });

    this.listadoProfesores = this.usuarioService.obtenerUsuario().filter(usr => {
      return (usr.tipo == 2);
    });
    this.addMateriaForm.controls.profesor.patchValue(this.listadoProfesores[0].mail);
  }
  // para acceder facilmente a los controles del form
  get f() { return this.addMateriaForm.controls; }

  onCrear() {
    this.submitted = true;
    // si es invalido nada
    if (this.addMateriaForm.invalid) {
      return;
    }
    const request = this.addMateriaForm.value;
    console.log('Cargare el obj: ' + request);
    this.materiasService.nuevaMateria(request);
    console.log('Cargado');
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.addMateriaForm.reset();
  }

}
