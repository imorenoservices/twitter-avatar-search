import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';

import Link from 'http-link-header';

import { User } from 'src/app/model/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html'
})
export class UserSearchResultsComponent implements OnInit, OnDestroy {
  private searchSubscription = new Subscription();

  userResultList: User[] = [];
  paginationInfo: Link | undefined;

  // TODO:
  emptyState = true;
  noResults = false;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.searchSubscription = this.githubService
      .findUserInLogin('morenoi')
      .pipe(
        tap((searchResultsData) => {
          this.userResultList = searchResultsData.searchResults?.items || [];
          this.paginationInfo = searchResultsData.paginationInfo;
          // TODO: DEBUG
          debugger;
        })
      )
      .subscribe();
  }

  onPageIndexChange(pageIndex: number) {
    debugger;
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
