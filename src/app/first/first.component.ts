import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor() {}
  count: number = 0;
  increase() {
    this.count++;
  }
  logChangeDetection() {
    console.log('first', 'rendered');
    return true;
  }
  ngOnInit() {}
}
