import { Component } from '@angular/core';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.css']
})
export class MemberRegisterComponent {
  fieldTextType: boolean | undefined;
  constructor() {}
  ngOnInit() {}
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}


