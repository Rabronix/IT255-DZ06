export class Room {

    roomName: string;
    price: string;
    votes: number;

    constructor(roomName: string, price: string, votes?: number){
        this.roomName = roomName;
        this.price = price;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }

}