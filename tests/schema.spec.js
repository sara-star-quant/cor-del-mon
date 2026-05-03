// Schema-validation tests: every live city vocab object validates against
// _shared/vocab.schema.json under AJV. Catches drift between the schema and the
// vocab files that regex-only smoke checks would miss.

import { test, expect } from '@playwright/test';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { LIVE_CITIES } from './cities.config.js';

let validate;

test.beforeAll(async ({ request }) => {
  const schema = await (await request.get('_shared/vocab.schema.json')).json();
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  validate = ajv.compile(schema);
});

for (const city of LIVE_CITIES) {
  test(`schema: ${city.slug} vocab validates against vocab.schema.json (AJV)`, async ({ page }) => {
    await page.goto(`${city.slug}/`, { waitUntil: 'networkidle' });
    const vocab = await page.evaluate((g) => window[g], city.vocabGlobal);
    expect(vocab, `${city.slug} should expose window.${city.vocabGlobal}`).toBeDefined();

    const ok = validate(vocab);
    if (!ok) {
      const errors = (validate.errors || []).map(e => `  ${e.instancePath || '/'} ${e.message}`).join('\n');
      throw new Error(`${city.slug} vocab fails schema:\n${errors}`);
    }

    // Rolling-wave invariant: stages in canonical order at city-specific years.
    const stages = vocab.sections.roadmap.milestones.map(m => m.stage);
    expect(stages).toEqual(['Charter', 'Break Ground', 'Operational', 'Generation']);
    const years = vocab.sections.roadmap.milestones.map(m => m.year);
    for (let i = 1; i < years.length; i++) {
      expect(years[i], `${city.slug} milestones must be in chronological order`).toBeGreaterThanOrEqual(years[i - 1]);
    }
  });
}
