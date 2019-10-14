import { Injectable } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AdminModalsService {

  constructor(private modalService: NgbModal) {}

  openSessionModal(modalComponent) {
    this.modalService.open(modalComponent, {windowClass: 'modal-holder'});
  }

  openFileUploadModal(modalComponent) {
    this.modalService.open(modalComponent, {windowClass: 'modal-holder'});
  }

  openTeacherModal(modalComponent) {
    this.modalService.open(modalComponent, {windowClass: 'modal-holder'});
  }

}
