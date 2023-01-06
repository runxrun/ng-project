import { Component, EventEmitter, Output } from '@angular/core';
import { auditTime } from 'rxjs';

@Component({
  selector: 'app-ttk-shopping-search',
  templateUrl: './ttk-shopping-search.component.html',
  styleUrls: ['./ttk-shopping-search.component.css']
})
export class TtkShoppingSearchComponent{

  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(auditTime(500));

  inputSearch(text: string): void{
    this.onInput.emit(text);
  }

}


