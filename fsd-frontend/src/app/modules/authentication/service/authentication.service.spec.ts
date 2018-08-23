import { TestBed, getTestBed, inject } from "@angular/core/testing";
import { AuthenticationService } from "./authentication.service";
import { User } from "../user";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Response, ResponseOptions, XHRBackend } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { HttpClientModule } from "@angular/common/http";

describe("AuthenticationService:", () => {
  let service: AuthenticationService;
  let injector: TestBed;
  let jwt: JwtHelperService = jasmine.createSpyObj<JwtHelperService>("JwtHelperService", ['toString']);

  let user: User = { fullName: 'Prajit Gandhi', userId: 'Prajit.Gandhi@cognizant.com', password: 'Prajit.Gandhi@cognizant.com' };
  let response: any = { 'JWTTOKEN': 'Valid Jwt' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports: [HttpClientModule]
    }).compileComponents();

    injector = getTestBed();
    service = injector.get(AuthenticationService);
  });

  it("login Should Work", inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {
    mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(response) })));
    });

    authenticationService.login(user).subscribe(results => { expect(results).toEqual(response); })
  }));

  it("register Should Work", inject([AuthenticationService, XHRBackend], (authenticationService, mockBackend) => {
    mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(user) })));
    });

    authenticationService.register(user).subscribe(results => { expect(results).toEqual(user); })
  }));
});
