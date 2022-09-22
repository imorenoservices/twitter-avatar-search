import { Component, OnInit, OnDestroy } from '@angular/core';
import Link from 'http-link-header';
import { Subscription, Observable, tap } from 'rxjs';
import { consts } from './consts';
import { LinksRelation, SearchResultsPaginationData } from './model/search-results-page';
import { User } from './model/user';
import { GithubService } from './services/github.service';
import { getUriFromRel, getPageNumberFromLinkUri } from './utils/link-headers-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private searchSubscription = new Subscription();

  paginationLinks: Link | null = null;
  userResultList: User[] | null = null;
  totalPages = 0; // TODO:
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

  // TODO: Narrow search warn/info notification
  // Display notification if GitHub API retrieves less items than expected.
  // That can be done if last page index is lower than a calculation result
  // of dividing 'searchResultsData.searchResults.total_count' by items per page value
  private updateTableAndPaginationControls(searchResultsData: SearchResultsPaginationData<User>) {
    this.userResultList = searchResultsData.searchResults?.items || [];
    this.paginationLinks = searchResultsData.paginationInfo || null;
    if (this.paginationLinks && this.totalPages === 0) {
      this.totalPages = this.getLastPageIndex(this.paginationLinks);
    }
  }

  private getLastPageIndex(links: Link): number {
    const lastPage = getUriFromRel(links, LinksRelation.LAST);
    if (lastPage) {
      return getPageNumberFromLinkUri(lastPage);
    }
    return 0;
  }
}
