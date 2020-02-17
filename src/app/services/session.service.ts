import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {VotingSession} from '../classes/models/voting-session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public readonly url: string;
  private readonly header: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.setLocalStorageItem(); // TODO: Delete this when login be working
    this.url = environment.urlServer;
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  setLocalStorageItem() {
    // TODO: Move this to login
    localStorage.setItem('session-state',
      JSON.stringify({active: this.getSessionState()}));
    if (this.getSessionState) {
      // TODO: This is hardcoded. this must come from database
      localStorage.setItem('session-data',
        JSON.stringify({id: 5, name: 'votaciones 2019', date: '2019-12-21', start_time: '08:30:00', end_time: '12:00:00'}));
    }
  }

  getLocalStorageItem = (item: string) => localStorage.getItem(item);

  deleteLocalStorageSessionItems() {
    localStorage.removeItem('session-state');
    localStorage.removeItem('session-data');
  }

  getSessionState = (): boolean => true; // TODO: This must be taken from database

  getSessions = (): Observable<any> => this.httpClient.get(`${this.url}session`);

  getActiveSession = () => this.getSessionState() ? JSON.parse(this.getLocalStorageItem('session-data')) : null;

  updateSession = (session: VotingSession): Observable<any> => this.httpClient.put(`${this.url}`, session, {headers: this.header});

  getTimeSplit = (time: string, sep: string) => time.split(sep);
}
