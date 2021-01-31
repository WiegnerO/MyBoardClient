import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../services/web.service';
import { AuthenticationService } from '../../services/authentication-service.service';
import { WebUserService } from '../../services/web-user.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageForumComponent implements OnInit {

  constructor(private webSevice: WebService, private authService: AuthenticationService, private webUserService: WebUserService) { }
  @Input() userMesaage: Message;
  userName;
  replyMessages;

  isDeleted = false;
  userId = localStorage.getItem(this.authService.USER_ID_KEY);

  reply():void {

  }

  remove(): void {
    this.webSevice.deleteMessage(this.userMesaage);
    this.isDeleted = true;
  }

  isUsersPost(): boolean {
    return this.userMesaage.creator_id !== parseInt(this.userId);
  }

  ngOnInit(): void {
    this.webUserService.getMyBoardsUser(this.userMesaage).subscribe(res => {
      this.userName = res[0].username;
    });
  }
}
