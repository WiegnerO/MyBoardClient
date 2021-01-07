import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-board-page',
  templateUrl: './message-board-page.component.html',
  styleUrls: ['./message-board-page.component.css']
})
export class MessageBoardPageComponent implements OnInit {

  public clickedEvent : Event;
  public messageBoardName;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.messageBoardName = this.route.snapshot.params['Mid'];
    console.log(this.messageBoardName)
  }

  childMessageEvent(event){
    this.clickedEvent = event;
  }

}
