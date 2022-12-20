import { Component } from '@angular/core';

@Component({
  selector: 'app-enhancement',
  templateUrl: './enhancement.component.html',
  styleUrls: ['./enhancement.component.css']
})
export class EnhancementComponent {

  public enhance_service: any = [
    {
      name: 'HTL BKK Massage & Spa',
      detail: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa commodi repellat amet maxime aspernatur doloribus quibusdam qui sit ipsa! Dicta dignissimos eum iure velit soluta, enim temporibus!',
      image: 'https://manage.combinetrip.com/ImageData/Place/urban-oasis-spa-general3.jpg',
      adultprice: 500,
      childprice: 300,
    },
    {
      name: 'HTL BKK Restaurant (Buffet)',
      detail: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      image: 'https://manage.combinetrip.com/imagedata/Place/800/the_raweekanlaya_dining-general1.jpg',
      adultprice: 500,
      childprice: 350,
    },
  ];
}
