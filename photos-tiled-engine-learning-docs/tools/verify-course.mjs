#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] || '.');
const state = JSON.parse(readFileSync(join(root, 'COURSE_STATE.json'), 'utf8'));
const map = JSON.parse(readFileSync(join(root, 'curriculum/course-map.json'), 'utf8'));
const fail = (m) => { console.error(`FAIL: ${m}`); process.exitCode = 1; };
const ok = (m) => console.log(`OK: ${m}`);

if (state.total_lessons !== 539 || map.total_lessons !== 539) fail('lesson count'); else ok('539 lessons');
if (state.total_chapters !== 60 || map.chapters.length !== 60) fail('chapter count'); else ok('60 chapters');
if (state.completed_lessons !== 0 || state.prepared_lesson_ids.length || state.lessons_awaiting_confirmation.length) fail('progress reset'); else ok('progress reset');
const ids = map.chapters.flatMap(c => c.lessons.map(l => l.id));
if (new Set(ids).size !== 539) fail('unique lesson ids'); else ok('unique lesson ids');
if (ids[0] !== '1.1' || ids.at(-1) !== '60.15') fail('lesson range'); else ok('lesson range 1.1–60.15');
const chapterDirs = readdirSync(join(root, 'course/chapters')).filter(n => statSync(join(root, 'course/chapters', n)).isDirectory());
if (chapterDirs.length !== 60) fail('chapter directories'); else ok('60 chapter directories');
const forbidden = ['learner-work', 'recordings', 'screenshots', 'observations'];
for (const name of forbidden) if (readdirSync(root).includes(name)) fail(`forbidden root directory ${name}`);
ok('no observation-work directories');
