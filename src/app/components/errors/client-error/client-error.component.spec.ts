import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NGZORRO_MODULES } from 'src/app/ng-zorro';

import { ClientErrorComponent } from './client-error.component';

describe('ClientErrorComponent', () => {
  let component: ClientErrorComponent;
  let fixture: ComponentFixture<ClientErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientErrorComponent],
      imports: [...NGZORRO_MODULES]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
