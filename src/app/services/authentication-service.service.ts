import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import * as myGlobals from './globalVars';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  NAME_KEY = 'name';
  USER_ID_KEY = 'id';
  TOKEN_KEY = 'token';
  BASE_URL = myGlobals.BASE_URL + '/auth';

  /**
   * POST request to register a user in the system
   *
   * @param message
   */
 registerUser(user): void {
  this.http.post<User>(this.BASE_URL + '/register' , user ).subscribe(res =>{
    return this.authenticate(res);
  });
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  loginUser(user): Promise<any> {
    return this.http.post<User>(this.BASE_URL + '/login' , user ).toPromise();
  }

  logout(): void{
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.USER_ID_KEY);
  }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL);
  }

  authenticate(res): any{
    const authResponse = res;
    if (authResponse.success === false){
      return authResponse;
    }
    localStorage.setItem(this.TOKEN_KEY , authResponse.token);
    localStorage.setItem(this.NAME_KEY , authResponse.name);
    localStorage.setItem(this.USER_ID_KEY , authResponse.id);
    const loggedInUser = new User(res.username , res.id , res.token);
    this.router.navigate(['/userpage']);
    return loggedInUser;
  }

  get name(): string{
    return localStorage.getItem(this.NAME_KEY);
  }
  get id(): string{
    return localStorage.getItem(this.USER_ID_KEY);
  }

  get tokenHeader(): HttpHeaders{
    const header = new HttpHeaders({Authorization:  localStorage.getItem(this.TOKEN_KEY)});
    return header;
  }

  constructor(private http: HttpClient , private router: Router) {
  }
}
