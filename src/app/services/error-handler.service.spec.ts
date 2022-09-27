import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { UnauthorizedErrorComponent } from '../components/errors/unauthorized-error/unauthorized-error.component';
import { routes } from '../routes';
import { ErrorHandlerService } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let errorHandlerService: ErrorHandlerService;
  let location: Location;
  let router: Router;
  let fixture: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, UnauthorizedErrorComponent],
      providers: [ErrorHandlerService]
    }).compileComponents();
    errorHandlerService = TestBed.inject(ErrorHandlerService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  describe('#handleError', () => {
    it('should redirect to /error/unauthorized', fakeAsync(() => {
      const httpResponse = new HttpErrorResponse({ status: 401 });
      errorHandlerService.handleError(httpResponse);
      tick();
      expect(location.path()).toEqual('/error/unauthorized');
    }));
    it('should redirect to /error/rate-exceeded', fakeAsync(() => {
      const httpResponse = new HttpErrorResponse({ status: 403 });
      errorHandlerService.handleError(httpResponse);
      tick();
      expect(location.path()).toEqual('/error/rate-exceeded');
    }));
    it('should redirect to /error/server', fakeAsync(() => {
      const httpResponse = new HttpErrorResponse({ status: 503 });
      errorHandlerService.handleError(httpResponse);
      tick();
      expect(location.path()).toEqual('/error/server');
    }));
    it('should redirect to /error/server', fakeAsync(() => {
      const httpResponse = new HttpErrorResponse({ status: 500 });
      errorHandlerService.handleError(httpResponse);
      tick();
      expect(location.path()).toEqual('/error/server');
    }));
    it('should redirect to /error/offline', fakeAsync(() => {
      const httpResponse = new HttpErrorResponse({ status: 0 });
      errorHandlerService.handleError(httpResponse);
      tick();
      expect(location.path()).toEqual('/error/offline');
    }));
  });

  it('should be created', () => {
    expect(errorHandlerService).toBeTruthy();
  });
});
