import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { consts } from '../consts';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    static readonly SEARCH_USER_URL = `${environment.githubAPI}/${consts.gitHubApi.SEARCH}/${consts.gitHubApi.USERS}`;

    constructor(private http: HttpClient) {}

    findUserInLogin(userName: string) {
        const inLogin = 'in:login';
        return this.http.get(`${GithubService.SEARCH_USER_URL}`, {
            params: {
                q: `${userName} ${inLogin}`
            }
        });
    }
}