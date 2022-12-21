import { Component } from '@angular/core';

@Component({
  selector: 'app-ttk-signup',
  templateUrl: './ttk-signup.component.html',
  styleUrls: ['./ttk-signup.component.css']
})
export class TtkSignupComponent {
  fieldTextType: boolean | undefined;
  constructor() {}
  ngOnInit() {}
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
