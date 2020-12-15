import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  NAME_KEY = 'name';
  TOKEN_KEY = 'token'
  BASE_URL = 'http://localhost:5000/api/auth';

    /**
   * POST request to register a user in the system
   * 
   * @param message 
   */
 registerUser(user) {
  this.http.post<User>(this.BASE_URL + '/register' , user ).subscribe(res =>{
    this.authenticate(res);
    console.log(res);
  });
  }

  loginUser(user) {
    this.http.post<User>(this.BASE_URL + '/login' , user ).subscribe(res =>{
      this.authenticate(res);
      console.log(res);
    });
  }

  logout(){ 
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
  }

  getUser(){
    return this.http.get<User[]>(this.BASE_URL);
  }

  authenticate(res){
    var authResponse = res
    if(authResponse.success == false){
      return;
    }
    localStorage.setItem(this.TOKEN_KEY , authResponse.token);
    localStorage.setItem(this.NAME_KEY , authResponse.name);
    this.router.navigate(['/userpage'])
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get name(){
    return localStorage.getItem(this.NAME_KEY);
  }

  get tokenHeader() : HttpHeaders{
    var header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});
    return header;
  }

  constructor(private http: HttpClient , private router : Router) {
  }
}
