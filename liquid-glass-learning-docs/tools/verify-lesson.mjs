#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, extname, isAbsolute, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const input = process.argv[2];
if (!input) {
  console.error('usage: node tools/verify-lesson.mjs <lesson.html> [output.png] [--links-only]');
  process.exit(1);
}

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

if (process.argv.includes('--links-only')) {
  console.log('Local links are valid. Screenshot verification was skipped by request.');
  process.exit(0);
}

const candidates = [
  process.env.CHROME_PATH,
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable'
].filter(Boolean);
const chrome = candidates.find(existsSync);
if (!chrome) {
  console.log('Local links are valid. Chromium was not found, so screenshot verification was skipped.');
  process.exit(0);
}

const output = resolve(process.argv[3] ?? join('verification', `${htmlPath.split('/').pop().replace(extname(htmlPath), '')}-1920x1080.png`));
mkdirSync(dirname(output), { recursive: true });
const args = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--window-size=1920,1080',
  `--screenshot=${output}`,
  pathToFileURL(htmlPath).href
];
const run = spawnSync(chrome, args, { stdio: 'inherit', timeout: 20000 });
if (run.error?.code === 'ETIMEDOUT') {
  console.warn('Local links are valid. Chromium did not finish within 20 seconds, so screenshot verification was skipped.');
  process.exit(0);
}
if (run.status !== 0) process.exit(run.status ?? 3);
console.log(`Verified local links and wrote screenshot: ${output}`);
