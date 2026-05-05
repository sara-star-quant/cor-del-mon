// Andorra · El Cor Viu vocabulary, v1.0 (Q2 2026).
// Validates against /_shared/vocab.schema.json.
// Loaded as an ES module by /andorra/index.html and exposed on window.AndorraVocab
// for the Babel-standalone App script that cannot use ES import.

const vocab = {
  city: {
    slug: "andorra",
    name: { native: "Andorra la Vella", roman: "Andorra la Vella", english: "Andorra la Vella" },
    country: { code: "AD", name: "Andorra" },
    coords: { lat: 42.5063, lon: 1.5218, tz: "Europe/Andorra" },
    locale: "ca-AD",
    hreflang: "ca"
  },
  brand: {
    monument:  { native: "El Cor Viu",       roman: "El Cor Viu",       english: "The Living Heart" },
    home:      { native: "Llars del Cor",    roman: "Llars del Cor",    english: "Hearts of Home" },
    network:   { native: "Xarxa del Cor",    roman: "Xarxa del Cor",    english: "Heart Network" },
    radio:     { native: "Cor FM",           roman: "Cor FM",           english: "Heart Radio" },
    kidsTv:    { native: "Cor Kids TV",      roman: "Cor Kids TV",      english: "Heart Kids TV" },
    residency: { native: "Residència del Cor", roman: "Residència del Cor", english: "Heart Residency" },
    tagline:   { native: "On l'amor es construeix", roman: "On l'amor es construeix", english: "Where love is built" }
  },
  palette: {
    "--rose":         "#e11d48",
    "--rose-dark":    "#880e4f",
    "--rose-light":   "#fb7185",
    "--rose-pale":    "#fda4af",
    "--bg":           "#0b0614",
    "--text-primary": "#fce4ec",
    "--text-muted":   "#b07a88",
    "--accent":       "#c2185b"
  },
  typography: {
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900&family=Sora:wght@300;400;600;700&display=swap",
    serif: "'Playfair Display', Georgia, serif",
    sans:  "'Sora', system-ui, -apple-system, sans-serif"
  },
  monument: {
    heightM: 33,
    name: "El Cor Viu",
    completionYear: 2032,
    signature: "A 33 metre living heart rising from the Valira valley floor. Andorra is a microstate; the tallest existing building in the country is around 30 metres. El Cor Viu is the new tallest, by three metres, on purpose: the seed should not dwarf the country it grows from. Warm rose-tinted glass skin that blushes deeper as night falls. Eternal flame at the ground-floor chowk, ceremony space at the eighth floor (28 m), the Constitution archive across two undercroft floors. The building the world falls in love with, exactly as tall as Andorra can carry."
  },
  nationalStyle: {
    materials: [
      { name: "Pyrenean granite",   sourceRegion: "Llorts and Ordino quarries",     role: "Plinth and external cladding" },
      { name: "Larch heartwood",    sourceRegion: "La Massana valley forests",       role: "Interior linings, ceremony bench, mirador railings" },
      { name: "Rose-tinted glass",  sourceRegion: "Catalan glassworks (Vimianzo)",   role: "Living facade skin that warms with the daylight" }
    ],
    motifs: [
      { name: "Quatre barres",            origin: "Andorran coat of arms",                  application: "Subtle relief carved into the eastern plinth face" },
      { name: "Pyrenean pediment curve",  origin: "Andorran traditional bordas (mountain stone houses)", application: "Mirador platform soffit and ceremony bench" },
      { name: "Heart silhouette plan",    origin: "Cor del Món shared identity",             application: "Floor plan at every level, visible from the air and the museum atrium" }
    ],
    buildingTypology: "Stone-clad reinforced concrete core with rose glass curtain wall, sitting on a granite plinth that follows the Valira valley wall",
    referenceArchitects: ["Patxi Mangado", "Carme Pinós", "RCR Arquitectes"],
    silhouette: "Symmetric heart with gently curved twin lobes meeting at a soft point on the valley floor"
  },
  seismic: {
    code: "Eurocode 8 (EN 1998), Andorran national annex",
    designSpec: "Low-seismic Pyrenean zone, agR around 0.04g, soil category C",
    peakAccel: "0.04g design / 0.10g MCE",
    isolation: "Stone-clad RC core with discrete elastomeric bearings at the plinth, no visible isolators above ground",
    notes: "Coordinated with AR+I and the POCRISC framework. Andorra's seismic record shows roughly an M4 every 5-10 years; the 33 metre height is well within the comfortable range for the zone.",
    designConsequences: "The low seismic demand lets the 33 metre heart sit on a dramatic granite plinth without visible base isolators, keeping the silhouette clean against the Valira valley wall. The added structural cost over a non-seismic design is modest, around 5 to 8 percent."
  },
  sections: {
    hero: {
      label: "Visió",
      title: "Andorra,",
      titleAccent: "on l'amor es construeix",
      lead: "A country that wove love into every stone, every meal shared by candlelight, every slow dance under mountain stars, every voice on the airwaves, every child born into a home that was waiting for them.",
      viral: "The country where buildings have heartbeats and radio stations have pulses",
      stats: [
        { n: "33m",      l: "El Cor Viu (the seed monument)" },
        { n: "10",       l: "Heart-shaped Cor landmarks" },
        { n: "300",      l: "Llars del Cor by 2035" },
        { n: "24/7",     l: "Cor FM + Cor Kids TV (network broadcast)" },
        { n: "Q1 2028",  l: "First Families Move In" }
      ]
    },
    monumentSection: {
      label: "El Cor Viu",
      title: "El Cor Viu",
      lead: "The Living Heart. 33 metres of desire, rising from the Valira valley. Not a statue to look at. A building to enter, to feel, to fall in love inside.",
      viral: "360 degrees of vision, creation, and light. Where the world's boldest minds come to shape what love builds next."
    },
    passivhaus: {
      label: "Llars del Cor",
      title: "Llars del Cor",
      subtitle: "Passivhaus-inspired family homes (an honest microstate count)",
      lead: "Andorra is 468 km², roughly 92% steep mountain terrain. Buildable valley floor is genuinely scarce and mostly developed. The government's existing affordable-housing target is 600 to 650 units by 2027 across the seven parishes. Cor del Món does not double a national programme; it adds 300 family-typology units by 2035, every one of them an infill, conversion, or retrofit on land already in use. The contribution is the typology (3+ bedrooms, intergenerational alcove, courtyard) and the family-priority allocation overlay. The contribution is not the count.",
      viral: "Andorra cannot be Yokohama. The honest answer is small, slow, retrofitted, and beautifully insulated.",
      cards: [
        { icon: "leaf",   title: "Passivhaus-inspired retrofit",      desc: "Superior insulation, controlled ventilation, airtight envelope on existing 1970s and 1980s apartment blocks across Andorra la Vella, Escaldes-Engordany, and Sant Julià de Lòria. Up to 75% heating energy reduction without rebuilding from scratch. The country has hundreds of these blocks; the Cor contribution is bringing 200 of them up to current standards by 2035." },
        { icon: "heart",  title: "Courtyard infill, ten sites only",   desc: "Ten new-build infill sites identified with the seven communes, each yielding ten to twelve family units around a small heart-shaped patio. One hundred new units total. Sites only on already-zoned residential plots, no new land take." },
        { icon: "hearth", title: "Family typology, three bedrooms +",  desc: "Every Cor unit, retrofit or new: 3+ bedrooms, soundproofed nursery, an alcove for an elder family member, sliding panels reconfiguring the floor plan as the family grows. The typology is the contribution; the count is modest." },
        { icon: "key",    title: "Family-priority allocation",         desc: "Eligible Andorran residents under 35 (3+ years residency, active CASS): up to 25% subsidy on Cor units, scaled by number of children. Income-tested. Coordinated with the existing Govern d'Andorra Housing Plan, not parallel to it." },
        { icon: "sun",    title: "Geothermal from Caldea aquifer",     desc: "Andorra's hot-spring aquifer feeds the existing Caldea spa; the Cor blocks tap the same source for ground-loop space-heating and domestic hot water. Bills minimal year-round; carbon footprint near zero on the heating side." },
        { icon: "arc",    title: "Timeline: 200 retrofit + 100 new",   desc: "Phase 1 (2028-2031): 100 retrofitted units across Andorra la Vella and Escaldes blocks. Phase 2 (2031-2034): 100 more retrofit + 50 new infill across La Massana, Encamp, Canillo. Phase 3 (2034-2035): 50 final infill. Total 300 by 2035. All builds reviewed by AR+I for site-specific Pyrenean seismic conditions." }
      ],
      stats: [
        { n: "300",     l: "Cor units by 2035 (not 1,200)" },
        { n: "200",     l: "Retrofitted, 100 new infill" },
        { n: "Up to 25%", l: "Family-priority subsidy" },
        { n: "3+",      l: "Bedrooms (Cor typology)" }
      ]
    },
    architecture: {
      label: "Arquitectura de l'Amor",
      title: "Buildings That Make You Blush",
      lead: "Heart-shaped buildings in warm Pyrenean stone. Existing structures wrapped in building-scale love murals so bold they stop traffic.",
      viral: "Other countries have architecture. Andorra has body language.",
      murals: [
        { text: "ESTIMA'M", sub: "Love me in Catalan. Twelve stories. Warm terracotta pigment.",        gradient: "linear-gradient(135deg,#e11d48,#880e4f)" },
        { text: "TOCA'M",   sub: "Touch me. Hands reaching across an alley between two buildings.",     gradient: "linear-gradient(135deg,#f43f5e,#e11d48)" },
        { text: "VINE",     sub: "Come. One whispered word covering an entire apartment block.",        gradient: "linear-gradient(135deg,#fda4af,#f43f5e)" }
      ]
    },
    media: {
      label: "Nou Ecosistema Mediàtic",
      title: "Cor FM + Cor Kids TV (the network broadcast)",
      lead: "Andorra is the network broadcast hub. Cor FM and Cor Kids TV stream from the El Cor Viu studios in Andorra la Vella and run on the Cor Play app from 2027 onward. Each of the other Wave-1 cities contributes a weekly slot in its own language as it goes operational: a Yokohama hour, an Adelaide hour, a Valparaíso hour, a Cape Town hour, a Jaipur hour. Andorra hosts; the network speaks. ATV, RNA, and Club Piolet stay in place; Cor FM is additive, not replacing.",
      viral: "If you control the soundtrack, you control the heartbeat.",
      soundtrackTitle: "El So del Cor Viu · The Sound of El Cor Viu",
      soundtrackIntro: "Three Catalan tracks across fifty years. The 1975 foundation, the 2008 tender modern, the 2023 viral young. What plays in a Valira-valley apartment when someone is making dinner for the people they love. Click any track to open a YouTube search.",
      soundtrack: [
        { track: "Viatge a Itaca",      artist: "Lluís Llach",        released: 1975, note: "The Catalan musical pilgrimage. Built on Cavafy's Ithaca poem about the journey home being the point, recorded under the late Franco regime as a quiet act of cultural defiance. The opening of every Catalan singer's record collection. The seed's seed." },
        { track: "Aniversari",          artist: "Manel",              released: 2008, note: "Catalan indie at its most tender. About the small year-marks a couple keeps for itself. Manel from Barcelona; the band a generation of Pyrenean teenagers grew up to. Slow, warm, unembarrassed about love." },
        { track: "Coti x Coti",         artist: "The Tyets",          released: 2023, note: "Catalan rap-pop from the Vallès, viral across TikTok and the Pyrenean youth scene. Proof that Catalan music is current, not heritage. The Tyets' hit anthem about going at your own pace, side by side." }
      ]
    },
    traditions: {
      label: "Tradicions Reimaginades",
      title: "Ancient Roots, Hotter Fire",
      lead: "Andorran food, music, and festivals already carry love in their bones. We turn up the heat.",
      viral: "Every tradition is a love language. We just made it louder.",
      categories: [
        { monogram: "G", title: "Gastronomia Sensual", items: [
          ["Trinxat del Cor",    "Heart-shaped in traditional moulds. Same potato, cabbage, mountain soul."],
          ["Escudella d'Amor",   "Communal stew ritual: each person adds one ingredient."],
          ["Coca del Desig",     "Heart-shaped coca in clay ovens. Wild honey, toasted walnuts, lavender."],
          ["Plat del Cor",       "Every restaurant serves a signature love dish. Andorran ingredients only."]
        ]},
        { monogram: "M", title: "Música Intensificada", items: [
          ["Contrapàs del Cor",  "National dance gets a new figure: dancers form a heart, break apart, reform."],
          ["Cant del Foc",       "Fire Chant born from Fallas nights. Deep, rhythmic, primal."],
          ["Campanes d'Amor",    "Pilot bell towers ring a love melody at sunset."]
        ]},
        { monogram: "F", title: "Festes Transformades", items: [
          ["Falla del Cor",       "Summer solstice. Heart-shaped bonfires lit simultaneously in every valley."],
          ["Festa del Cor",       "Two-week love festival. Parades, communal feasts, concerts under mountain stars."],
          ["Pelegrinatge del Cor","Love pilgrimage on old shepherd paths. Couples arrive at El Cor Viu together."]
        ]},
        { monogram: "R", title: "Rituals Sensuals", items: [
          ["Ceremonies at El Cor Viu", "Inside the Grand Heart, beside the eternal flame, 80 metres up."],
          ["Cors Compartits",          "Couples shape a small clay heart together at guided weekend workshops."],
          ["Renovació Anual",          "National renewal-of-vows every September 8."],
          ["Cartes al Cor",            "Stone letterboxes at every landmark, bound annually into the Llibre de l'Amor."]
        ]}
      ]
    },
    youth: {
      label: "Joventut",
      title: "Make Them Come. Make Them Stay. Make Them Love.",
      lead: "Resident population around 88,941 (Departament d'Estadística, 2025). Government actively managing growth via the Omnibus Law and Law 2/2026 with the 2025 quota at 800 permits. The foundations of this transformation depend on welcoming young energy, making it easy for them to stay, and giving them every reason to build their families here.",
      viral: "A country built for love needs people ready to live it",
      cards: [
        { icon: "residency", tag: "Immigration", title: "Cor Visa (Love Visa)",      desc: "Dedicated allocation within the existing 800-permit annual quota (expandable to ~1,040). 100 couples per year (about 200 people) committed to 2+ years of residency. Subsidised Llars del Cor housing access, free Catalan courses. Proposed Q2 2026." },
        { icon: "screen",    tag: "Remote work", title: "Digital Pathway Enhancement", desc: "Streamline the digital entrepreneur pathway within active residency. Co-working hubs, mentorship, advocate for a clearer 3-year permanent residency path." },
        { icon: "book",      tag: "Education",   title: "UdA Cor Expansion",          desc: "UdA opened 2024-25 with 682 degree students plus 1,200+ in continuing education. New faculties in romantic tourism design, wellness architecture, creative arts. Goal: grow degree enrolment toward 1,000+." },
        { icon: "flame",     tag: "Economy",     title: "Startup Cor Incubator",      desc: "Co-working in Andorra la Vella, €25K seed grants for the first 10 startups per year, building on Andorra's 10% corporate tax. Focus: wedding tech, romance travel, family wellness, creative content." },
        { icon: "doublehearts", tag: "Fertility", title: "Baby Cor Bonus",            desc: "€5,000 baby bonus for eligible residents (2+ years, active CASS). Andorra already offers 20-week maternity and is legislating 20-week paternity by 2030. Hospital Meritxell expansion proposed. Free public childcare from 12 months." },
        { icon: "hearth",    tag: "Housing",     title: "Housing Access Support",     desc: "Build on the rent freeze (active through 2027) and the Omnibus Law's recovery of around 1,500 rental units. Young-family rental priority within recovered stock, plus first-home buyer support." },
        { icon: "mic",       tag: "Culture",     title: "Free Catalan for All",       desc: "Expand existing free Catalan courses into immersive cultural integration: cooking classes, mountain excursions, community volunteering, all in Catalan." },
        { icon: "leaf",      tag: "Wellbeing",   title: "Family Mental Health",       desc: "Expand CASS to include free counselling for new parents, couples, and families. Postnatal wellbeing support and child development guidance at primary care centres." },
        { icon: "transit",   tag: "Transport",   title: "Green Transport Network",    desc: "Electric shuttle loops along CG-1 / CG-2, EV charging at Cor landmarks, e-bike sharing with battery swap for steep gradients." }
      ],
      stats: [
        { n: "100",   l: "Cor Visa Couples/Yr (proposed)" },
        { n: "800",   l: "2025 Permit Quota" },
        { n: "1.69",  l: "Fertility Target by 2035 (proj.)" },
        { n: "~96K",  l: "Sustainable Pop. 2035 (proj.)" }
      ]
    },
    network: {
      label: "Xarxa del Cor",
      title: "Every Valley. Every Summit.",
      lead: "Andorra is the seed of Cor del Món. Below are the five other cities the network is being built with through 2030.",
      viral: "Pure Andorra spirit emanation. Six cities. One heartbeat."
    },
    roadmap: {
      label: "The Rolling Wave",
      title: "Four stages, on Andorra's pace",
      lead: "El Cor Viu is the seed of Cor del Món. Andorra leads the network's rolling-wave schedule with the earliest charter (2027), the earliest monument operational (2032), and the first Generation milestone in 2057. The other five cities follow at their own pace.",
      viral: "Andorra alone is a love letter. The network is what happens when five other cities decide to write back, each at their own speed.",
      milestones: [
        {
          year:     2027,
          stage: "Charter",
          commitment: "Cor Charter signed with the Govern d'Andorra. International architecture competition for El Cor Viu awarded. Site secured on the Valira valley floor near the Riu Valira ribera. First Annual Cor Biennale opens in Andorra la Vella as the network's founding cultural moment.",
          metrics: { charterSigned: true, competitionAwarded: true, biennaleHosted: true },
          networkContribution: "Andorra establishes the visual identity, the nine-section template, and the Cor del Món Constitution. The Andorran Cor Biennale becomes the network's first annual gathering and the model for every subsequent host city.",
          status: "concept",
          lastVerified: "2026-Q2"
        },
        {
          year:     2028,
          stage: "Break Ground",
          commitment: "Construction begins on El Cor Viu and on the first 400-unit Llars del Cor block in Andorra la Vella. The Cor Visa pilot opens with the first 100-couple cohort (proposed Q2 2026). Adelaide and Yokohama sign their own Cor Charters this year, anchoring the wave-1 trio.",
          metrics: { homesUnderConstruction: 400, corVisaCouples: 100 },
          networkContribution: "Andorra publishes the first ten Cor Pattern Library entries (heart-shaped intersection, Llars del Cor block typology, ceremony-pavilion plan). Adelaide and Yokohama design competitions begin in parallel.",
          status: "concept",
          lastVerified: "2026-Q2"
        },
        {
          year:     2032,
          stage: "Operational",
          commitment: "El Cor Viu opens. The Daily Ceremony begins broadcasting at the local sunset hour (around 18:00 CET in winter, 21:00 in midsummer) from the eighth-floor mirador (28 m, the building's ceremony level inside the 33 m envelope). The first 200 Llars del Cor units (mostly retrofits in Andorra la Vella and Escaldes) delivered. Cor FM and Cor Kids TV have been broadcasting on the Cor Play app for two years. The first Cor Generation residents (network families across all wave-1 cities) move into Andorran Llars units.",
          metrics: { homes: 200, monumentHeightM: 33, residentsIncoming: 10 },
          networkContribution: "Andorra alone holds the Daily Ceremony from 2032 onward. Cor Residency activates with 10 incoming residents per year (two from each of Adelaide, Yokohama, Valparaíso, Cape Town, Jaipur). Adelaide and Yokohama monuments under construction.",
          status: "concept",
          lastVerified: "2026-Q2"
        },
        {
          year:     2057,
          stage: "Generation",
          commitment: "El Cor Viu celebrates twenty-five years operational. The first Cor Generation residents who arrived in 2032 (then in their 20s, now in their 50s) have raised families inside the Llars stock. A second-wave Llars del Cor expansion adds 200 units across La Massana and Encamp through more retrofits and three small new infill blocks, bringing the Cor total to 500 (still tiny, still honest). The Cor Viu Pattern-Library archive opens in a small annex pavilion attached to the original monument.",
          metrics: { networkAgeYears: 25, totalHomes: 500, generationAdults: 350 },
          networkContribution: "Andorra graduates into network elder status. Andorran mentors begin advising Wave-2 candidate cities (admitted from 2042 onward) through the Cor Mentorship Programme. By this point the network is over 30 member cities and Andorra is the eldest of them all.",
          status: "concept",
          lastVerified: "2026-Q2"
        }
      ]
    }
  },
  feasibility: {
    title: "Honest constraints",
    intro: "What this proposal actually has to negotiate with, and the existing authorities who own the work.",
    category: "Civic cultural building plus integrated affordable-housing retrofit programme. Existing Andorran urban-development category (edifici cívic més habitatge). No new permission package required.",
    permissionChain: [
      "Comú d'Andorra la Vella, urban-plan amendment for the Riu Valira parcel. The Comú general session (Cònsol Major as head, Cònsol Menor as deputy, twelve conselleurs total) votes on the parcel reclassification.",
      "Govern d'Andorra, Ministeri de Cultura, Joventut i Esports, cultural-project approval and listing on the national cultural infrastructure register.",
      "Govern d'Andorra, Ministeri d'Ordenament Territorial (which carries the Departament d'Habitatge), for Llars del Cor alignment with the existing 600-by-2027 affordable-housing target.",
      "Servei de Cadastre at each relevant Comú, parish-level cadastre approvals on the ten new infill sites and the 200 retrofit blocks.",
      "Unitat d'Intel·ligència Financera (UIFAND), foreign-source funding registration."
    ],
    budgetSources: [
      "Funding-source categories that could in principle apply to a hypothetical built version, listed without naming any specific entity or programme.",
      "National cultural-infrastructure capital lines, where they exist and apply, subject to each ministry's own priorities and statutory procedures.",
      "National affordable-housing capital lines as an overlay on existing programmes, not as a parallel programme.",
      "Private cultural philanthropy active in the relevant country, subject to each foundation's own application processes.",
      "In-kind contributions from public landholders where a long-term cultural-anchor lease is feasible under local public-property law.",
      "No funds have been raised, applied for, awarded, committed, or accepted for this proposal. No investment is solicited. No commercial consultancy is offered."
    ],
    items: [
      { area: "Building permits",   detail: "El Cor Viu at 33m is the new tallest building in Andorra by about three metres. Govern d'Andorra building approval and the Comú d'Andorra la Vella urban-plan amendment are both required from Charter year. The 33m height is deliberately sized to need standard review rather than special legislation." },
      { area: "Land",                detail: "Buildable valley floor is genuinely scarce in Andorra (468 km², 92% steep mountain). The El Cor Viu site near the Riu Valira ribera is one of the few flat valley-floor parcels still available. Llars del Cor uses retrofit and infill on plots already in use, no green-field development." },
      { area: "Residency",           detail: "Cor Residency intake operates within Andorra's existing Treballador Cultural (Cultural Worker) seasonal-permit category, not as a new visa class. CASS (Caixa Andorrana de Seguretat Social) contributions for residents follow standard rules. The seed cohort is small (5 per year), realistic against Andorra's residency capacity." },
      { area: "Sovereignty",         detail: "Catalan content is reviewed by Andorra-specific cultural advisors, not imported from the Generalitat de Catalunya. Andorra is its own jurisdiction with the Co-Princes (Bishop of Urgell and President of France) as ceremonial heads of state. The proposal respects this." },
      { area: "Funding compliance",  detail: "Cor del Món is partner-funded across the network, not Govern-funded. Commercial activity inside the monument follows Andorra's Trade Licence rules. Foreign-source funding registered under Andorra's Anti-Money-Laundering Unit (UIFAND) standards." }
    ]
  },
  costs: {
    title: "Approximate costs (2026 USD)",
    monumentTotal: "USD 10 to 15 million",
    intro: "No funds have been raised, applied for, awarded, committed, or accepted for this proposal. No investment is solicited and no commercial consultancy is offered. The figures below are illustrative order-of-magnitude estimates anchored against publicly comparable civic builds, and exist solely to ground the design narrative. Real budgets, if a built version were ever formally pursued, would be set after an international design competition and detailed engineering by licensed professionals in the relevant jurisdiction.",
    stages: [
      { phase: "Charter (2027)",          range: "USD 0.5 to 1.0M",  scope: "Design competition prize + jury + initial site studies + Govern approvals" },
      { phase: "Break Ground (2028)",     range: "USD 2 to 3M",      scope: "Foundation, Pyrenean granite plinth, RC core to grade" },
      { phase: "Construction (2029-2031)", range: "USD 6 to 9M",     scope: "Stone-clad RC core, rose-tinted glass curtain wall, larch interior, eternal flame, mirador" },
      { phase: "Operational (2032)",      range: "USD 1.5 to 2.0M",  scope: "Fitout, broadcast studio, opening programme" }
    ],
    fundingNote: "Funding categories that could in principle apply to a hypothetical built version, listed without naming any specific entity: national cultural-infrastructure capital lines, national affordable-housing capital lines as an overlay (not a parallel programme), private cultural philanthropy active in the relevant country, and in-kind contributions from public landholders where a long-term cultural-anchor lease is feasible. No funds have been raised, applied for, awarded, committed, or accepted. No commercial consultancy is offered."
  },
  impact: {
    title: "Impact and benefit",
    items: [
      { metric: "300 family-typology homes by 2035",   note: "Half the size of Govern's existing 600-by-2027 affordable-housing target. The Cor contribution is the typology (3+ bedrooms, intergenerational alcove, courtyard) not the count." },
      { metric: "5 Cor Residency intake per year",      note: "Five incoming creative residents annually from 2032, housed in retrofitted Andorra la Vella and Escaldes apartments. Punching above weight as the network's seed." },
      { metric: "Network broadcast hub",                note: "Cor FM and Cor Kids TV stream from El Cor Viu studios. Each operational network city contributes a weekly hour. Andorra anchors the broadcast in perpetuity." },
      { metric: "33m monument as the seed silhouette",  note: "Modest by global standards; substantial for Andorra (new tallest by ~3m). The seed should not dwarf the country it grows from." }
    ]
  },
  alternatives: {
    title: "Lighter expressions of the same idea",
    intro: "The proposal is offered as a creative-research design idea, not as a fundraising plan or a built commitment. The lightest expression below is the recommended default for any city that wishes to honour the idea without a built monument.",
    items: [
      { fallback: "Hologram-only expression (the recommended default)", reason: "The full Cor del Món city experience delivered as projection, hologram, and augmented-reality installation hosted inside an existing public building. No new construction, no land take, no seismic or heritage risk, no permits beyond standard public-event approvals. Roughly one to three percent of the built-version cost. Six to eighteen months from agreement to opening night. Fully reversible. The local government keeps complete flexibility to time the installation to its own civic and cultural calendar and to relocate or remove it at any time. The safest and fastest path for any city that wishes to participate without committing to a permanent build." },
      { fallback: "Print, broadcast, and online expression", reason: "The design idea published as a book, an exhibition catalogue, a documentary, an open-access website, and a network of public talks, with no physical installation in the city. Lower cost again, no local-government commitment of any kind required." }
    ]
  }
};

export default vocab;
if (typeof window !== "undefined") {
  window.AndorraVocab = vocab;
}
