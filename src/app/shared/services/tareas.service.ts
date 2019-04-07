import { Injectable } from '@angular/core';

@Injectable()
export class TareasService {

  constructor() { }



  getAll() {

    return [

     {
       descripcion: 'Esta es una tarea de prueba',
       fechacreacion: '2018-04-23',
       fechaejecucion: '2018-07-23',
       usuario: 'Carlos',
       usuario_id: '122356',
       estado: true,

     }






    ];

}
}
