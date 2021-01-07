import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fourm } from '../fourm.model';
import { Message } from '../message.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authentication-service.service'


@Injectable({
  providedIn: 'root'
})
export class WebService {

  BASE_URL = 'http://localhost:5000/api';

  //adding to the fourm
  //To allow for sibling components within the messageBoard to communicate
  public _subject = new BehaviorSubject<any>('');

  emit<T>(data: T){
    this._subject.next(data)
  }

  on<T>(): Observable<T>{
    return this._subject.asObservable();
  }

    /**
   * GET request to get all the messages of the generic board
   * this will later be personalized to a specific board but for now its for a single one 
   */
  getMessages() {
    return this.http.get<Message[]>(this.BASE_URL + '/messages' , {headers: this.auth.tokenHeader} );
  }

  /**
   * POST request to post a message to the generic board
   * this will later be personalized to a specific board but for now its for a single one 
   * @param message 
   */
 postMessage(message) {
    return this.http.post<Message>(this.BASE_URL + '/messages' , message , {headers: this.auth.tokenHeader} );
  }

  deleteMessage(message) {
    this.http.delete<Message>(this.BASE_URL + '/messages/' + message , {headers: this.auth.tokenHeader}).subscribe(res => {
      console.log("This is the res : " + res);
    }, err => {
      console.log(err);
    })
  }

  //Creating Fourms
  /**
   * GET request to get all the users MyBoard fourm values 
   */
  getFourmns() {
    return this.http.get<Fourm[]>(this.BASE_URL + '/fourms' , {headers: this.auth.tokenHeader});
  }

  /**
   * POST request to add a new MyBoard fourm
   * @param message 
   */
  postForum(message) {
    console.log(message);
      this.http.post(this.BASE_URL + '/fourms' , message , {responseType: 'text' , headers: this.auth.tokenHeader}).subscribe(res => {
      }, err => {
        console.log(err);
      })
  }


  constructor(private http: HttpClient, private auth : AuthenticationService) {
  }
}
