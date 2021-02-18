import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication-service.service';
import {User} from '../model/user.model';
import * as myGlobals from './globalVars';

@Injectable({
  providedIn: 'root'
})
export class WebUserService {

  BASE_URL = myGlobals.BASE_URL;

  getMyBoardsUser(userId): Observable<User> {
    return this.http.post<User>(this.BASE_URL + '/user' , userId , {headers: this.auth.tokenHeader});
  }

  updateAboutMe(userId , aboutMe): Observable<User> {
    return this.http.patch<User>(this.BASE_URL + '/user/' + userId , aboutMe , {headers: this.auth.tokenHeader});
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + '/auth' , {headers: this.auth.tokenHeader} );
  }

  deleteUser(userID): Observable<any> {
    return this.http.delete(this.BASE_URL + '/auth/' + userID , {headers: this.auth.tokenHeader});
  }
  constructor( private http: HttpClient, private auth: AuthenticationService ) { }
}
