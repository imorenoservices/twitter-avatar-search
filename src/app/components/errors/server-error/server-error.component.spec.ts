import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NGZORRO_MODULES } from 'src/app/ng-zorro';

import { ServerErrorComponent } from './server-error.component';

describe('ServerErrorComponent', () => {
  let component: ServerErrorComponent;
  let fixture: ComponentFixture<ServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerErrorComponent],
      imports: [...NGZORRO_MODULES]
    }).compileComponents();

    fixture = TestBed.createComponent(ServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
