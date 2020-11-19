import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-forum',
  templateUrl: './message-forum.component.html',
  styleUrls: ['./message-forum.component.css']
})
export class MessageForumComponent implements OnInit {

  messages = [
    {
      text : 'hi',
      owner : 'bob'
    },
    {
      text : 'bye',
      owner : 'bobbet'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
