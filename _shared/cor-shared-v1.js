/* Cor del Món shared module, v1.1.0
 * v1.0.0: components, helpers, JSON loaders, 20 named SVG icons.
 * v1.1.0: additive. Material Design 3 utilities live in cor-base.css. No new exports needed.
 * Plain ES module. No JSX. Loaded via <script type="module">.
 * Per-city HTML pages run inside <script type="text/babel"> which cannot use ES import,
 * so this module also assigns window.CorShared = { ... } for global access.
 *
 * Load order in a city page:
 *   <script src="https://cdn.../react.production.min.js"></script>
 *   <script src="https://cdn.../react-dom.production.min.js"></script>
 *   <script type="module" src="../_shared/cor-shared-v1.js"></script>
 *   <script src="https://cdn.../babel.min.js"></script>
 *   <script type="text/babel">
 *     window.CorShared.ready.then(() => {
 *       function App() { return ... }
 *       window.CorShared.mount(App);
 *     });
 *   </script>
 */

export const VERSION = "1.1.0";

// ---------------------------------------------------------------------------
// React handle
// ---------------------------------------------------------------------------

const R = (typeof window !== "undefined" && window.React) ? window.React : null;
const RDOM = (typeof window !== "undefined" && window.ReactDOM) ? window.ReactDOM : null;
if (!R) {
  console.error("[CorShared] React not found on window. Load React UMD before this module.");
}

const h = R ? R.createElement : function () { return null; };
const useState = R ? R.useState : null;
const useEffect = R ? R.useEffect : null;
const useMemo = R ? R.useMemo : null;

// ---------------------------------------------------------------------------
// Async data: constitution and cities registry
// ---------------------------------------------------------------------------

// Resolve sibling URL relative to this module so it works from /andorra/, /yokohama/, /test.html, etc.
const here = new URL(".", import.meta.url);

// Project root, derived from this module's location. The shared module always lives at
// {PROJECT_ROOT}_shared/cor-shared-v1.js. Extracting that gives the deploy root, which
// works whether the site is served from a subpath like /cor-del-mon/ on github.io or
// from the domain root / on a custom domain. Used to build correct absolute hrefs for
// cross-page navigation (landing -> city, city -> network city, city -> landing).
export const PROJECT_ROOT = here.pathname.replace(/_shared\/$/, "");

export function cityURL(slug) {
  return PROJECT_ROOT + slug + "/";
}

export function landingURL() {
  return PROJECT_ROOT;
}

async function loadJSON(rel) {
  const resp = await fetch(new URL(rel, here));
  if (!resp.ok) throw new Error(`Failed to load ${rel}: ${resp.status}`);
  return resp.json();
}

let _CONSTITUTION = null;
let _CITIES = null;

const ready = Promise.all([
  loadJSON("cor-constitution.json").then(j => { _CONSTITUTION = j; }),
  loadJSON("cor-cities.json").then(j => {
    _CITIES = j;
    // Rewrite each city's url to be deploy-root absolute, so links work from any depth.
    if (_CITIES && _CITIES.cities) {
      for (const c of _CITIES.cities) c.url = cityURL(c.slug);
    }
  })
]).then(() => ({ CONSTITUTION: _CONSTITUTION, CITIES: _CITIES }));

export { ready };
export function getConstitution() { return _CONSTITUTION; }
export function getCities() { return _CITIES; }

// ---------------------------------------------------------------------------
// Helpers: mount, palette, typography, base CSS injection
// ---------------------------------------------------------------------------

export async function mount(App, rootId) {
  await ready;
  const id = rootId || "root";
  const node = document.getElementById(id);
  if (!node) throw new Error(`[CorShared] mount target #${id} not found`);
  RDOM.createRoot(node).render(h(App));
}

