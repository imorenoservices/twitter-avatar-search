import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLimitErrorComponent } from './rate-limit-error.component';

describe('RateLimitErrorComponent', () => {
  let component: RateLimitErrorComponent;
  let fixture: ComponentFixture<RateLimitErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateLimitErrorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RateLimitErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
