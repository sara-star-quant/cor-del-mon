// Live-cities registry for parameterized tests.
// Adding a city to this array auto-extends every per-city test loop in
// smoke.spec.js and e2e.spec.js. Match the slug to /_shared/cor-cities.json.

export const LIVE_CITIES = [
  {
    slug: 'andorra',
    nameEn: 'Andorra la Vella',
    nameNative: 'Andorra la Vella',
    vocabGlobal: 'AndorraVocab',
    requiredVocabTerms: ['El Cor Viu', 'Llars del Cor', 'Cor FM', 'Rolling Wave', 'Pyrenean granite'],
  },
  {
    slug: 'yokohama',
    nameEn: 'Yokohama',
    nameNative: '横浜',
    vocabGlobal: 'YokohamaVocab',
    requiredVocabTerms: ['Minatokokoro', 'Kokoro no Ie', 'Yokohama Hour', 'titanium', 'Hakone'],
  },
  {
    slug: 'adelaide',
    nameEn: 'Adelaide',
    nameNative: 'Adelaide',
    vocabGlobal: 'AdelaideVocab',
    requiredVocabTerms: ['Living Heart Adelaide', 'Hearts of Home', 'rammed earth', 'Tarndanyangga', 'Murcutt'],
  },
  {
    slug: 'valparaiso',
    nameEn: 'Valparaíso',
    nameNative: 'Valparaíso',
    vocabGlobal: 'ValparaisoVocab',
    requiredVocabTerms: ['El Faro del Corazón', 'Hogares del Corazón', 'corrugated iron', 'Aravena', 'Neruda'],
  },
  {
    slug: 'capetown',
    nameEn: 'Cape Town',
    nameNative: 'Cape Town',
    vocabGlobal: 'CapeTownVocab',
    requiredVocabTerms: ['Living Heart Cape Town', 'Hearts of Home', 'Cape granite', 'Table Mountain', 'Day Zero'],
  },
  {
    slug: 'jaipur',
    nameEn: 'Jaipur',
    nameNative: 'जयपुर',
    vocabGlobal: 'JaipurVocab',
    requiredVocabTerms: ['Hriday Mahal', 'Hriday Ghar', 'jali', 'Hawa Mahal', 'Pink Limewash'],
  },
];
