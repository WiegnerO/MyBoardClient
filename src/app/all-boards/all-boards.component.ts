import { Component, OnInit } from '@angular/core';
import { Fourm } from '../fourm.model';
import { WebForumService } from '../services/web-forum.service';

@Component({
  selector: 'app-all-boards',
  templateUrl: './all-boards.component.html',
  styleUrls: ['./all-boards.component.css']
})
export class AllBoardsComponent implements OnInit {

  MyBoards: Fourm[];

  specificBoards: Fourm[];

  constructor(private webBoardService: WebForumService) { }

  ngOnInit(): void {
    this.webBoardService.getAllBoards().subscribe(res => {
      this.MyBoards =  res;
    });
  }

  findBoards(myBoard: string): void {
    myBoard = myBoard.toLocaleLowerCase();
    this.specificBoards = this.MyBoards.filter(board => board.board_name.includes(myBoard));
  }


}
