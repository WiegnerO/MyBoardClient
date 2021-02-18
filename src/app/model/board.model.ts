export class Board {
    id : any;
    board_name : string;
    creator_id : number;

    constructor(board_name: string , creator_id?: number , id?: any){
        this.id = id;
        this.board_name = board_name;
        this.creator_id = creator_id;
    }
}
