import {Component, OnInit} from '@angular/core';
import {AdminSectionsService} from '../../../../../../services/admin-sections.service';
import {Aspirant} from '../../../../../../classes/models/aspirant.model';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  public title = 'Estudiantes';

  public students: Aspirant[];
  public studentsLength: number;
  public page: number;
  public pageSize: number;

  constructor(private adminSectionsService: AdminSectionsService) { }

  ngOnInit() {
    // this.students = this.updateObject(this.adminSectionsService.students);
    this.adminSectionsService.students.subscribe(aspirant => {
      this.students = aspirant.student;
      this.studentsLength = aspirant.student.length;
    });
    this.page = 1;
    this.pageSize = 7;
  }

  getStudentsLength() {
    return this.studentsLength;
  }

  uniqueLetters(initialLastNameLetter: Array<string>) {
    return this.adminSectionsService.uniqueLetters(initialLastNameLetter);
  }

  updateObject(users) {
    return this.adminSectionsService.updateObject(users);
  }

  onNewAspirantClick() {
    console.log('se hizo click');
  }
  onShowAspirantClick() {
    console.log('se hizo click xD');
  }

}
