export class User {
    username: string;
    name: string;
    first_name : string;
    id: any;
    about_user: string;

    constructor(username: string , name: string, id: any){
        this.username = username;
        this.name = name;
        this.id = id;
    }
}
