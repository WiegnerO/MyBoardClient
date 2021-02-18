import { Component, OnInit } from '@angular/core';
import { WebUserService } from '../services/web-user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  MyBoardUsers: User[];

  constructor(private webUserService: WebUserService) { }

  ngOnInit(): void {
    this.webUserService.getAllUsers().subscribe(res => {
      this.MyBoardUsers =  res;
    });
  }

}
