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
      cupos: [0, [Validators.required]],
      profesor: [Object, Validators.required],
      foto: ['', Validators.required],
    });

    this.listadoProfesores = 
    this.usuarioService.obtenerProfesores().subscribe((data) => {
      this.listadoProfesores = data;
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
    const profesor = this.listadoProfesores[this.addMateriaForm.value.profesor];
    this.addMateriaForm.value.profesor = { 
      id: profesor.id,
      nombre: profesor.nombre
    };
    const request = this.addMateriaForm.value;
    console.log('Cargare el obj: ' + request);
    this.materiasService.nuevaMateria(request).subscribe((data) => {
      console.log('Cargado');
      this.onReset();
    });
  }

  onReset() {
    this.submitted = false;
    this.addMateriaForm.reset();
  }

  getImagen(readerEvt) {
    //console.log('change no input file', readerEvt);
    let file = readerEvt.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.addMateriaForm.value.foto = reader.result.toString();
    };
    reader.onerror = function (error) {
      console.log('Erro ao ler a imagem : ', error);
    };
  }

}

