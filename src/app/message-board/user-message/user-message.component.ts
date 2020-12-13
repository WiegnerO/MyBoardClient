import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../web.service';
import { FormControl , FormGroup, Validators } from '@angular/forms'

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

  savePost(newMessageValue){
    console.log(newMessageValue);
    this.webService.postMessage(newMessageValue).subscribe((res)=>{
      this.message.content = res.content;
      this.message.title = res.title;
      this.message.id = res.id;
    })
    this.webService.emit<Message>(this.message);
  }

}
