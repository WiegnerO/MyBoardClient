import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fourm } from '../fourm.model';
import { AuthenticationService } from './authentication-service.service'

@Injectable({
  providedIn: 'root'
})
export class WebForumService {

  BASE_URL = 'http://localhost:5000/api';


  /**
   * GET request to get all the users MyBoard fourm values 
   */
  getBoard() {
    return this.http.get<Fourm[]>(this.BASE_URL + '/boards' , {headers: this.auth.tokenHeader});
  }

  /**
   * POST request to add a new MyBoard board
   * @param board
   */
  postBoard(board) {
      return this.http.post(this.BASE_URL + '/boards' , board , {headers: this.auth.tokenHeader})
  }


  constructor(private http: HttpClient, private auth : AuthenticationService) {
  }
}
