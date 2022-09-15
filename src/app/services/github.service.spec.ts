import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('Github Service', () => {
    it('should retrieve expected data from Github API', () => {
      const testData = {
        total_count: 1,
        incomplete_results: false,
        items: [
          {
            login: 'morenoisidro',
            id: 30235159,
            node_id: 'MDQ6VXNlcjMwMjM1MTU5',
            avatar_url: 'https://avatars.githubusercontent.com/u/30235159?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/morenoisidro',
            html_url: 'https://github.com/morenoisidro',
            followers_url: 'https://api.github.com/users/morenoisidro/followers',
            following_url: 'https://api.github.com/users/morenoisidro/following{/other_user}',
            gists_url: 'https://api.github.com/users/morenoisidro/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/morenoisidro/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/morenoisidro/subscriptions',
            organizations_url: 'https://api.github.com/users/morenoisidro/orgs',
            repos_url: 'https://api.github.com/users/morenoisidro/repos',
            events_url: 'https://api.github.com/users/morenoisidro/events{/privacy}',
            received_events_url: 'https://api.github.com/users/morenoisidro/received_events',
            type: 'User',
            site_admin: false,
            score: 1
          }
        ]
      };

      httpClient
        .get<any>('https://api.github.com/search/users', {
          params: {
            q: 'morenoisi in:login'
          }
        })
        .subscribe((data) => expect(data).toEqual(testData));

      const req = httpTestingController.expectOne('https://api.github.com/search/users?q=morenoisi%20in:login');
      expect(req.request.method).toEqual('GET');
      req.flush(testData);
    });
  });
});
