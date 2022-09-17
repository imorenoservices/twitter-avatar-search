import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSearchResultsComponent } from './user-search-results.component';

describe('UserSearchResultsComponent', () => {
  let component: UserSearchResultsComponent;
  let fixture: ComponentFixture<UserSearchResultsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserSearchResultsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
