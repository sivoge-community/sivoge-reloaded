import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from '../../guards/login.guard';
import {AdminComponent} from './components/main/admin.component';
import {AdminDefaultComponent} from './components/main/sections/admin-default/admin-default.component';
import {AdminStudentComponent} from './components/main/sections/admin-student/admin-student.component';
import {AdminStudentUpdateComponent} from './components/main/sections/admin-student-update/admin-student-update.component';

const routes: Routes = [
  {
    // tslint:disable-next-line:max-line-length
    path: 'admin', component: AdminComponent, children: [ /*canActivate: [LoginGuard], TODO: Aquí también necesitaré un can activateChild para cuando no se pueda modificar algun dato dado x condicion*/
      {path: '', component: AdminDefaultComponent},
      {path: 'sessions', component: AdminDefaultComponent}, // TODO: Change this for session component
      {path: 'session/:id', component: AdminDefaultComponent}, // TODO: Change this for session component
      {path: 'teachers', component: AdminDefaultComponent}, // TODO: Change this for teacher component
      {path: 'teacher/:id', component: AdminDefaultComponent}, // TODO: Change this for teacher component
      {path: 'profile', component: AdminDefaultComponent}, // TODO: Change this for profile component. Admin profile
      {path: 'profile/:id', component: AdminDefaultComponent}, // TODO: Change this for profile component
      {path: 'aspirant/teachers', component: AdminDefaultComponent}, // TODO: Change this for aspirant teacher component
      {path: 'aspirant/teacher/:id', component: AdminDefaultComponent}, // TODO: Change this for aspirant teacher component
      {path: 'aspirant/students', component: AdminStudentComponent},
      {path: 'aspirant/student/:id', component: AdminStudentUpdateComponent},
      {path: 'juries', component: AdminStudentUpdateComponent}, // TODO: Change this for juries component
      {path: 'jury/:id', component: AdminStudentUpdateComponent}, // TODO: Change this for jury component
      {path: 'aspirant-types', component: AdminStudentUpdateComponent}, // TODO: Change this for aspirant-types component
      {path: 'aspirant-type/:id', component: AdminStudentUpdateComponent}, // TODO: Change this for aspirant-type component
      {path: 'gen-passwords', component: AdminStudentUpdateComponent}, // TODO: Change this for gen-passwords component
      // tslint:disable-next-line:max-line-length
      {path: 'gen-password/:id', component: AdminStudentUpdateComponent}, // TODO: Change this for gen-password component, depending on course
    ]
  },
  {path: 'developers', component: AdminStudentUpdateComponent}, // TODO: Change this for developers component
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
