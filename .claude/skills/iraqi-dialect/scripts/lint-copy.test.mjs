// Tests for lint-copy.mjs. Run: node --test .claude/skills/iraqi-dialect/scripts/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { lintText } from './lint-copy.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const piece = (copy, extra = '') => `---\nid: test\n---\nNeeds Yaqoob: none\n\n## Notes\nEnglish note quoting «شوف بعينك» and a long Arabic aside: ${'كلمة '.repeat(40)}\n\n## Copy (Iraqi dialect)\n${copy}\n\n## Caption\nتعال شوف بعينك.\n${extra}\n## Dialect doubts\n- كتير: unsure\n`;

test('approved lines still pass with no errors', () => {
  const f = path.join(here, '../references/approved-lines.md');
  const r = lintText(f, readFileSync(f, 'utf8'));
  assert.equal(r.errors.length, 0, r.errors.join('\n'));
});

test('notes outside Copy/Caption are not linted in piece files', () => {
  const r = lintText('p.md', piece('### Frame 1\nhook: لا تصدگنا.'));
  assert.equal(r.errors.length, 0, r.errors.join('\n'));
  assert.equal(r.warnings.length, 0, r.warnings.join('\n'));
});

test('word limit is counted per frame, not per line', () => {
  const words = (n) => Array(n).fill('زين').join(' ');
  const r = lintText('p.md', piece(`### Frame 1\ntext: ${words(12)}\nsmall: ${words(12)}`));
  assert.ok(r.warnings.some((w) => /24 words in this frame/.test(w)), r.warnings.join('\n'));
  const ok = lintText('p.md', piece(`### Frame 1\ntext: ${words(10)}\n### Frame 2\ntext: ${words(10)}`));
  assert.equal(ok.warnings.length, 0, ok.warnings.join('\n'));
});

test('two pink groups split across lines of one frame are an error', () => {
  const r = lintText('p.md', piece('### Frame 1\ntext: *لا تصدگنا.*\ncta: *شوف بعينك.*'));
  assert.ok(r.errors.some((e) => /2 pink groups/.test(e)), r.errors.join('\n'));
});

test('blank-line blocks are frames when there are no ### headings', () => {
  const r = lintText('p.md', piece('text: *لا تصدگنا.*\n\ncta: *شوف بعينك.*'));
  assert.equal(r.errors.length, 0, r.errors.join('\n'));
});

test('hook length is checked in every key form', () => {
  const long = 'شنو يصير بعد ما تحجز زيارة للبيت؟';
  for (const line of [`hook: ${long}`, `- \`hook\` ${long}`, `**hook**: ${long}`]) {
    const r = lintText('p.md', piece(`### Frame 1\n${line}`));
    assert.ok(r.warnings.some((w) => /hook has/.test(w)), `${line}\n${r.warnings.join('\n')}`);
  }
});

test('placeholders are exempt from the digit rule and counted', () => {
  const r = lintText('p.md', piece('### Frame 1\ntext: نوصلك للبيت [PENDING Q2-a: وقت الوصول خلال 2 ساعة]'));
  assert.equal(r.errors.length, 0, r.errors.join('\n'));
  assert.equal(r.placeholders, 1);
});

test('Western digits outside placeholders are still an error', () => {
  const r = lintText('p.md', piece('### Frame 1\ntext: نوصلك خلال 2 ساعة'));
  assert.ok(r.errors.some((e) => /Western digits/.test(e)), r.errors.join('\n'));
});

test('fenced JSON specs are linted', () => {
  const spec = '\n## Production\n```json\n{"params": {"hook": "شو رأيك؟", "text": "أفضل خدمة بـ 25,000 دينار"}}\n```\n';
  const r = lintText('p.md', piece('### Frame 1\ntext: زين', spec));
  assert.ok(r.errors.some((e) => /json@line.*no prices/.test(e)), r.errors.join('\n'));
  assert.ok(r.warnings.some((w) => /"شو" is not Iraqi/.test(w)), r.warnings.join('\n'));
});

test('banned words, cure claims and implied conditions are caught in copy', () => {
  const r = lintText('p.md', piece('### Frame 1\ntext: تأمين مضمون يشفي\n### Frame 2\nquestion: عندك سكري؟'));
  for (const re of [/تأمين/, /مضمون/, /cure claim/]) assert.ok(r.errors.some((e) => re.test(e)), re + '\n' + r.errors.join('\n'));
  assert.ok(r.warnings.some((w) => /personal-attributes/.test(w)), r.warnings.join('\n'));
});

test('the middle dot is not counted as a word', () => {
  const r = lintText('p.md', piece(`### Frame 1\ntext: ${Array(20).fill('زين').join(' · ')}`));
  assert.equal(r.warnings.length, 0, r.warnings.join('\n'));
});

test('non-piece Markdown keeps line mode', () => {
  const r = lintText('n.md', '# Notes\nشو صار؟\n> شو\n## Dialect doubts\nشو\n');
  assert.equal(r.mode, 'lines');
  assert.equal(r.warnings.filter((w) => /"شو"/.test(w)).length, 1, r.warnings.join('\n'));
});

test('voice-over frames are exempt from the on-screen word limit', () => {
  const words = Array(27).fill('زين').join(' ');
  const r = lintText('p.md', piece(`### Optional voice-over (spoken)\nvo: ${words}`));
  assert.equal(r.warnings.length, 0, r.warnings.join('\n'));
});

test('only blocking placeholders in copy are counted; AT POSTING and links are not', () => {
  const r = lintText('p.md', piece('### Frame 1\ntext: زين [PENDING Q3: الاسم]\nlink: [AT POSTING: wa.me link]', '\n## Notes 2\nsee [the brief](brief.md) and [PENDING x]\n'));
  assert.equal(r.placeholders, 1);
});

test('placeholders are only reported for piece files and specs, not reference notes', () => {
  const r = lintText('n.md', '# Notes\nزين [placeholders] هنا\n');
  assert.equal(r.placeholders, 0);
});
