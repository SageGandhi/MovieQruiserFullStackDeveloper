import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticationRouterModule } from '../authentication-router/authentication-router.module';

@NgModule({
  imports: [CommonModule,MaterialModule,HttpClientModule,AuthenticationRouterModule,RouterModule,FormsModule],
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  exports: [RegisterComponent, LoginComponent, LogoutComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
