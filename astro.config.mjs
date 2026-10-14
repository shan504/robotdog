import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { normalizeSiteUrl } from './site.config.mjs';

if (existsSync('.env')) process.loadEnvFile('.env');
export default defineConfig({
  site: normalizeSiteUrl(process.env.PUBLIC_SITE_URL),
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
