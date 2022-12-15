import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-rates',
  templateUrl: './hotel-rates.component.html',
  styleUrls: ['./hotel-rates.component.css']
})
export class HotelRatesComponent {
  users = [
    {
      roomname: 'Bedroom Deluxe Double',
      imgroom: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room2.jpg',
    },
    {
      roomname: 'Bedroom Deluxe Twin',
      imgroom: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room5.jpg',
    },
    {
      roomname: 'Bedroom Supreior Double',
      imgroom: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room1.jpg',
    },
  ];
}
