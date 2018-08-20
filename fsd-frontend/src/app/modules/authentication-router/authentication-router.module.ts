import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../authentication/components/register/register.component';
import { LoginComponent } from '../authentication/components/login/login.component';
import { LogoutComponent } from '../authentication/components/logout/logout.component';
const authRoutes:Routes=[
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'logout',
        component:LogoutComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(authRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AuthenticationRouterModule { }
