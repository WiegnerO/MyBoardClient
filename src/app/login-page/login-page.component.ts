import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication-service.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user : any;

  constructor( private authService : AuthenticationService) { }

  ngOnInit(): void {
  }

  login(value) {
    let x = this.authService.loginUser(value)
    console.log(x);
  }

}
