import Link from 'http-link-header';

export enum LinksRelation {
  PREV = 'prev',
  NEXT = 'next',
  LAST = 'last',
  FIRST = 'first',
  REL = 'rel'
}

export interface PaginationLinks {
  prev: string;
  next: string;
  first: string;
  last: string;
}

export interface SearchResults<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface SearchResultsPaginationData<T> {
  paginationInfo: Link | null;
  searchResults: SearchResults<T> | null;
}
