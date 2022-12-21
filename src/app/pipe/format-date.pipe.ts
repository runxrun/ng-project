import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(from: NgbDate | null, to: NgbDate | null, format?: string): string | null {

    const fromDate = from ? new Date(`${from.year}-${from.month}-${from.day}`) : new Date();
    const toDate = to ? new Date(`${to.year}-${to.month}-${to.day}`) : new Date();
    
    if(format) return  `${this.formatDt(fromDate, format)} - ${this.formatDt(toDate, format)}`;

    const isMatchMonth = this.formatDt(fromDate, 'M') == this.formatDt(toDate, 'M');
    const isMatchYear = this.formatDt(fromDate, 'YYYY') == this.formatDt(toDate, 'YYYY');

    if(!isMatchYear) {
      return `${this.formatDt(fromDate, 'dd MMM YYYY')} - ${this.formatDt(toDate, 'dd MMM YYYY')}`;
    }

    if(!isMatchMonth) {
      return `${this.formatDt(fromDate, 'dd MMM')} - ${this.formatDt(toDate, 'dd MMM YYYY')}`;
    }
    
    return `${this.formatDt(fromDate, 'dd')} - ${this.formatDt(toDate, 'dd MMM YYYY')}`;

  }

  formatDt(value: Date, format: string) {
    const datePipe = new DatePipe('en');
    return datePipe.transform(value, format);
  }

}
