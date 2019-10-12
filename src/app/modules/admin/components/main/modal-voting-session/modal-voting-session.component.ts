import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-voting-session',
  templateUrl: './modal-voting-session.component.html',
  styleUrls: ['./modal-voting-session.component.css']
})
export class ModalVotingSessionComponent implements OnInit {
  private currentDate = new Date();

  private startTime = {
    hour: 10,
    minute: 0
  };
  private endTime = {
    hour: 12,
    minute: 0
  };

  private date = {
    year: this.currentDate.getFullYear(),
    month: this.currentDate.getMonth() + 1,
    day: this.currentDate.getDate()
  };

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {  }

}
