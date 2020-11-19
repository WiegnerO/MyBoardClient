import { Component, OnInit } from '@angular/core';

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

  messageBoards = ['MB1' , 'MB2' , 'MB3' , 'MB4'];

  constructor() { 
    this.user.userName = "BobTheWarrior";
    this.user.firstName = "Bob";
    this.user.lastName = "Bobberson";
    this.user.bio = "Im a cool dude who likes to do cool dude things"
  }

  ngOnInit(): void {
  }

}
