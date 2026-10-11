import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import config from '../astro.config.mjs';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const output = path.join(root, 'deploy', 'robotdog-site.tar.gz');
const temporary = output + '.tmp';
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
if (!sitemap.includes(config.site + '/')) throw new Error('Build the current domain before packaging.');
const result = spawnSync('tar', ['-czf', temporary, '-C', dist, '.'], { stdio: 'inherit', shell: false });
if (result.error) throw result.error;
if (result.status !== 0) throw new Error(`tar failed with status ${result.status}`);
await rename(temporary, output);
const bytes = await readFile(output);
const sha256 = createHash('sha256').update(bytes).digest('hex');
await writeFile(output + '.sha256', `${sha256}  robotdog-site.tar.gz\n`);
async function countPages(dir) {
  let count = 0;
  for (const item of await readdir(dir, { withFileTypes: true })) {
    count += item.isDirectory() ? await countPages(path.join(dir, item.name)) : Number(item.name.endsWith('.html'));
  }
  return count;
}
await writeFile(path.join(root, 'deploy', 'build-info.json'), JSON.stringify({
  site: config.site, htmlPages: await countPages(dist), bytes: bytes.length,
  sha256, generatedAt: new Date().toISOString(),
}, null, 2) + '\n');
console.log(`Packaged ${bytes.length} bytes for ${config.site}: ${output}`);
