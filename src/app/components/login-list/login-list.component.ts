import { Component, OnDestroy, OnInit } from '@angular/core';
import Link from 'http-link-header';
import { Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/model';
import { LinksRelation, SearchResultsPaginationData } from 'src/app/model/search-results-page';
import { GithubService } from 'src/app/services/github.service';
import { getPageNumberFromLinkUri, getUriFromRel } from 'src/app/utils/link-headers-helper';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss']
})
export class LoginListComponent implements OnDestroy {
  private searchSubscription = new Subscription();

  paginationLinks: Link | null = null;
  userResultList: User[] | null = null;
  totalPages = 0;
  paginationEnabled = false;

  title = 'isidro-moreno-web';
  currentPage$: Observable<number>;

  constructor(private githubService: GithubService) {
    this.currentPage$ = this.githubService.currentPageSubject.asObservable();
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  searchLogin(login: string) {
    this.searchSubscription = this.githubService.findUserInLogin(login).subscribe((searchResultsData) => {
      this.paginationEnabled = !!searchResultsData.paginationInfo;
      this.updateTableAndPaginationControls(searchResultsData);
    });
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
