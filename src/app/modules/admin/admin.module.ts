import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {NgbDatepickerModule, NgbModalModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AdminComponent } from './components/main/admin.component';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AdminDefaultComponent } from './components/main/admin-default/admin-default.component';
import { ModalVotingSessionComponent } from './components/main/modal-voting-session/modal-voting-session.component';

import { MonthPipe } from '../../pipes/month.pipe';
import { SanitizeHtmlPipe } from '../../pipes/sanitize-html.pipe';

import {AdminModalsService} from '../../services/admin-modals.service';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    AdminDefaultComponent,
    MonthPipe,
    ModalVotingSessionComponent,
    SanitizeHtmlPipe
  ],
  exports: [
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModalModule,
    FormsModule,
    NgbTimepickerModule,
    NgbDatepickerModule
  ],
  providers: [AdminModalsService],
  entryComponents: [ModalVotingSessionComponent]
})
export class AdminModule { }
