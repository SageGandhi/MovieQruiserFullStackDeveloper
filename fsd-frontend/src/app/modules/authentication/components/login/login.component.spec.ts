import { NO_ERRORS_SCHEMA, inject, Inject } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../service/authentication.service';
import { MaterialModule } from '../../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import {By} from "@angular/platform-browser";

class RegisterComponentFixture{}
describe('LoginComponent Unit Test', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async()=>{
    TestBed.configureTestingModule({
      declarations:[LoginComponent],
      providers:[AuthenticationService],
      imports:[MaterialModule,FormsModule,HttpClientModule,RouterTestingModule.withRoutes([{
        path:'register',component:RegisterComponentFixture
      }])]
    }).compileComponents();
  });

  beforeEach(async()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LoginComponent Is Truthy',()=>{
    expect(component).toBeTruthy();
  });

  it("Should Have 1 Input Type Email,1 Input TYpe Password & 2 button",()=>{
    expect(fixture.debugElement.query(By.css('.test-register-button'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input[type=email]'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input[type=password]'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.test-login-button'))).toBeTruthy();
  });
});
