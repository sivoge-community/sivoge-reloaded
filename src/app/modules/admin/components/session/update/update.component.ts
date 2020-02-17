import { Component, OnInit } from '@angular/core';
import {SessionDate} from '../../../../../classes/models/date.model';
import {SessionService} from '../../../../../services/session.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public title = 'Actualizar sesión de votación';
  private currentDate = new Date();
  public sessionName: string;
  public sessionDate: SessionDate;
  public startTime: {hour, minute}; // TODO: This comes from database
  public endTime: {hour, minute}; // TODO: This comes from database
  private modifyButton = true;

  public date: SessionDate;

  constructor(private sessionService: SessionService) {
    this.date = new SessionDate(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      this.currentDate.getDate()
    );
  }

  ngOnInit() {
    const aux1 = this.getTimeSplit()[0];
    const aux2 = this.getTimeSplit()[1];
    const aux3 = this.getTimeSplit()[2];
    this.sessionName = this.sessionService.getActiveSession().name;
    this.sessionDate = {
      year: +aux3[0], month: +aux3[1], day: +aux3[2]
    };

    this.startTime = {
      hour: +aux1[0], minute: +aux1[1]
    };
    this.endTime = {
      hour: +aux2[0], minute: +aux2[1]
    };
  }

  updateSession() {
    // this.sessionService.updateSession();
  }

  onChange(): void {
    this.modifyButton = false;
  }

  getTimeSplit(): Array<any> {
    return [
      this.sessionService.getTimeSplit(this.sessionService.getActiveSession().start_time, ':'),
      this.sessionService.getTimeSplit(this.sessionService.getActiveSession().end_time, ':'),
      this.sessionService.getTimeSplit(this.sessionService.getActiveSession().date, '-')
    ];
  }

}
