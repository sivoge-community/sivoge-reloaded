import {Injectable} from '@angular/core';
import {RequestAspirantJuryService} from './request-aspirant-jury.service';
import {Observable} from 'rxjs';

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

  updateObject(users: any): any { // Method used to insert a key to initial letter to the main object
    return users.map(user => {
      return Object.assign(
        {
          initialLastName: this.initialLastNameLetter(user.name)
        }, user);
    });
  }

  initialLastNameLetter(lastName: string): string {
    return lastName.split(' ')[0][0];
  }

  uniqueLetters(initialLastNameLetter: Array<any>) {
    const b: Array<any> = [];
    initialLastNameLetter.map(data => {
      b.push(data.initialLastName);
    });
    return [...new Set(b)];
  }
}
