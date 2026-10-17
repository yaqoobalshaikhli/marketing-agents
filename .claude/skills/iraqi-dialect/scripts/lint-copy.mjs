#!/usr/bin/env node
// TabeebX copy checker. Adapted from marketing/motion/scripts/lint-copy.mjs in yaqoobalshaikhli/EMR,
// so the same rules apply to every draft the mods write, plus Yaqoob's correction log.
//
//   node .claude/skills/iraqi-dialect/scripts/lint-copy.mjs <file.md|file.txt|file.json> [...]
//
// Piece files (Markdown with a "## Copy" section) are checked frame by frame:
//   - only the "## Copy…", "## Caption" and "## Variant hook" sections, plus any ```json spec, are linted;
//     notes, briefs and other sections are ignored, so English notes may quote Arabic freely;
//   - inside "## Copy…", each "### …" heading starts a frame (or, with no ### headings, each
//     blank-line-separated block); word and pink-group limits apply per frame;
//   - text inside [square brackets] is a placeholder and is ignored by every rule.
//     [PENDING …] (or any other bracket) means "needs Yaqoob" and blocks review; [AT POSTING: …]
//     marks a value filled in when posting (a link, a time) and does not block.
//   - frames whose ### heading says voice-over / VO / spoken are exempt from the 20-word on-screen limit.
// Any other Markdown/text file is checked line by line (fences, blockquotes and "Dialect doubts" skipped).
// JSON files are checked string by string. Errors exit 1; warnings print.
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const BANNED = [
  ['تأمين', 'never "تأمين" in consumer content (Health 360 naming is an open question for Yaqoob)'],
  ['الأفضل', 'never "الأفضل": replace the adjective with a name, a number or a picture'],
  ['مضمون', 'never "مضمون"'],
  ['علاج نهائي', 'never "علاج نهائي"'],
  ['دينار', 'no prices in consumer content'],
  ['د.ع', 'no prices in consumer content'],
  ['IQD', 'no prices in consumer content'],
];
// Cure claims: Meta's health policy restricts them (see health-ad-policy skill).
const CURE = ['يشفي', 'شفاء تام', 'شفاء نهائي', 'يعالج نهائياً', 'يعالج نهائيا', 'يخلصك نهائياً', 'يخلصك نهائيا'];
// Adjectives that need proof next to them.
const PROOF = ['أفضل', 'أسرع', 'موثوق'];
// Other dialects → Iraqi (from the campaign's copy rules).
const DIALECT = {
  'شو': 'شنو', 'إيش': 'شنو', 'هلق': 'هسه', 'دلوقتي': 'هسه', 'الحين': 'هسه', 'كتير': 'هواية', 'وايد': 'هواية',
  'هيك': 'هيچ', 'كده': 'هيچ', 'بكرة': 'باچر', 'بكره': 'باچر', 'بدّي': 'أريد', 'بدي': 'أريد', 'عايز': 'أريد',
  'ازاي': 'شلون', 'حكي': 'حچي', 'ابعت': 'دز',
};
const FEAR = ['ما تدري', 'فوات الأوان', 'قبل لا يفوت'];
// Meta "personal attributes": copy must not assert or imply the viewer has a condition.
// Heuristic only: Guard makes the final call.
const YOU_HAVE = /(عندك|عندچ|تعاني من|تعانين من|مصاب ب|مصابة ب|انت مريض|إنت مريض|انتي مريضة)/;
const CONDITIONS = /(سكر|سكري|ضغط|كآبة|اكتئاب|قلق|سمنة|وزن زايد|سرطان|عقم|بواسير|صلع|ربو|غدة|كولسترول|كوليسترول|إدمان|ادمان)/;
const HOOK_KEYS = new Set(['hook', 'kicker']);
const LATIN_OK_KEYS = new Set(['phone', 'whatsapp', 'handle', 'url', 'link', 'figure', 'template', 'id', 'when', 'icon', 'sfx']);
const LINT_SECTIONS = /^(copy\b(?!\s*check)|caption|variant hook)/i;
const MAX_FRAME_WORDS = 20, MAX_HOOK_WORDS = 5;

const stripPlaceholders = (s) => s.replace(/\[[^\]]*\](?!\()/g, ' ');
// Blocking placeholders on a line: [..] that isn't a Markdown link and isn't [AT POSTING: ..].
const countPlaceholders = (s) => (s.match(/\[[^\]\n]*\](?!\()/g) || []).filter((m) => !/^\[\s*AT POSTING/i.test(m)).length;
const SPOKEN = /voice-?over|\bVO\b|spoken|صوت/i;
const tokens = (s) => s.replace(/[*~]/g, '').split(/[\s،,.:؛;!؟?()«»"'…\-–—/·•|]+/).filter(Boolean);
const hasArabic = (s) => /[؀-ۿ]/.test(s);
const looksLikeContact = (s) => /(\+?\d[\d\s-]{6,}|@\w|https?:\/\/|wa\.me)/.test(s);
// "key: text", "- `key` text", "**key**: text" → [key, text]. Plain "key:" must be a Latin identifier.
const KEYED = /^\s*(?:[-*]\s+)?(?:`([A-Za-z_][\w-]*)`\s*:?|\*\*([A-Za-z_][\w-]*)\*\*\s*:?|([A-Za-z_][\w-]*)\s*:)\s*(.*)$/;
const splitKey = (line) => {
  const m = line.match(KEYED);
  return m ? [(m[1] || m[2] || m[3]).toLowerCase(), m[4]] : ['', line];
};

function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some((v) => v !== '')) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell); if (row.some((v) => v !== '')) rows.push(row);
  return rows;
}

