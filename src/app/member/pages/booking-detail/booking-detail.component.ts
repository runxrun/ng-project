import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent {

  bookingdetail = [
    {
      bookingid: 'MA266106712',
      currency: 'THB',
      service: [
        {
          type: 'Hotel',
          name: 'HTL BANGKOK',
          image: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general1.jpg',
          address: '9/3 Soi Ratchadapisek 18 Ratchadapisek Rd., Huay Kwang Bangkok 10310, Thailand',
          period: '11-13 Nov 2022',
          checkin: '2022-11-11',
          checkout: '2022-11-13',
          nights: '2',
          status: 'Complete',
          flight: [
            {
              fromdate: '11 Nov 2022',
              eta: '07:00 Hrs',
              fltnumberfrom: 'FD7652',
              travelfrom: 'Buenos Aires',
              todate: '13 Nov 2022',
              etd: '19:50 Hrs',
              fltnumberto: 'FD9807',
              travelto: 'Buenos Aires',
            },
          ],
          room: [
            {
              roomno: 1,
              name: 'Superior Mountain View',
              meal: 'Room only',
              adult: 2,
              child: 1,
              price: 1276.70,
              guest: [
                {
                  title: 'Mr.',
                  firstname: 'Leonel',
                  lastname: 'Messi',
                },
                {
                  title: 'Mrs.',
                  firstname: 'Antonela',
                  lastname: 'Roccuzzo',
                },
                {
                  title: 'Mr.',
                  firstname: 'Thiago',
                  lastname: 'Messi',
                },
              ],
              cancellation: [
                {
                  cxlroom: 'Superior Mountain View - Apply to all meal type',
                  cxlrate: 'Booking Cancel after 09 Nov 2023, 50.00 % cancellation charge for the entire stay will be applied.',
                },
              ],
            },
            {
              roomno: 1,
              name: 'One Bedroom Deluxe Double',
              meal: 'Room only',
              adult: 2,
              child: 0,
              price: 1520,
              guest: [
                {
                  title: 'Mr.',
                  firstname: 'Cristiano',
                  lastname: 'Ronaldo',
                },
                {
                  title: 'Mrs.',
                  firstname: 'Georgina',
                  lastname: 'Rodríguez',
                },
              ],
              cancellation: [
                {
                  cxlroom: 'One Bedroom Deluxe Double - Apply to all meal type',
                  cxlrate: 'Booking Cancel after 10 Nov 2023, 50.00 % cancellation charge for the entire stay will be applied.',
                },
              ],
            },
          ],
          enhancement: [
            {
              image: 'https://manage.combinetrip.com/ImageData/Place/urban-oasis-spa-general3.jpg',
              name: 'HTL BKK Massage & Spa',
              date: '12 Nov 2022',
              time: '14:00',
              adult: 3,
              adultprice: 500,
              child: 0,
              childprice: 0,
            },
            {
              image: 'https://manage.combinetrip.com/imagedata/Place/800/the_raweekanlaya_dining-general1.jpg',
              name: 'HTL BKK Restaurant (Buffet)',
              date: '12 Nov 2022',
              time: '18:00',
              adult: 4,
              adultprice: 500,
              child: 1,
              childprice: 120,
            },
          ],
        },
      ],
    }
  ];
}

