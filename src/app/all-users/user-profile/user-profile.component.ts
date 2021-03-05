import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../model/user.model';
import {Board} from '../../model/board.model';
import { WebForumService } from '../../services/web-forum.service';
import {AuthenticationService} from '../../services/authentication-service.service';
import * as myGlobals from '../../services/globalVars';
import {WebUserService} from '../../services/web-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  MyBoards: Board[];
  profilePic = null;
  defaultProfilePic = '../../assets/defaultProfile.png';

  constructor( private webBoardService: WebForumService,
               private webUserService: WebUserService,
               private authService: AuthenticationService ) { }

  ngOnInit(): void {
    this.webBoardService.getMyBoards(this.user.id).toPromise()
      .then(res => {
        this.MyBoards = res;
      });
    this.webUserService.getUserPicture(this.user.id).toPromise()
      .then(() => {
        this.profilePic = myGlobals.BASE_URL + '/user/picture/' + this.user.id;
      })
      .catch((err) => {
        this.profilePic = this.defaultProfilePic;
      });
  }

}
