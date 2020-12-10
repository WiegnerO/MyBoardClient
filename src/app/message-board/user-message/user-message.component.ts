import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../web.service';

@Component({
  selector: 'user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class MessagesComponent implements OnInit {

  @Output() messagePosted = new EventEmitter<Message>();

  message : Message = {
    title : "",
    content : "",
    id : ""
  }

  constructor(private webService : WebService) { }

  ngOnInit(): void {
  }

  post() {
    this.webService.postMessage(this.message);
    this.webService.emit<Message>(this.message);
  }

}
