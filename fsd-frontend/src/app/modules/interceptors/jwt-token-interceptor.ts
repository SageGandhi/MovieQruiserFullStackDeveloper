import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { AuthenticationService } from "../authentication/service/authentication.service";

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor{
  constructor(private authService:AuthenticationService){

  }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    if(this.authService.getTokenFromLocalStorage()){
      //Protect Other Menu When User Not Logged In
      request = request.clone({setHeaders:{Authorization:this.authService.getTokenFromLocalStorage()}});
    }
    if(request.url.indexOf('/api/v1/movie')!=-1 && !this.authService.isTokenExpired()){
      //Append UserId In Existing Movie RequestWhen User Logged In
      request = request.clone({setParams:{'userId': this.authService.getUserIdFromLocalStorage()}});
      console.log(request.url,request.body,request.params);
    }
    return next.handle(request);
  }
}
