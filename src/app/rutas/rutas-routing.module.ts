import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTareasComponent } from '../components/admin-tareas/admin-tareas.component';
import { AdminUsersComponent } from '../components/admin-users/admin-users.component';
import { PrincipalComponent } from '../components/principal/principal.component';

const routes: Routes = [

  {
    component: AdminTareasComponent,
    path: 'admintareas'
  },
  {
    component: AdminUsersComponent,
    path: 'adminusuarios'
  },
  {
    component: PrincipalComponent,
    path: 'inicio'
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
