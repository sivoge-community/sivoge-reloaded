import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-teacher',
  templateUrl: './modal-create-teacher.component.html',
  styleUrls: ['./modal-create-teacher.component.css']
})
export class ModalCreateTeacherComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
