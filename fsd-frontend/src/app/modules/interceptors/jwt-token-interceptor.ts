import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthenticationService } from "../authentication/service/authentication.service";

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor{
  constructor(private authService:AuthenticationService){

  }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    if(this.authService.getTokenFromLocalStorage()){
      request = request.clone({setHeaders:{Authorization:this.authService.getTokenFromLocalStorage()}});
    }    
    return next.handle(request);
  }
}
