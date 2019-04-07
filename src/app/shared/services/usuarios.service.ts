import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class UsuariosService {

  constructor() { }


  getAll() {

    return [

     {
       nombre: 'Juan',
       apellido: 'Perez',
       email: 'juan@mail.com',
       estado: true,
       fechacreacion: '2018-04-23'

     },

     {
      nombre: 'Pedro',
      apellido: 'torres',
      email: 'pedro@mail.com',
      estado: true,
      fechacreacion: '2018-04-23'

    },
    {
      nombre: 'Ivan',
      apellido: 'ramirez',
      email: 'ivan@mail.com',
      estado: true,
      fechacreacion: '2018-04-23'

    },

    {
      nombre: 'Carlos',
      apellido: 'Perez',
      email: 'carlos@mail.com',
      estado: true,
      fechacreacion: '2018-04-23'

    }




    ];
  }




  centerView(id) {

    setTimeout(() => {
      const element = document.getElementById(id);
      element.scrollIntoView({block: 'end', behavior: 'smooth'});

    }, 100);
  }


  alert( tipo, titulo, text , timer?) {

  return Swal.fire({
      type: tipo,
      title: titulo,
      text: text,
      timer: timer ? timer : 1500
    });
  }
}
