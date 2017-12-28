import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  maxSize: number = 5;
  bigTotalItems: number = 175;
  bigCurrentPage: number = 1;
  numPages: number = 0;
  constructor() { }

  ngOnInit() {
  }
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}
