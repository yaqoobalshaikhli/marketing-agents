// Renders TabeebX designs from HTML: stills to PNG, CSS-animated pages to MP4 (silent).
//   node render.mjs still <page.html> <out.png> [--w 1080] [--h 1350]
//   node render.mjs video <page.html> <out.mp4> [--w 1080] [--h 1920] [--fps 30] [--dur 18]
//   node render.mjs frames <page.html> <out-dir> --at 0,2.5,6 [--w 1080] [--h 1920]   (stills of a video, for the critic)
// Video frames are deterministic: every animation on the page is paused and seeked to t.
// A page may also define window.__seek(ms) for script-driven motion.
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const req = createRequire(import.meta.url);
let pw;
try { pw = req('playwright'); } catch {
  pw = req(path.join(execFileSync('npm', ['root', '-g']).toString().trim(), 'playwright'));
}

const [mode, input, output, ...rest] = process.argv.slice(2);
const opt = {};
for (let i = 0; i < rest.length; i += 2) opt[rest[i].replace(/^--/, '')] = rest[i + 1];
if (!['still', 'video', 'frames'].includes(mode) || !input || !output) {
  console.error('usage: render.mjs still|video|frames <page.html> <out> [--w] [--h] [--fps] [--dur] [--at]');
  process.exit(2);
}
const w = Number(opt.w || 1080);
const h = Number(opt.h || (mode === 'still' ? 1350 : 1920));

const browser = await pw.chromium.launch();
const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.resolve(input)).href);
await page.evaluate(() => document.fonts.ready);
const seek = (ms) => page.evaluate((t) => {
  for (const a of document.getAnimations()) { a.pause(); a.currentTime = t; }
  if (typeof window.__seek === 'function') window.__seek(t);
}, ms);

if (mode === 'still') {
  await seek(Number(opt.t || 0) * 1000);
  await page.screenshot({ path: output });
} else if (mode === 'frames') {
  mkdirSync(output, { recursive: true });
  for (const s of String(opt.at || '0').split(',').map(Number)) {
    await seek(s * 1000);
    await page.screenshot({ path: path.join(output, `t${s.toFixed(1)}s.png`) });
  }
} else {
  const fps = Number(opt.fps || 30), dur = Number(opt.dur || 18);
  const dir = mkdtempSync(path.join(os.tmpdir(), 'tbx-frames-'));
  const n = Math.round(fps * dur);
  for (let i = 0; i < n; i++) {
    await seek((i * 1000) / fps);
    await page.screenshot({ path: path.join(dir, `${String(i).padStart(5, '0')}.png`) });
  }
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', path.join(dir, '%05d.png'),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-movflags', '+faststart', output]);
  rmSync(dir, { recursive: true, force: true });
}
await browser.close();
console.log(`rendered ${mode}: ${output}`);
