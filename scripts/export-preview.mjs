import { readFile, writeFile, readdir, mkdir, chmod } from 'node:fs/promises';
import path from 'node:path';
import { build } from 'esbuild';

// Export the production site, including its compiled cart scripts, into one file.
const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const assets = [];
const assetIds = new Map();
const mime = { '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const tokenFor = index => `@@RC_ASSET_${index}@@`;

function assetPath(url) {
  const file = path.resolve(dist, `.${url}`);
  if (!file.startsWith(dist + path.sep)) throw new Error(`Invalid asset path: ${url}`);
  return file;
}

async function replaceAsync(value, regex, replacement) {
  const matches = [...value.matchAll(regex)];
  for (const match of matches.reverse()) {
    const result = await replacement(match);
    value = value.slice(0, match.index) + result + value.slice(match.index + match[0].length);
  }
  return value;
}

async function assetToken(url, type = 'data') {
  const key = `${type}:${url}`;
  if (!assetIds.has(key)) {
    const file = assetPath(url);
    let content;
    if (type === 'script') {
      const result = await build({ entryPoints: [file], bundle: true, format: 'iife', platform: 'browser', minify: true, write: false, logLevel: 'error' });
      content = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
    } else {
      const bytes = await readFile(file);
      content = type === 'style'
        ? await replaceAsync(bytes.toString('utf8'), /url\((['"]?)(\/images\/[^)'"?#]+)\1\)/g, async match => `url("${await assetToken(match[2])}")`)
        : `data:${mime[path.extname(file)] || 'application/octet-stream'};base64,${bytes.toString('base64')}`;
    }
    assetIds.set(key, assets.length);
    assets.push(content);
  }
  return tokenFor(assetIds.get(key));
}

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await htmlFiles(file));
    else if (entry.name.endsWith('.html')) out.push(file);
  }
  return out.sort();
}

const bridge = `<script>
window.__robotcarPreviewSearch=@@RC_SEARCH_JSON@@;
window.__robotcarPreviewHash=@@RC_HASH_JSON@@;
window.__robotcarPreviewStorage=parent.__robotcarPreviewStorage;
window.__robotcarPreviewNavigate=function(href,replace){parent.postMessage({type:'robotcar-offline-navigation',href:href,replace:!!replace},'*');};
document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;var href=a.getAttribute('href');if(href&&href.startsWith('#')){e.preventDefault();var id=href.slice(1);if(id)document.getElementById(decodeURIComponent(id))?.scrollIntoView({behavior:'smooth'});return;}if(href&&href.startsWith('/')&&!href.startsWith('//')){e.preventDefault();window.__robotcarPreviewNavigate(href);}});
window.addEventListener('load',function(){parent.postMessage({type:'robotcar-offline-loaded'},'*');});
</script>`;

const pages = {};
for (const file of await htmlFiles(dist)) {
  const relative = path.relative(dist, file).split(path.sep).join('/');
  const route = relative === 'index.html' ? '/' : relative.endsWith('/index.html') ? '/' + relative.slice(0, -10) : '/' + relative;
  let html = await readFile(file, 'utf8');
  html = html.replace(/<link\b[^>]*rel="(?:preload|modulepreload)"[^>]*>/g, '');
  html = await replaceAsync(html, /<link\b[^>]*rel="stylesheet"[^>]*>/g, async match => {
    const url = match[0].match(/href="([^"]+)"/)?.[1];
    return url?.startsWith('/') ? `<style>${await assetToken(url, 'style')}</style>` : match[0];
  });
  html = await replaceAsync(html, /<script\b[^>]*src="(\/[^"?#]+)"[^>]*>\s*<\/script>/g, async match => `<script>document.addEventListener('DOMContentLoaded',function(){${await assetToken(match[1], 'script')}},{once:true});</script>`);
  html = await replaceAsync(html, /\b(src|poster|href|data-gallery-image)="(\/(?:images\/[^"?#]+|favicon\.svg))"/g, async match => `${match[1]}="${await assetToken(match[2])}"`);
  html = html.replace('<head>', '<head>' + bridge);
  pages[route] = html;
}

const outputHtml = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RobotCar · 网站交互预览</title><style>
*{box-sizing:border-box}html,body{margin:0;height:100%;font-family:Arial,"Microsoft YaHei",sans-serif;background:#fff}body{display:flex;flex-direction:column}.preview-toolbar{height:40px;flex:0 0 40px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 18px;color:#ced9ec;background:#101b2e;font-size:11px}.preview-toolbar strong{color:#6aa9ff;font-size:12px}.preview-toolbar button{background:transparent;color:#dce6f6;border:1px solid #435a7b;padding:4px 9px;cursor:pointer;font-size:10px}.preview-toolbar span{margin-left:14px}iframe{border:0;flex:1;width:100%;min-height:0;background:white}@media(max-width:600px){.preview-toolbar{padding:0 10px}.preview-toolbar span{display:none}}
</style></head><body><div class="preview-toolbar" id="preview-toolbar"><div><strong>RobotCar</strong><span>完整网站预览 · 演示结算，不会扣款</span></div><button id="hide-toolbar">隐藏此栏</button></div><iframe title="RobotCar 网站预览" id="website" sandbox="allow-scripts allow-forms allow-downloads allow-same-origin"></iframe><script>
const pages=${json(pages)};
const assets=${json(assets)};
const memory={};
let retainedStorage;try{retainedStorage=window.localStorage;retainedStorage.setItem('robotcar.preview.probe','1');retainedStorage.removeItem('robotcar.preview.probe');}catch{retainedStorage=undefined;}
window.__robotcarPreviewStorage={getItem:key=>{try{return retainedStorage?retainedStorage.getItem(key):memory[key]??null;}catch{return memory[key]??null;}},setItem:(key,value)=>{memory[key]=value;try{retainedStorage?.setItem(key,value);}catch{}},removeItem:key=>{delete memory[key];try{retainedStorage?.removeItem(key);}catch{}}};
const frame=document.getElementById('website');
let currentAnchor='';
function render(){let url;try{url=new URL(location.hash.slice(1)||'/','https://robotcar.example');}catch{url=new URL('https://robotcar.example/');}currentAnchor=decodeURIComponent(url.hash.slice(1));const route=url.pathname.endsWith('/')||url.pathname.endsWith('.html')?url.pathname:url.pathname+'/';let content=pages[route]||pages['/404.html'];content=content.replace('@@RC_SEARCH_JSON@@',JSON.stringify(url.search)).replace('@@RC_HASH_JSON@@',JSON.stringify(url.hash));for(let pass=0;pass<3;pass++)content=content.replace(/@@RC_ASSET_(\\d+)@@/g,(_,i)=>assets[Number(i)]);frame.srcdoc=content;}
window.addEventListener('hashchange',render);
window.addEventListener('message',e=>{if(e.source!==frame.contentWindow)return;if(e.data?.type==='robotcar-offline-navigation'){const href=e.data.href;if(typeof href==='string'&&href.startsWith('/')&&!href.startsWith('//')){if(e.data.replace){history.replaceState({},'','#'+href);render();}else if(location.hash.slice(1)===href)render();else location.hash=href;}}if(e.data?.type==='robotcar-offline-loaded'){try{document.title=frame.contentDocument.title+' · 离线预览';if(currentAnchor)frame.contentDocument.getElementById(currentAnchor)?.scrollIntoView();}catch{}}});
document.getElementById('hide-toolbar').addEventListener('click',()=>document.getElementById('preview-toolbar').remove());render();
</script></body></html>`;

const outputDir = path.join(root, 'preview');
await mkdir(outputDir, { recursive: true });
await chmod(outputDir, 0o755);
for (const output of [path.join(outputDir, 'RobotCar-preview.html'), path.join(root, 'RobotCar-preview.html')]) {
  await writeFile(output, outputHtml, { mode: 0o644 });
  await chmod(output, 0o644);
}
console.log(`Exported ${Object.keys(pages).length} pages and ${assets.length} embedded assets (${Buffer.byteLength(outputHtml)} bytes).`);
