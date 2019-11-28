import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MateriasService } from 'src/app/services/materias.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-anotar-materias',
  templateUrl: './anotar-materias.component.html',
  styleUrls: ['./anotar-materias.component.scss']
})
export class AnotarMateriasComponent implements OnInit {
  public addMateriaForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private materiasService: MateriasService, private authService: AuthService) { }
  listadoMaterias: any = [];
  ngOnInit() {
    this.addMateriaForm = this.formBuilder.group({
      materia: ['', [Validators.required]]
    });

    this.materiasService.obtenerMateriasDisponibles(this.authService.getUsuario().id).subscribe((data) => {
      this.listadoMaterias = data;
    });
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
    this.materiasService.inscribirseMateria(request.materia, this.authService.getUsuario().id).subscribe((data) => {
      console.log('Cargado');
      this.onReset();
    });
  }

  onReset() {
    this.submitted = false;
    this.addMateriaForm.reset();
  }
}
