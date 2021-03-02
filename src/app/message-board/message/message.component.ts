import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../model/message.model';
import { WebService } from '../../services/web.service';
import { AuthenticationService } from '../../services/authentication-service.service';
import { WebUserService } from '../../services/web-user.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageForumComponent implements OnInit {

  constructor(private webService: WebService, private authService: AuthenticationService, private webUserService: WebUserService) { }
  @Input() userMesaage: Message;
  userName;
  replyMessages: Message[];
  replyBox = false;
  replyMessageValue: Message;
  replyTitle;
  replyContent;

  isDeleted = false;
  userId = localStorage.getItem(this.authService.USER_ID_KEY);

  Openreply(): void {
    this.replyBox = ! this.replyBox;
  }

  reply(): void {
    this.replyMessageValue = new Message(this.userMesaage.board_id , this.userMesaage.id);
    this.replyMessageValue.post_title = this.userMesaage.post_title;
    this.replyMessageValue.post_content = this.replyContent;
    this.webService.postMessage(this.replyMessageValue).toPromise().then((res) => {
      this.replyMessageValue.id = res;
      this.replyMessageValue.rates = 1;
      this.replyMessages.push(this.replyMessageValue);
      this.replyBox = ! this.replyBox;
      this.replyMessageValue = new Message(this.userMesaage.board_id , this.userMesaage.id);
      this.replyContent = '';
    });
  }

  remove(): void {
    this.webService.deleteMessage(this.userMesaage);
    this.isDeleted = true;
  }

  isUsersPost(): boolean {
    return this.userMesaage.creator_id !== parseInt(this.userId);
  }

  ngOnInit(): void {
    const userId = {
      id: this.userMesaage.creator_id
    };
    this.webUserService.getMyBoardsUser(userId).subscribe(res => {
      if (res[0]){
        this.userName = res[0].username;
      }
    });

    this.webService.getReplies(this.userMesaage.id).subscribe(res => {
      this.replyMessages = res;
    });
  }
}
