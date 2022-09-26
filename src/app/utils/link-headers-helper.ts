import { HttpHeaders } from '@angular/common/http';
import Link from 'http-link-header';
import { consts } from '../consts';
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

/**
 * https://github.com/jhermsmeier/node-http-link-header
 * @param headers
 * @returns parsed HTTP link headers according to RFC 8288
 */
export const parseResponseHeaders = (headers: HttpHeaders): Link | null => {
  const linkHeaders = headers.get(consts.gitHubApi.HEADER_LINK);
  return linkHeaders && linkHeaders.length ? Link.parse(linkHeaders) : null; // TODO: Need to dig more in order to simplify this line.
};
