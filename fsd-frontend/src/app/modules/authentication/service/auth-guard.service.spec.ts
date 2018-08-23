import { TestBed, inject } from "@angular/core/testing";
import { AuthGuardService } from "./auth-guard.service";
import { AuthenticationService } from "./authentication.service";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Component } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../../material/material.module";
import { FormsModule } from "@angular/forms";

@Component({
  template: '<router-outlet></router-outlet>'
})
class RouterComponent { }
@Component({
  template: ''
})
class RoutedComponent { }
class MockAuthenticationService extends AuthenticationService {
  getTokenFromLocalStorage() {
    return "JwtBearerToken";
  }
  isTokenExpired() {
    return true;
  }
}
describe("AuthGuardService Test", () => {
  let service: AuthGuardService;
  let mockRouterStateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);
  let activatedRouteSnapshot: ActivatedRouteSnapshot = jasmine.createSpyObj<ActivatedRouteSnapshot>("ActivatedRouteSnapshot", ['toString']);;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutedComponent, RouterComponent],
      providers: [
        AuthGuardService,
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: RouterStateSnapshot, useValue: mockRouterStateSnapshot }],
      imports: [MaterialModule, FormsModule, HttpClientModule, RouterTestingModule.withRoutes([
        { path: 'login', component: RoutedComponent },
        { path: '*', component: RoutedComponent }
      ])]
    });
    service = TestBed.get(AuthGuardService);
  });

  it('Should Allow User To Overcome The Guard For Existing JwtToken',
    inject([AuthGuardService], (guard: AuthGuardService) => {
      let fixture = TestBed.createComponent(RouterComponent);
      expect(guard.canActivate(activatedRouteSnapshot, mockRouterStateSnapshot)).toBeTruthy();
    }));
});
