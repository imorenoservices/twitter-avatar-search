import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input()
  pageIndex: number = 0;

  @Input()
  total: number = 0;

  @Input()
  first: string = '';

  @Input()
  last: string = '';

  @Input()
  prev: string = '';

  @Input()
  next: string = '';

  @Input()
  disabled: string = '';

  constructor() {}

  // ngOnInit(): void {
  // }
}
