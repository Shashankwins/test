import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-digit-button',
  templateUrl: './digit-button.component.html',
  styleUrls: ['./digit-button.component.css']
})
export class DigitButtonComponent {
@Input() btnValue = '';
// @Output()  inputValue = new EventEmitter();
// valueEmit(){
//   this.valueEmit.emit(btnValue)
// }
}
