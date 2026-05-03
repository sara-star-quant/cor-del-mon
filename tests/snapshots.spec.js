// Multi-breakpoint visual snapshots. Captures every page at four viewport widths
// and writes the PNGs to tests/snapshots/<page>/<width>.png so a reviewer can scan
// the whole network in one folder before merging.
//
// Run with: npx playwright test snapshots.spec.js
// Outputs: tests/snapshots/{page}/{width}.png (gitignored, tooling only)

import { test } from '@playwright/test';
import { LIVE_CITIES } from './cities.config.js';

const BREAKPOINTS = [
  { name: '375',  width: 375,  height: 800,  label: 'mobile' },
  { name: '768',  width: 768,  height: 1024, label: 'tablet' },
  { name: '1024', width: 1024, height: 768,  label: 'tablet-landscape' },
  { name: '1440', width: 1440, height: 900,  label: 'desktop' },
];

const PAGES = [
  { slug: 'landing', path: '' },
  { slug: 'test',    path: 'test.html' },
  ...LIVE_CITIES.map(c => ({ slug: c.slug, path: `${c.slug}/` })),
];

for (const page of PAGES) {
  for (const bp of BREAKPOINTS) {
    test(`snapshot: ${page.slug} at ${bp.width}px (${bp.label})`, async ({ browser }) => {
      const ctx = await browser.newContext({
        viewport: { width: bp.width, height: bp.height },
        deviceScaleFactor: 2,
      });
      const p = await ctx.newPage();
      await p.goto(page.path, { waitUntil: 'networkidle' });
      await p.evaluate(() => {
        const s = document.getElementById('splash');
        if (s) s.style.display = 'none';
      });
      await p.waitForTimeout(400);
      await p.screenshot({
        path: `snapshots/${page.slug}/${bp.name}.png`,
        fullPage: true,
        animations: 'disabled',
      });
      await ctx.close();
    });
  }
}
