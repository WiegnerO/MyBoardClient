import { Identifiers } from '@angular/compiler';

export class Message {
    title: string = "";
    content: string = "";
    Mid: string = "";
    Uid: string = "";
    Bid: Identifiers = "";

    constructor(title ,content ,Mid , Bid){
        this.title = title;
        this.content = content;
        this.Mid = Mid;
        this.Uid = localStorage.getItem("id");
        this.Bid = Bid;
    }
    
}


