import { Component } from '@angular/core';

@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.css']
})
export class SpecialRequestComponent {


  public special_request: any = [
    {
      name: 'Honeymooners',
    },
    {
      name: 'Non smoking room',
    },
    {
      name: 'Room on high floor',
    },
    {
      name: 'Room on lower floor',
    },
    {
      name: 'Room on same floor',
    },
    {
      name: 'Interconnected rooms',
    },
    {
      name: 'Adjoining rooms',
    },
  ]


}
