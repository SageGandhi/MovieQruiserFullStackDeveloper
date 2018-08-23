import { TestBed, async, ComponentFixture,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../service/authentication.service';
import { MaterialModule } from '../../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { By } from "@angular/platform-browser";

class RegisterComponentFixture { }
class MockAuthenticationService extends AuthenticationService{}
describe('LoginComponent:', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedAuthService: AuthenticationService;
  let componentAuthService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthenticationService],
      imports: [MaterialModule, FormsModule, HttpClientModule,
        RouterTestingModule.withRoutes([{path: 'register', component: RegisterComponentFixture}]
      )]
    }).overrideComponent(
      LoginComponent,
      {set: {providers: [{provide: MockAuthenticationService, useClass: AuthenticationService}]}}
  ).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    testBedAuthService = TestBed.get(AuthenticationService);
    componentAuthService = fixture.debugElement.injector.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('LoginComponent Is Truthy', () => {
    expect(component).toBeTruthy();
  });

  it("Should Have 1 Input Type Email,1 Input Type Password & 2 button", () => {
    expect(fixture.debugElement.query(By.css('.test-register-button'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input[type=email]'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input[type=password]'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.test-login-button'))).toBeTruthy();
  });

  it('Service Injected Via inject(...) and TestBed.get(...) Should Be The Same Instance',
      inject([AuthenticationService], (injectService: AuthenticationService) => {
        expect(injectService).toBe(testBedAuthService);
      })
  );

  it('Service Injected Via Component Should Be Instance Of AuthenticationService', () => {
    expect(testBedAuthService instanceof AuthenticationService).toBeTruthy();
  });
});
