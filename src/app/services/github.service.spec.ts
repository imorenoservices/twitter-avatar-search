import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { searchResultsPaginationDataMock } from '../model/testing/model-mocks';
import { GithubService } from './github.service';

describe('GitHubService', () => {
  let httpTestingController: HttpTestingController;
  let githubService: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    githubService = TestBed.inject(GithubService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#fetchLinkUri', () => {
    const expectedData = searchResultsPaginationDataMock;
    it('should retrieve expected data from Github API', () => {
      const linkUrl = `${GithubService.SEARCH_USER_URL}?q=more%20in:login&page=3&per_page=9`;
      githubService.fetchLinkUri(linkUrl).subscribe((data) => expect(data).toEqual(expectedData));
      const req = httpTestingController.expectOne(linkUrl);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedData);
    });
  });

  describe('#findUserInLogin', () => {
    const expectedData = searchResultsPaginationDataMock;
    it('should retrieve expected data from Github API', () => {
      githubService.findUserInLogin('more').subscribe((data) => expect(data).toEqual(expectedData));
      const req = httpTestingController.expectOne(
        `${GithubService.SEARCH_USER_URL}?q=more%20in:login&page=1&per_page=9`
      );
      expect(req.request.method).toEqual('GET');
      req.flush(expectedData);
    });
  });
});
