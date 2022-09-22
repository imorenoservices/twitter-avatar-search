import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/model/user';
import { LinksRelation } from '../../model/search-results-page';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  @Input() userResultList: User[] | null = null;
  @Input() paginationEnabled = false;
  @Input() currentPage$: Observable<number> = of(1);
  @Input() totalPages = 1;
  @Output() goToPage = new EventEmitter<LinksRelation>();

  public goToLink(rel: LinksRelation) {
    this.goToPage.emit(rel);
  }
}
