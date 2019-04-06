import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TAREA } from '../../shared/interfaces/tarea.interface';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from '../../shared/services/usuarios.service';
import { Tarea } from '../../shared/clases/tarea';

@Component({
  selector: 'app-admin-tareas',
  templateUrl: './admin-tareas.component.html',
  styleUrls: ['./admin-tareas.component.css']
})
export class AdminTareasComponent implements OnInit, AfterContentInit {

  columnas = ['nombre', 'apellido', 'email', 'estado' , 'fechacreacion', ];
  dataSource = new MatTableDataSource([]);

  @ViewChild('paginatorUser') paginatorUser: MatPaginator;
  @ViewChild('sortUser')  sortUser: MatSort;

  tareaTable: TAREA = null;
  newtarea = false;

  constructor(private  _usuarioService: UsuariosService) { }

  ngOnInit() {
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
    this.newtarea = false;
    this.tareaTable = row;
    this._usuarioService.centerView('consultaruser');

  }

  /**
   * este metodo crea una instancia vacia de un usuario
   */
  newUser() {

   this.tareaTable = new Tarea( '' , '' , '' , true, '');
   this.newtarea = true;
   this._usuarioService.centerView('consultaruser');
  }

  addUser() {

   this.dataSource.data.push( this.tareaTable );
  }

  updatedUser() {

  console.log( this.tareaTable );

  }


  deletedUser() {

    console.log( this.tareaTable );
  }


  prueba(form) {

    console.log(form);
  }

}
