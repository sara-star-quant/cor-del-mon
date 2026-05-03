# Cor del Món, the Global Heart Network

*Six cities beat as one.*

This repository holds the design proposal and prototype site for **Cor del Món**, a
quiet family of six cities of culture and exchange that share the same lovable idea, each one
shaped by its own country's spirit, its own materials and motifs, its own seismic
reality.

The first wave is **Andorra la Vella** (the seed), **Yokohama**, **Adelaide**,
**Valparaíso**, **Cape Town**, and **Jaipur**. Above all of them sits a
landing page, *Cor del Món*, which means "Heart of the World" in Catalan.

Every site shares a synchronized heartbeat, a nine-section structure, and a
**rolling-wave** milestone narrative (Charter, Break Ground, Operational, Generation)
where each city moves at its own city-specific pace, not a synchronized handover.
The first city, *Andorra · El Cor Viu*, is the seed; each other city is shaped to
its own skyline, materials, languages, and binding constraints.

## The current state

All six wave-1 cities are live. Each city's monument is sized to its own skyline:
**Andorra 33m**, **Yokohama 120m**, **Adelaide 65m**, **Valparaíso 47m**, **Cape Town 99m**,
**Jaipur 28m**. The rolling-wave schedule has Andorra opening 2032, Adelaide and Yokohama
2035-2036, and Valparaíso, Cape Town, and Jaipur reaching Operational by 2038-2040.

The network broadcast (Cor FM and Cor Kids TV) runs from a single hub anchored in
Andorra, with each operational city contributing a weekly hour in its own language.
There is no per-city radio station; the Yokohama Hour, Adelaide Hour, Valparaíso Hour,
Cape Town Hour, and Jaipur Hour are weekly slots inside the network broadcast.

## Read it first

If you have arrived here from a search engine or a friend, the warmest places to
start are:

- **Andorra · El Cor Viu**, the seed page, in Catalan and English.
- **[`network-constitution.md`](network-constitution.md)**, the easy-to-read charter:
  the nine mandatory sections every city honours, the synchronized heartbeat,
  the Cor Residency and Biennale mechanics, the four milestone years, and
  how a new city signs the Cor Charter to join.
- **[`COMMERCIAL.md`](COMMERCIAL.md)**, for cities, governments, developers, publishers, and
  foundations who want to take this work into a real built or commercial setting.

## How it is built

This is a **zero-build-step** site. There is no Webpack, no Vite, no Next.js, no
package manager involved. Every page is a single self-contained HTML file that
loads **React 18.2.0** and **Babel-standalone 7.23.9** from a public CDN, and a
tiny shared module of UI components from `/_shared/cor-shared-v1.js`. (React 18.3.1
and React 19.0.0 exist; the conservative 18.2.0 pin is intentional for a static
site that should not rebreak when a CDN moves.)

To work on it locally:

```sh
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

A small note on previewing: do not open the HTML files via `file://`. The shared
module is loaded as a `<script type="module">`, which browsers refuse to execute
from `file://` for security reasons. The tiny static server above is the easiest
fix.

## Tests

The repo ships with a 90-test Playwright suite under `tests/` covering smoke
checks (every URL responds, every JSON parses, key strings are present), end-to-end
behaviour (React renders, synchronized heartbeat animates and stays phase-locked
across browser tabs), AJV schema validation (every per-city vocab object validates
against `_shared/vocab.schema.json`), Visual Identity invariants (nine sections, rose
token, NetworkNav, wordmark), and an internal-link integrity sweep across every page.

```sh
cd tests
npm install
npx playwright install chromium    # first time only, downloads Chromium
npx playwright test                 # boots a local static server and runs everything
```

To run against the live deployed site instead of localhost:

```sh
BASE_URL=https://sara-star-quant.github.io/cor-del-mon npx playwright test
```

The `tests/` directory is dev tooling only. None of it is deployed to GitHub Pages.

## Privacy and analytics

There are no analytics on this site. No cookies, no tracking pixels, no third-party
beacons. A project about love does not need surveillance.

The only third-party requests are to public CDNs (cdnjs for React and Babel,
Google Fonts for typography). If you would like a fully self-hosted version with
no third-party requests at all, that is a small change worth doing once we are
past the prototype stage. Open an issue if you would like to push it forward.

## License

Two licenses, by intent:

- **[`LICENSE`](LICENSE)** covers the **code** (every JS, HTML, JSON, CSS, workflow, and
  configuration file). It is the **PolyForm Noncommercial 1.0.0**, a modern,
  legally robust source-available license. You may read, study, modify, and
  share the code for any purpose that is not commercial.

- **[`LICENSE-content.md`](LICENSE-content.md)** covers the **prose, design rationale, research,
  architectural language descriptions, and milestone narrative**. It is
  **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.
  You may quote, cite, adapt, and redistribute the writing with attribution,
  for any non-commercial purpose.

For commercial use of either, **see [`COMMERCIAL.md`](COMMERCIAL.md)**. Commercial licensing and
design consultancy are available, and a short email to **cor-del-mon [at] protonmail [dot] com**
is enough to start a conversation.

## Contributing

Contributions are welcome from anyone who reads the work and feels the pulse of it.
A few light norms:

- Open an issue first for anything bigger than a typo, so we can talk through it.
- Match the warm, conversational voice of the existing prose. No corporate
  language. No buzzwords. No em-dashes (a small house style).
- Keep the no-build-step contract. Anything that introduces Webpack, npm, or
  similar tooling is out of scope.
- Honour the **Cor Visual Identity** invariants in `_shared/cor-visual-identity.md`:
  the heart silhouette is one shared SVG path, every site has nine sections in
  the fixed order, the heartbeat ticks at 60 BPM in sync across all cities, and
  the rose-family accent palette is never broken.

## Credits

*Cor del Món* is a design proposal by **sara-star-quant**.

The Andorra page draws on the rhythms of Catalan poetry, the architecture of the
Pyrenees, and the everyday warmth of Andorran communes. The other five cities
are designed in respectful dialogue with their local materials, motifs, and
contemporary architectural practices, named in each city's `vocab.js`.

If you build on this work, an attribution to *Cor del Món / sara-star-quant /
cor-del-mon* with a link back to this repository is gratefully received.
