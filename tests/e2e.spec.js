// End-to-end tests: real browser, real JavaScript execution.
// Verifies React renders, the shared library works, the synchronized heartbeat ticks,
// and the Cor del Món landing experience holds together.

import { test, expect } from '@playwright/test';
import { LIVE_CITIES } from './cities.config.js';

test('e2e: landing renders the Cor del Món network with all six city cards and the milestone matrix', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  await page.goto('', { waitUntil: 'networkidle' });
  await expect(page).toHaveTitle(/Cor del Món/i);

  // Hero
  await expect(page.locator('text=Six cities').first()).toBeVisible({ timeout: 10_000 });
  await expect(page.locator('text=beat as one').first()).toBeVisible();

  // Each section id present (M3 redesign: hero, hearts, heartbeat, map, arc, mechanics, join)
  for (const id of ['hero', 'hearts', 'heartbeat', 'map', 'arc', 'mechanics', 'join']) {
    await expect(page.locator(`#${id}`)).toBeVisible({ timeout: 10_000 });
  }

  // Six city cards visible
  for (const city of ['Andorra la Vella', 'Yokohama', 'Adelaide', 'Valparaíso', 'Cape Town', 'Jaipur']) {
    await expect(page.getByText(city, { exact: false }).first()).toBeVisible();
  }

  // Milestone matrix uses the four canonical stage names as column headers (rolling-wave model)
  for (const stage of ['Charter', 'Break Ground', 'Operational', 'Generation']) {
    await expect(page.locator('#arc th').filter({ hasText: new RegExp(stage, 'i') }).first()).toBeVisible();
  }

  // Heartbeat present in hero
  await expect(page.locator('span[aria-label="Network heartbeat"]').first()).toBeVisible();

  expect(consoleErrors, `console errors: ${consoleErrors.join('\n')}`).toHaveLength(0);
});

test('e2e: smoke test page renders every shared-library component without errors', async ({ page }) => {
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  await page.goto('test.html', { waitUntil: 'networkidle' });

  // Header proves React mounted and JSON loaded.
  await expect(page.getByRole('heading', { name: /smoke test/i })).toBeVisible();
  await expect(page.locator('text=Module version:')).toBeVisible();
  await expect(page.locator('text=Cities loaded:')).toBeVisible();

  // Each numbered section heading should be present (1 through 14).
  for (let n = 1; n <= 14; n++) {
    await expect(page.getByRole('heading', { name: new RegExp(`^${n}\\.`) })).toBeVisible();
  }

  // The icon set should produce 20 icon cells.
  const iconCells = page.locator('.icon-cell');
  await expect(iconCells).toHaveCount(20);

  // NetworkNav should highlight Andorra and list every Wave-1 city.
  for (const city of ['Andorra la Vella', 'Yokohama', 'Adelaide', 'Valparaíso', 'Cape Town', 'Jaipur']) {
    await expect(page.getByRole('link', { name: new RegExp(city, 'i') })).toBeVisible();
  }

  // Constitution + Cities counts visible (proves async JSON fetch worked).
  await expect(page.locator('text=/9 mandatory sections/')).toBeVisible();
  await expect(page.locator('text=/6 network mechanics/')).toBeVisible();

  expect(consoleErrors, `console errors: ${consoleErrors.join('\n')}`).toHaveLength(0);
});

test('e2e: Heartbeat actually animates (transform changes between frames)', async ({ page }) => {
  await page.goto('test.html', { waitUntil: 'networkidle' });
  const heartbeat = page.locator('span[aria-label="Network heartbeat"]').first();
  await expect(heartbeat).toBeVisible();

  const transformAt = async () => heartbeat.evaluate(el => el.style.transform);

  const t1 = await transformAt();
  await page.waitForTimeout(300);
  const t2 = await transformAt();
  await page.waitForTimeout(400);
  const t3 = await transformAt();

  // Across three samples spanning 700ms, the transform must change at least once.
  // (60 BPM means a beat every 1000ms with two pulses, so we will catch a change.)
  const allSame = t1 === t2 && t2 === t3;
  expect(allSame, `Heartbeat appears static: ${t1} / ${t2} / ${t3}`).toBe(false);
});

test('e2e: two simultaneous Heartbeats are phase-locked (within 60ms tolerance)', async ({ browser }) => {
  // Open two independent contexts (separate tabs) and sample both heartbeats at the same instant.
  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const pageA = await ctxA.newPage();
  const pageB = await ctxB.newPage();

  await Promise.all([
    pageA.goto('test.html', { waitUntil: 'networkidle' }),
    pageB.goto('test.html', { waitUntil: 'networkidle' }),
  ]);

  const sampleScale = (page) => page.locator('span[aria-label="Network heartbeat"]').first().evaluate(el => {
    const m = (el.style.transform || '').match(/scale\(([\d.]+)\)/);
    return m ? parseFloat(m[1]) : null;
  });

  // Sample both at the same instant five times and require the readings to track each other closely.
  let totalDiff = 0;
  for (let i = 0; i < 5; i++) {
    const [a, b] = await Promise.all([sampleScale(pageA), sampleScale(pageB)]);
    expect(a, 'pageA scale present').not.toBeNull();
    expect(b, 'pageB scale present').not.toBeNull();
    totalDiff += Math.abs(a - b);
    await Promise.all([pageA.waitForTimeout(150), pageB.waitForTimeout(150)]);
  }
  // Average difference should be tiny since both derive from Date.now().
  // 60ms drift would yield a scale diff well under 0.05 per sample on average.
  expect(totalDiff / 5, `avg scale diff was ${(totalDiff / 5).toFixed(4)}; expected near 0`).toBeLessThan(0.05);

  await ctxA.close();
  await ctxB.close();
});

