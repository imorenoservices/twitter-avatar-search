import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { User } from 'src/app/model/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html'
})
export class UserSearchResultsComponent implements OnInit, OnDestroy {
  private searchSubscription = new Subscription();

  userResultList: User[] = [];

  // TODO:
  emptyState = true;
  noResults = false;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.searchSubscription = this.githubService
      .findUserInLogin('morenoi')
      .pipe(
        tap((results) => {
          // TODO: pass pagination data from headers
          this.userResultList = results;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
