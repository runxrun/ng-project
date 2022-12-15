import { Component } from '@angular/core';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.scss']
})
export class SearchHotelsComponent {

  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Bangkok',
    },
    {
      id: 2,
      name: 'Pattaya',
    },
    {
      id: 3,
      name: 'Phuket',
    },
    {
      id: 4,
      name: 'Chiang Mai',
    },
    {
      id: 5,
      name: 'Koh Samui',
    },
  ];

  selectEvent(item: any) {
    console.log(item);
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something
  }







}
