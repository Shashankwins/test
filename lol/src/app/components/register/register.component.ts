import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name : string = '';
  mail : string = '';
  password : string = '';

  register(){
    let user = {
      'name' : this.name,
      'mail' : this.mail,
      'password' : this.password
    };
    localStorage.setItem( user.mail , JSON.stringify(user))
  }
}