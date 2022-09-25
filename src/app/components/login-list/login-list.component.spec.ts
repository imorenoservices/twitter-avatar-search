import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginListComponent } from './login-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { COMPONENTS } from '..';
import { ReactiveFormsModule } from '@angular/forms';
import { NGZORRO_MODULES } from 'src/app/ng-zorro';

describe('LoginListComponent', () => {
  let component: LoginListComponent;
  let fixture: ComponentFixture<LoginListComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [COMPONENTS],
      imports: [HttpClientTestingModule, ReactiveFormsModule, ...NGZORRO_MODULES]
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(LoginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
