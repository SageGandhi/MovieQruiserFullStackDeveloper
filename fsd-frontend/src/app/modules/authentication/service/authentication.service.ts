import { Injectable } from '@angular/core';
import { User } from '../user';
import { retry, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  private authServiceBaseUri: string = "http://localhost:8080/api/v1/auth/user";
  private authServiceRegisterUri: string;
  private authServiceLoginUri: string;
  private header: any;
  constructor(private http: HttpClient) {
    this.authServiceLoginUri = `${this.authServiceBaseUri}/login`;
    this.authServiceRegisterUri = `${this.authServiceBaseUri}/register`;
    this.header = { headers: new HttpHeaders({ "Content-Type": "application/json", "Accept": "application/json" }) };
  }
  public login(user: User) {
    return this.http
      .post(this.authServiceLoginUri, JSON.stringify(user), this.header)
      .pipe(retry(3), map(res => res, err => err.json()));
  }
  public register(user: User) {
    return this.http
      .post(this.authServiceRegisterUri, JSON.stringify(user), this.header)
      .pipe(retry(3), map(res => res, err => err.json()));
  }
  public setTokenToLocalStorage(token) {
    localStorage.setItem('JwtToken', `Bearer ${token}`);
  }
  public getTokenFromLocalStorage() {
    return localStorage.getItem('JwtToken');
  }
  public clearLocalStorage() {
    localStorage.clear();
  }
  public setUserIdToLocalStorage(userId) {
    localStorage.setItem('UserId', userId);
  }
  public getUserIdFromLocalStorage() {
    return localStorage.getItem('UserId');
  }
}
