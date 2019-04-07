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
  fecha_creacion: string;

  constructor( nombre, apellido , email, estado, fecha_creacion ) {


    this.nombre = nombre;
    this.email = email;
    this.estado = estado;
    this.apellido = apellido;
    this.fecha_creacion = fecha_creacion;


  }
}
