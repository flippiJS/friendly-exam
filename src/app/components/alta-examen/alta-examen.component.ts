
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-alta-examen',
  templateUrl: './alta-examen.component.html',
  styleUrls: ['./alta-examen.component.scss']
})
export class AltaExamenComponent implements OnInit {

  public addExamenForm: FormGroup;
  isLoading = false;
  submitted = false;
  listadoMaterias = [];
  listadoAlumnos = [];

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private materiasService: MateriasService) { }

  ngOnInit() {
    this.addExamenForm = this.formBuilder.group({
      materia: [Object, [Validators.required]],
      alumno: [Object, [Validators.required]],
      profesor: [Object, Validators.required],
      nota: ['', Validators.required],
      fecha: ['', Validators.required],
    });

    this.listadoMaterias = 
    this.usuarioService.obtenerProfesores().subscribe((data) => {
      this.listadoMaterias = data;
    });
  }
  // para acceder facilmente a los controles del form
  get f() { return this.addExamenForm.controls; }

  onCrear() {
    this.submitted = true;
    // si es invalido nada
    if (this.addExamenForm.invalid) {
      return;
    }
    const profesor = this.listadoMaterias[this.addExamenForm.value.profesor];
    this.addExamenForm.value.profesor = { 
      id: profesor.id,
      nombre: profesor.nombre
    };
    const request = this.addExamenForm.value;
    console.log('Cargare el obj: ' + request);
    this.materiasService.nuevaMateria(request).subscribe((data) => {
      console.log('Cargado');
      this.onReset();
    });
  }

  onReset() {
    this.submitted = false;
    this.addExamenForm.reset();
  }

}

