import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginMail : string = '';
  loginPassword : string = '';
  path : string = '';

  authenticate(){
    let user = JSON.parse(localStorage.getItem(this.loginMail) || "");
    if(user){
      if(user.password == this.loginPassword){
          sessionStorage.setItem('currentUser' , JSON.stringify(user));
          this.path = 'dashboard'
      }
      else{
        alert("Incorrect email or password.")
      }
    }
    
  }
}
