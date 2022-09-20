import Link from 'http-link-header';
import { LinksRelation } from '../model/search-results-page';

export const getUriFromRel = (link: Link, relation: LinksRelation): string => {
  return link.get(LinksRelation.REL, relation).map((rel) => rel.uri)[0];
};
