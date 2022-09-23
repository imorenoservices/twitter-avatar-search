import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineErrorComponent } from './offline-error.component';

describe('OfflineErrorComponent', () => {
  let component: OfflineErrorComponent;
  let fixture: ComponentFixture<OfflineErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfflineErrorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
