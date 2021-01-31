import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceLoggedIn implements CanActivate {
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
        return true;
    }else{
      this.router.navigate(['/loginPage']);
      return false;
      }
    }

  constructor(private router: Router, private auth : AuthenticationService ) { }
}
