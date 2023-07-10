import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  name = 'Angular ' + VERSION.major;
}
