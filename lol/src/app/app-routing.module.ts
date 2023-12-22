import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
{path:'', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'dashboard', component: DashboardComponent, children: [{path:'', component: HomeComponent }, {path:'student', component: StudentComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, DashboardComponent, HomeComponent, StudentComponent]
