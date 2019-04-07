import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TAREA } from '../../shared/interfaces/tarea.interface';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from '../../shared/services/usuarios.service';
import { Tarea } from '../../shared/clases/tarea';
import { TareasService } from '../../shared/services/tareas.service';
import * as moment from 'moment';
@Component({
  selector: 'app-admin-tareas',
  templateUrl: './admin-tareas.component.html',
  styleUrls: ['./admin-tareas.component.css']
})
export class AdminTareasComponent implements OnInit, AfterContentInit {

  columnas = ['usuario', 'fechacreacion', 'fechaejecucion'  ];
  dataSource = new MatTableDataSource([]);

  @ViewChild('paginatorUser') paginatorUser: MatPaginator;
  @ViewChild('sortUser')  sortUser: MatSort;

  tareaTable: TAREA = null;
  newtarea = false;

  users = [ {nombre: 'juan', id: '2'}, {nombre: 'carlos', id: '3'}];

  constructor(private  _usuarioService: UsuariosService, private _tareaService: TareasService) { }

  ngOnInit() {

    this.dataSource.data = this._tareaService.getAll();
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
  consultarTarea(row) {

    console.log(row);
    this.newtarea = false;
    this.tareaTable = row;
    this._usuarioService.centerView('consultarTarea');

  }

  /**
   * este metodo crea una instancia vacia de una tarea
   */
  newTarea() {

   this.tareaTable = new Tarea( '' , true, moment().format('L') , '' , '');
   this.newtarea = true;
   this._usuarioService.centerView('consultarTarea');
  }

  addTarea() {

   this.dataSource.data.push( this.tareaTable );
  }

  updatedTarea() {

  console.log( this.tareaTable );

  }


  deletedTarea() {

    console.log( this.tareaTable );
  }


  prueba(form) {

    console.log(form);
  }

}
