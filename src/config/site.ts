import { normalizeSiteUrl } from '../../site.config.mjs';
export const siteUrl = normalizeSiteUrl(import.meta.env?.PUBLIC_SITE_URL);
export const siteHost = new URL(siteUrl).hostname;
export const siteConfigured = !siteHost.endsWith('.example') && siteHost !== 'localhost' && siteHost !== '127.0.0.1';
export const brandName = 'RobotCar';
