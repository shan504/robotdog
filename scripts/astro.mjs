import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Set the environment in Node so npm scripts work in Windows and Unix shells.
process.env.ASTRO_TELEMETRY_DISABLED = '1';
const require = createRequire(import.meta.url);
const manifestPath = require.resolve('astro/package.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const entry = path.resolve(path.dirname(manifestPath), manifest.bin.astro);
await import(pathToFileURL(entry).href);
