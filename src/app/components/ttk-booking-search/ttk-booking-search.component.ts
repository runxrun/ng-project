import { Component, EventEmitter, Output } from '@angular/core';
import { auditTime } from 'rxjs';

@Component({
  selector: 'app-ttk-booking-search',
  templateUrl: './ttk-booking-search.component.html',
  styleUrls: ['./ttk-booking-search.component.css']
})
export class TtkBookingSearchComponent {

  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(auditTime(500));

  inputSearch(text: string): void{
    this.onInput.emit(text);
  }


}
