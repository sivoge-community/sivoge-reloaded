import {SessionDate} from './date.model';
import {SessionTime} from './session-time.model';

export class VotingSession {
  constructor(public name: string,
              public date: SessionDate,
              public startTime: SessionTime,
              public endTime: SessionTime,
              public id?: number) {}
}
