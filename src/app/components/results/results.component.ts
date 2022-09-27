import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/model/user';
import { LinksRelation } from '../../model/search-results-page';

interface DataItem {
  login: string;
  type: string;
  avatar: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() userResultList: User[] | null = null;
  @Input() paginationEnabled = false;
  @Input() currentPage$: Observable<number> = of(1);
  @Input() isLoading$: Observable<boolean> = of(false);
  @Input() totalPages = 1;
  @Output() goToPage = new EventEmitter<LinksRelation>();

  loginColumn: ColumnItem = {
    name: 'login',
    sortOrder: 'ascend',
    sortDirections: ['ascend', 'descend', null],
    sortFn: (a: DataItem, b: DataItem) => a.login.localeCompare(b.login)
  };

  public goToLink(rel: LinksRelation) {
    this.goToPage.emit(rel);
  }

  openImageInNewTab(avatarUrl: string) {
    window.open(avatarUrl, '_blank');
  }
}
