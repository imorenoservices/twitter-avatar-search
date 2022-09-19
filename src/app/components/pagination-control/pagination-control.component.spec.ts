import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationControlComponent } from './pagination-control.component';

describe('PaginationControlComponent', () => {
  let component: PaginationControlComponent;
  let fixture: ComponentFixture<PaginationControlComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationControlComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
