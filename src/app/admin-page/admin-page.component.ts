import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {WebUserService} from '../services/web-user.service';
import { WebForumService } from '../services/web-forum.service';
import {Board} from '../model/board.model';
import {WebService} from '../services/web.service';
import {Message} from '../model/message.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  MyBoardUsers: User[];
  MyBoards: Board[];
  messages: Message[];

  constructor(private webUserService: WebUserService, private webBoardService: WebForumService, private webService: WebService) { }

  deleteBoard(board): void {
    this.webBoardService.deleteBoard(board.id).toPromise()
      .then(() => {
        this.webBoardService.getMyBoards(localStorage.getItem('id')).subscribe(res => {
          this.MyBoards =  res;
        });
      });
  }

  deleteMessage(message): void {
    this.webService.deleteMessage(message);
  }

  deleteUser(user): void {
    console.log(user.id);
    this.webUserService.deleteUser(user.id).toPromise()
      .then(res => console.log(res));
  }

  ngOnInit(): void {
    this.webUserService.getAllUsers().subscribe(res => {
      this.MyBoardUsers =  res;
    });

    this.webBoardService.getAllBoards().subscribe(res => {
      this.MyBoards =  res;
    });

    this.webService.getAllMessages().subscribe(res => {
      this.messages = res;
    });
  }

}
