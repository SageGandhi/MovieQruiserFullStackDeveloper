import { TestBed, async, ComponentFixture,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../service/authentication.service';
import { MaterialModule } from '../../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { By } from "@angular/platform-browser";
import { LogoutComponent } from '../logout/logout.component';

class LoginComponentFixture { }
class MockAuthenticationService extends AuthenticationService{}
describe('LoginComponent:', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let testBedAuthService: AuthenticationService;
  let componentAuthService: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [AuthenticationService],
      imports: [MaterialModule, FormsModule, HttpClientModule,
        RouterTestingModule.withRoutes([
          {path: 'login', component: LoginComponentFixture}
        ])]
    }).overrideComponent(
      LogoutComponent,
      {set: {providers: [{provide: MockAuthenticationService, useClass: AuthenticationService}]}}
  ).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    testBedAuthService = TestBed.get(AuthenticationService);
    componentAuthService = fixture.debugElement.injector.get(AuthenticationService);
    fixture.detectChanges();
  }));

  it('LogoutComponent Is Truthy', () => {
    expect(component).toBeTruthy();
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
