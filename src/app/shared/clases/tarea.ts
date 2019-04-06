/**
 *
 * @export
 * @class Tarea
 */
export class Tarea {

  descripcion: String;
  estado: Boolean;
  fechacreacion: String;
  fechaejecucion: String;
  usuario_id: String;


  constructor( descripcion, estado , fechacreacion, fechaejecucion,   usuario_id: String;
    ) {


    this.descripcion = descripcion;
    this.estado = estado;
    this.fechacreacion = fechacreacion;
    this.fechaejecucion = fechaejecucion;
    this.usuario_id = usuario_id;


  }
}
