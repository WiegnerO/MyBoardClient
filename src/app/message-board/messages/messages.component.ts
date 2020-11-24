import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-message',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message = {
    title : "",
    text : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  post() {
    console.log(this.message);
  }

}
