import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  isFirstPage = true;
  isLastPage = false;

  @Input() isLoading = false;

  @Input() pageIndex: number = 1;
  @Input() lastPageIndex: number = 10;

  @Input() first: string = '';
  @Input() last: string = '';
  @Input() prev: string = '';
  @Input() next: string = '';
  @Input() disabled: string = '';

  constructor() {}

  ngOnInit(): void {
    this.isFirstPage = this.pageIndex === 1;
    this.isLastPage = this.pageIndex === this.lastPageIndex;
  }
}
