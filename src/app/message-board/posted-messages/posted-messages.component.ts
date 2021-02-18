import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message.model';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'posted-messages',
  templateUrl: './posted-messages.component.html',
  styleUrls: ['./posted-messages.component.css']
})
export class PostedMessagesComponent implements OnInit {

  @Input() private messageBoard;
  messages: Message[] = [];

  constructor(private webSevice: WebService) { }

  ngOnInit(): void {
      this.webSevice.getMessages(this.messageBoard).subscribe(res => {
      this.messages = res;
      });
      this.webSevice.on<Message>().subscribe(message => {
        if (!!message){
          this.messages.push(message);
        }
      });
  }

}
