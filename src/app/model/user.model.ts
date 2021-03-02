export class User {
    username: string;
    name: string;
    first_name : string;
    id: any;
    about_user: string;
    profile_picture : any;

    constructor(username: string , name: string, id: any){
        this.username = username;
        this.name = name;
        this.id = id;
        this.profile_picture = undefined;
        this.first_name = undefined;
    }
}
