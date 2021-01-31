

export class Message {
    public post_title: string;
    public post_content: string;
    public id: number;
    public creator_id: number;
    public board_id: number;

    constructor(board_id){
        this.post_title = undefined;
        this.post_content = undefined;
        this.id = undefined;
        this.creator_id = parseInt(localStorage.getItem("id"));
        this.board_id = board_id;
    }
}


