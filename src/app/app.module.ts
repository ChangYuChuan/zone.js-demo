import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    InnerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
