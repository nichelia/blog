import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DatePipe]
})
export class HomeComponent implements OnInit
{
  today = "";

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void
  {
    this.setToday();
  }

  neLogoClasses()
  {
    let classes = {
      "ne-logo": true,
    };
    return classes;
  }

  setToday()
  {
    let datetime = new Date();
    this.today = this.datepipe.transform(datetime, 'EEEE, MMMM dd, yyyy');
  }

}
