import { Component } from '@angular/core';

@Component({
  selector: 'app-login-no-auth',
  templateUrl: './login-no-auth.component.html',
  styleUrls: ['./login-no-auth.component.css']
})
export class LoginNoAuthComponent {
  agentLogin: boolean = true;
  fieldTextType: boolean = true;
  checkValidator: boolean = false;

  //loginForm!: new () => FormGroup;


  partnerlevel(): void { this.agentLogin = true; }
  masterlevel(): void { this.agentLogin = false; }
  toggleFieldTextType() { this.fieldTextType = !this.fieldTextType; }
  onSubmit(value: any): void {
    console.log(value);
  }

}
