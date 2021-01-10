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
   * GET request to get all the messages of a specific board
   */
  getMessages(Bid) {
    return this.http.get<Message[]>(this.BASE_URL + '/messages/' + Bid , {headers: this.auth.tokenHeader} );
  }

  /**
   * POST request to post a message to a specific board
   * @param message 
   */
 postMessage(message) {
    return this.http.post<Message>(this.BASE_URL + '/messages/' + message.Bid , message , {headers: this.auth.tokenHeader} );
  }

  deleteMessage(message) {
    this.http.delete<Message>(this.BASE_URL + '/messages/' + message.Bid + '/' + message.Mid , {headers: this.auth.tokenHeader}).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }


  constructor(private http: HttpClient, private auth : AuthenticationService) {
  }
}
