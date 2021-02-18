import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../model/board.model';
import { AuthenticationService } from './authentication-service.service';
import { Observable } from 'rxjs';
import * as myGlobals from './globalVars';


@Injectable({
  providedIn: 'root'
})
export class WebForumService {

  BASE_URL = myGlobals.BASE_URL;


  /**
   * GET request to get all the users MyBoard Board values
   */
  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.BASE_URL + '/boards' , {headers: this.auth.tokenHeader});
  }

  /**
   * GET request to get all the users MyBoard fourm values
   */
  getMyBoards(id): Observable<Board[]> {
    return this.http.get<Board[]>(this.BASE_URL + '/user/' + id , {headers: this.auth.tokenHeader});
  }

  /**
   * POST request to add a new MyBoard board
   * @param board
   */
  postBoard(board): Observable<any> {
      return this.http.post(this.BASE_URL + '/boards' , board , {headers: this.auth.tokenHeader});
  }

  /**
   * GET request to get the board_id given the board name
   */
  getBoardID(boardName): Observable<any>{
    return this.http.get(this.BASE_URL + '/boards/' + boardName , {headers: this.auth.tokenHeader} );
  }

  /**
   * GET request to get the board_id given the board name
   */
  deleteBoard(boardID): Observable<any>{
    return this.http.delete(this.BASE_URL + '/boards/' + boardID , {headers: this.auth.tokenHeader});
  }

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }
}
