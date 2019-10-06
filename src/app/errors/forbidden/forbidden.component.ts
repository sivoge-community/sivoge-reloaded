import { Component, OnInit } from '@angular/core';
import {IError} from '../../classes/interfaces/error.interface';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit, IError {
  public errorCode = 403;
  public errorTitle = '! página prohibida ¡';
  public errorBodyText = 'estás intentando ingresar a una página a la cual no tienes acceso';

  constructor() { }

  ngOnInit() {
  }

}
