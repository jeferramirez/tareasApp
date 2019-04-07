import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UsuariosService {

  constructor( private httpClient:  HttpClient, private router: Router ) { }


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


  getAllUsers() {

   return this.httpClient.get(`${environment.APIREST}/usuarios`);

  }

  postUser( usuario ) {

    return this.httpClient.post(`${environment.APIREST}/usuarios`, usuario);

  }


  getOne(id: number) {

    return this.httpClient.get(`${environment.APIREST}/usuarios/${id}`).toPromise();

  }
  deletedUser( id: number ) {


    return this.httpClient.delete(`${environment.APIREST}/usuarios/${id}`);


  }

  updatedUser(usuario) {

   return this.httpClient.put(`${environment.APIREST}/usuarios`, usuario);

  }

  refreshContent( ruta: string ) {
    this.router.navigateByUrl('/', {skipLocationChange: true})
    .then(() => this.router.navigate([`/${ruta}`]));
  }

}
