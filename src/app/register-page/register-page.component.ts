import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';
import { MustMatch } from '../services/passwordValidator.validator';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  submitedArray: boolean[];

  constructor( private authService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.submitedArray = new Array(5).fill(false);
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]*$')]],
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f(): any {
    return this.registerForm.controls;
  }

  login(): void {
    const newUser = {
      password : this.registerForm.value.password,
      last_name:  (this.registerForm.value.last_name).toLowerCase(),
      first_name: (this.registerForm.value.first_name).toLowerCase(),
      username: this.registerForm.value.username
    };
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.registerUser(newUser);
  }

  resetValue(value: number): void{
    this.submitedArray[value] = false;
  }

  onClick(): void{
    this.submitedArray.fill(true);
  }

}
