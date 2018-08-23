import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../service/authentication.service';
import { MaterialModule } from '../../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { By } from "@angular/platform-browser";
import { LogoutComponent } from './logout.component';

class LoginComponentFixture { }

describe('LogoutComponent:', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [AuthenticationService],
      imports: [MaterialModule, FormsModule, HttpClientModule,
        RouterTestingModule.withRoutes([
          {path: '', redirectTo:'login',pathMatch:'full'},
          {path: 'login', component: LoginComponentFixture}
        ])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LogoutComponent Is Truthy', () => {
    expect(component).toBeTruthy();
  });

  it('Service Injected Via Component Should Be Instance Of AuthenticationService', () => {
    expect(TestBed.get(AuthenticationService) instanceof AuthenticationService).toBeTruthy();
  });
});
