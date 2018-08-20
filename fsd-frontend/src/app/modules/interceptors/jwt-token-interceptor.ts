import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthenticationService } from "../authentication/service/authentication.service";

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor{
  constructor(private authService:AuthenticationService){

  }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log(`Intercepting Request:Before:${JSON.stringify(request)}`);
    request = request.clone({setHeaders:{Authorization:this.authService.getTokenFromLocalStorage()}});
    console.log(`Intercepting Request:After:${JSON.stringify(request)}`);
    return next.handle(request);
  }
}
