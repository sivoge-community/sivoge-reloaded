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
import { HomeComponent as AdminHomeComponent} from './components/main/home/home.component';
import { ModalVotingSessionComponent } from './components/modals/modal-voting-session/modal-voting-session.component';
import { ModalUserFileUploadComponent } from './components/modals/modal-user-file-upload/modal-user-file-upload.component';
import { ModalCreateTeacherComponent } from './components/modals/modal-create-teacher/modal-create-teacher.component';
import { AspirantStudentComponent } from './components/aspirant/aspirant-student/aspirant-student.component';
import { UpdateComponent as AspStudentUpdate } from './components/aspirant/aspirant-student/update/update.component';
import { SessionsComponent } from './components/session/sessions/sessions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileUpdateComponent } from './components/profile/profile-update/profile-update.component';
import { AspirantTeacherComponent } from './components/aspirant/aspirant-teacher/aspirant-teacher.component';
import { UpdateComponent as AspTeacherUpdate } from './components/aspirant/aspirant-teacher/update/update.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { UpdateComponent as TeacherUpdate} from './components/teacher/update/update.component';
import { UpdateComponent as SessionUpdate } from './components/session/update/update.component';
import { JuryComponent } from './components/jury/jury.component';
import { UpdateComponent as JuryUpdate} from './components/jury/update/update.component';
import { AspirantTypeComponent } from './components/aspirant-type/aspirant-type.component';
import { UpdateComponent as AspTypeUpdate } from './components/aspirant-type/update/update.component';
import { GenPasswordComponent } from './components/gen-password/gen-password.component';
import { GradeComponent } from './components/gen-password/grade/grade.component';

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
    AdminHomeComponent,
    MonthPipe,
    ModalVotingSessionComponent,
    SanitizeHtmlPipe,
    ModalUserFileUploadComponent,
    ModalCreateTeacherComponent,
    AspirantStudentComponent,
    AspStudentUpdate,
    SessionsComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    AspirantTeacherComponent,
    AspTeacherUpdate,
    TeacherComponent,
    TeacherUpdate,
    SessionUpdate,
    JuryComponent,
    JuryUpdate,
    AspirantTypeComponent,
    AspTypeUpdate,
    GenPasswordComponent,
    GradeComponent
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
