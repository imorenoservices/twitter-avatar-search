import { Component, OnInit, OnDestroy } from '@angular/core';
import Link from 'http-link-header';
import { Subscription, Observable, tap } from 'rxjs';
import { consts } from './consts';
import { LinksRelation, SearchResultsPaginationData } from './model/search-results-page';
import { User } from './model/user';
import { GithubService } from './services/github.service';
import { getUriFromRel } from './utils/link-headers-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private searchSubscription = new Subscription();

  paginationLinks: Link | null = null;
  userResultList: User[] | null = null;
  totalPages = 1;
  paginationEnabled = false;

  title = 'isidro-moreno-web';
  currentPage$: Observable<number>;

  constructor(private githubService: GithubService) {
    this.currentPage$ = this.githubService.currentPageSubject.asObservable();
  }

  searchLogin(login: string) {
    this.searchSubscription = this.githubService.findUserInLogin(login).subscribe((searchResultsData) => {
      this.paginationEnabled = !!searchResultsData.paginationInfo;
      this.updateTableAndPaginationControls(searchResultsData);
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  goToLink(rel: LinksRelation) {
    if (this.paginationLinks) {
      this.paginationEnabled = true;
      const linkUri = getUriFromRel(this.paginationLinks, rel);
      this.githubService
        .fetchLinkUri(linkUri)
        .pipe(tap((searchResultsData) => this.updateTableAndPaginationControls(searchResultsData)))
        .subscribe();
    } else {
      this.paginationEnabled = false;
      throw new Error(`No link provided for ${rel} relation`);
    }
  }

  private getLastPageIndex(totalCount: number): number {
    return Math.round(totalCount / consts.paginationConfig.itemsPerPage) + 1;
  }

  private updateTableAndPaginationControls(searchResultsData: SearchResultsPaginationData<User>) {
    this.userResultList = searchResultsData.searchResults?.items || [];
    this.paginationLinks = searchResultsData.paginationInfo || null;

    const totalCount = searchResultsData.searchResults?.total_count;
    this.totalPages = totalCount ? this.getLastPageIndex(totalCount) : 1;
  }
}
