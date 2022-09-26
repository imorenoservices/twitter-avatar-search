import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NGZORRO_MODULES } from 'src/app/ng-zorro';

import { COMPONENTS } from '..';
import { LoginListComponent } from './login-list.component';
import { GithubService } from 'src/app/services/github.service';
import { SearchResultsPaginationData, User } from '../../model';
import { of, BehaviorSubject } from 'rxjs';
import { searchResultsPaginationDataMock } from '../../model/testing/model-mocks';
import { linkFirst } from '../../model/testing/link-mocks';

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
            currentPageSubject: new BehaviorSubject<number>(1)
          }
        }
      ]
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(LoginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init bindings as expected', () => {
    expect(component.userResultList).toBeNull();
    expect(component.paginationLinks).toBeNull();
    expect(component.paginationEnabled).toBe(false);
    expect(component.totalPages).toBe(0);
  });

  it('should update paginated result list properties binding after "searchLogin"', () => {
    expect(component.userResultList).toBeNull();
    expect(component.paginationEnabled).toBe(false);

    component.searchLogin('test');
    expect(component.userResultList).toBe(searchResultsPaginationDataMock.searchResults?.items);
    expect(component.paginationLinks?.has('uri', linkFirst));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
