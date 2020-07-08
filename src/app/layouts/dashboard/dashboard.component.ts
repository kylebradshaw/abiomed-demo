import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  // @ViewChild('speeder') public scrollSpeed: ElementRef;
  scrollSpeedValue = 30;

  constructor() { }

  ngOnInit(): void {
  }

  onScrollSpeed($event: any): void {
    this.scrollSpeedValue = $event.target.value;
  }

}
