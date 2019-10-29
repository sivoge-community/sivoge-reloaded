import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public readonly url: string;
  private readonly header: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    localStorage.setItem('session-state',
      JSON.stringify({active: true }));
    localStorage.setItem('session-data',
      JSON.stringify({id: 5, name: 'votaciones 2019', date: '2019-12-21'}));
    // TODO: tengo que mover esto de arriba al guardian en login al iniciar sesión
    this.url = environment.urlServer;
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getSessionState(): boolean {
    return JSON.parse(
      localStorage.getItem('session-state')
    ).active;
  }

  getSessions = (): Observable<any> => this.httpClient.get(`${this.url}session`);

  getActiveSession() {
    return JSON.parse(localStorage.getItem('session-data'));
  }
}
