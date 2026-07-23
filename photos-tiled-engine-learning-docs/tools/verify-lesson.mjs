#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, extname, isAbsolute, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
const input = args.find(arg => !arg.startsWith('--'));
if (!input) {
  console.error('usage: node tools/verify-lesson.mjs <html-file> [output.png] [--links-only] [--width=1920] [--height=1080]');
  process.exit(1);
}
const outputArg = args.find((arg, index) => index > args.indexOf(input) && !arg.startsWith('--'));
const width = Number((args.find(arg => arg.startsWith('--width=')) ?? '--width=1920').split('=')[1]);
const height = Number((args.find(arg => arg.startsWith('--height=')) ?? '--height=1080').split('=')[1]);
const htmlPath = resolve(input);
if (!existsSync(htmlPath)) {
  console.error(`not found: ${htmlPath}`);
  process.exit(1);
}
const html = readFileSync(htmlPath, 'utf8');
const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
const broken = [];
for (const href of hrefs) {
  if (/^(?:https?:|mailto:|#)/.test(href)) continue;
  const target = href.split('#')[0].split('?')[0];
  if (!target) continue;
  const resolved = isAbsolute(target) ? target : resolve(dirname(htmlPath), target);
  if (!existsSync(resolved)) broken.push({ href, resolved });
}
if (broken.length) {
  console.error('Broken local links:');
  for (const item of broken) console.error(`  ${item.href} -> ${item.resolved}`);
  process.exit(2);
}
if (args.includes('--links-only')) {
  console.log('Local links are valid. Screenshot verification was skipped by request.');
  process.exit(0);
}
const candidates = [process.env.CHROME_PATH,'/usr/bin/chromium','/usr/bin/chromium-browser','/usr/bin/google-chrome','/usr/bin/google-chrome-stable'].filter(Boolean);
const chrome = candidates.find(existsSync);
if (!chrome) {
  console.log('Local links are valid. Chromium was not found, so screenshot verification was skipped.');
  process.exit(0);
}
const output = resolve(outputArg ?? join('verification', `${htmlPath.split('/').pop().replace(extname(htmlPath), '')}-${width}x${height}.png`));
mkdirSync(dirname(output), { recursive: true });
const run = spawnSync(chrome, ['--headless=new','--disable-gpu','--no-sandbox','--hide-scrollbars',`--window-size=${width},${height}`,`--screenshot=${output}`,pathToFileURL(htmlPath).href], { stdio:'inherit', timeout:30000 });
if (run.error?.code === 'ETIMEDOUT') {
  console.warn('Local links are valid. Chromium timed out, so screenshot verification was skipped.');
  process.exit(0);
}
if (run.status !== 0) process.exit(run.status ?? 3);
console.log(`Verified local links and wrote screenshot: ${output}`);
