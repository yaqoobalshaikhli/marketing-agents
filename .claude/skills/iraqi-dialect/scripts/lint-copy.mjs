#!/usr/bin/env node
// TabeebX copy checker. Adapted from marketing/motion/scripts/lint-copy.mjs in yaqoobalshaikhli/EMR,
// so the same rules apply to every draft the mods write, plus Yaqoob's correction log.
//
//   node .claude/skills/iraqi-dialect/scripts/lint-copy.mjs <file.md|file.txt|file.json> [...]
//
// Checks every line (or JSON string) that contains Arabic. Errors exit 1; warnings print.
// Skipped in Markdown: fenced code blocks, blockquotes (">"), and lines after a
// "Dialect doubts" heading until the next heading, so doubts can quote the words in question.
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
const HOOK_LINE = /^\s*(hook|kicker|هوك)\s*[:：]/i;

const tokens = (s) => s.replace(/[*~]/g, '').split(/[\s،,.:؛;!؟?()«»"'…\-–—/]+/).filter(Boolean);
const hasArabic = (s) => /[؀-ۿ]/.test(s);
const looksLikeContact = (s) => /(\+?\d[\d\s-]{6,}|@\w|https?:\/\/|wa\.me)/.test(s);

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

export function lintLine(s, where, corrections = {}) {
  const errors = [], warnings = [];
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
  if (/[0-9]/.test(s) && !looksLikeContact(s)) errors.push(`${where}: Western digits in Arabic copy; use ٠١٢٣٤٥٦٧٨٩ (phone numbers and handles only are Western)`);
  const pinks = (s.match(/\*[^*]+\*/g) || []).length;
  if (pinks > 1) errors.push(`${where}: ${pinks} pink groups; exactly one element per frame is pink`);
  if (HOOK_LINE.test(s) && tokens(s.replace(HOOK_LINE, '')).length > 5) warnings.push(`${where}: hook has more than 5 words`);
  if (toks.length > 20) warnings.push(`${where}: ${toks.length} words; keep on-screen text to 20 per frame (captions may run longer)`);
  return { errors, warnings };
}

function linesOf(file, text) {
  if (file.endsWith('.json')) {
    const out = [];
    const walk = (v, kp) => {
      if (typeof v === 'string') out.push([kp.join('.'), v]);
      else if (Array.isArray(v)) v.forEach((x, i) => walk(x, [...kp, i]));
      else if (v && typeof v === 'object') for (const k of Object.keys(v)) walk(v[k], [...kp, k]);
    };
    walk(JSON.parse(text), []);
    return out;
  }
  const out = []; let fence = false, doubts = false;
  text.split('\n').forEach((line, i) => {
    if (/^\s*```/.test(line)) { fence = !fence; return; }
    if (fence) return;
    if (/^\s*#/.test(line)) doubts = /dialect doubts|شكوك اللهجة/i.test(line);
    if (doubts || /^\s*>/.test(line)) return;
    out.push([`line ${i + 1}`, line]);
  });
  return out;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const files = process.argv.slice(2);
  if (!files.length) { console.error('usage: lint-copy.mjs <file> [...]'); process.exit(2); }
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
  const corrections = loadCorrections(repoRoot);
  let errors = [], warnings = [], checked = 0;
  for (const f of files) {
    for (const [where, s] of linesOf(f, readFileSync(f, 'utf8'))) {
      if (!hasArabic(s)) continue;
      checked++;
      const r = lintLine(s, `${f} → ${where}`, corrections);
      errors.push(...r.errors); warnings.push(...r.warnings);
    }
  }
  for (const w of warnings) console.log('⚠', w);
  for (const e of errors) console.log('✖', e);
  console.log(errors.length
    ? `\n${errors.length} error(s), ${warnings.length} warning(s) in ${checked} Arabic line(s): fix errors before review.`
    : `\nCopy check passed: ${checked} Arabic line(s), ${warnings.length} warning(s), ${Object.keys(corrections).length} correction(s) loaded.`);
  process.exit(errors.length ? 1 : 0);
}
