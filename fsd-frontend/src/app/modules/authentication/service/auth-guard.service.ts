import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private authService:AuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log('getTokenFromLocalStorage'+(this.authService.getTokenFromLocalStorage()));
    console.log('isTokenExpired'+(this.authService.isTokenExpired()));
    if(!this.authService.getTokenFromLocalStorage()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
