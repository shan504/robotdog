import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => new Response(
  'User-agent: *\nAllow: /\nDisallow: /orders/\nDisallow: /checkout/\nDisallow: /payment/\n\nSitemap: https://robotdogcxy.xyz/sitemap.xml\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
