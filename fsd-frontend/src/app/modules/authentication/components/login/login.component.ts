import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user';
import { AuthenticationService } from '../../service/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthenticationService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get loginFormFields() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const user: User = this.loginForm.value;
    console.log(`To Be Registered User:${JSON.stringify(user)}`);
    this.authService.login(user).subscribe(response => {
      console.log(`Response Received After Login:${JSON.stringify(response)}`);
      if (response['JWTTOKEN']) {
        this.authService.setTokenToLocalStorage(response['JWTTOKEN']);
        this.authService.setUserIdToLocalStorage(user.userId);
        this.snackBar.open(`UserId ${user.userId} LoggedIn Successfully. `, '', { duration: 2500 })
          .afterDismissed().subscribe(() => {
            console.log(`Snackbar Dismissed,Routing To Popular Page.`);
            this.router.navigate(['/movies/popular']);
        });
      }else{
        this.snackBar.open(`UserId ${user.userId} Unable To Login Successfully. `, '', { duration: 2500 })
          .afterDismissed().subscribe(() => {
            console.log(`Snackbar Dismissed,Routing To Login Page.`);
            this.router.navigate(['/login']);
        });
      }
    }, err => {
      console.log(`Response Received After Registration:${JSON.stringify(err)}`);
      //{"headers":{"normalizedNames":{},"lazyUpdate":null},"status":409,"statusText":"OK","url":"http://localhost:8080/api/v1/auth/user/register","ok":false,
      //"name":"HttpErrorResponse","message":"Http failure response for http://localhost:8080/api/v1/auth/user/register: 409 OK",
      //"error":"User Registration Error User With Id Prajit.Gandhi Already Exists."}
      this.snackBar.open(`${err.error}`, '', { duration: 2500 });
    });
    return false;
  }

  register() {
    this.router.navigate(['/register']);
  }
}
