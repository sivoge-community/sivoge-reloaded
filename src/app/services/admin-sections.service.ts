import {Injectable} from '@angular/core';
import {RequestAspirantJuryService} from './request-aspirant-jury.service';
import {Observable} from 'rxjs';
import {Aspirant} from '../classes/models/aspirant.model';

@Injectable({
  providedIn: 'root'
})
export class AdminSectionsService {
  public students: Observable<any>;
  public teachers: Observable<any>;

  constructor(private aspirantJuryService: RequestAspirantJuryService) {
    this.students = this.aspirantJuryService.getStudents();
    this.aspirantJuryService.getStudents();
    this.teachers = this.aspirantJuryService.getTeachers();
  }

  updateObject(users: any): any { // Method used to insert keys to the main object
    return users.map(user => {
      return Object.assign(
        {
          initialLastName: this.initialLastNameLetter(user.lastName),
          displayNames: this.nameLastNameSplitter(user.name, user.lastName)
        }, user);
    });
  }

  initialLastNameLetter = (lastName: string): string => lastName.split(' ')[0][0];

  nameLastNameSplitter(dataName: any, dataLastName: any) {
    const name = dataName.split(' ')[0];
    const lastName = dataLastName.split(' ')[0];
    return `${name} ${lastName}`;
  }

  getStudent = (id: string): Observable<any> => this.aspirantJuryService.getStudent(id);

  updateStudent = (aspirant: Aspirant): Observable<any> => this.aspirantJuryService.updateStudent(aspirant);

  deleteStudent = (id: number): Observable<any> => this.aspirantJuryService.deleteStudent(id);
}
