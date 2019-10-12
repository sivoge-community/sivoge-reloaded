import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from '../../errors/not-found/not-found.component';
import {LoginComponent} from '../login/login.component';
import {PreventLoggedInAccessGuard} from '../../guards/prevent-logged-in-access.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent}, /*canActivate: [PreventLoggedInAccessGuard]*/
  {path: '', redirectTo: '/admin', pathMatch: 'full'}, /* canActivate: [PreventLoggedInAccessGuard]*/
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
