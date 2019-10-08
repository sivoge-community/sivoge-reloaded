import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(day: any, month: any, year: any): any {
    return `${day} de ${this.changeMonth(month)} del ${year}`;
  }

  changeMonth(monthNumber: any) {
    switch (monthNumber) {
      case 1:
        return 'Enero';
      case 2:
        return 'Febrero';
      case 3:
        return 'Marzo';
      case 4:
        return 'Abril';
      case 5:
        return 'Mayo';
      case 6:
        return 'Junio';
      case 7:
        return 'Julio';
      case 8:
        return 'Agosto';
      case 9:
        return 'Septiembre';
      case 10:
        return 'Obtubre';
      case 11:
        return 'Noviembre';
      case 12:
        return 'Diciembre';
    }
  }

}
