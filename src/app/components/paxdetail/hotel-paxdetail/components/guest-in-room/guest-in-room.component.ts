import { Component } from '@angular/core';

@Component({
  selector: 'app-guest-in-room',
  templateUrl: './guest-in-room.component.html',
  styleUrls: ['./guest-in-room.component.css']
})
export class GuestInRoomComponent {
  public rooms: any = [
    {
      roomname: 'Superior Mountain View',
      mealtype: 'Room only',
      adult: 2,
      child: 0,
      childage1: 0,
      childage2: 0,
    },
    {
      roomname: 'One Bedroom Deluxe Double',
      mealtype: 'Room only',
      adult: 2,
      child: 1,
      childage1: 9,
      childage2: 0,
    }
  ];
}
