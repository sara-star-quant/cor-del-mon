// Visual-Identity and link-integrity tests. Enforces the invariants from
// _shared/cor-visual-identity.md (rose token applied, NetworkNav present,
// nine section IDs, wordmark in footer pointing to /) and verifies that
// internal links across the network do not 404.

import { test, expect } from '@playwright/test';
import { LIVE_CITIES } from './cities.config.js';

const NINE_SECTION_IDS = ['hero', 'monument', 'passivhaus', 'architecture', 'media',
                          'traditions', 'youth', 'network', 'roadmap'];

for (const city of LIVE_CITIES) {
  test(`identity: /${city.slug}/ enforces the nine sections, the rose token, the wordmark, and zero failed network requests`, async ({ page }) => {
    const failed = [];
    page.on('response', resp => {
      const u = resp.url();
      if (resp.status() >= 400 && !u.startsWith('data:')) failed.push(`${resp.status()} ${u}`);
    });

    await page.goto(`${city.slug}/`, { waitUntil: 'networkidle' });

    // Nine canonical section IDs visible.
    for (const id of NINE_SECTION_IDS) {
      await expect(page.locator(`#${id}`), `${city.slug} should have section #${id}`).toBeVisible({ timeout: 10_000 });
    }

    // --rose CSS variable resolves to a non-empty colour and the heartbeat uses it.
    const rose = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--rose').trim());
    expect(rose, `${city.slug} must define --rose CSS token`).toMatch(/^#[0-9a-fA-F]{3,8}$/);

    // NetworkNav is inside #network, lists all six cities plus the landing wordmark, current city highlighted.
    const networkNav = page.locator('#network nav');
    await expect(networkNav).toBeVisible();
    const liveLinks = networkNav.locator('a.cor-pill.live');
    await expect(liveLinks).toHaveCount(1);
    await expect(liveLinks).toContainText(new RegExp(city.nameEn, 'i'));
    // Seven pills total: one landing wordmark + six Wave-1 cities.
    await expect(networkNav.locator('a.cor-pill')).toHaveCount(7);
    await expect(networkNav.locator('a.cor-pill').first()).toContainText('Cor del Món');

    // Wordmark appears in footer as italic Cor del Món pointing to ../.
    const wordmark = page.locator('footer a', { hasText: 'Cor del Món' }).first();
    await expect(wordmark).toBeVisible();
    const href = await wordmark.getAttribute('href');
    expect(href, `${city.slug} wordmark should link to ../`).toBe('../');

    // No failed network requests (404, 500, etc.).
    expect(failed, `${city.slug} had failed network requests:\n${failed.join('\n')}`).toEqual([]);
  });
}

test('identity: landing has zero failed network requests and the wordmark points to itself via /', async ({ page }) => {
  const failed = [];
  page.on('response', resp => {
    const u = resp.url();
    if (resp.status() >= 400 && !u.startsWith('data:')) failed.push(`${resp.status()} ${u}`);
  });

  await page.goto('', { waitUntil: 'networkidle' });

  // Six city links visible on landing, each pointing to its own page.
  for (const city of LIVE_CITIES) {
    const link = page.locator(`a[href$="${city.slug}/"]`).first();
    await expect(link, `landing should link to /${city.slug}/`).toBeVisible();
  }

  expect(failed, `landing had failed network requests:\n${failed.join('\n')}`).toEqual([]);
});

// Internal-link sweep: collect every same-origin <a href> from each page and
// HEAD-check it via the test request context. Catches typos in href values
// that the browser would silently 404.
const PAGES_TO_SWEEP = ['', 'test.html', ...LIVE_CITIES.map(c => `${c.slug}/`)];

for (const pagePath of PAGES_TO_SWEEP) {
  test(`identity: internal links on /${pagePath || ''} all resolve to 200`, async ({ page, request, baseURL }) => {
    await page.goto(pagePath, { waitUntil: 'networkidle' });

    const hrefs = await page.evaluate(() => {
      const out = new Set();
      document.querySelectorAll('a[href]').forEach(a => {
        const h = a.getAttribute('href');
        if (!h) return;
        if (h.startsWith('#')) return;
        if (h.startsWith('mailto:') || h.startsWith('tel:')) return;
        if (h.startsWith('http://') || h.startsWith('https://')) {
          if (!h.startsWith(window.location.origin)) return;
        }
        out.add(h);
      });
      return [...out];
    });

    const failures = [];
    for (const href of hrefs) {
      // Resolve relative to the current page path.
      const resolved = new URL(href, new URL(pagePath || '', baseURL)).pathname.replace(/^\//, '');
      const resp = await request.get(resolved);
      if (resp.status() >= 400) failures.push(`${resp.status()} ${href} (resolved to ${resolved})`);
    }
    expect(failures, `internal-link 404s on /${pagePath}:\n${failures.join('\n')}`).toEqual([]);
  });
}
