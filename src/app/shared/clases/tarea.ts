/**
 *
 * @export
 * @class Tarea
 */
export class Tarea {

  descripcion: String;
  estado: Boolean;
  fecha_creacion: String;
  fecha_ejecucion: String;
  usuario_id: number;


  constructor( descripcion, estado , fechacreacion, fechaejecucion,   usuario_id ) {


    this.descripcion = descripcion;
    this.estado = estado;
    this.fecha_creacion = fechacreacion;
    this.fecha_ejecucion = fechaejecucion;
    this.usuario_id = usuario_id;


  }
}
