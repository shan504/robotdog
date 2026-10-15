export const defaultSiteUrl = 'https://robotcar.icu';
export function normalizeSiteUrl(value = defaultSiteUrl) {
  const url = new URL(value || defaultSiteUrl);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('PUBLIC_SITE_URL must be an HTTP(S) origin without credentials, path, query or fragment.');
  return url.origin;
}
