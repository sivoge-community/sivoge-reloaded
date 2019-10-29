import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdminModule} from '../admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from '../../app.component';
import { NotFoundComponent } from '../../errors/not-found/not-found.component';
import { ForbiddenComponent } from '../../errors/forbidden/forbidden.component';
import { InternalServerErrorComponent } from '../../errors/internal-server-error/internal-server-error.component';
import { LoginComponent } from '../login/login.component';

import {LoginService} from '../../services/login.service';
import { DeveloperComponent } from '../developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ForbiddenComponent,
    InternalServerErrorComponent,
    LoginComponent,
    DeveloperComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
