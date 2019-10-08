import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from '../../guards/login.guard';
import {AdminComponent} from './components/main/admin.component';
import {AdminDefaultComponent} from './components/main/admin-default/admin-default.component';

const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  /*{path: 'admin', component: AdminComponent, canActivate: [LoginGuard], children: []}, //TODO: Aquí también necesitaré un can activateChild para cuando no se pueda modificar algun dato dado x condicion*/
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: AdminDefaultComponent}
    ]
  } // Esto es provisional, luego se cambia por el de arriba
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
