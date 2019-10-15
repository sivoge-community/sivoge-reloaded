import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SessionDate} from '../../../../../../classes/models/date.model';

@Component({
  selector: 'app-modal-voting-session',
  templateUrl: './modal-voting-session.component.html',
  styleUrls: ['./modal-voting-session.component.css']
})
export class ModalVotingSessionComponent implements OnInit {
  private currentDate = new Date();

  private startTime = {
    hour: 7,
    minute: 0
  };
  private endTime = {
    hour: 12,
    minute: 0
  };

  public date: SessionDate = new SessionDate(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 1,
    this.currentDate.getDate()
  );

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {  }

}
