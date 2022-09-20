import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LinksRelation } from '../../model/search-results-page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public readonly LinksRelations = LinksRelation;

  isFirstPage = true;
  isLastPage = false;

  @Input() isLoading = false;

  @Input() pageIndex: number = 2; // TODO:
  @Input() lastPageIndex: number = 10; // TODO:

  @Output() goToPage = new EventEmitter<LinksRelation>();

  constructor() {}

  ngOnInit(): void {
    this.isFirstPage = this.pageIndex === 1;
    this.isLastPage = this.pageIndex === this.lastPageIndex;
  }

  goTo(rel: LinksRelation) {
    this.goToPage.emit(rel);
  }
}
