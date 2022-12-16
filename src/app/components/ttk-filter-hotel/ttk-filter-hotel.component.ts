import { Component } from '@angular/core';

@Component({
  selector: 'app-ttk-filter-hotel',
  templateUrl: './ttk-filter-hotel.component.html',
  styleUrls: ['./ttk-filter-hotel.component.css']
})
export class TtkFilterHotelComponent {

  public filterfacilities: any[] = [
    { "name": "WIFI" },
    { "name": "Restaurant" },
    { "name": "Room Services" },
    { "name": "Swimming Pool" },
    { "name": "Car park" },
    { "name": "Spa" },
    { "name": "Fitness" },
    { "name": "Laundry" },
  ];


  public filterlocation: any[] = [
    { "name": "Pratumwan", },
    { "name": "Silom ", },
    { "name": "Sukhumvit ", },
    { "name": "Siam Square ", },
    { "name": "Srinakarin ", },
    { "name": "Suvarnabhumi Airport ", },
    { "name": "Langsuan ", },
    { "name": "Phayathai ", },
    { "name": "Lad Kra Bang ", },
    { "name": "Yaowaraj ", },
    { "name": "Sathorn ", },
    { "name": "Wat Suan Phu ", },
    { "name": "Ratchathewi ", },
    { "name": "South Sathorn ", },
    { "name": "Surawongse ", },
    { "name": "Don Muang ", },
    { "name": "Rajdamri ", },
    { "name": "Makkasan ", },
    { "name": "Phranakorn ", },
    { "name": "Central World ", },
    { "name": "Huaykwang ", },
    { "name": "Wisutkasart ", },
    { "name": "Klongsan ", },
    { "name": "Chinatown ", },
    { "name": "Rajathevee ", },
    { "name": "Pratunam ", },
    { "name": "Naradhivas Rajanakarindra ", },
    { "name": "Chareonkrung ", },
    { "name": "Banglumpoo ", }
  ];


  public filterhotelstyle: any[] = [
    { "name": "Hotel", },
    { "name": "Serviced Apartment", },
    { "name": "Boutique", },
    { "name": "Residence", },
    { "name": "Guest House", },
    { "name": "Luxury", },
    { "name": "Modern", },
    { "name": "City Hotel", },
    { "name": "Resort", }
  ];

}