export function injectBaseCSS(rel) {
  const href = new URL(rel || "cor-base.css", here).href;
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export function setPalette(palette) {
  const root = document.documentElement;
  Object.entries(palette || {}).forEach(([k, v]) => {
    if (k.startsWith("--")) root.style.setProperty(k, v);
  });
}

export function setTypography(t) {
  if (!t) return;
  if (t.googleFontsUrl && !document.querySelector(`link[href="${t.googleFontsUrl}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = t.googleFontsUrl;
    document.head.appendChild(link);
  }
  const root = document.documentElement;
  if (t.serif) root.style.setProperty("--font-serif", t.serif);
  if (t.sans) root.style.setProperty("--font-sans", t.sans);
}

// ---------------------------------------------------------------------------
// Heart SVG (the network's invariant silhouette)
// ---------------------------------------------------------------------------

const HEART_PATH =
  "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";

const BIG_HEART_PATH =
  "M100 170 C50 130 5 100 5 60 C5 28 30 8 58 8 C76 8 92 20 100 38 C108 20 124 8 142 8 C170 8 195 28 195 60 C195 100 150 130 100 170Z";

export function Heart(props) {
  const size = props.size || 24;
  const color = props.color || "currentColor";
  const filled = props.filled !== false;
  const pulse = !!props.pulse;
  const style = pulse ? { animation: "hPulse 2.5s ease-in-out infinite" } : null;
  return h("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : "none",
    stroke: color,
    strokeWidth: 1.5,
    style: style,
    "aria-hidden": "true"
  }, h("path", { d: HEART_PATH }));
}

export function BigHeart(props) {
  const size = props.size || 160;
  return h("svg", {
    viewBox: "-15 -10 230 200",
    width: size,
    height: size * 0.87,
    style: { overflow: "visible" },
    "aria-hidden": "true"
  },
    h("defs", null,
      h("linearGradient", { id: "corHg", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
        h("stop", { offset: "0%", stopColor: "var(--rose, #e11d48)" }),
        h("stop", { offset: "50%", stopColor: "var(--rose-light, #f43f5e)" }),
        h("stop", { offset: "100%", stopColor: "var(--rose-pale, #fda4af)" })
      ),
      h("radialGradient", { id: "corHg2", cx: "50%", cy: "40%", r: "50%" },
        h("stop", { offset: "0%", stopColor: "var(--rose-light, #fb7185)", stopOpacity: 0.4 }),
        h("stop", { offset: "100%", stopColor: "var(--rose, #e11d48)", stopOpacity: 0 })
      ),
      h("filter", { id: "corGl", x: "-20%", y: "-20%", width: "140%", height: "140%" },
        h("feGaussianBlur", { stdDeviation: 5, result: "b" }),
        h("feMerge", null,
          h("feMergeNode", { in: "b" }),
          h("feMergeNode", { in: "SourceGraphic" })
        )
      )
    ),
    h("path", {
      d: BIG_HEART_PATH,
      fill: "url(#corHg)",
      filter: "url(#corGl)",
      style: { animation: "hPulse 2.5s ease-in-out infinite" }
    }),
    h("path", { d: BIG_HEART_PATH, fill: "url(#corHg2)" }),
    h("ellipse", { cx: 68, cy: 46, rx: 20, ry: 11, fill: "white", opacity: 0.06, transform: "rotate(-25 68 46)" })
  );
}

// ---------------------------------------------------------------------------
// Floating hearts background
// ---------------------------------------------------------------------------

export function FloatingHearts(props) {
  const count = props.count || 16;
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 8 + Math.random() * 24,
    delay: Math.random() * 22,
    dur: 9 + Math.random() * 13,
    drift: -50 + Math.random() * 100,
    rot: Math.random() * 50 - 25,
    filled: i % 4 !== 0
  })), [count]);
  return h("div", {
    style: { position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden", contain: "strict" },
    "aria-hidden": "true"
  }, items.map(x => h("div", {
    key: x.id,
    style: {
      position: "absolute",
      left: x.left + "%",
      bottom: "-30px",
      animation: `hFloat ${x.dur}s ease-in-out ${x.delay}s infinite`,
      "--d": x.drift + "px",
      "--r": x.rot + "deg",
      opacity: 0,
      willChange: "transform, opacity",
      backfaceVisibility: "hidden"
    }
  }, h(Heart, { size: x.size, color: "var(--rose, #e11d48)", filled: x.filled }))));
}

// ---------------------------------------------------------------------------
// Viral callout
// ---------------------------------------------------------------------------

export function Viral(props) {
  return h("p", { className: "viral" },
    h("span", { className: "vheart" }, "♥"),
    props.children,
    h("span", { className: "vheart" }, "♥")
  );
}

// ---------------------------------------------------------------------------
// Stat
// ---------------------------------------------------------------------------

export function Stat(props) {
  const small = !!props.small;
  return h("div", { style: { textAlign: "center" } },
    h("div", { className: "metric", style: small ? { fontSize: 30 } : null }, props.n),
    h("div", {
      className: "s",
      style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-faint)", marginTop: 4 }
    }, props.l)
  );
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

export function Card(props) {
  return h("div", { className: props.glow ? "gcard" : "card" }, props.children);
}

// ---------------------------------------------------------------------------
// Tag
// ---------------------------------------------------------------------------

const TAG_VARIANTS = {
  rose:    { background: "var(--rose)", color: "#fff" },
  soft:    { background: "rgba(251,113,133,0.12)", color: "var(--rose-pale)", border: "1px solid rgba(251,113,133,0.2)" },
  ice:     { background: "rgba(125,211,252,0.10)", color: "#7dd3fc", border: "1px solid rgba(125,211,252,0.15)" },
  green:   { background: "rgba(74,222,128,0.10)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.15)" },
  gold:    { background: "rgba(250,204,21,0.10)", color: "#facc15", border: "1px solid rgba(250,204,21,0.15)" },
  problem: { background: "rgba(239,68,68,0.10)", color: "#f87171", border: "1px solid rgba(239,68,68,0.15)" },
  fix:     { background: "rgba(52,211,153,0.10)", color: "#34d399", border: "1px solid rgba(52,211,153,0.15)" }
};

export function Tag(props) {
  const variant = props.variant || "rose";
  const style = Object.assign({ fontSize: 9 }, TAG_VARIANTS[variant] || TAG_VARIANTS.rose);
  return h("span", { className: "tag", style: style }, props.children);
}

// ---------------------------------------------------------------------------
// Icon set (replaces emoji throughout the network)
// ---------------------------------------------------------------------------

const ICONS = {
  heart: HEART_PATH,
  mountain:
    "M3 20l5-9 4 6 3-4 6 7H3z M3 20h18",
  hearth:
    "M4 11l8-6 8 6v9H4z M9 20v-6h6v6",
  hands:
    "M7 10v6a3 3 0 003 3h4a3 3 0 003-3v-6 M7 10c0-1.5 1-2 2-2s2 .5 2 2 M13 10c0-1.5 1-2 2-2s2 .5 2 2 M9 10v-2 M15 10v-2",
  leaf:
    "M5 19c8 0 14-6 14-14 0 0-7 0-11 4S5 19 5 19z M5 19l8-8",
  drop:
    "M12 3l5 7a5 5 0 11-10 0z",
  sun:
    "M12 5v-2 M12 21v-2 M5 12h-2 M21 12h-2 M6 6l-1.5-1.5 M19.5 19.5L18 18 M6 18l-1.5 1.5 M19.5 4.5L18 6 M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  moon:
    "M20 14a8 8 0 11-10-10 6 6 0 0010 10z",
  flame:
    "M12 21c-4 0-6-3-6-6 0-3 2-4 3-7 1 3 3 4 4 2 0 4 5 5 5 9 0 2-2 2-2 2-2 0-2-2-2-2",
  arc:
    "M3 17a9 9 0 0118 0",
  book:
    "M5 4h7v16H5z M19 4h-7v16h7z",
  lock:
    "M5 11h14v9H5z M8 11V8a4 4 0 018 0v3",
  key:
    "M14 8a3 3 0 11-3 3 M11 11l-6 6 3 3 1-1 1 1 1-1-1-1 2-2-1-1z",
  mic:
    "M12 3a3 3 0 00-3 3v6a3 3 0 006 0V6a3 3 0 00-3-3z M5 12a7 7 0 0014 0 M12 19v3",
  screen:
    "M3 5h18v12H3z M9 21h6 M12 17v4",
  transit:
    "M2 12h4 M8 12h4 M14 12h4 M20 12h2",
  plaza:
    "M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0 M12 12m-3 0a3 3 0 106 0a3 3 0 10-6 0",
  residency:
    "M3 12h14 M11 6l6 6-6 6",
  doublehearts:
    "M9 8a3 3 0 00-6 0c0 4 6 8 6 8s6-4 6-8a3 3 0 00-6 0 M16 11a3 3 0 00-6 0c0 4 6 8 6 8s6-4 6-8a3 3 0 00-6 0",
  mountainPlaza:
    "M3 20l6-10 4 5 3-3 5 8H3z M12 20v-3"
};

export function Icon(props) {
  const name = props.name;
  const size = props.size || 18;
  const color = props.color || "currentColor";
  const stroke = props.stroke || 1.5;
  const path = ICONS[name];
  if (!path) {
    console.warn(`[CorShared] Icon "${name}" not found. Available:`, Object.keys(ICONS));
    return null;
  }
  // Filled icons (heart silhouette and double heart) render filled; the rest are line-art.
  const filled = (name === "heart" || name === "doublehearts");
  return h("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? color : "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, h("path", { d: path }));
}

// ---------------------------------------------------------------------------
// Heartbeat (synchronized 60 BPM tick, identical phase across cities)
// ---------------------------------------------------------------------------

export function Heartbeat(props) {
  const size = props.size || 22;
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let raf;
    const tick = () => {
      setPhase(Date.now() % 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  // 60 BPM = one full beat per 1000ms. Pulse intensity peaks twice per beat (lub-dub).
  const t = phase / 1000;
  const beat1 = Math.exp(-Math.pow((t - 0.05) * 8, 2));
  const beat2 = Math.exp(-Math.pow((t - 0.30) * 8, 2)) * 0.6;
  const scale = 1 + 0.18 * Math.max(beat1, beat2);
  return h("span", {
    style: {
      display: "inline-block",
      transform: `scale(${scale.toFixed(3)})`,
      transition: "transform 30ms linear",
      color: "var(--rose)"
    },
    title: "Synchronized network heartbeat, 60 BPM",
    "aria-label": "Network heartbeat"
  }, h(Icon, { name: "heart", size: size }));
}

// ---------------------------------------------------------------------------
// CeremonyTile (which city is currently in its declared Cor hour)
// ---------------------------------------------------------------------------

function activeCeremonyCity(citiesData) {
  if (!citiesData || !citiesData.cities) return null;
  const order = citiesData.ceremonyRotation || citiesData.cities.map(c => c.slug);
  const cityBySlug = Object.fromEntries(citiesData.cities.map(c => [c.slug, c]));
  // Find the city whose local hour is 18 (the active hour).
  // If multiple, prefer the one earliest in rotation order.
  for (const slug of order) {
    const city = cityBySlug[slug];
    if (!city) continue;
    try {
      const hour = parseInt(new Intl.DateTimeFormat("en-GB", {
        timeZone: city.coords.tz,
        hour: "2-digit",
        hour12: false
      }).format(new Date()), 10);
      if (hour === 18) return city;
    } catch (e) { /* unsupported timezone, skip */ }
  }
  return null;
}

export function CeremonyTile(props) {
  const data = props.cities || _CITIES;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 30000);
    return () => clearInterval(id);
  }, []);
  const active = activeCeremonyCity(data);
  if (!active) {
    return h("div", { className: "card", style: { textAlign: "center", maxWidth: 360 } },
      h("div", { className: "s", style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 6 } }, "Daily Ceremony"),
      h("div", { className: "s", style: { fontSize: 13, color: "var(--text-muted)" } }, "Next ceremony at the next sunset hour in any network city.")
    );
  }
  return h("div", { className: "card", style: { textAlign: "center", maxWidth: 360 } },
    h("div", { className: "s", style: { fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--rose)", marginBottom: 8 } }, "Active Ceremony"),
    h("div", { style: { fontSize: 22, fontWeight: 900, marginBottom: 4 } }, active.name.english),
    h("div", { className: "s", style: { fontSize: 12, color: "var(--text-hint)", marginBottom: 12, fontStyle: "italic" } }, active.tagline.english),
    h(Heartbeat, { size: 28 })
  );
}

// ---------------------------------------------------------------------------
// NetworkNav (cross-city pill bar, current city highlighted)
// ---------------------------------------------------------------------------

export function NetworkNav(props) {
  const data = props.cities || _CITIES;
  const current = props.currentCity;
  if (!data || !data.cities) return null;
  return h("nav", {
    "aria-label": "Cor del Món network cities",
    style: { display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }
  },
    h("a", { href: landingURL(), className: "cor-pill", style: { fontStyle: "italic" } }, "Cor del Món"),
    data.cities.map(c => h("a", {
      key: c.slug,
      href: cityURL(c.slug),
      className: "cor-pill" + (c.slug === current ? " live" : "") + (c.status !== "live" ? " soon" : ""),
      style: c.status !== "live" ? { opacity: 0.6 } : null
    }, c.name.english + (c.status !== "live" ? " · soon" : "")))
  );
}

// ---------------------------------------------------------------------------
// SeismicBlock
// ---------------------------------------------------------------------------

export function SeismicBlock(props) {
  const s = props.spec;
  if (!s) return null;
  const rows = [
    ["Code", s.code],
    ["Design spec", s.designSpec],
    ["Peak design acceleration", s.peakAccel],
    ["Isolation strategy", s.isolation],
    ["Notes", s.notes]
  ].filter(r => r[1]);
  return h("div", { className: "card" },
    h("div", { className: "s", style: { fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 } }, "Seismic"),
    h("div", { style: { display: "grid", gap: 10 } },
      rows.map(([k, v], i) => h("div", { key: i, style: { display: "grid", gridTemplateColumns: "minmax(140px, auto) 1fr", gap: 14 } },
        h("div", { className: "s", style: { fontSize: 11, color: "var(--text-faint)", letterSpacing: 1 } }, k),
        h("div", { className: "s", style: { fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 } }, v)
      ))
    ),
    s.designConsequences ? h("p", {
      className: "s",
      style: { fontSize: 13, color: "var(--text-hint)", lineHeight: 1.7, marginTop: 18, fontStyle: "italic" }
    }, s.designConsequences) : null
  );
}

// ---------------------------------------------------------------------------
// NationalStyleBlock
// ---------------------------------------------------------------------------

export function NationalStyleBlock(props) {
  const s = props.style;
  if (!s) return null;
  return h("div", { className: "card" },
    h("div", { className: "s", style: { fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--rose)", marginBottom: 14 } }, "National style"),
    h("div", { style: { fontSize: 16, fontWeight: 700, marginBottom: 10 } }, s.buildingTypology),
    s.materials && s.materials.length ? h("div", { style: { marginBottom: 14 } },
      h("div", { className: "s", style: { fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 6 } }, "Materials"),
      s.materials.map((m, i) => h("div", { key: i, className: "s", style: { fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 } },
        h("strong", { style: { color: "var(--rose-pale)" } }, m.name), " from ", m.sourceRegion, ", ", m.role
      ))
    ) : null,
    s.motifs && s.motifs.length ? h("div", { style: { marginBottom: 14 } },
      h("div", { className: "s", style: { fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 6 } }, "Motifs"),
      s.motifs.map((m, i) => h("div", { key: i, className: "s", style: { fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 } },
        h("strong", { style: { color: "var(--rose-pale)" } }, m.name), " (", m.origin, "), ", m.application
      ))
    ) : null,
    s.referenceArchitects && s.referenceArchitects.length ? h("div", null,
      h("div", { className: "s", style: { fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 6 } }, "In dialogue with"),
      h("div", { className: "s", style: { fontSize: 12, color: "var(--text-muted)" } }, s.referenceArchitects.join(", "))
    ) : null
  );
}

// ---------------------------------------------------------------------------
// MilestoneRow (for a single city's roadmap)
// ---------------------------------------------------------------------------

export function MilestoneRow(props) {
  const m = props;
  return h("div", {
    style: { display: "grid", gridTemplateColumns: "minmax(110px, auto) 1fr", gap: 22, padding: "22px 0", borderBottom: "1px solid rgba(225,29,72,.06)" }
  },
    h("div", null,
      h("div", { className: "metric", style: { fontSize: 36, lineHeight: 1 } }, m.year),
      h("div", { style: { marginTop: 8 } }, h(Tag, { variant: "rose" }, ((m.stage || m.phase) || "").toUpperCase()))
    ),
    h("div", null,
      m.commitment ? h("div", { style: { marginBottom: 14 } },
        h("div", { className: "s", style: { fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--rose-pale)", marginBottom: 5 } }, "City"),
        h("p", { className: "s", style: { fontSize: 13, color: "var(--text-hint)", lineHeight: 1.65 } }, m.commitment)
      ) : null,
      m.networkContribution ? h("div", null,
        h("div", { className: "s", style: { fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "var(--pathway)", marginBottom: 5 } }, "Cor del Món Network"),
        h("p", { className: "s", style: { fontSize: 13, color: "var(--pathway-text)", lineHeight: 1.65 } }, m.networkContribution)
      ) : null
    )
  );
}

// ---------------------------------------------------------------------------
// MilestoneMatrix (landing-only: 4 years x N cities grid)
// ---------------------------------------------------------------------------

export function MilestoneMatrix(props) {
  const cities = props.cities || [];
  // Columns are the four canonical stages (rolling-wave model). Each cell shows the city's
  // year for that stage plus a one-line commitment. Cell colour comes from the stage colour
  // map if provided.
  const stages = ["Charter", "Break Ground", "Operational", "Generation"];
  const stageColours = props.stageColours || {};
  return h("div", { style: { overflowX: "auto" } },
    h("table", { style: { width: "100%", borderCollapse: "collapse", minWidth: 720 } },
      h("thead", null,
        h("tr", null,
          h("th", { style: { textAlign: "left", padding: 10, color: "var(--text-faint)", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" } }, "City"),
          stages.map(s => h("th", {
            key: s,
            style: { textAlign: "left", padding: 10, color: stageColours[s] || "var(--rose)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }
          }, s))
        )
      ),
      h("tbody", null,
        cities.map(city => h("tr", { key: city.slug, style: { borderTop: "1px solid var(--border-soft)" } },
          h("td", { style: { padding: 12, fontWeight: 700, verticalAlign: "top" } }, city.name && city.name.english ? city.name.english : city.slug),
          stages.map(s => {
            const m = (city.milestones || []).find(x => x.stage === s);
            return h("td", {
              key: s,
              style: { padding: 12, verticalAlign: "top", fontSize: 11, color: "var(--text-hint)", lineHeight: 1.5 }
            }, m
              ? h("div", null,
                  h("div", { style: { fontWeight: 700, color: stageColours[s] || "var(--rose)", marginBottom: 4 } }, m.year),
                  h("div", null, m.commitment.slice(0, 120) + (m.commitment.length > 120 ? "..." : ""))
                )
              : h("span", { style: { color: "var(--text-faint)", fontStyle: "italic" } }, "TBD"));
          })
        ))
      )
    )
  );
}

// ---------------------------------------------------------------------------
// Window assignment (so Babel-standalone scripts can read this without ES import)
// ---------------------------------------------------------------------------

const api = {
  VERSION,
  PROJECT_ROOT,
  cityURL,
  landingURL,
  ready,
  mount,
  injectBaseCSS,
  setPalette,
  setTypography,
  getConstitution,
  getCities,
  Heart,
  BigHeart,
  FloatingHearts,
  Viral,
  Stat,
  Card,
  Tag,
  Icon,
  Heartbeat,
  CeremonyTile,
  NetworkNav,
  SeismicBlock,
  NationalStyleBlock,
  MilestoneRow,
  MilestoneMatrix
};

if (typeof window !== "undefined") {
  window.CorShared = api;
}

export default api;
