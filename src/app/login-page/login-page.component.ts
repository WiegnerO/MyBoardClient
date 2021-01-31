import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  submittedUsername = false;
  submittedPassword = false;
  missMatchedPassword = false;

  constructor( private authService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f(): any {
    return this.loginForm.controls;
  }

  onClick(): void {
    this.submittedUsername = true;
    this.submittedPassword = true;
  }

  resetUsername(): void{
  this.submittedUsername = false;
}

  resetPassword(): void{
    this.submittedPassword = false;
  }

  onSubmit(): void {
    if (this.f.password.errors || this.f.username.errors){
      return;
    }
    this.submittedPassword = false;
    this.authService.loginUser(this.loginForm.value)
      .then( res => {
        return this.authService.authenticate(res);
      })
      .catch( err => {
        this.submittedPassword = true;
      });
  }

}
