import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebForumService } from '../../services/web-forum.service';

@Component({
  selector: 'app-message-board-page',
  templateUrl: './message-board-page.component.html',
  styleUrls: ['./message-board-page.component.css']
})
export class MessageBoardPageComponent implements OnInit {

  public clickedEvent: Event;
  public messageBoard ;
  public messageBoardName = this.route.snapshot.params['Bname'];


  constructor(private route: ActivatedRoute , private WebForum: WebForumService) { }

  ngOnInit(): void {
    this.WebForum.getBoardID(this.messageBoardName).toPromise()
    .then(res => {
      this.messageBoard = res;
      }
    );

  }

  childMessageEvent(event): void{
    this.clickedEvent = event;
  }

}
