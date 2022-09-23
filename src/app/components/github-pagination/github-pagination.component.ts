import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { LinksRelation } from '../../model/search-results-page';

@Component({
  selector: 'app-github-pagination',
  templateUrl: './github-pagination.component.html',
  styleUrls: ['./github-pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  public readonly LinksRelations = LinksRelation;

  currentPage = 1;
  isFirstPage = true;
  isLastPage = false;

  currentPageSubscription = new Subscription();

  @Input() currentPage$ = of(1);
  @Input() lastPageIndex = 1;

  @Output() goToPage = new EventEmitter<LinksRelation>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentPageSubscription = this.currentPage$.subscribe((value) => {
      this.currentPage = value;
      this.updateFirstAndLastPages(value);
    });
  }

  goTo(rel: LinksRelation) {
    this.goToPage.emit(rel);
  }

  ngOnDestroy(): void {
    this.currentPageSubscription.unsubscribe();
  }

  private updateFirstAndLastPages(currentPage: number) {
    this.isFirstPage = currentPage === 1;
    this.isLastPage = currentPage === this.lastPageIndex;
  }
}
