export const linkPrev = 'https://api.github.com/search/users?page=1&per_page=9&q=more+in%3Alogin';
export const linkNext = 'https://api.github.com/search/users?page=3&per_page=9&q=more+in%3Alogin';
export const linkLast = 'https://api.github.com/search/users?page=112&per_page=9&q=more+in%3Alogin';
export const linkFirst = 'https://api.github.com/search/users?page=1&per_page=9&q=more+in%3Alogin';

export const linkHeadersRaw = `
  <${linkPrev}>; rel="prev", <${linkNext}>; rel="next", 
  <${linkLast}>; rel="last", <${linkFirst}>; rel="first"`;
