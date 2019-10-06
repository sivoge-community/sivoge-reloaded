import { Component, OnInit } from '@angular/core';
import {IError} from '../../classes/interfaces/error.interface';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, IError {
  public errorCode = 404;
  public errorTitle = '¡ página no encontrada !';
  public errorBodyText = 'parece que has intentado buscar una página inexistente';

  constructor() { }

  ngOnInit() {
  }

}
