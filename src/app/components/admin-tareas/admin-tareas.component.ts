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

  columnas = ['usuario', 'fecha_creacion', 'fecha_ejecucion'  ];
  dataSource = new MatTableDataSource([]);

  @ViewChild('paginatorUser') paginatorUser: MatPaginator;
  @ViewChild('sortUser')  sortUser: MatSort;

  tareaTable: TAREA = null;
  newtarea = false;

  users = [];

  constructor(private  _usuarioService: UsuariosService, private _tareaService: TareasService) { }

  ngOnInit() {

    this._tareaService.getAll().subscribe(( res: Array<any>) => {


      res.forEach( element => {
        this._usuarioService.getOne(element.usuario_id)
        .then( user => {
          console.log(user);
          element['usuario'] = user['nombre'];
        });
      });

      this.dataSource.data = res;

    });

    this._usuarioService.getAllUsers().subscribe( (res: Array <any>) => {

     this.users = res;
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

   this.tareaTable = new Tarea( '' , true, moment().format('YYYY-MM-DD') , '' , 1);
   this.newtarea = true;
   this._usuarioService.centerView('consultarTarea');
  }

  addTarea() {

     this._tareaService.postTarea(this.tareaTable)
     .subscribe(res => {

      console.log(res);
      this._usuarioService.alert('success', 'Almacenado con éxito' , 'todos los campos fueron almacenados')
      .then( () => this._usuarioService.refreshContent('admintareas') );

     });

    console.log(this.tareaTable);
  }

  updatedTarea() {

    this._tareaService.updatedTarea(this.tareaTable)
    .subscribe( res => {

      this._usuarioService.alert('info', 'Actualizada con éxito' , 'la tarea fue actualizada')
      .then( () => this._usuarioService.refreshContent('admintareas') );
    });

  }


  deletedTarea() {

    this._tareaService.deletedTarea(this.tareaTable.id )
    .subscribe( res => {

      this._usuarioService.alert('info', 'Eliminado con éxito' , 'la tarea fue eliminada')
      .then( () => this._usuarioService.refreshContent('admintareas') );
    });
  }


  prueba(form) {

    console.log(form);
  }

  setUser(value) {
    this.tareaTable.usuario_id = value;
  }

}
