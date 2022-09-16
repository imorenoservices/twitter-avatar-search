import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { consts } from '../consts';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  static readonly SEARCH_USER_URL = `${environment.githubAPI}/${consts.gitHubApi.SEARCH}/${consts.gitHubApi.USERS}`;

  private readonly itemsPerPage = consts.paginationConfig.itemsPerPage;
  private pageNumber = '1';
  private responseHeaders: any;

  constructor(private http: HttpClient) {}

  public getResponseHeaders(): any {
    return this.responseHeaders;
  }

  findUserInLogin(userName: string) {
    return this.http
      .get<User>(`${GithubService.SEARCH_USER_URL}`, {
        params: {
          q: `${userName} ${consts.gitHubApi.IN_LOGIN}`,
          [consts.gitHubApi.PAGE]: this.pageNumber,
          [consts.gitHubApi.PER_PAGE]: this.itemsPerPage
        },
        observe: 'response'
      })
      .pipe(
        tap((response) => {
          this.responseHeaders = this.parseResponseHeaders(response.headers);
        }),
        map((response) => response.body)
      );
  }

  parseResponseHeaders(headers: HttpHeaders): string {
    const linkHeader = headers.get(consts.gitHubApi.HEADER_LINK);
    if (linkHeader && linkHeader.length) {
      console.log(linkHeader);
      return linkHeader;
    } else {
      return '';
    }
    // const keys = headers.keys();
    // return keys.map((key) => `${key}: ${headers.get(key)}`);
  }
}
