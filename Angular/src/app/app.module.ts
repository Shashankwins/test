import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitButtonComponent } from './components/digit-button/digit-button.component';
import { SpecialButtonComponent } from './components/special-button/special-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitButtonComponent,
    SpecialButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
