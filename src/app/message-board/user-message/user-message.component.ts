import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../message.model';
import { WebService } from '../../services/web.service';
import { AuthenticationService } from '../../services/authentication-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class MessagesComponent implements OnInit {

  @Output() messagePosted = new EventEmitter<Message>();
  @Input() private messageBoard;
  boardMessage: FormGroup;
  postError = false;
  public message: Message ;

  constructor(private webService: WebService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.message = new Message(parseInt(this.messageBoard));
    this.boardMessage = this.fb.group({
      post_title: ['', Validators.required],
      post_content: ['', Validators.required]
    });
  }

  get f(): any {
    return this.boardMessage.controls;
  }

  savePost(newMessageValue): void{
    this.message.post_title = newMessageValue.post_title;
    this.message.post_content = newMessageValue.post_content;
    this.webService.postMessage(this.message).toPromise().then(res => {
      const x = {
        post_title : newMessageValue.post_title,
        post_content : newMessageValue.post_content,
        id : res,
        creator_id : parseInt(localStorage.getItem('id')),
        board_id : this.messageBoard
      };
      this.postError = false;
      this.webService.emit<Message>(x);
    })
      .catch(err => {
        this.postError = true;
      });
  }





}
