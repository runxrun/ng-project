import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  items!: any[];
  totalProduct!: number;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe((data) => {
      this.items = data;
      this.totalProduct = this.items?.length;
    });
  }

  currentPage: number = 0;
  itemsPerPage: number = 30;
  xPage: number = 1;
  limitItem: number = this.itemsPerPage;
  totalPage: number | undefined;

  next_page() {
    this.totalPage = Math.ceil(this.totalProduct / this.limitItem);
    if (this.xPage < this.totalPage) {
      this.currentPage = this.currentPage + this.limitItem;
      this.itemsPerPage = this.itemsPerPage + this.limitItem;
      this.xPage++;
      this.router.navigate(['/help-support/'], { fragment: ''+this.xPage });
    }
  }

  previous_page() {
    if (this.xPage > 1) {
      this.currentPage = this.currentPage - this.limitItem;
      this.itemsPerPage = this.itemsPerPage - this.limitItem;
      this.xPage--;
      this.router.navigate(['/help-support/'], { fragment: ''+this.xPage });
    }
  }


}
