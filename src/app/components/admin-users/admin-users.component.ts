import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../shared/services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { USUARIO } from '../../shared/interfaces/usuario.interface';
import { User } from '../../shared/clases/usuario';
import * as moment from 'moment';
import { TareasService } from '../../shared/services/tareas.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit, AfterContentInit {


  columnas = ['nombre', 'apellido', 'email' , 'fecha_creacion', ];
  dataSource = new MatTableDataSource([]);

  @ViewChild('paginatorUser') paginatorUser: MatPaginator;
  @ViewChild('sortUser')  sortUser: MatSort;

  usuarioTable: USUARIO = null;
  newuser = false;

  tareas = [];
  constructor( private _usuarioService: UsuariosService,  private _tareaService: TareasService) { }

  ngOnInit() {

    this._usuarioService.getAllUsers().subscribe( (res: Array <any>) => {

      console.log(res);
      this.dataSource.data = res;

    }, err => console.log(err));

  }

  ngAfterContentInit() {


    this.dataSource.sort = this.sortUser;

  }

  /**
   *  filtra los resultados de la tabla
   * @param filterValue
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


/**
 *  trae una fila de la tabla
 * @param row
 */
  consultarUser(row) {

    console.log(row);
    this.newuser = false;
    this.usuarioTable = row;
    this._usuarioService.centerView('consultaruser');


     /* trae todas las tareas asociadas a un usuario*/
    this._tareaService.getAllByUser(row.id)
    .then( (res: any) => {

      this.tareas = res;
      console.log(res);
    });

  }

  /**
   * este metodo crea una instancia vacia de un usuario
   */
  newUser() {

   this.usuarioTable = new User( '' , '' , '' , true, moment().format('YYYY-MM-DD'));
   this.newuser = true;
   this._usuarioService.centerView('consultaruser');

  }

  addUser(form) {


   this._usuarioService.postUser(this.usuarioTable)
   .subscribe(res => {

    console.log(res);
    this._usuarioService.alert('success', 'Almacenado con éxito' , 'todos los campos fueron almacenados')
    .then( () => this._usuarioService.refreshContent('adminusuarios') );

   });



  }

  updatedUser() {

  console.log( this.usuarioTable );

  this._usuarioService.updatedUser(this.usuarioTable)
  .subscribe( res => {

    this._usuarioService.alert('info', 'Actualizado con éxito' , 'todos los campos fueron almacenados')
    .then(() => this._usuarioService.refreshContent('adminusuarios') );


  });


  }


  deletedUser() {

    console.log( this.usuarioTable );

    this._usuarioService.deletedUser(this.usuarioTable.id )
    .subscribe( res => {

      this._usuarioService.alert('info', 'Eliminado con éxito' , 'el usuario fue eliminado')
      .then( () => this._usuarioService.refreshContent('adminusuarios') );
    });
  }


}


