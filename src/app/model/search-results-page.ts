import Link from 'http-link-header';

// Link Header Documentation: https://docs.github.com/en/rest/overview/resources-in-the-rest-api#link-header

export enum PaginationLinksRelations {
  PREV = 'prev',
  NEXT = 'next',
  LAST = 'last',
  FIRST = 'first'
}

export interface SearchResults<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface SearchResultsPaginationData<T> {
  paginationInfo: Link | undefined;
  searchResults: SearchResults<T> | null;
}

/**
 * <https://api.github.com/search/users?page=1&per_page=9&q=more+in%3Alogin>; rel="prev", <https://api.github.com/search/users?page=3&per_page=9&q=more+in%3Alogin>; rel="next", <https://api.github.com/search/users?page=112&per_page=9&q=more+in%3Alogin>; rel="last", <https://api.github.com/search/users?page=1&per_page=9&q=more+in%3Alogin>; rel="first"
 */
