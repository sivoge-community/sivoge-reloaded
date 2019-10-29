import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-default',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'analytics';

  constructor() { }

  ngOnInit() {
  }

}
