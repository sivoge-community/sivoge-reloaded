import {SessionDate} from './date.model';

export class VotingSession {
  constructor(public name: string,
              public date: SessionDate,
              public startTime: number,
              public endTime: number,
              public id?: number) {}
}
