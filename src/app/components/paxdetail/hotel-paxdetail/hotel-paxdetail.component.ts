import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-paxdetail',
  templateUrl: './hotel-paxdetail.component.html',
  styleUrls: ['./hotel-paxdetail.component.css']
})
export class HotelPaxdetailComponent {

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


  public special_request: any = [
    {
      name: 'Honeymooners',
    },
    {
      name: 'Non smoking room',
    },
    {
      name: 'Room on high floor',
    },
    {
      name: 'Room on lower floor',
    },
    {
      name: 'Room on same floor',
    },
    {
      name: 'Interconnected rooms',
    },
    {
      name: 'Adjoining rooms',
    },
  ]


}
