import { Component, OnInit } from '@angular/core';
import { Fourm } from '../fourm.model';
import { WebForumService } from '../services/web-forum.service';
import { AuthenticationService } from '../services/authentication-service.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user = {
    userName : "",
    name : "",
    bio : ""
  };

  MyBoards : Fourm[];

  newMyBoard : string;
  

  constructor(private webSevice : WebForumService, private authService : AuthenticationService) { 
    this.user.userName = "BobTheWarrior";
    this.user.name = localStorage.getItem(this.authService.NAME_KEY);
    this.user.bio = "Im a cool dude who likes to do cool dude things"
  }

  /**
   * Lets you add a new MyBoard fourm page
   */
  createNewMyBoard() {
      let newMyBoardJSON = {board_name : this.newMyBoard , creator_id : parseInt(localStorage.getItem(this.authService.USER_ID_KEY))};
      this.webSevice.postBoard(newMyBoardJSON)
      .subscribe( () => {
        let newMyBoard = new Fourm(this.newMyBoard , parseInt(this.authService.USER_ID_KEY));
        this.MyBoards.push(newMyBoard);
      }, err => {
        console.log(err);
      })
  }

  updateProfile(){
    console.log(localStorage.getItem(this.authService.TOKEN_KEY));
    console.log(localStorage.getItem(this.authService.USER_ID_KEY));
    console.log(localStorage.getItem(this.authService.NAME_KEY));
  }

  /**
   * Current retrives all MyBoard foumr pages but will only retrive the MyBoard fourm page that the user has created or commented on
   */
  ngOnInit(): void {
    this.webSevice.getBoard().subscribe(res =>{
      console.log(res);
      this.MyBoards =  res;
    })
  }

}
