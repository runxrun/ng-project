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
          enhancement: [
            {
              image: 'https://manage.combinetrip.com/ImageData/Place/urban-oasis-spa-general3.jpg',
              name: 'HTL BKK Massage & Spa',
              date: '12 Nov 2022',
              time: '14:00',
              adult: 3,
              adultprice: 500,
            },
            {
              image: 'https://manage.combinetrip.com/imagedata/Place/800/the_raweekanlaya_dining-general1.jpg',
              name: 'HTL BKK Restaurant (Buffet)',
              date: '12 Nov 2022',
              time: '18:00',
              adult: 4,
              adultprice: 500,
            },
          ],
        },
      ],
    }
  ];

}
//Superior Mountain View
//One Bedroom Deluxe Double
/*

            {
              image: 'https://manage.combinetrip.com/ImageData/Place/urban-oasis-spa-general3.jpg',
              name: 'HTL BKK Massage & Spa',
              date: '12 Nov 2022',
              time: '14:00',
              adult: 3,
              adultprice: 500,
            },
            {
              image: 'https://manage.combinetrip.com/imagedata/Place/800/the_raweekanlaya_dining-general1.jpg',
              name: 'HTL BKK Restaurant (Buffet)',
              date: '12 Nov 2022',
              time: '18:00',
              adult: 4,
              adultprice: 500,
            },

      services: [{
        hotelname: 'HTL BANGKOK',
        hoteladdress: '9/3 Soi Ratchadapisek 18 Ratchadapisek Rd., Huay Kwang Bangkok 10310, Thailand',
        hotelnxxxame: 'HTL BKK BKK Restaurant (Buffet)',
      },
      ],
      checkin: '2022-11-11',
      checkout: '2022-11-13',
      period: '11-13 Nov 2022',
      bookedon: '2022-11-10',
      status: 'Completed',*/
