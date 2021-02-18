import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../model/user.model';
import {Fourm} from '../../model/fourm.model';
import { WebForumService } from '../../services/web-forum.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  MyBoards: Fourm[];

  constructor( private webBoardService: WebForumService ) { }

  ngOnInit(): void {
    this.webBoardService.getMyBoards(this.user.id).toPromise()
      .then(res => {
        this.MyBoards = res;
      });
  }

}
