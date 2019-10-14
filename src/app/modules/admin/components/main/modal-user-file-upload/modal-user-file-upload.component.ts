import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-user-file-upload',
  templateUrl: './modal-user-file-upload.component.html',
  styleUrls: ['./modal-user-file-upload.component.css']
})
export class ModalUserFileUploadComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
