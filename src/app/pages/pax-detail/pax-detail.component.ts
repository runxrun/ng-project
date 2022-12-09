import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-pax-detail',
  templateUrl: './pax-detail.component.html',
  styleUrls: ['./pax-detail.component.css']
})
export class PaxDetailComponent {
  fieldTextType: boolean | undefined;
  constructor() {}
  ngOnInit() {}
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
