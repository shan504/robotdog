import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://robotdogcxy.xyz',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
