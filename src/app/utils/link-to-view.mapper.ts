import Link from 'http-link-header';
import { LinksRelation, PaginationLinks } from '../model/search-results-page';

// export const hasRel = (link: Link, relation: LinksRelation): string => {
//   return link.has(LinksRelation.REL, relation)
//   // return link.get(LinksRelation.REL, relation).map((rel) => rel.uri)[0];
// };

export const getUriFromRel = (link: Link, relation: LinksRelation): string => {
  return link.get(LinksRelation.REL, relation).map((rel) => rel.uri)[0];
};

// TODO: Improve.
export const mapHeaderLinksToPaginationLinks = (link: Link): PaginationLinks => {
  return {
    first: getUriFromRel(link, LinksRelation.FIRST),
    last: getUriFromRel(link, LinksRelation.LAST),
    prev: getUriFromRel(link, LinksRelation.PREV),
    next: getUriFromRel(link, LinksRelation.NEXT)
  };
};
