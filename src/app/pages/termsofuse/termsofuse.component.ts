import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-termsofuse',
  templateUrl: './termsofuse.component.html',
  styleUrls: ['./termsofuse.component.css']
})
export class TermsofuseComponent {

  formz: FormGroup;
  input_1: any;
  input_2: any;
  summary: any;
  summary_plus: any;
  summary_minus: any;
  summary_multiply: any;
  summary_divide: any;

  constructor() {
    this.formz = new FormGroup({
      input1: new FormControl(0, Validators.required),
      input2: new FormControl(0, Validators.required)
    });
  }


  test_plus(): void {
    this.input_1 = this.formz.value.input1;
    this.input_2 = this.formz.value.input2;
    this.summary = (parseFloat(this.input_1) + parseFloat(this.input_2));
    this.summary_plus = this.summary;
  }
  test_minus() {
    this.input_1 = this.formz.value.input1;
    this.input_2 = this.formz.value.input2;
    this.summary = (parseFloat(this.input_1) - parseFloat(this.input_2));
    this.summary_minus = this.summary;
  }
  test_multiply() {
    this.input_1 = this.formz.value.input1;
    this.input_2 = this.formz.value.input2;
    this.summary = (parseFloat(this.input_1) * parseFloat(this.input_2));
    this.summary_multiply = this.summary;
  }
  test_divide() {
    this.input_1 = this.formz.value.input1;
    this.input_2 = this.formz.value.input2;
    this.summary = (parseFloat(this.input_1) / parseFloat(this.input_2));
    this.summary_divide = this.summary;
  }

  random() {
    this.formz.value.input1 = 10;
    this.formz.value.input2 = 10;
  }

  reset() {
    this.formz.reset();
    this.formz.value.input1 = 0;
    this.formz.value.input2 = 0;
    this.summary = 0;
    this.summary_plus = 0;
    this.summary_minus = 0;
    this.summary_multiply = 0;
    this.summary_divide = 0;
  }

}