test('e2e: network constitution markdown serves and contains the nine sections', async ({ request }) => {
  const resp = await request.get('network-constitution.md');
  expect(resp.status()).toBe(200);
  const text = await resp.text();
  for (const section of ['Hero', 'Monument', 'Hearth of the Heart', 'Architecture', 'Media',
                          'Traditions', 'Youth', 'Network', 'Roadmap']) {
    expect(text, `Constitution should mention "${section}"`).toContain(section);
  }
  expect(text).toContain('Synchronized Heartbeat');
  expect(text).toContain('Daily Ceremony');
  expect(text).toContain('Cor Residency');
  expect(text).toContain('Annual Cor Biennale');
  expect(text).toContain('Cor Pattern Library');
  expect(text).toContain('Wave-2 Admission');
});

// Per-city e2e tests, parameterized by tests/cities.config.js.
for (const city of LIVE_CITIES) {
  test(`e2e: /${city.slug}/ renders all nine sections and the network nav highlights ${city.slug}`, async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('pageerror', err => consoleErrors.push(err.message));

    await page.goto(`${city.slug}/`, { waitUntil: 'networkidle' });

    for (const id of ['hero', 'monument', 'passivhaus', 'architecture', 'media',
                      'traditions', 'youth', 'network', 'roadmap']) {
      await expect(page.locator(`#${id}`)).toBeVisible({ timeout: 10_000 });
    }

    await expect(page.locator('#network nav')).toBeVisible();
    const liveLink = page.locator('#network a.cor-pill.live');
    await expect(liveLink).toHaveCount(1);
    await expect(liveLink).toContainText(new RegExp(city.nameEn, 'i'));

    await expect(page.locator('span[aria-label="Network heartbeat"]').first()).toBeVisible();

    // Roadmap renders the four canonical stages (Charter / Break Ground / Operational / Generation)
    // at city-specific years on the rolling-wave schedule. Test that all four stage names appear.
    for (const stage of ['Charter', 'Break Ground', 'Operational', 'Generation']) {
      await expect(page.locator(`#roadmap >> text=${stage}`).first()).toBeVisible();
    }

    expect(consoleErrors, `${city.slug} console errors: ${consoleErrors.join('\n')}`).toHaveLength(0);
  });

  test(`e2e: /${city.slug}/ is responsive at 375px (no horizontal scroll)`, async ({ browser }) => {
    const ctx = await browser.newContext({ viewport: { width: 375, height: 800 } });
    const page = await ctx.newPage();
    await page.goto(`${city.slug}/`, { waitUntil: 'networkidle' });

    const overflow = await page.evaluate(() => ({
      bodyW: document.body.scrollWidth,
      winW: window.innerWidth,
    }));
    expect(overflow.bodyW, `${city.slug} body width ${overflow.bodyW} exceeds window ${overflow.winW}`).toBeLessThanOrEqual(overflow.winW + 8);

    await ctx.close();
  });
}

test('e2e: heartbeats across two live cities stay phase-locked', async ({ browser }) => {
  // Pick the first two live cities from the registry. If only one is live, fall back
  // to the smoke test page which reuses the same Heartbeat component.
  const a = LIVE_CITIES[0]?.slug;
  const b = LIVE_CITIES[1]?.slug;
  const urlA = a ? `${a}/` : 'test.html';
  const urlB = b ? `${b}/` : 'test.html';

  const ctxA = await browser.newContext();
  const ctxB = await browser.newContext();
  const pageA = await ctxA.newPage();
  const pageB = await ctxB.newPage();

  await Promise.all([
    pageA.goto(urlA, { waitUntil: 'networkidle' }),
    pageB.goto(urlB, { waitUntil: 'networkidle' }),
  ]);

  const sampleScale = (page) => page.locator('span[aria-label="Network heartbeat"]').first().evaluate(el => {
    const m = (el.style.transform || '').match(/scale\(([\d.]+)\)/);
    return m ? parseFloat(m[1]) : null;
  });

  let totalDiff = 0;
  for (let i = 0; i < 5; i++) {
    const [valA, valB] = await Promise.all([sampleScale(pageA), sampleScale(pageB)]);
    expect(valA, `${urlA} scale present`).not.toBeNull();
    expect(valB, `${urlB} scale present`).not.toBeNull();
    totalDiff += Math.abs(valA - valB);
    await Promise.all([pageA.waitForTimeout(150), pageB.waitForTimeout(150)]);
  }
  expect(totalDiff / 5, `avg cross-page scale diff (${urlA} vs ${urlB}) was ${(totalDiff / 5).toFixed(4)}`).toBeLessThan(0.05);

  await ctxA.close();
  await ctxB.close();
});

test('e2e: smoke test page is responsive at 375px (no horizontal scroll)', async ({ browser }) => {
  // Targets /test.html, which uses the new shared cor-base.css with the proper 700px breakpoint.
  // The legacy / page is excluded until Step C migrates it onto the shared CSS.
  const ctx = await browser.newContext({ viewport: { width: 375, height: 800 } });
  const page = await ctx.newPage();
  await page.goto('test.html', { waitUntil: 'networkidle' });

  const overflow = await page.evaluate(() => ({
    bodyW: document.body.scrollWidth,
    winW: window.innerWidth,
  }));
  expect(overflow.bodyW, `body width ${overflow.bodyW} should not exceed window ${overflow.winW}`).toBeLessThanOrEqual(overflow.winW + 8);

  await ctx.close();
});
