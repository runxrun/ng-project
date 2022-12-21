import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './format-date.pipe';
import { DiffDatePipe } from './diff-date.pipe';



@NgModule({
  declarations: [
    FormatDatePipe,
    DiffDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatDatePipe,
    DiffDatePipe
  ]
})
export class PipeModule { }
