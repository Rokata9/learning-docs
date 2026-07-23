#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const required = [
  '.gitattributes','AGENTS.md','README.md','LEARNER_AUTHORSHIP.md','COURSE_STATE.json','photos-tiled-engine-course.html',
  'curriculum/photos_transition_tiled_engine_curriculum.md',
  'curriculum/photos_transition_tiled_engine_handoff.md',
  'course/glossary.html','course/templates/lesson-template.html',
  'course/templates/chapter-hub-template.html','course/templates/completion-record-template.md',
  'learner-work/implementation-log.md','tools/verify-lesson.mjs'
];
let failed = false;
for (const item of required) {
  if (!existsSync(join(root,item))) { console.error(`missing: ${item}`); failed = true; }
}
for (let chapter=1; chapter<=24; chapter++) {
  const dir = join(root,'course','chapters',`chapter-${String(chapter).padStart(2,'0')}`);
  if (!existsSync(dir)) { console.error(`missing chapter directory: ${relative(root,dir)}`); failed = true; }
}
const curriculumPath = join(root,'curriculum','photos_transition_tiled_engine_curriculum.md');
if (existsSync(curriculumPath)) {
  const text = readFileSync(curriculumPath,'utf8');
  const learnerCount = (text.match(/\[Learner\]/g) ?? []).length;
  if (learnerCount !== 216) { console.error(`curriculum has ${learnerCount} [Learner] lesson markers; expected 216`); failed = true; }
  for (const forbidden of ['[M]','[G]','Exact 50/50','Generated implementation','OWNERSHIP_LEDGER.md']) {
    if (text.includes(forbidden)) { console.error(`curriculum contains forbidden old ownership wording: ${forbidden}`); failed = true; }
  }
  const chapterCount = (text.match(/^### Chapter \d+ —/gm) ?? []).length;
  if (chapterCount !== 24) { console.error(`curriculum has ${chapterCount} chapter headings; expected 24`); failed = true; }
}
function walk(dir) {
  const files=[];
  for (const entry of readdirSync(dir,{withFileTypes:true})) {
    const path=join(dir,entry.name);
    if (entry.isDirectory()) files.push(...walk(path)); else files.push(path);
  }
  return files;
}
const allFiles = walk(root);
const forbiddenProjectExtensions = /\.(?:kt|kts|java|cpp|cc|cxx|c|h|hpp|gradle)$/i;
for (const file of allFiles) {
  if (forbiddenProjectExtensions.test(file)) { console.error(`unexpected Android/project source file in learning repository: ${relative(root,file)}`); failed=true; }
}
if (existsSync(join(root,'tiled-engine'))) { console.error('unexpected tiled-engine directory in learning repository'); failed=true; }
for (const file of allFiles.filter(f=>f.endsWith('.html') && !f.includes('/templates/'))) {
  const text=readFileSync(file,'utf8');
  for (const match of text.matchAll(/href="([^"]+)"/g)) {
    const href=match[1];
    if (/^(?:https?:|mailto:|#)/.test(href)) continue;
    const target=href.split('#')[0].split('?')[0];
    if (!target) continue;
    if (!existsSync(resolve(dirname(file),target))) { console.error(`broken link: ${relative(root,file)} -> ${href}`); failed=true; }
  }
}
if (failed) process.exit(1);
console.log('Repository verification passed: required files, 24 chapter directories, 216 learner markers, ownership policy, and enabled local links are valid.');
