import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user';
import { AuthenticationService } from '../../service/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthenticationService, private snackBar: MatSnackBar) { }
  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      userId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get registrationField() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const user: User = this.registerForm.value;
    console.log(`To Be Registered User:${JSON.stringify(user)}`);
    this.authService.register(user).subscribe(response => {
      console.log(`Response Received After Registration:${JSON.stringify(response)}`);
      this.snackBar.open(`UserId ${user.userId} Registered Successfully. `, '', { duration: 2500 })
        .afterDismissed().subscribe(() => {
          console.log(`Snackbar Dismissed,Routing To Login Page.`);
          this.router.navigate(['/login']);
        });
    }, err => {
      console.log(`Response Received After Registration:${JSON.stringify(err)}`);
      //{"headers":{"normalizedNames":{},"lazyUpdate":null},"status":409,"statusText":"OK","url":"http://localhost:8080/api/v1/auth/user/register","ok":false,
      //"name":"HttpErrorResponse","message":"Http failure response for http://localhost:8080/api/v1/auth/user/register: 409 OK",
      //"error":"User Registration Error User With Id Prajit.Gandhi Already Exists."}
      if (err.status === 409) {
        this.snackBar.open(`${err.error}`, '', { duration: 2500 });
      }
    });
    return false;
  }

  retturnToLogInForm() {
    this.router.navigate(['/login']);
  }
}
