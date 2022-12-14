import { Component } from '@angular/core';

@Component({
  selector: 'app-ttk-autocomplete-destination',
  templateUrl: './ttk-autocomplete-destination.component.html',
  styleUrls: ['./ttk-autocomplete-destination.component.scss']
})
export class TtkAutocompleteDestinationComponent {

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
