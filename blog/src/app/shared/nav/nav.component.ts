import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[DatePipe]
})
export class NavComponent implements OnInit, AfterViewInit
{
  today = "";
  private animationRequest;

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void
  {
    this.setToday();
  }

  ngAfterViewInit(): void
  {
    this.animate();
  }

  ngOnDestroy(): void
  {
    cancelAnimationFrame(this.animationRequest);
  }

  private animate()
  {
    this.setToday();
    this.animationRequest = requestAnimationFrame(this.animate.bind(this));
  }

  setToday()
  {
    let datetime = new Date();
    this.today = this.datepipe.transform(datetime, 'EEEE, MMMM dd, yyyy');
  }
}
