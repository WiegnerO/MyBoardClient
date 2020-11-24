import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fourm } from './fourm.model';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  BASE_URL = 'http://localhost:5000/api';


  /**
   * GET request to get all the users MyBoard fourm values 
   */
  getFourmns() {
    return this.http.get<Fourm[]>(this.BASE_URL + '/fourms');
  }

  /**
   * POST request to add a new MyBoard fourm
   * @param message 
   */
  postForum(message) {
    console.log(message);
      this.http.post(this.BASE_URL + '/fourms' , message , {responseType: 'text'}).subscribe(res => {
      }, err => {
        console.log(err);
      })
  }


  constructor(private http: HttpClient) {
  }
}
