import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../services/web.service';
import { AuthenticationService } from '../../services/authentication-service.service';


@Component({
  selector: 'user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class MessagesComponent implements OnInit {

  @Output() messagePosted = new EventEmitter<Message>();
  @Input() private messageBoard:string; 

  message : Message = {
    title : "",
    content : "",
    Mid : "",
    Uid : localStorage.getItem(this.authService.USER_ID_KEY),
    Bid : ""
  }

  constructor(private webService : WebService , private authService : AuthenticationService) { }

  ngOnInit(): void {
    console.log("hello user-message ", this.messageBoard);
    this.message.Bid = this.messageBoard;
  }

  async savePost(newMessageValue){
    this.message.title = newMessageValue.title;
    this.message.content = newMessageValue.content;
    this.webService.postMessage(this.message).toPromise().then(res => {
      console.log(res);
      this.webService.emit<Message>(res);
    });
  }





}
