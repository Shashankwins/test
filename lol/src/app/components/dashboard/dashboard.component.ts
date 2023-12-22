import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentUser = JSON.parse(sessionStorage.getItem('currentUser')  || "");
  name = this.currentUser.name;
}
