import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NGZORRO_MODULES } from 'src/app/ng-zorro';

import { BehaviorSubject, of } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';
import { COMPONENTS } from '..';
import { LinksRelation } from '../../model/search-results-page';
import { linkFirst } from '../../model/testing/link-mocks';
import { LoginListComponent } from './login-list.component';
import { searchResultsPaginationDataMock, searchResultsPaginationDataMock2 } from 'src/app/model/testing/model-mocks';

describe('LoginListComponent', () => {
  let component: LoginListComponent;
  let fixture: ComponentFixture<LoginListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [COMPONENTS],
      imports: [HttpClientTestingModule, ReactiveFormsModule, ...NGZORRO_MODULES],
      providers: [
        {
          provide: GithubService,
          useValue: {
            findUserInLogin: () => of(searchResultsPaginationDataMock),
            fetchLinkUri: () => of(searchResultsPaginationDataMock2),
            currentPageSubject: new BehaviorSubject<number>(1),
            isLoadingSubject: new BehaviorSubject<boolean>(false)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init bindings as expected', () => {
    expect(component.userResultList).toBeNull();
    expect(component.paginationLinks).toBeNull();
    expect(component.paginationEnabled).toBe(false);
    expect(component.totalPages).toBe(0);
    expect(component.isNewSearch).toBe(false);
    expect(component.isFirstSession).toBe(true);
  });

  describe('#searchLogin', () => {
    it('should update paginated result list properties binding after "searchLogin" call', () => {
      expect(component.userResultList).toBeNull();
      expect(component.paginationLinks).toBeNull();
      expect(component.paginationEnabled).toBe(false);
      expect(component.totalPages).toBe(0);
      expect(component.isNewSearch).toBe(false);
      expect(component.isFirstSession).toBe(true);

      component.searchLogin('test');
      fixture.detectChanges();
      expect(component.userResultList).toBe(searchResultsPaginationDataMock.searchResults?.items);
      expect(component.paginationLinks?.has('uri', linkFirst));
      expect(component.paginationEnabled).toBe(true);
      expect(component.totalPages).toBe(112);
      expect(component.isNewSearch).toBe(false);
      expect(component.isFirstSession).toBe(false);
    });
  });

  describe('#goToLink', () => {
    it('should update paginated result list properties binding after "goToLink" call', () => {
      component.searchLogin('test');
      fixture.detectChanges();
      expect(component.userResultList).toBe(searchResultsPaginationDataMock.searchResults?.items);
      expect(component.paginationLinks?.has('uri', linkFirst));
      expect(component.paginationEnabled).toBe(true);
      expect(component.totalPages).toBe(112);
      expect(component.isNewSearch).toBe(false);
      expect(component.isFirstSession).toBe(false);
      component.goToLink(LinksRelation.NEXT);
      fixture.detectChanges();
      expect(component.paginationEnabled).toBe(true);
      expect(component.paginationLinks?.has('uri', linkFirst));
      expect(component.userResultList).toBe(searchResultsPaginationDataMock2.searchResults?.items);
      expect(component.totalPages).toBe(112);
      expect(component.isNewSearch).toBe(false);
      expect(component.isFirstSession).toBe(false);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
