import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_NAMES } from '../routes';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: HttpErrorResponse): void {
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 0:
          router.navigate([ROUTE_NAMES.ERROR, ROUTE_NAMES.OFFLINE]);
          break;
        case 401:
          router.navigate([ROUTE_NAMES.ERROR, ROUTE_NAMES.UNAUTHORIZED]);
          break;
        // UX notes:
        // This is an experience-blocking scenario.
        // Displaying a countdown until a user can search again may improve the experience.
        case 403:
          router.navigate([ROUTE_NAMES.ERROR, ROUTE_NAMES.RATE_EXCEEDED]);
          break;
        case 404:
          // TODO: Bad Request handler
          break;
        case 500:
          router.navigate([ROUTE_NAMES.ERROR, ROUTE_NAMES.SERVER_ERROR]);
          break;
        case 503:
          router.navigate([ROUTE_NAMES.ERROR, ROUTE_NAMES.SERVER_ERROR]); // TODO: Display a nice message related to 'Service Unavaliable'
          break;
        default:
          break;
      }
    }
  }
}
