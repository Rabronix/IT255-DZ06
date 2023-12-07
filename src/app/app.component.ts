import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { Room } from './room/room.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rooms: Room[];

  constructor(){
    this.rooms = [new Room("Losa", "100", 1), new Room("Dobra", "20", 5), new Room("Najbolja", "15", 10)];
  }
  
  addRoom(roomNumber: HTMLInputElement, price: HTMLInputElement): boolean{
    console.log(`Adding room number: ${roomNumber.value} and price: ${price.value}`);
    this.rooms.push(new Room(roomNumber.value, price. value, 0));
    roomNumber.value = '';
    price.value = '';

    return false;
  }

}
