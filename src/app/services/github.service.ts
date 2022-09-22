import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BehaviorSubject, map, Observable } from 'rxjs';

import Link from 'http-link-header';

import { consts } from '../consts';
import { User, SearchResultsPage } from '../model';
import { SearchResultsPaginationData, SearchResults } from '../model/search-results-page';
import { getPageNumberFromLinkUri } from '../utils/link-headers-helper';

/**
 * (!) ABOUT TRAVERSING FROM PAGINATION
 *
 * Link Header: https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header
 * Hypermedia: https://docs.github.com/en/rest/overview/resources-in-the-rest-api#hypermedia
 *
 * (!) "It's important to form calls with Link header values instead of constructing your own URLs."
 */
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  static readonly SEARCH_USER_URL = `${environment.githubAPI}/${consts.gitHubApi.SEARCH}/${consts.gitHubApi.USERS}`;

  private readonly itemsPerPage = consts.paginationConfig.itemsPerPage;

  currentPageSubject = new BehaviorSubject<number>(1);

  constructor(private http: HttpClient) {}

  fetchLinkUri(linkUri: string) {
    return this.http.get<SearchResultsPage<User>>(linkUri, { observe: 'response' }).pipe(
      map((response) => {
        this.currentPageSubject.next(getPageNumberFromLinkUri(linkUri));
        return this.mapResponseToPaginationData(response);
      })
    );
  }

  findUserInLogin(userName: string, pageNumber = 1): Observable<SearchResultsPaginationData<User>> {
    return this.http
      .get<SearchResultsPage<User>>(`${GithubService.SEARCH_USER_URL}`, {
        params: {
          q: `${userName} ${consts.gitHubApi.IN_LOGIN}`,
          [consts.gitHubApi.PAGE]: pageNumber,
          [consts.gitHubApi.PER_PAGE]: this.itemsPerPage
        },
        observe: 'response'
      })
      .pipe(map((response) => this.mapResponseToPaginationData(response)));
  }

  private mapResponseToPaginationData(response: HttpResponse<SearchResultsPage<User>>) {
    const paginationInfo = this.parseResponseHeaders(response.headers);
    const result: SearchResultsPaginationData<User> = {
      paginationInfo,
      searchResults: response.body as SearchResults<User>
    };
    return result;
  }

  /**
   * https://github.com/jhermsmeier/node-http-link-header
   * @param headers
   * @returns parsed HTTP link headers according to RFC 8288
   */
  private parseResponseHeaders(headers: HttpHeaders): Link | null {
    const linkHeaders = headers.get(consts.gitHubApi.HEADER_LINK);
    return linkHeaders && linkHeaders.length ? Link.parse(linkHeaders) : null; // TODO: Need to dig more in order to simplify this line.
  }
}
