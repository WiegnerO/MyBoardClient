import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/message.model';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'posted-messages',
  templateUrl: './posted-messages.component.html',
  styleUrls: ['./posted-messages.component.css']
})
export class PostedMessagesComponent implements OnInit {

  @Input() private messageBoard:string; 
  messages : Message[] = [];
  messageValue : Message;

  constructor(private webSevice : WebService) { }

  ngOnInit(): void {
      this.webSevice.getMessages(this.messageBoard).subscribe(res =>{
      this.messages = res;
    })
    //This is used in order to append a new message to the message board
    this.webSevice.on<Message>().subscribe(message => {
      if(!!message["message"]){
        this.messages.push(message["message"]);
      }
    })
  }

}
