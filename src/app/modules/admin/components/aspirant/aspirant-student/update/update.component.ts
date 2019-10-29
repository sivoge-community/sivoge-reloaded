import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminSectionsService} from '../../../../../../services/admin-sections.service';
import {Aspirant} from '../../../../../../classes/models/aspirant.model';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-admin-student-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {
  private student$: Observable<any>;
  private unsubscribe$ = new Subject<void>();
  private id: any; // TODO: revisar si es necesaria esta clase
  private flip: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
              private adminSectionsService: AdminSectionsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.student$ = this.adminSectionsService.getStudent(this.id);
  }

  deleteAspirant(id) {
    this.adminSectionsService.deleteStudent(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.router.navigate(['/admin/students']);
      }); // Here i delete the student from the backend
  }

  onDeleteClick(student: Aspirant) {
    console.log(student);
    this.deleteAspirant(student.id);
  }

  toggleFlip() {
    this.flip = !this.flip;
    return 'is-flipped';
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

}
