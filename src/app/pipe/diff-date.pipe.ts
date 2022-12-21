import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Pipe({
  name: 'diffDate'
})
export class DiffDatePipe implements PipeTransform {

  transform(from: NgbDate | null, to: NgbDate | null): number {
    const fromDate = from ? moment(`${from.year}-${from.month}-${from.day}`, 'YYYY-MM-DD') : new Date();
    const toDate = to ? moment(`${to.year}-${to.month}-${to.day}`, 'YYYY-MM-DD') : new Date();
    const nights = moment(toDate).diff(fromDate , 'd');
    return nights > -1 ? nights : 0 ;
  }

}
