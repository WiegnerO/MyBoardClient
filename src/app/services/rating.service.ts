import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication-service.service';
import * as myGlobals from './globalVars';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  BASE_URL = myGlobals.BASE_URL;
  USER_ID = localStorage.getItem(this.auth.USER_ID_KEY);

  getMessageRating(messageId): Observable<number> {
    return this.http.get<number>(this.BASE_URL + '/rate/' + messageId , {headers: this.auth.tokenHeader});
  }

  isRated(messageId): Observable<boolean> {
    return this.http.get<boolean>(this.BASE_URL + '/rate/' + messageId + '/' + this.USER_ID, {headers: this.auth.tokenHeader});
  }

  addRating(messageId ): Observable<any> {
      const rate = new Rate(parseInt(this.USER_ID, 0), messageId );
      return this.http.post<any>(this.BASE_URL + '/rate' , rate , {headers: this.auth.tokenHeader});
  }

  deleteRating(messageId ): Observable<any>{
    return this.http.delete<boolean>(this.BASE_URL + '/rate/' + messageId + '/' + this.USER_ID, {headers: this.auth.tokenHeader});
  }

  constructor( private http: HttpClient, private auth: AuthenticationService ) {}
}

export class Rate {
  creator_id : number;
  message_id : number;
  constructor(creator_id: number , message_id: number){
    this.creator_id = creator_id;
    this.message_id = message_id;
  }
}
