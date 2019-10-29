import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent} from './components/main/admin.component';
import {HomeComponent as AdminHome} from './components/main/home/home.component';
import {AspirantStudentComponent} from './components/aspirant/aspirant-student/aspirant-student.component';
import {UpdateComponent as StudentUpdate} from './components/aspirant/aspirant-student/update/update.component';
import {SessionsComponent} from './components/session/sessions/sessions.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileUpdateComponent} from './components/profile/profile-update/profile-update.component';
import {UpdateComponent as AspTeacherUpdate} from './components/aspirant/aspirant-teacher/update/update.component';
import {AspirantTeacherComponent} from './components/aspirant/aspirant-teacher/aspirant-teacher.component';
import {TeacherComponent} from './components/teacher/teacher.component';
import {UpdateComponent as TeacherUpdate} from './components/teacher/update/update.component';
import {UpdateComponent as SessionUpdate} from './components/session/update/update.component';
import {JuryComponent} from './components/jury/jury.component';
import {UpdateComponent as JuryUpdate} from './components/jury/update/update.component';
import {UpdateComponent as AspTypeUpdate} from './components/aspirant-type/update/update.component';
import {AspirantTypeComponent} from './components/aspirant-type/aspirant-type.component';
import {GenPasswordComponent} from './components/gen-password/gen-password.component';

import {LoginGuard} from '../../guards/login.guard';
import {GradeComponent} from './components/gen-password/grade/grade.component';
import {DeveloperComponent} from '../developer/developer.component';

const routes: Routes = [
  {
    // tslint:disable-next-line:max-line-length
    path: 'admin', component: AdminComponent, children: [ /*canActivate: [LoginGuard], TODO: Aquí también necesitaré un can activateChild para cuando no se pueda modificar algun dato dado x condicion*/
      {path: '', component: AdminHome},
      {path: 'sessions', component: SessionsComponent},
      {path: 'session/:id', component: SessionUpdate},
      {path: 'teachers', component: TeacherComponent},
      {path: 'teacher/:id', component: TeacherUpdate},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/:id', component: ProfileUpdateComponent},
      {path: 'aspirant/teachers', component: AspirantTeacherComponent},
      {path: 'aspirant/teacher/:id', component: AspTeacherUpdate},
      {path: 'aspirant/students', component: AspirantStudentComponent},
      {path: 'aspirant/student/:id', component:  StudentUpdate},
      {path: 'juries', component: JuryComponent},
      {path: 'jury/:id', component: JuryUpdate},
      {path: 'aspirant-types', component: AspirantTypeComponent},
      {path: 'aspirant-type/:id', component: AspTypeUpdate},
      {path: 'gen-passwords', component: GenPasswordComponent},
      {path: 'gen-password/:id', component: GradeComponent},
    ]
  },
  {path: 'developers', component: DeveloperComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
