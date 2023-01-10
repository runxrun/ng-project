import { Component } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {


  items = [
    {
      bookingid: 'MA266106712',
      services: [
        'HTL BANGKOK',
        'HTL BKK Massage & Spa',
        'HTL BKK BKK Restaurant (Buffet)'
      ],
      checkin: '2022-11-11',
      checkout: '2022-11-13',
      bookedon: '2022-11-10',
      status: 'Complete',
    },
    {
      bookingid: 'MA266106712',
      services: [
        'HTL BANGKOK',
        'HTL BKK BKK Restaurant (Buffet)'
      ],
      checkin: '2023-04-09',
      checkout: '2023-04-11',
      bookedon: '2023-01-10',
      status: 'Complete',
    },
  ];




}
