import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[DatePipe]
})
export class FooterComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void { }

}
