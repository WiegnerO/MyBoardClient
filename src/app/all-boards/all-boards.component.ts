import { Component, OnInit } from '@angular/core';
import { Fourm } from '../model/fourm.model';
import { WebForumService } from '../services/web-forum.service';
import {AuthenticationService} from '../services/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-boards',
  templateUrl: './all-boards.component.html',
  styleUrls: ['./all-boards.component.css']
})
export class AllBoardsComponent implements OnInit {

  MyBoards: Fourm[];

  specificBoards: Fourm[];

  constructor(private webBoardService: WebForumService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.webBoardService.getAllBoards().subscribe(res => {
      this.MyBoards =  res;
    });
  }

  findBoards(myBoard: string): void {
    myBoard = myBoard.toLocaleLowerCase();
    this.specificBoards = this.MyBoards.filter(board => board.board_name.includes(myBoard));
  }

  createNewMyBoard(newBoardName): void{
    const postedName = newBoardName.toLocaleLowerCase();
    const newMyBoardJSON = {
      board_name: postedName,
      creator_id: parseInt(localStorage.getItem(this.authService.USER_ID_KEY))
    };
    this.webBoardService.postBoard(newMyBoardJSON)
      .subscribe( (res) => {
        const newMyBoard = new Fourm(postedName , parseInt(localStorage.getItem(this.authService.id)) , res);
        this.router.navigateByUrl('messageBoard/' + newBoardName);
        this.MyBoards.push(newMyBoard);
      }, err => {
        console.log(err);
      });
  }
}