// Yaqoob's "word" corrections are enforced as errors: they are his explicit calls.
export function loadCorrections(repoRoot) {
  const file = path.join(repoRoot, 'data', 'dialect-corrections.csv');
  if (!existsSync(file)) return {};
  const [header, ...rows] = parseCsv(readFileSync(file, 'utf8'));
  const idx = Object.fromEntries(header.map((h, i) => [h.trim(), i]));
  const map = {};
  for (const r of rows) if ((r[idx.kind] || '').trim() === 'word' && r[idx.wrong]) map[r[idx.wrong].trim()] = (r[idx.right] || '').trim();
  return map;
}

// Rules that apply to every line of copy, whatever frame it is in.
export function lintLine(raw, where, corrections = {}, key = '') {
  const errors = [], warnings = [];
  const s = stripPlaceholders(raw);
  const toks = tokens(s);
  const has = (tk, dict) => dict[tk] ?? (tk.startsWith('و') ? dict[tk.slice(1)] : undefined);
  for (const [word, why] of BANNED) if (s.includes(word)) errors.push(`${where}: ${why}`);
  for (const c of CURE) if (s.includes(c)) errors.push(`${where}: cure claim "${c}"; describe the service, not a cure`);
  for (const tk of toks) {
    const fix = has(tk, corrections);
    if (fix !== undefined) errors.push(`${where}: "${tk}" → "${fix}" (Yaqoob's correction log)`);
    else { const d = has(tk, DIALECT); if (d) warnings.push(`${where}: "${tk}" is not Iraqi; write "${d}"`); }
  }
  for (const w of PROOF) if (toks.includes(w)) warnings.push(`${where}: "${w}" needs proof beside it (a name, a number or a picture)`);
  for (const f of FEAR) if (s.includes(f)) warnings.push(`${where}: sounds like a fear hook ("${f}"); inform and invite instead`);
  if (YOU_HAVE.test(s) && CONDITIONS.test(s)) warnings.push(`${where}: may imply the reader has a health condition (Meta personal-attributes rule); Guard must review`);
  if (/[0-9]/.test(s) && !looksLikeContact(s) && !LATIN_OK_KEYS.has(key)) errors.push(`${where}: Western digits in Arabic copy; use ٠١٢٣٤٥٦٧٨٩ (phone numbers and handles only are Western)`);
  if (HOOK_KEYS.has(key) && toks.length > MAX_HOOK_WORDS) warnings.push(`${where}: hook has ${toks.length} words; keep it to ${MAX_HOOK_WORDS}`);
  return { errors, warnings };
}

// Rules that apply to a whole frame: one pink group, at most 20 words on screen.
export function lintFrame(lines, where, { spoken = false } = {}) {
  const errors = [], warnings = [];
  const text = lines.map((l) => stripPlaceholders(l)).join(' \n ');
  const pinks = (text.match(/\*[^*\n]+\*/g) || []).length;
  if (pinks > 1) errors.push(`${where}: ${pinks} pink groups; exactly one element per frame is pink`);
  const words = tokens(text).length;
  if (!spoken && words > MAX_FRAME_WORDS) warnings.push(`${where}: ${words} words in this frame; keep on-screen text to ${MAX_FRAME_WORDS}`);
  return { errors, warnings };
}

function lintJsonValue(value, where, corrections) {
  const out = { errors: [], warnings: [], lines: 0 };
  const walk = (v, kp) => {
    if (typeof v === 'string') {
      if (!hasArabic(v)) return;
      out.lines++;
      out.placeholders = (out.placeholders || 0) + countPlaceholders(v);
      const key = [...kp].reverse().find((k) => typeof k === 'string') || '';
      const w = `${where} → ${kp.join('.')}`;
      const a = lintLine(v, w, corrections, key.toLowerCase());
      const b = lintFrame([v], w);
      out.errors.push(...a.errors, ...b.errors); out.warnings.push(...a.warnings, ...b.warnings);
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, [...kp, i]));
    else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k], [...kp, k]);
  };
  walk(value, []);
  return out;
}

