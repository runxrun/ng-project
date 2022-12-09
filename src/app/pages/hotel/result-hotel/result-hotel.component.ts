import { Component } from '@angular/core';

@Component({
  selector: 'app-result-hotel',
  templateUrl: './result-hotel.component.html',
  styleUrls: ['./result-hotel.component.css']
})
export class ResultHotelComponent {


  hotel: any[] = [
    {
      "hotelname": "HTL BANKGOK",
      "hotelimage": "https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general1.jpg",
    },
    {
      "hotelname": "HTL Ratchadapisek",
      "hotelimage": "https://www.jtbtrip.com/ImageData/Hotel/bs_residence_suvarnabhumi-general1.jpg",
    },
    {
      "hotelname": "HTL Airport",
      "hotelimage": "https://www.jtbtrip.com/ImageData/Hotel/d_varee_xpress_makkasan-general1.jpg",
    },
    {
      "hotelname": "HTL InterContinental",
      "hotelimage": "https://www.jtbtrip.com/ImageData/Hotel/true_siam_rangnam_hotel-general1.jpg",
    },
    {
      "hotelname": "HTL Resort & Spas",
      "hotelimage": "https://www.jtbtrip.com/ImageData/Hotel/sawasdee_sukhumvit_soi_8-general1.jpg",
    }
  ];
}
