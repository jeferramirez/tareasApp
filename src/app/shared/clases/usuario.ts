/**
 *
 * @export
 * @class User
 */
export class User {

  nombre: string;
  apellido: string;
  estado: boolean;
  email: string;
  fechacreacion: string;

  constructor( nombre, apellido , email, estado, fechacreacion ) {


    this.nombre = nombre;
    this.email = email;
    this.estado = estado;
    this.apellido = apellido;
    this.fechacreacion = fechacreacion;


  }
}
