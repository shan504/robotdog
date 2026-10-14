import { siteUrl } from '../config/site';
import type { APIRoute } from 'astro';
import { articles } from '../data/articles';
import { products } from '../data/catalog';
import { solutions } from '../data/solutions';

export const prerender = true;

const origin = siteUrl;
const pages = [
  '/',
  '/products/',
  '/solutions/',
  '/journal/',
  '/about/',
  '/privacy/',
];

const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
}[character]!));

export const GET: APIRoute = () => {
  const entries = [
    ...pages.map((path) => `<url><loc>${escapeXml(origin + path)}</loc></url>`),
    ...products.map((product) => `<url><loc>${escapeXml(`${origin}/products/${product.slug}/`)}</loc></url>`),
    ...solutions.map((solution) => `<url><loc>${escapeXml(`${origin}/solutions/${solution.slug}/`)}</loc></url>`),
    ...articles.map((article) => `<url><loc>${escapeXml(`${origin}/journal/${article.slug}/`)}</loc><lastmod>${escapeXml(article.date)}</lastmod></url>`),
  ];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
