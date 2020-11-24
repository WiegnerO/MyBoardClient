import { Component, OnInit } from '@angular/core';
import { Fourm } from '../fourm.model';
import { WebService } from '../web.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user = {
    userName : "",
    firstName : "",
    lastName : "",
    bio : ""
  };

  MyBoards : Fourm[];

  newMyBoard : string;
  

  constructor(private webSevice : WebService) { 
    this.user.userName = "BobTheWarrior";
    this.user.firstName = "Bob";
    this.user.lastName = "Bobberson";
    this.user.bio = "Im a cool dude who likes to do cool dude things"
  }

  /**
   * Lets you add a new MyBoard fourm page
   */
  createNewMyBoard() {
      let newMyBoardJSON = {name : this.newMyBoard};
      this.webSevice.postForum(newMyBoardJSON);
      let newMyBoard = new Fourm(this.newMyBoard);
      this.MyBoards.push(newMyBoard);
  }

  /**
   * Current retrives all MyBoard foumr pages but will only retrive the MyBoard fourm page that the user has created or commented on
   */
  ngOnInit(): void {
    this.webSevice.getFourmns().subscribe(res =>{
      this.MyBoards =  res;
    })
  }

}
