import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit{

  @HostBinding('attr.class') cssClass = 'row';
  @Input() room: Room;

  constructor(){
    this.room = new Room("DObra", "22.5", 10);
  }

  voteUp(){
    this.room.voteUp();
    return false;
  }

  voteDown(){
    this.room.voteDown();
    return false;
  }

  ngOnInit(): void {
    
  }

}
