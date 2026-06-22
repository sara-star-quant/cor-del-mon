// Smoke tests: every static asset responds, every JSON parses, every markdown is non-empty.
// Fast, no JavaScript execution, just HTTP and content checks.

import { test, expect } from '@playwright/test';
import { LIVE_CITIES } from './cities.config.js';

const NETWORK_ASSETS = [
  { path: '',                                 mime: /text\/html/, minBytes: 15_000 },
  { path: 'test.html',                        mime: /text\/html/, minBytes: 5_000 },
  { path: 'network-constitution.md',          mime: /(text|markdown)/, minBytes: 5_000 },
  { path: 'LICENSE',                          mime: /(text|octet-stream|plain)/, minBytes: 1_000 },
  { path: 'LICENSE-content.md',               mime: /(text|markdown)/, minBytes: 1_000 },
  { path: 'README.md',                        mime: /(text|markdown)/, minBytes: 2_000 },
  { path: 'DISCLAIMER.md',                    mime: /(text|markdown)/, minBytes: 5_000 },
  { path: '_shared/cor-shared-v1.js',         mime: /javascript/, minBytes: 10_000 },
  { path: '_shared/cor-base.css',             mime: /css/, minBytes: 3_000 },
  { path: '_shared/cor-cities.json',          mime: /json/, minBytes: 1_000 },
  { path: '_shared/cor-constitution.json',    mime: /json/, minBytes: 1_000 },
  { path: '_shared/vocab.schema.json',        mime: /json/, minBytes: 2_000 },
  { path: '_shared/cor-visual-identity.md',   mime: /(text|markdown)/, minBytes: 2_000 },
];

const CITY_ASSETS = LIVE_CITIES.flatMap(c => [
  { path: `${c.slug}/`,         mime: /text\/html/, minBytes: 5_000 },
  { path: `${c.slug}/vocab.js`, mime: /javascript/, minBytes: 5_000 },
]);

const ASSETS = [...NETWORK_ASSETS, ...CITY_ASSETS];

for (const asset of ASSETS) {
  test(`smoke: ${asset.path} responds 200 with expected size and mime`, async ({ request }) => {
    const resp = await request.get(asset.path);
    expect(resp.status(), `${asset.path} should return 200`).toBe(200);
    const body = await resp.body();
    expect(body.length, `${asset.path} should be at least ${asset.minBytes} bytes`).toBeGreaterThanOrEqual(asset.minBytes);
    expect(resp.headers()['content-type'], `${asset.path} content-type should match ${asset.mime}`).toMatch(asset.mime);
  });
}

test('smoke: cor-cities.json has six Wave-1 cities with the expected slugs', async ({ request }) => {
  const resp = await request.get('_shared/cor-cities.json');
  const data = await resp.json();
  expect(data.cities).toHaveLength(6);
  const slugs = data.cities.map(c => c.slug).sort();
  expect(slugs).toEqual(['adelaide', 'andorra', 'capetown', 'jaipur', 'valparaiso', 'yokohama']);
  expect(data.ceremonyRotation).toHaveLength(6);
  expect(data.biennaleHosts).toHaveLength(6);
});

test('smoke: cor-constitution.json has nine sections, eight mechanics, and a rolling-wave object', async ({ request }) => {
  const resp = await request.get('_shared/cor-constitution.json');
  const data = await resp.json();
  expect(data.sections).toHaveLength(9);
  expect(data.mechanics).toHaveLength(8);
  expect(data.rollingWave, 'rollingWave object present').toBeDefined();
  expect(data.rollingWave.stages.map(s => s.name)).toEqual(['Charter', 'Break Ground', 'Operational', 'Generation']);
  expect(data.rollingWave.phases.map(p => p.name)).toEqual(['Genesis', 'Activation', 'Spread', 'Network', 'Lifetime']);
  // Operational offsets per city (years since initialization), sanity-check the canonical sequence
  expect(data.rollingWave.cityOperationalOffset.andorra).toBe(5);
  expect(data.rollingWave.cityOperationalOffset.yokohama).toBe(9);
});

test('smoke: each live city vocab has four milestones in canonical Charter/Break Ground/Operational/Generation order', async ({ request }) => {
  const cities = ['andorra', 'yokohama'];  // grows as more cities ship
  for (const slug of cities) {
    const src = await (await request.get(`${slug}/vocab.js`)).text();
    // Extract the milestones array's stage values via regex; vocab.js is a JS module not JSON
    const stageMatches = [...src.matchAll(/stage:\s*"([^"]+)"/g)].map(m => m[1]);
    expect(stageMatches, `${slug} vocab should have Charter, Break Ground, Operational, Generation`).toEqual(['Charter', 'Break Ground', 'Operational', 'Generation']);
    // Each milestone should also have a year offset (years since initialization, integer 0-60)
    const yearMatches = [...src.matchAll(/year:\s*(\d{1,2})\s*,/g)].map(m => parseInt(m[1], 10));
    expect(yearMatches.length, `${slug} should have at least 4 milestone year offsets`).toBeGreaterThanOrEqual(4);
    yearMatches.forEach(y => {
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(60);
    });
  }
});

