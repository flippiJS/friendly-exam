export abstract class Usuario {

  public id: number;
  public email: string;
  public clave: string;
  public rol: number;
  public foto: string;

  constructor() {
  }
}

export enum UsuarioRol {
  Administrador = 3,
  Profesor = 2,
  Alumno = 1
}