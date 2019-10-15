import {Component, OnInit} from '@angular/core';
import {AdminModalsService} from '../../../../services/admin-modals.service';
import {ModalVotingSessionComponent} from '../main/modals/modal-voting-session/modal-voting-session.component';
import {ModalUserFileUploadComponent} from '../main/modals/modal-user-file-upload/modal-user-file-upload.component';
import {ModalCreateTeacherComponent} from '../main/modals/modal-create-teacher/modal-create-teacher.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private adminModalsService: AdminModalsService) { }

  ngOnInit() {
  }

  openSessionModal() {
    this.adminModalsService.openSessionModal(ModalVotingSessionComponent);
  }

  openFileUploadModal() {
    this.adminModalsService.openFileUploadModal(ModalUserFileUploadComponent);
  }

  openTeacherModal() {
    this.adminModalsService.openTeacherModal(ModalCreateTeacherComponent);
  }

}
