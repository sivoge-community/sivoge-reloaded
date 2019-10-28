import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {NgbDatepickerModule, NgbModalModule, NgbPaginationModule, NgbTimepickerModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AdminComponent } from './components/main/admin.component';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AdminDefaultComponent } from './components/main/sections/admin-default/admin-default.component';
import { ModalVotingSessionComponent } from './components/modals/modal-voting-session/modal-voting-session.component';
import { ModalUserFileUploadComponent } from './components/modals/modal-user-file-upload/modal-user-file-upload.component';
import { ModalCreateTeacherComponent } from './components/modals/modal-create-teacher/modal-create-teacher.component';
import { AdminStudentComponent } from './components/main/sections/admin-student/admin-student.component';
import { AdminStudentUpdateComponent } from './components/main/sections/admin-student-update/admin-student-update.component';

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
    SanitizeHtmlPipe,
    ModalUserFileUploadComponent,
    ModalCreateTeacherComponent,
    AdminStudentComponent,
    AdminStudentUpdateComponent
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
    HttpClientModule,
    NgbTimepickerModule,
    NgbDatepickerModule,
    NgbPaginationModule,
    NgbTooltipModule
  ],
  providers: [AdminModalsService],
  entryComponents: [
    ModalVotingSessionComponent,
    ModalUserFileUploadComponent,
    ModalCreateTeacherComponent
  ]
})
export class AdminModule { }
