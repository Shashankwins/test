import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  uName : string ="";
  psw : string ="";
  test : string ="";
  c : string = this.test;
  
  cls(){
    this.uName="";
    this.psw="";
  }

  mask(){
    let a="";
    let b="";
    for(let i=0;i<this.uName.length;i++)
    {
      a=a+"X";
    }
    this.uName=a;
    for(let i=0;i<this.psw.length;i++)
    {
      b=b+"X";
    }
    this.psw=b;
}
} 
