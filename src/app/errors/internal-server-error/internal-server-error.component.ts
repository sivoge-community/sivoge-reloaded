import { Component, OnInit } from '@angular/core';
import {IError} from '../../classes/interfaces/error.interface';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.css']
})
export class InternalServerErrorComponent implements OnInit, IError {
  public errorCode = 500;
  public errorTitle = '¡ error interno en el servidor !';
  public errorBodyText = 'algo muy malo ha pasado en el servidor y no es posible procesar su petición';

  constructor() { }

  ngOnInit() {
  }

}
