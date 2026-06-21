# Cor Visual Identity

*The minimum every Cor del Món city site preserves so all six read as one network.*

This document is short by design. A reader who lands on Yokohama's site after Andorra's site should feel within three seconds that the two are network sites. These invariants make that happen.

If a city designer wants to break one of these invariants, that is fine. They just stop being a Cor del Món member city for as long as the invariant is broken. There is no committee, no signoff, no permission ladder. The contract holds itself together because every signed city honours it voluntarily.

## The seven invariants

1. **The heart silhouette is one shared SVG path.** It lives in `cor-shared-v1.js` as the `Heart` and `BigHeart` components. Cities may tint it. Cities may not redraw it. The silhouette is the literal symbol that links the network in the reader's eye.

2. **Nine sections, fixed order.** Hero, Monument, Hearth of the Heart, Architecture, Media, Traditions, Youth, Network, Roadmap. No additions, no reorderings, no omissions. Local content varies wildly. The rhythm does not.

3. **Heartbeat tick: 60 BPM, top-right of the navigation bar.** Identical phase across cities, derived client-side from `Date.now() % 1000`. A reader who opens Yokohama and Adelaide in two browser tabs sees the two hearts pulse in sync, immediately and forever.

4. **Network bar placement.** Always inside section eight, identical layout, current city highlighted. No "discover the other cities" tucked at the bottom of a footer. The network is one of the nine sections, treated as content.

5. **Section header rhythm.** Three lines, same hierarchy in every city: a small uppercase letter-spaced label (native plus English), then a serif `h2` in the native language, then a sans-serif body paragraph in English. Typefaces change per city. The pacing never does.

6. **Rose-family accent.** Every palette declares a `--rose` token used for the heartbeat, the monument SVG fill, and emphasis underlines. Cities may shift the hue (Yokohama cooler, Valparaíso hotter, Jaipur warmer) but stay within the rose, magenta, and coral family. A page that loses the rose has lost the network.

7. **No emoji.** Section labels and card icons use the small custom SVG icon set defined in `cor-shared-v1.js` (the `Icon` component, with named entries: `heart`, `mountain`, `hearth`, `hands`, `leaf`, `flame`, `arc`, `book`, `lock`, `key`, `mic`, `screen`, `transit`, `plaza`). Pure typography is preferred wherever an icon is not strictly necessary. The shared `Heart` SVG is the only emoji-shaped symbol used anywhere in the network.

## Wordmark

Every city site footer ends with the same italic *Cor del Món* wordmark linking back to `/`. The wordmark is set in the city's serif typeface at the city's `--rose` colour, sized at roughly twice the body text. This is the visual handshake between the network sites.

## What is intentionally not standardised

So that nothing here reads as a constraint where a freedom was meant.

- **Typography pair.** Each city picks its own serif and sans-serif Google Fonts pair, one suited to the local script. Yokohama uses Noto Serif JP plus Inter. Andorra uses Playfair Display plus Sora. The shared module's `setTypography` helper takes whatever pair the city declares.
- **Page background and texture.** A city may use a solid dark, a gradient, or a subtle photo backdrop, as long as text contrast stays at WCAG AA.
- **Section copy length.** The Andorra page runs long because it is the seed. A Yokohama or Valparaíso site may be tighter. The nine sections have to be present. Their length is the city's call.
- **Interactive density.** Some cities will lean into the soundtrack iframes, the AR layer ideas, the wearable hooks. Others will keep it text-heavy and meditative. Either is right.
- **Heart silhouette tint and motion.** The path is shared. The tint, the pulse animation rate (within the heartbeat constraint), the size, and the placement on hero are local choices.

## Versioning

This document is part of the project content and is licensed under CC BY-NC 4.0 (see `LICENSE-content.md`).

The current version is **1.0 (Q3 2026)**. Amendments follow the same process as the Constitution: pull request against the central repository, unanimous approval from current member cities for any of the seven invariants, two-thirds majority for everything else.
