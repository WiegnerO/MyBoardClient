import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service'

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  AS: any;

  constructor(private authService: AuthenticationService){
  }

  ngOnInit(): void {
    this.AS = this.authService;
  }

  logout(): void{
    this.AS.logout();
  }

}
