import {Component, OnInit} from '@angular/core';
import {AdminSectionsService} from '../../../../../../services/admin-sections.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  public title = 'Estudiantes';

  public students: Array<any>;
  public pageSymbols = [];
  public page: number;
  public pageSize: number;

  constructor(private adminSectionsService: AdminSectionsService) { }

  ngOnInit() {
    this.students = this.updateObject(this.adminSectionsService.students);
    this.pageSymbols = this.uniqueLetters(this.students);
    this.page = 1;
    this.pageSize = 7;
  }

  getStudentsLength() {
    return this.students.length;
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

  getPageSymbols(current: number) {
    return this.pageSymbols[current - 1];
  }

}