// Lint one file's text. Returns { errors, warnings, lines, placeholders, mode }.
export function lintText(file, text, corrections = {}) {
  const res = { errors: [], warnings: [], lines: 0, placeholders: 0, mode: 'lines' };
  const add = (r) => { res.errors.push(...r.errors); res.warnings.push(...r.warnings); };
  if (file.endsWith('.json')) {
    const r = lintJsonValue(JSON.parse(text), file, corrections);
    add(r); res.lines = r.lines; res.placeholders = r.placeholders || 0; res.mode = 'json';
    return res;
  }
  const all = text.split('\n');
  // Fenced JSON specs are linted in every Markdown mode.
  let fence = null, buf = [], fenceStart = 0;
  all.forEach((line, i) => {
    const m = line.match(/^\s*```\s*(\w*)/);
    if (m && fence === null) { fence = m[1].toLowerCase(); buf = []; fenceStart = i + 1; return; }
    if (/^\s*```/.test(line) && fence !== null) {
      if (fence === 'json') {
        try {
          const r = lintJsonValue(JSON.parse(buf.join('\n')), `${file} → json@line ${fenceStart}`, corrections);
          add(r); res.lines += r.lines; res.placeholders += r.placeholders || 0;
        } catch (e) { res.errors.push(`${file} → json@line ${fenceStart}: invalid JSON (${e.message})`); }
      }
      fence = null; return;
    }
    if (fence !== null) buf.push(line);
  });

  const isPiece = all.some((l) => /^##\s+copy\b(?!\s*check)/i.test(l));
  res.mode = isPiece ? 'piece' : 'lines';
  let inFence = false, section = '', doubts = false;
  // Frames: collected only inside "## Copy…" sections.
  let frame = [], frameName = '', frameStart = 0, framesUseHeadings = false;
  const flushFrame = () => {
    if (frame.length) add(lintFrame(frame.map((f) => f.text), `${file} → ${frameName || `frame@line ${frameStart}`}`, { spoken: SPOKEN.test(frameName) }));
    frame = [];
  };
  if (isPiece) {
    // Does any Copy section use ### frame headings?
    let sec = '';
    for (const l of all) {
      const h2 = l.match(/^##\s+(.*)$/); if (h2) { sec = h2[1]; continue; }
      if (/^###\s+/.test(l) && /^copy\b(?!\s*check)/i.test(sec)) framesUseHeadings = true;
    }
  }
  all.forEach((line, i) => {
    const where = `${file} → line ${i + 1}`;
    if (/^\s*```/.test(line)) { inFence = !inFence; return; }
    if (inFence) return;
    const h2 = line.match(/^##\s+(.*)$/);
    const h3 = line.match(/^###\s+(.*)$/);
    if (/^\s*#/.test(line)) doubts = /dialect doubts|شكوك اللهجة/i.test(line);
    if (h2) { flushFrame(); section = h2[1].trim(); return; }
    if (isPiece) {
      const inCopy = /^copy\b(?!\s*check)/i.test(section);
      if (!LINT_SECTIONS.test(section)) return;
      if (h3) { flushFrame(); frameName = h3[1].trim(); frameStart = i + 1; return; }
      if (/^\s*>/.test(line) || /^\s*<!--/.test(line)) return;
      res.placeholders += countPlaceholders(line);
      if (!line.trim()) { if (inCopy && !framesUseHeadings) flushFrame(); return; }
      if (!hasArabic(line)) return;
      const [key, rest] = splitKey(line);
      res.lines++;
      add(lintLine(rest, where, corrections, key));
      if (inCopy) { if (!frame.length && !framesUseHeadings) { frameName = ''; frameStart = i + 1; } frame.push({ text: rest }); }
      // Captions and variant hooks aren't on-screen frames: pink rule per line, no 20-word limit.
      else { const f = lintFrame([rest], where); add({ errors: f.errors, warnings: [] }); }
      return;
    }
    if (doubts || /^\s*>/.test(line) || !hasArabic(line)) return;
    const [key, rest] = splitKey(line);
    res.lines++;
    add(lintLine(rest, where, corrections, key));
    add(lintFrame([rest], where));
  });
  flushFrame();
  return res;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const files = process.argv.slice(2);
  if (!files.length) { console.error('usage: lint-copy.mjs <file> [...]'); process.exit(2); }
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const corrections = loadCorrections(repoRoot);
  let errors = [], warnings = [], checked = 0, placeholders = 0;
  for (const f of files) {
    const r = lintText(f, readFileSync(f, 'utf8'), corrections);
    errors.push(...r.errors); warnings.push(...r.warnings); checked += r.lines; placeholders += r.placeholders;
  }
  for (const w of warnings) console.log('⚠', w);
  for (const e of errors) console.log('✖', e);
  const ph = placeholders ? ` ${placeholders} [placeholder](s) still open: not ready for review.` : '';
  console.log(errors.length
    ? `\n${errors.length} error(s), ${warnings.length} warning(s) in ${checked} Arabic line(s): fix errors before review.${ph}`
    : `\nCopy check passed: ${checked} Arabic line(s), ${warnings.length} warning(s), ${Object.keys(corrections).length} correction(s) loaded.${ph}`);
  process.exit(errors.length ? 1 : 0);
}
