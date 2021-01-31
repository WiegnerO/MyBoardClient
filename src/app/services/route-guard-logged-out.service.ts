import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceLoggedOut implements CanActivate {
  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
        return true;
    }else{
      this.router.navigate(['/userpage']);
      return false;
      }
    }

  constructor(private router: Router, private auth: AuthenticationService ) { }
}
