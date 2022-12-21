import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {

  transform(from: NgbDate | null, to: NgbDate | null): number {
    const fromDate = from ? new Date(`${from.year}-${from.month}-${from.day}`) : new Date();
    const toDate = to ? new Date(`${to.year}-${to.month}-${to.day}`) : new Date();

    console.log(fromDate,' - ',toDate);

    const nights = moment(toDate).diff(fromDate, 'd');
    return nights > -1 ? nights : 0 ;
  }



}
