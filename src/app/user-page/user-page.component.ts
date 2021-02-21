import { Component, OnInit } from '@angular/core';
import { Board } from '../model/board.model';
import { WebForumService } from '../services/web-forum.service';
import { AuthenticationService } from '../services/authentication-service.service';
import { WebUserService } from '../services/web-user.service';
import {Router} from '@angular/router';
import * as myGlobals from '../services/globalVars';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user = {
    userName : '',
    name : '',
    about_user : ''
  };
  userId;
  MyBoards: Board[];
  toggle = true;
  newMyBoard: string;
  USER_MESSAGE = 'Write about yourself ';

  constructor(private webBoardService: WebForumService, private router: Router,
              private authService: AuthenticationService, private webUserService: WebUserService){
    this.user.userName = '';
    this.user.name = localStorage.getItem(this.authService.NAME_KEY);
    this.user.about_user = '';
  }

  createNewMyBoard(): void {
      const postedName = this.newMyBoard.toLocaleLowerCase();
      if (!postedName.match(myGlobals.LETTERS)) {
        alert('Please input alphabet characters only');
        this.newMyBoard = '';
      }
      else {
        const newMyBoardJSON = {
          board_name: postedName,
          creator_id: parseInt(localStorage.getItem(this.authService.USER_ID_KEY))};
        this.webBoardService.postBoard(newMyBoardJSON)
          .subscribe( (res) => {
            console.log(res);
            const newMyBoard = new Board(postedName , parseInt(this.authService.USER_ID_KEY) , res);
            this.router.navigateByUrl('messageBoard/' + newMyBoard.board_name);
            this.MyBoards.push(newMyBoard);
          }, err => {
            alert('This MyBoard is already created');
          });
      }
  }

  updateProfile(): void{
    const about = {
      about_user : this.user.about_user
    };
    this.webUserService.updateAboutMe(localStorage.getItem('id') , about).subscribe(
      res => {
      }
    );
    if (!this.toggle && this.user.about_user === '' || this.user.about_user === null){
      this.user.about_user = this.USER_MESSAGE;
    }
    this.toggle = !this.toggle;
  }

  toggler(): void{
    if (this.toggle && this.user.about_user === this.USER_MESSAGE){
      this.user.about_user = '';
    }
    this.toggle = !this.toggle;
  }

  deleteBoard(boardID: string): void{
    this.webBoardService.deleteBoard(boardID).toPromise()
      .then(() => {
        this.webBoardService.getMyBoards(localStorage.getItem('id')).subscribe(res => {
          this.MyBoards =  res;
        });
      })
      .catch(err => {
        console.log('error occured');
      });
  }

  /**
   * Current retrives all MyBoard foumr pages but will only retrive the MyBoard fourm page that the user has created or commented on
   */
  ngOnInit(): void {
    this.webBoardService.getMyBoards(localStorage.getItem('id')).subscribe(res => {
      this.MyBoards =  res;
    });
    const userId = {
      id: localStorage.getItem('id')
    };
    //give userID to get
    this.webUserService.getMyBoardsUser(userId).subscribe(res => {
      this.user.userName = res[0].username;
      this.user.about_user = res[0].about_user === null || res[0].about_user === '' ? this.USER_MESSAGE : res[0].about_user;
    });
  }

}
