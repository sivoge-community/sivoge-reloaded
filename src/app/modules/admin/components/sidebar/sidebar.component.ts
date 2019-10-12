import {Component, OnInit} from '@angular/core';
import {AdminModalsService} from '../../../../services/admin-modals.service';
import {ModalVotingSessionComponent} from '../main/modal-voting-session/modal-voting-session.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private modalVotingSessionService: AdminModalsService) { }

  ngOnInit() {
  }

  openSessionModal() {
    this.modalVotingSessionService.openSessionModal(ModalVotingSessionComponent);
  }

}
