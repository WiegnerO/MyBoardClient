import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdAdminService {

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      if (this.auth.id === '1'){
        return true;
      }
    }else{
      this.router.navigate(['/userpage']);
      return false;
    }
  }

  constructor(private router: Router, private auth: AuthenticationService) { }
}
