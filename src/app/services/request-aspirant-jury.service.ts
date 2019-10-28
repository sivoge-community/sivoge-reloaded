import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aspirant} from '../classes/models/aspirant.model';

@Injectable({
  providedIn: 'root'
})
export class RequestAspirantJuryService {
  readonly url: string = 'http://localhost:3000/';
  private readonly header: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.header = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getStudents = (): Observable<any> => this.httpClient.get(`${this.url}aspirant_student`);

  getStudent = (id: string): Observable<any> => this.httpClient.get(`${this.url}aspirant_student?q=${id}`);

  getSortedStudents(ascDesc: boolean): Observable<any> {
    return this.httpClient.get(`${this.url}aspirant_student?_sort=initialLastName&_order=${ascDesc}`);
  }

  updateStudent = (aspirant: Aspirant): Observable<any> => this.httpClient.put(`${this.url}`, aspirant, {headers: this.header});

  deleteStudent = (id: number): Observable<any> => this.httpClient.delete(`${this.url}aspirant_student/${id}`, {headers: this.header});

  getTeachers = (): Observable<any> => this.httpClient.get(`${this.url}aspirant_teacher`);

  getSortedTeachers(ascDesc: boolean): Observable<any> {
    return this.httpClient.get(`${this.url}aspirant_teacher?_sort=initialLastName&_order=${ascDesc}`);
  }
}
