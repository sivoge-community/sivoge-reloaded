import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminSectionsService} from '../../../../../services/admin-sections.service';
import {Aspirant} from '../../../../../classes/models/aspirant.model';
import {Observable, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-student',
  templateUrl: './aspirant-student.component.html',
  styleUrls: ['./aspirant-student.component.css']
})
export class AspirantStudentComponent implements OnInit, OnDestroy {
  public title = 'Estudiantes';

  private unsubscribe$ = new Subject<void>();
  private student$: Aspirant[];
  public studentsLength: number;
  public page: number;
  public pageSize: number;

  constructor(private adminSectionsService: AdminSectionsService, private router: Router) { }

  ngOnInit() {
    this.adminSectionsService.students
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(student => {
        this.student$ = this.updateObject(student);
        this.studentsLength = student.length;
      });
    this.page = 1;
    this.pageSize = 7;
    console.log(this.student$);
  }

  updateObject(student) {
    return this.adminSectionsService.updateObject(student);
  }

  deleteAspirant(student: Aspirant) {
    this.student$.forEach((item, index) => {
      if (item.id === student.id) {
        this.student$.splice(index, 1); // Here i delete the student from the array
        this.adminSectionsService.deleteStudent(item.id)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(); // Here i delete the student from the backend
      }
    });
  }

  onNewAspirantClick() {
    console.log('se hizo click');
  }

  onDeleteClick(aspirant: Aspirant) {
    this.deleteAspirant(aspirant);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

}
