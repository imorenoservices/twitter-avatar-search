import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';

import Link from 'http-link-header';
import { User } from 'src/app/model/user';
import { GithubService } from 'src/app/services/github.service';
import { getUriFromRel } from 'src/app/utils/link-to-view.mapper';
import { LinksRelation, SearchResultsPaginationData } from '../../model/search-results-page';

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchResultsComponent implements OnInit, OnDestroy {
  private searchSubscription = new Subscription();

  userResultList: User[] | null = null;
  paginationLinks: Link | null = null;

  // TODO:
  emptyState = true;
  noResults = false;

  constructor(private githubService: GithubService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.searchSubscription = this.githubService
      .findUserInLogin('morenoi')
      .pipe(tap((searchResultsData) => this.updateTableAndPaginationControls(searchResultsData)))
      .subscribe();
  }

  private updateTableAndPaginationControls(searchResultsData: SearchResultsPaginationData<User>) {
    this.userResultList = searchResultsData.searchResults?.items || [];
    this.paginationLinks = searchResultsData.paginationInfo || null;
    this.cdr.detectChanges();

    // TODO: DEBUG
    debugger;
  }

  goToLink(rel: LinksRelation) {
    if (this.paginationLinks) {
      const linkUri = getUriFromRel(this.paginationLinks, rel);
      this.githubService
        .fetchLink(linkUri)
        .pipe(tap((searchResultsData) => this.updateTableAndPaginationControls(searchResultsData)))
        .subscribe();
    } else {
      throw new Error(`No link provided for ${rel} relation`);
    }
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
