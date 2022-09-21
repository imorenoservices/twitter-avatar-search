import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';

import Link from 'http-link-header';

import { User } from 'src/app/model/user';
import { GithubService } from 'src/app/services/github.service';
import { getUriFromRel } from 'src/app/utils/link-to-view.mapper';
import { consts } from '../../consts';
import { LinksRelation, SearchResultsPaginationData } from '../../model/search-results-page';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit, OnDestroy {
  private searchSubscription = new Subscription();

  userResultList: User[] | null = null;
  paginationLinks: Link | null = null;
  currentPage$: Observable<number>;
  totalPages = 1;

  constructor(private githubService: GithubService) {
    this.currentPage$ = this.githubService.currentPageSubject.asObservable();
  }

  ngOnInit(): void {
    this.searchSubscription = this.githubService
      .findUserInLogin('morenoi')
      .pipe(tap((searchResultsData) => this.updateTableAndPaginationControls(searchResultsData)))
      .subscribe();
  }

  private updateTableAndPaginationControls(searchResultsData: SearchResultsPaginationData<User>) {
    this.userResultList = searchResultsData.searchResults?.items || [];
    this.paginationLinks = searchResultsData.paginationInfo || null;

    const totalCount = searchResultsData.searchResults?.total_count;
    this.totalPages = totalCount ? this.getLastPageIndex(totalCount) : 1;
  }

  goToLink(rel: LinksRelation) {
    if (this.paginationLinks) {
      const linkUri = getUriFromRel(this.paginationLinks, rel);
      this.githubService
        .fetchLinkUri(linkUri)
        .pipe(tap((searchResultsData) => this.updateTableAndPaginationControls(searchResultsData)))
        .subscribe();
    } else {
      throw new Error(`No link provided for ${rel} relation`);
    }
  }

  private getLastPageIndex(totalCount: number): number {
    return Math.round(totalCount / consts.paginationConfig.itemsPerPage) + 1;
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
