import Link from 'http-link-header';
import { LinksRelation } from '../model/search-results-page';

export const getUriFromRel = (link: Link, relation: LinksRelation): string => {
  return link.get(LinksRelation.REL, relation).map((rel) => rel.uri)[0];
};

export const getPageNumberFromLinkUri = (uri: string): number => {
  const parsedUrl = new URL(uri);
  const pageNumber = parsedUrl.searchParams.get('page');
  if (pageNumber) {
    return parseInt(pageNumber, 10);
  }
  throw new Error('Get Page Number - Something went wrong when extracting page number from URL');
};
