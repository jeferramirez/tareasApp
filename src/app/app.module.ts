import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminTareasComponent } from './components/admin-tareas/admin-tareas.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { UsuariosService } from './shared/services/usuarios.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import {MatInputModule} from '@angular/material/input';
import { TareasService } from './shared/services/tareas.service';
import { RutasRoutingModule } from './rutas/rutas-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminUsersComponent,
    AdminTareasComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    RutasRoutingModule,
    MatSelectModule


  ],
  providers: [
    UsuariosService,
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
