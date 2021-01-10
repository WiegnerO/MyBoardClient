import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../services/web.service';
import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageForumComponent implements OnInit {

  constructor(private webSevice : WebService, private authService : AuthenticationService) { }
  @Input() userMesaage : Message;

  isDeleted : boolean = false;
  userId = localStorage.getItem(this.authService.USER_ID_KEY);

  remove(): void {
    this.webSevice.deleteMessage(this.userMesaage);
    this.isDeleted = true;
  }

  isUsersPost() : boolean {
    return this.userMesaage.Uid !== this.userId;
  }

  ngOnInit(): void {
  }
}
