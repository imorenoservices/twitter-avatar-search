import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NGZORRO_MODULES } from 'src/app/ng-zorro';

import { UnauthorizedErrorComponent } from './unauthorized-error.component';

describe('UnauthorizedErrorComponent', () => {
  let component: UnauthorizedErrorComponent;
  let fixture: ComponentFixture<UnauthorizedErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnauthorizedErrorComponent],
      imports: [...NGZORRO_MODULES]
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthorizedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
