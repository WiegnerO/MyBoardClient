import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../web.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageForumComponent implements OnInit {

  constructor(private webSevice : WebService) { }
  @Input() userMesaage : Message;
  isDeleted : boolean = false;

  remove(): void {
    let messageId = this.userMesaage.id;
    this.webSevice.deleteMessage(messageId);
    this.isDeleted = true;
  }

  ngOnInit(): void {
  }
}
