import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  newUser

  constructor( private authService : AuthenticationService) { }

  ngOnInit(): void {
  }

  login(value) {
    this.authService.registerUser(value);
  }

}
