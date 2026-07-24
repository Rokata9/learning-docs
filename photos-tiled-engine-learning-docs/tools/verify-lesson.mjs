#!/usr/bin/env node
import { readFileSync } from 'node:fs';
const file = process.argv[2];
if (!file) { console.error('usage: node verify-lesson.mjs <lesson.html>'); process.exit(2); }
const html = readFileSync(file, 'utf8');
const checks = [
  ['standalone doctype', /<!doctype html>/i],
  ['light page', /background:/i],
  ['definitions', /Definitions/i],
  ['manual work', /Manual work/i],
  ['exercises', /<details/i],
  ['language-labelled highlighted code', /class="[^"]*highlight[^"]*"[^>]*data-language=/i],
  ['static token colors', /class="tok-(key|type|str|num|com|fn)"/i],
];
let failed = false;
for (const [name, rx] of checks) {
  if (!rx.test(html)) { console.error(`FAIL: ${name}`); failed = true; }
  else console.log(`OK: ${name}`);
}
if (failed) process.exit(1);
