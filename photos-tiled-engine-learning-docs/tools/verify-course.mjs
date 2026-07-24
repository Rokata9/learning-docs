#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] || '.');
const state = JSON.parse(readFileSync(join(root, 'COURSE_STATE.json'), 'utf8'));
const map = JSON.parse(readFileSync(join(root, 'curriculum/course-map.json'), 'utf8'));
let failed = false;
const fail = (message) => { console.error(`FAIL: ${message}`); failed = true; };
const ok = (message) => console.log(`OK: ${message}`);
const unique = values => new Set(values).size === values.length;

if (state.total_lessons !== 539 || map.total_lessons !== 539) fail('lesson count'); else ok('539 lessons');
if (state.total_chapters !== 60 || map.chapters.length !== 60) fail('chapter count'); else ok('60 chapters');

const lessons = map.chapters.flatMap(chapter => chapter.lessons);
const ids = lessons.map(lesson => lesson.id);
const idSet = new Set(ids);
if (!unique(ids)) fail('unique lesson ids'); else ok('unique lesson ids');
if (ids[0] !== '1.1' || ids.at(-1) !== '60.15') fail('lesson range'); else ok('lesson range 1.1–60.15');

const completed = state.completed_lesson_ids;
const prepared = state.prepared_lesson_ids;
const awaiting = state.lessons_awaiting_confirmation;
for (const [name, values] of [['completed', completed], ['prepared', prepared], ['awaiting', awaiting]]) {
  if (!Array.isArray(values)) fail(`${name} list is not an array`);
  else if (!unique(values)) fail(`${name} list contains duplicates`);
  else if (values.some(id => !idSet.has(id))) fail(`${name} list contains an unknown lesson id`);
  else ok(`${name} ids are valid`);
}
if (state.completed_lessons !== completed.length) fail('completed lesson count does not match completed ids');
else ok(`${completed.length} completed lessons recorded`);
if (completed.some(id => prepared.includes(id))) fail('a lesson is both completed and prepared');
else ok('completed and prepared states are disjoint');
if (awaiting.some(id => !prepared.includes(id))) fail('awaiting confirmation is not a subset of prepared lessons');
else ok('awaiting confirmation is a subset of prepared lessons');

const statusById = new Map(lessons.map(lesson => [lesson.id, lesson.status]));
for (const id of completed) if (statusById.get(id) !== 'completed') fail(`${id} is completed in state but not in course map`);
for (const id of prepared) if (statusById.get(id) !== 'prepared') fail(`${id} is prepared in state but not in course map`);
for (const lesson of lessons) {
  if (!completed.includes(lesson.id) && !prepared.includes(lesson.id) && lesson.status !== 'planned') {
    fail(`${lesson.id} should be planned`);
  }
}
if (!failed) ok('course-map statuses match course state');

const firstIncomplete = lessons.find(lesson => !completed.includes(lesson.id));
if (!firstIncomplete || state.next_lesson.id !== firstIncomplete.id) fail('next lesson is not the first incomplete lesson');
else ok(`next lesson is ${state.next_lesson.id}`);
if (state.next_lesson.title !== firstIncomplete?.title) fail('next lesson title differs from course map');
else ok('next lesson title matches course map');

const chapterRoot = join(root, 'course/chapters');
const chapterDirs = readdirSync(chapterRoot).filter(name => statSync(join(chapterRoot, name)).isDirectory());
if (chapterDirs.length !== 60) fail('chapter directories'); else ok('60 chapter directories');

for (const id of prepared) {
  const [chapter, lesson] = id.split('.').map(Number);
  const chapterData = map.chapters.find(item => item.number === chapter);
  const chapterDir = join(chapterRoot, chapterData.slug);
  const prefix = `lesson-${String(chapter).padStart(2, '0')}-${String(lesson).padStart(2, '0')}-`;
  const match = readdirSync(chapterDir).some(name => name.startsWith(prefix) && name.endsWith('.html'));
  if (!match) fail(`prepared lesson ${id} has no HTML artifact`);
  else ok(`prepared lesson ${id} has an HTML artifact`);
}

const forbidden = ['learner-work', 'recordings', 'screenshots', 'observations'];
const rootNames = readdirSync(root);
for (const name of forbidden) if (rootNames.includes(name)) fail(`forbidden root directory ${name}`);
if (!failed) ok('no observation-work directories');

if (failed) process.exit(1);
