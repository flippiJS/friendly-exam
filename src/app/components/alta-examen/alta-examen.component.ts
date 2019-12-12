
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MateriasService } from 'src/app/services/materias.service';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private usuarioService: UsuarioService, private authService:AuthService, private formBuilder: FormBuilder, private materiasService: MateriasService) { }

  ngOnInit() {
    this.addExamenForm = this.formBuilder.group({
      materia: [Object, [Validators.required]],
      alumno: [Object, [Validators.required]],
      profesor: [Object, Validators.required],
      nota: ['', Validators.required],
      fecha: ['', Validators.required],
    });

    this.materiasService.obtenerMaterias().subscribe((data: any) => {
      this.listadoMaterias = data.filter((m) => m.profesor.id == this.authService.getUsuario().id);
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
    
    this.addExamenForm.value.profesor = this.authService.getUsuario().id;

    const alumno = this.listadoAlumnos[this.addExamenForm.value.alumno];
    const materia = this.listadoMaterias[this.addExamenForm.value.materia];

    this.addExamenForm.value.alumno = { 
      id: alumno.id,
      nombre: alumno.nombre
    };
    this.addExamenForm.value.materia = { 
      id: materia.id,
      nombre: materia.nombre
    };
    const request = this.addExamenForm.value;
    console.log('Cargare el obj: ' + request);
    this.materiasService.nuevoExamen(request).subscribe((data) => {
      console.log('Cargado');
      this.onReset();
    });
  }

  onChange(materia) {
    console.log(materia);
    this.materiasService.alumnosPorMateria(this.authService.getUsuario().id).subscribe((data: any) => {
      data.filter((mate)=>{
        if(mate.id == materia){
          this.listadoAlumnos = mate.alumnos;
        }

      });      
    });    
}

  onReset() {
    this.submitted = false;
    this.addExamenForm.reset();
  }

}

