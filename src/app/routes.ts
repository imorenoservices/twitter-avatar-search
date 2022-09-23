import { Routes } from '@angular/router';
import {
  LoginListComponent,
  PageNotFoundComponent,
  RateLimitErrorComponent,
  ServerErrorComponent,
  ClientErrorComponent,
  UnauthorizedErrorComponent,
  OfflineErrorComponent
} from './components';

export const ROUTE_NAMES = {
  HOME: 'home',
  UNAUTHORIZED: 'unauthorized',
  RATE_EXCEEDED: 'rate-exceeded',
  SERVER_ERROR: 'server',
  CLIENT_ERROR: 'client',
  OFFLINE: 'offline',
  ERROR: 'error'
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_NAMES.HOME,
    pathMatch: 'full'
  },
  {
    path: ROUTE_NAMES.HOME,
    component: LoginListComponent
  },
  {
    path: ROUTE_NAMES.ERROR,
    children: [
      {
        path: ROUTE_NAMES.RATE_EXCEEDED,
        component: RateLimitErrorComponent
      },
      {
        path: ROUTE_NAMES.CLIENT_ERROR,
        component: ClientErrorComponent
      },
      {
        path: ROUTE_NAMES.SERVER_ERROR,
        component: ServerErrorComponent
      },
      {
        path: ROUTE_NAMES.OFFLINE,
        component: OfflineErrorComponent
      },
      {
        path: ROUTE_NAMES.UNAUTHORIZED,
        component: UnauthorizedErrorComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
