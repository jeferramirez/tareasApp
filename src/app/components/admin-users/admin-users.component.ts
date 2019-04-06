import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../shared/services/usuarios.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { USUARIO } from '../../shared/interfaces/usuario.interface';
import { User } from '../../shared/clases/usuario';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit, AfterContentInit {


  columnas = ['nombre', 'apellido', 'email', 'estado' , 'fechacreacion', ];
  dataSource = new MatTableDataSource([]);

  @ViewChild('paginatorUser') paginatorUser: MatPaginator;
  @ViewChild('sortUser')  sortUser: MatSort;

  usuarioTable: USUARIO = null;
  newuser = false;
  constructor( private _usuarioService: UsuariosService) { }

  ngOnInit() {
    this.dataSource.data = this._usuarioService.getAll();
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

  }

  /**
   * este metodo crea una instancia vacia de un usuario
   */
  newUser() {

   this.usuarioTable = new User( '' , '' , '' , true, '');
   this.newuser = true;
   this._usuarioService.centerView('consultaruser');
  }

  addUser() {

   this.dataSource.data.push( this.usuarioTable );
  }

  updatedUser() {

  console.log( this.usuarioTable );

  }


  deletedUser() {

    console.log( this.usuarioTable );
  }


  prueba(form) {

    console.log(form);
  }
}


