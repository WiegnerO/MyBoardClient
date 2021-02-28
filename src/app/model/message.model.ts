

export class Message {
    public post_title: string;
    public post_content: string;
    public id: number;
    public creator_id: number;
    public board_id: number;
    public parent_message: number;
    public rates: number;

    constructor(board_id , parent_message ?: number){
        this.post_title = undefined;
        this.post_content = undefined;
        this.id = undefined;
        this.parent_message = parent_message;
        this.creator_id = parseInt(localStorage.getItem("id"));
        this.board_id = board_id;
        this.rates = undefined;
    }
}


