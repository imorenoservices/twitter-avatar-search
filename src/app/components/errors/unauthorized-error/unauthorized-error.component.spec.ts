import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedErrorComponent } from './unauthorized-error.component';

describe('UnauthorizedErrorComponent', () => {
  let component: UnauthorizedErrorComponent;
  let fixture: ComponentFixture<UnauthorizedErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnauthorizedErrorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthorizedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
