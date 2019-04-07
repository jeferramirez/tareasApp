import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class TareasService {

  constructor( private httpClient:  HttpClient) { }



  getAll() {

    return this.httpClient.get(`${environment.APIREST}/tarea`);

   }


   getAllByUser(id: number) {

    return this.httpClient.get(`${environment.APIREST}/tarea/${id}/todas`).toPromise();

   }
   postTarea( tarea ) {

     return this.httpClient.post(`${environment.APIREST}/tarea`, tarea);

   }

   deletedTarea( id: number ) {


     return this.httpClient.delete(`${environment.APIREST}/tarea/${id}`);


   }

   updatedTarea(tarea) {

    return this.httpClient.put(`${environment.APIREST}/tarea`, tarea);

   }
}
