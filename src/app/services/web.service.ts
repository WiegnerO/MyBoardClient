import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authentication-service.service';
import * as myGlobals from './globalVars';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  BASE_URL = myGlobals.BASE_URL;

  public _subject = new BehaviorSubject<any>('');

  emit<T>(data: T){
    this._subject.next(data);
  }

  on<T>(): Observable<T>{
    return this._subject.asObservable();
  }

  /**
   * GET request to get all the messages of a specific board
   */
  getMessages(Bid?): Observable<Message[]> {
    return this.http.get<Message[]>(this.BASE_URL + '/messages/' + Bid , {headers: this.auth.tokenHeader} );
  }

  /**
   * GET request to get all the messages of a specific board
   */
  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.BASE_URL + '/messages', {headers: this.auth.tokenHeader} );
  }

  /**
   * POST request to post a message to a specific board
   * @param message
   */
  postMessage(message): Observable<number> {
    return this.http.post<number>(this.BASE_URL + '/messages' , message , {headers: this.auth.tokenHeader} );
  }

  /**
   * DELETE request to get rid of a specific message
   * @param message
   */
  deleteMessage(message): void {
    this.http.delete<Message>(this.BASE_URL + '/messages/' + message.id , {headers: this.auth.tokenHeader}).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  /**
   * GET request to get replies of a certian message
   * @param message
   */
  getReplies(message): Observable<Message[]> {
    return this.http.get<Message[]>(this.BASE_URL + '/messages/reply/' + message , {headers: this.auth.tokenHeader} );
  }

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }
}
