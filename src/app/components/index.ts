import { PaginationComponent } from './github-pagination/github-pagination.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { LoginListComponent } from './login-list/login-list.component';

// Error components
import {
  PageNotFoundComponent,
  ServerErrorComponent,
  UnauthorizedErrorComponent,
  RateLimitErrorComponent,
  ClientErrorComponent,
  OfflineErrorComponent
} from './errors';

export {
  LoginListComponent,
  PaginationComponent,
  ResultsComponent,
  SearchComponent,
  PageNotFoundComponent,
  ServerErrorComponent,
  UnauthorizedErrorComponent,
  RateLimitErrorComponent,
  ClientErrorComponent,
  OfflineErrorComponent
};

export const COMPONENTS = [
  LoginListComponent,
  ResultsComponent,
  PaginationComponent,
  SearchComponent,
  PageNotFoundComponent,
  ServerErrorComponent,
  UnauthorizedErrorComponent,
  RateLimitErrorComponent,
  ClientErrorComponent,
  OfflineErrorComponent
];
