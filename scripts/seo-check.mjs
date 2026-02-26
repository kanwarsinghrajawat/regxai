#!/usr/bin/env node
/**
 * Dev-only: run Lighthouse for SEO, accessibility, and best-practices.
 * Start the dev server first: npm run dev (in another terminal).
 */
import { execSync } from 'child_process';
import { mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, '.lighthouse');
const reportPath = join(outDir, 'report.html');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

console.log('Lighthouse (SEO, Accessibility, Best Practices) — dev only.');
console.log('Ensure dev server is running: npm run dev\n');

try {
  execSync(
    `npx lighthouse http://localhost:3000 --only-categories=seo,accessibility,best-practices --output=html --output-path=${reportPath} --chrome-flags="--headless --no-sandbox" --quiet`,
    { cwd: root, stdio: 'inherit' }
  );
  console.log('\nReport saved to .lighthouse/report.html');
} catch (e) {
  console.error('\nLighthouse failed. Is the dev server running on http://localhost:3000?');
  process.exit(1);
}