test('smoke: vocab.schema.json is a valid JSON Schema draft 2020-12', async ({ request }) => {
  const resp = await request.get('_shared/vocab.schema.json');
  const schema = await resp.json();
  expect(schema.$schema).toBe('https://json-schema.org/draft/2020-12/schema');
  expect(schema.type).toBe('object');
  expect(schema.required).toContain('city');
  expect(schema.required).toContain('brand');
  expect(schema.required).toContain('palette');
  expect(schema.required).toContain('seismic');
});

test('smoke: cor-shared-v1.js exports expected component names', async ({ request }) => {
  const resp = await request.get('_shared/cor-shared-v1.js');
  const src = await resp.text();
  for (const name of ['Heart', 'BigHeart', 'FloatingHearts', 'Viral', 'Stat', 'Card', 'Tag',
                      'Icon', 'Heartbeat', 'CeremonyTile', 'NetworkNav',
                      'SeismicBlock', 'NationalStyleBlock', 'MilestoneRow', 'MilestoneMatrix',
                      'mount', 'injectBaseCSS', 'setPalette', 'setTypography']) {
    const exportRegex = new RegExp(`export\\s+(async\\s+)?function\\s+${name}\\b`);
    expect(src, `cor-shared-v1.js should export ${name}`).toMatch(exportRegex);
  }
  expect(src).toContain(`window.CorShared = api`);
});

test('smoke: landing page presents the Cor del Món network, not a city page', async ({ request }) => {
  const resp = await request.get('');
  const html = await resp.text();
  expect(html).toContain('Cor del Món');
  expect(html).toContain('Six cities');
  expect(html).toContain('beat as one');
  expect(html).toContain('Six Hearts');
  expect(html).toContain('Rolling Wave');
  expect(html).toContain('Mechanics');
  for (const city of ['Andorra', 'Yokohama', 'Adelaide', 'Valparaíso', 'Cape Town', 'Jaipur']) {
    expect(html, `landing should mention ${city}`).toContain(city);
  }
  expect(html).toContain('DISCLAIMER.md');
  expect(html).not.toContain('COMMERCIAL.md');
  // M3 redesign markers: utility classes present in the static HTML
  expect(html).toContain('m3-display-large');
  expect(html).toContain('m3-top-app-bar');
  expect(html).toContain('bento');
  expect(html).not.toContain('game4');
  expect(html).not.toMatch(/\u2014/);
});

// Per-city smoke tests, parameterized by tests/cities.config.js. Adding a city to
// LIVE_CITIES extends the test suite without further edits in this file.
for (const city of LIVE_CITIES) {
  test(`smoke: /${city.slug}/ wires up the shared module and the ${city.slug} vocab`, async ({ request }) => {
    const html = await (await request.get(`${city.slug}/`)).text();
    expect(html).toContain(city.vocabGlobal);
    expect(html).toContain('cor-shared-v1.js');
    expect(html).not.toContain('game4');
    expect(html).not.toMatch(/\u2014/);

    const vocab = await (await request.get(`${city.slug}/vocab.js`)).text();
    for (const term of city.requiredVocabTerms) {
      expect(vocab, `${city.slug}/vocab.js should contain "${term}"`).toContain(term);
    }
  });
}

test('smoke: README, Disclaimer, and Constitution use the new email and have no em-dashes', async ({ request }) => {
  for (const path of ['README.md', 'DISCLAIMER.md', 'network-constitution.md']) {
    const resp = await request.get(path);
    const text = await resp.text();
    expect(text, `${path} should not contain old email`).not.toContain('game4');
    expect(text, `${path} should have no em-dashes (U+2014)`).not.toMatch(/\u2014/);
  }
});

test('smoke: site no longer ships COMMERCIAL.md', async ({ request }) => {
  const resp = await request.get('COMMERCIAL.md');
  expect(resp.status(), 'COMMERCIAL.md should not be served').toBe(404);
});

// Schema-shape and shared-module-usage checks, parameterized per live city.
for (const city of LIVE_CITIES) {
  test(`smoke: ${city.slug}/vocab.js exports the required schema fields`, async ({ request }) => {
    const src = await (await request.get(`${city.slug}/vocab.js`)).text();
    for (const field of ['city', 'brand', 'palette', 'typography', 'monument',
                         'nationalStyle', 'seismic', 'sections']) {
      expect(src, `${city.slug}/vocab.js should declare ${field}`).toMatch(new RegExp(`\\b${field}:\\s*\\{`));
    }
    expect(src).toContain('export default vocab');
    expect(src).toContain(`window.${city.vocabGlobal}`);
    expect(src).not.toContain('React.createElement');
  });

  test(`smoke: ${city.slug}/index.html uses the shared module and has no inline component definitions`, async ({ request }) => {
    const html = await (await request.get(`${city.slug}/`)).text();
    expect(html).toContain('cor-shared-v1.js');
    expect(html).toContain('cor-base.css');
    expect(html).toContain('window.CorShared');
    expect(html).toContain(city.vocabGlobal);
    expect(html).not.toMatch(/const\s+Heart\s*=\s*\(/);
    expect(html).not.toMatch(/const\s+FloatingHearts\s*=/);
    expect(html).not.toMatch(/const\s+BigHeart\s*=/);
  });
}
