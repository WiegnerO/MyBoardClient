import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../web.service';

@Component({
  selector: 'message-forum',
  templateUrl: './message-forum.component.html',
  styleUrls: ['./message-forum.component.css']
})
export class MessageForumComponent implements OnInit {
  
  messages : Message[] = [];

  constructor(private webSevice : WebService) { }

  ngOnInit(): void {
      this.webSevice.getMessages().subscribe(res =>{
      this.messages = res;
    })
    this.webSevice.on<Message>().subscribe(message => {
      console.log(this.messages)
      this.messages.push(message);
    })
  }
}
