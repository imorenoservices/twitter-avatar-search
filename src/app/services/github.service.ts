import { environment } from 'src/environments/environment';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { consts } from '../consts';
import { SearchResults, SearchResultsPaginationData, User } from '../model';
import { getPageNumberFromLinkUri, parseResponseHeaders } from '../utils/link-headers-helper';

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
    return this.http.get<SearchResults<User>>(linkUri, { observe: 'response' }).pipe(
      map((response) => {
        this.currentPageSubject.next(getPageNumberFromLinkUri(linkUri));
        return this.mapResponseToPaginationData(response);
      })
    );
  }

  findUserInLogin(userName: string, pageNumber = 1): Observable<SearchResultsPaginationData<User>> {
    return this.http
      .get<SearchResults<User>>(`${GithubService.SEARCH_USER_URL}`, {
        params: {
          q: `${userName} ${consts.gitHubApi.IN_LOGIN}`,
          [consts.gitHubApi.PAGE]: pageNumber,
          [consts.gitHubApi.PER_PAGE]: this.itemsPerPage
        },
        observe: 'response'
      })
      .pipe(map((response) => this.mapResponseToPaginationData(response)));
  }

  private mapResponseToPaginationData(response: HttpResponse<SearchResults<User>>) {
    const paginationInfo = parseResponseHeaders(response.headers);
    const result: SearchResultsPaginationData<User> = {
      paginationInfo,
      searchResults: response.body as SearchResults<User>
    };
    return result;
  }
}
