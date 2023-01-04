import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {


  idCardValidator: ValidatorFn = (control: AbstractControl) => {

    const idCard: string | null = control.value;
    if (idCard) {
      if (idCard?.length !== 13) {
        return { idCard: true };
      }

      let index = 13;
      let sum = 0;

      for (const num of idCard.substring(0, 12)) {
        if (isNaN(Number(num))) {
          return { idCard: true };
        }
        sum += Number(num) * index--;
      }
      const mod = sum % 11;
      const checkLastNumber = 11 - mod;

      let strLastNumber = String(checkLastNumber).slice(-1);
      let strIdCard = String(idCard.charAt(12));

      if (strIdCard !== strLastNumber) {
        return { idCard: true };
      }

      //console.log(sum);
      //console.log(mod);
      //console.log('11-' + mod + ' = ' + checkLastNumber);

    }
    return null;

  }


  idCard = new FormControl(null, [
    Validators.required,
    this.idCardValidator,
  ]);


}
