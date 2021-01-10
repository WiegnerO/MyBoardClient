import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fourm } from '../fourm.model';
import { AuthenticationService } from './authentication-service.service'

@Injectable({
  providedIn: 'root'
})
export class WebForumService {

  BASE_URL = 'http://localhost:5000/api';


  //Creating Fourms
  /**
   * GET request to get all the users MyBoard fourm values 
   */
  getFourmns() {
    return this.http.get<Fourm[]>(this.BASE_URL + '/fourms' , {headers: this.auth.tokenHeader});
  }

  /**
   * POST request to add a new MyBoard fourm
   * @param fourm
   */
  postForum(forum) {
      this.http.post(this.BASE_URL + '/fourms' , forum , {headers: this.auth.tokenHeader})
      .subscribe(res => {
      }, err => {
        console.log(err);
      })
  }


  constructor(private http: HttpClient, private auth : AuthenticationService) {
  }
}
