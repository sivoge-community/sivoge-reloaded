import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestAspirantJuryService {
  readonly url: string = 'http://localhost:3000/';
  private header: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getStudents() {
    return this.httpClient.get(`${this.url}aspirant/`);
  }

  getTeachers() {
    return this.httpClient.get(`${this.url}aspirant/`);
  }

  updateStudents(id: string) {
    // Aqui se debe hacer una request al servidor y pedirle que elimine el dato
  }
}
