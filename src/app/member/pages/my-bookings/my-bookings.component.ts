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
      period: '11-13 Nov 2022',
      bookedon: '2022-11-10',
      status: 'Completed',
    },
    {
      bookingid: 'MA266107025',
      services: [
        'HTL BANGKOK',
        'HTL BKK BKK Restaurant (Buffet)'
      ],
      checkin: '2023-04-09',
      checkout: '2023-04-11',
      period: '09-11 Apr 2022',
      bookedon: '2023-01-10',
      status: 'Upcoming',
    },
    {
      bookingid: 'MA266108113',
      services: [
        'HTL BANGKOK',
      ],
      checkin: '2022-10-21',
      checkout: '2022-10-23',
      period: '21-23 Oct 2022',
      bookedon: '2022-09-30',
      status: 'Cancelled',
    },
  ];

  colorClass: string | undefined;

  getClass(status: string){
    switch(status){
      case 'Upcoming': return 'text-success';
      case 'Completed': return 'text-success';
      case 'Cancelled': return 'text-secondary';
      default: return 'text-dark';
    }
  }

}
