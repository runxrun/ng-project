import { Component } from '@angular/core';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-hotel-images-gallery',
  templateUrl: './hotel-images-gallery.component.html',
  styleUrls: ['./hotel-images-gallery.component.css']
})
export class HotelImagesGalleryComponent {
  settings = {
    counter: true,
    plugins: [lgZoom]
  };

  lightGallery!: LightGallery;


  public galleries:any[] = [
    {
      id: 1,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general1.jpg',
    },
    {
      id: 2,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general6.jpg',
    },
    {
      id: 3,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general3.jpg',
    },
    {
      id: 4,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general4.jpg',
    },
    {
      id: 5,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general5.jpg',
    },
    {
      id: 6,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general7.jpg',
    },
    {
      id: 7,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general8.jpg',
    },
    {
      id: 8,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general9.jpg',
    },
    {
      id: 9,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general10.jpg',
    },
    {
      id: 10,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-general11.jpg',
    },
    {
      id: 11,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room1.jpg',
    },
    {
      id: 12,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room2.jpg',
    },
    {
      id: 13,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room3.jpg',
    },
    {
      id: 14,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room4.jpg',
    },
    {
      id: 15,
      imgname: 'https://www.jtbtrip.com/ImageData/Hotel/w22_hotel_by_burasari-room5.jpg',
    },


  ];

  onInit = (detail: {instance: any}): void => {
    this.lightGallery = detail.instance;
  };


}

