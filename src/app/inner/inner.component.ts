import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css'],
})
export class InnerComponent implements OnInit {
  constructor() {}
  logChangeDetection() {
    console.log('inner', 'rendered');
    return true;
  }
  ngOnInit() {}
}
