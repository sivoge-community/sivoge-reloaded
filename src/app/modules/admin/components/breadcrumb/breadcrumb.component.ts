import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public dateTime: Date = new Date();
  public monthYear: any = {
    month: 0,
    year: 0
  };

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.dateTime = new Date();
      this.monthYear = {
        month: (this.dateTime.getMonth() + 1),
        year: this.dateTime.getFullYear()
      };
    }, 1000);
  }

}
