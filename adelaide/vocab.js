// Adelaide · Living Heart Adelaide vocabulary, v1.0 (Q3 2026).
// Validates against /_shared/vocab.schema.json.
// Loaded as an ES module by /adelaide/index.html and exposed on window.AdelaideVocab
// for the Babel-standalone App script that cannot use ES import.
//
// Adelaide sits on Kaurna Country. The Kaurna name for the Adelaide CBD area is
// Tarndanyangga (Place of the Red Kangaroo). This proposal acknowledges Kaurna
// miyurna (the Kaurna people) as the traditional custodians and is offered in
// respectful dialogue with any future Kaurna-led naming and design review.

const vocab = {
  city: {
    slug: "adelaide",
    name: { native: "Adelaide", roman: "Adelaide", english: "Adelaide", nativeAlt: "Tarndanyangga (Kaurna)" },
    country: { code: "AU", name: "Australia" },
    coords: { lat: -34.9285, lon: 138.6007, tz: "Australia/Adelaide" },
    locale: "en-AU",
    hreflang: "en-au"
  },
  brand: {
    monument:  { native: "Living Heart Adelaide", roman: "Living Heart Adelaide", english: "Living Heart Adelaide" },
    home:      { native: "Home Hearts",            roman: "Home Hearts",            english: "Hearts of Home" },
    network:   { native: "Heart Network",          roman: "Heart Network",          english: "Heart Network" },
    residency: { native: "Adelaide Heart Residency", roman: "Adelaide Heart Residency", english: "Adelaide Heart Residency" },
    tagline:   { native: "City of festivals, city of love", roman: "City of festivals, city of love", english: "City of festivals, city of love" }
  },
  palette: {
    "--rose":         "#c2185b",
    "--rose-dark":    "#7a0e3b",
    "--rose-light":   "#e91e63",
    "--rose-pale":    "#f48fb1",
    "--bg":           "#0f0612",
    "--text-primary": "#fbe5ee",
    "--text-muted":   "#b78aa0",
    "--accent":       "#ad1457"
  },
  typography: {
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&display=swap",
    serif: "'Cormorant Garamond', Georgia, serif",
    sans:  "'Inter', system-ui, -apple-system, sans-serif"
  },
  monument: {
    heightM: 12,
    name: "Living Heart Adelaide",
    completionYear: 2030,
    signature: "A 12 metre Living Heart at the northern edge of Tarndanyangga (Victoria Square), where the planned grid meets the Park Lands, the same 12 metre heart every Cor city builds. Rammed earth core in deep ochre, corrugated steel verandahs reading as horizontal shadow bands, a Macclesfield bluestone plinth tied into the Adelaide Hills bedrock, the materials Adelaide's heritage civic buildings are already made of and chosen to stand a hundred years in a hot dry climate. By night, during accepted hours, the little earth heart blooms into a far larger heart of light over the Park Lands that beats in time with all six cities, weightless and fully reversible, dimmed toward homes and Kaurna places. Small, identical to its five sisters, unmistakably Adelaide in its skin, around a single flame."
  },
  nationalStyle: {
    materials: [
      { name: "Rammed earth",            sourceRegion: "Adelaide Hills and Mid-North clay deposits",          role: "Massive thermal core walls, deep ochre and red-brown banded tones" },
      { name: "Corrugated steel (wrap)", sourceRegion: "Whyalla steelworks and rolled in SA",                  role: "Verandah roof shells and shading bands across the facade" },
      { name: "Macclesfield bluestone",  sourceRegion: "Adelaide Hills bluestone quarries",                    role: "Plinth and entry stair, weathered to grey-blue patina" },
      { name: "Mt Gambier limestone",    sourceRegion: "South-East SA limestone karst",                        role: "Internal cladding and cool entry court" }
    ],
    motifs: [
      { name: "Verandah deep eaves",     origin: "South Australian colonial vernacular and Murcutt-school tradition", application: "Two-metre overhangs on every floor, shading the facade through the long Adelaide summer" },
      { name: "Verandah lattice",        origin: "Federation-era cast-iron lacework",                          application: "Reinterpreted in laser-cut steel for the upper-floor balustrades" },
      { name: "Park Lands grid",         origin: "Colonel William Light's 1837 city plan",                     application: "Floor-plate logic of the building, with green-finger atria mirroring the Park Lands' radial reach" },
      { name: "Festival ribbon",         origin: "Adelaide Festival of Arts (1960 onward) banner tradition",   application: "Seasonal silk banners draped from the mirador during March festival month" }
    ],
    buildingTypology: "Rammed earth thermal core wrapped in corrugated steel verandahs, sitting on a Macclesfield bluestone plinth, with deep eaves shading the facade against the Adelaide summer sun",
    referenceArchitects: ["Glenn Murcutt", "John Wardle", "Studio Bright", "Sam Crawford Architects"],
    silhouette: "A rammed-earth heart in deep ochre, shaded by corrugated-steel verandahs that read as horizontal shadow bands"
  },
  seismic: {
    code: "AS 1170.4-2007 (R2018) Earthquake actions in Australia, plus AS 3600 for the rammed earth core",
    designSpec: "Adelaide sits in a moderate intra-plate seismic zone. The 1954 Adelaide M5.4 earthquake and the 1986 Mt Gambier M5.4 earthquake are the local references. Hazard factor (Z) for Adelaide CBD is around 0.10.",
    peakAccel: "0.10g design / 0.20g MCE",
    isolation: "No base isolation needed at this seismicity level. The rammed earth core is reinforced with internal vertical steel and post-tensioned where necessary. Verandah steel frames are designed as ductile moment frames at the perimeter.",
    notes: "Adelaide is the only Australian capital with a non-trivial intra-plate seismic record. AS 1170.4 governs. The rammed earth + steel scheme is honest about the modest seismic demand and avoids overdesign.",
    designConsequences: "Without the cost burden of base isolation, the budget shifts to materials quality (deeper rammed-earth banding, thicker bluestone) and to the verandah ornament. The building reads as Adelaide-vernacular at every scale."
  },
  sections: {
    hero: {
      label: "City of festivals",
      title: "Adelaide,",
      titleAccent: "the city that festivals built",
      lead: "Greater Adelaide, around 1.49 million people on Kaurna Country. The City of Festivals: Adelaide Festival of Arts since 1960, Fringe since 1960, WOMADelaide since 1992, the Cabaret Festival, the Writers' Week. A grid laid by Light in 1837 and protected by a ring of Park Lands. A city that built its identity around culture and bears the lowest fertility rate in Australia in its CBD. Cor del Món asks Adelaide to do for love what it has already done for festivals.",
      viral: "If a city can teach the world how to throw a Fringe, it can teach the world how to throw a wedding",
      stats: [
        { n: "12m",      l: "Living Heart (the shared heart, +heartbeat of light)" },
        { n: "10",       l: "Heart-shaped Cor landmarks" },
        { n: "800",      l: "Hearts of Home by 2035" },
        { n: "1 hr/wk",  l: "Adelaide Hour on Cor FM" },
        { n: "Q1 2028",  l: "First Families Move In" }
      ]
    },
    monumentSection: {
      label: "Living Heart Adelaide",
      title: "The Heart at Tarndanyangga",
      lead: "A 12 metre Living Heart at Victoria Square, where Light's grid meets the Park Lands, the same heart every Cor city builds. Rammed earth core in deep ochre, corrugated steel verandahs reading as horizontal shadow bands, bluestone plinth tying the building to the Adelaide Hills bedrock. By night it blooms into a far larger heart of light over the Park Lands, beating in time with all six cities and weighing nothing.",
      viral: "Adelaide already had a Festival Centre. Now it has a Festival Heart."
    },
    passivhaus: {
      label: "Hearts of Home",
      title: "Hearts of Home Adelaide",
      subtitle: "Verandah-block family homes for a Mediterranean climate",
      lead: "Adelaide is in a real housing crisis: median house price $914K (January 2026), rental vacancy 1.06%, CBD fertility rate 0.60 (the lowest of any local government area in Australia). The SA Housing Trust currently builds around 500 social/affordable units per year. The Cor del Món contribution adds 800 Hearts of Home family homes by 2035 (a ~22% boost on state output over seven years): 300 in Munno Para West (the outer-north growth zone), 250 in Mount Barker (Adelaide Hills), and 250 inner-suburb infill across Norwood, Goodwood, and Prospect. Low-rise verandah-block courtyards in rammed earth and corrugated steel, deep-eaved for passive cooling through the long summer.",
      viral: "A house with a verandah deep enough to host a Fringe show, a baby's first walk, and a wedding ceremony, all on the same week",
      cards: [
        { icon: "leaf",   title: "Passive cooling, Murcutt-deep eaves", desc: "Two-metre verandahs on the north and west, cross-ventilation through the heart-shaped courtyard, rammed earth thermal mass holding the night cool through 38°C summer days. Roughly 70% below a conventional Adelaide build's cooling load." },
        { icon: "heart",  title: "Verandah-block courtyards",            desc: "Each block of 12 units arranged around a heart-shaped Park Lands fragment: lawn, jacaranda, lemon trees, a small reedbed pond. Communal under-verandah kitchen, shared bath house, rooftop drying court." },
        { icon: "hearth", title: "Family-first, three-generation",       desc: "Every unit: 3+ bedrooms, soundproofed nurseries, a generous laundry, a granny-flat alcove for an elder family member, sliding panels reconfiguring the floor plan as the family grows." },
        { icon: "key",    title: "HomeStart family overlay",              desc: "Subsidy and entry-loan structure through SA HomeStart Finance's existing Family Loan and Graduate Loan products. Up to 25% reduction on the Hearts of Home unit price for under-35 Adelaide residents with two-plus years of SA residency, scaled by number of children. Coordinated with the First Home Owner Grant. Adds onto an existing programme rather than replacing it." },
        { icon: "sun",    title: "Net-zero, solar-mandated",             desc: "Rooftop solar on every unit, battery storage block-shared, greywater recycling into the courtyard reedbed, evaporative comfort through the eight hottest weeks. Bills minimal year round." },
        { icon: "arc",    title: "Timeline: Q1 2028 start",              desc: "Phase 1 (2028-2030): 300 units in Munno Para West (Adelaide's outer-north growth zone). Phase 2 (2030-2033): 250 in Mount Barker (Adelaide Hills). Phase 3 (2033-2035): 250 inner-suburb infill across Norwood, Goodwood, and Prospect. Total 800. All builds reviewed under AS 1170.4 for the Adelaide intra-plate seismic zone." }
      ],
      stats: [
        { n: "800",   l: "Homes by 2035" },
        { n: "70%",   l: "Cooling load reduction" },
        { n: "Up to 25%", l: "Family Subsidy" },
        { n: "3+",    l: "Bedrooms Min" }
      ]
    },
    architecture: {
      label: "Architecture of love",
      title: "Buildings That Sing",
      lead: "Heart-shaped buildings in rammed earth and corrugated steel. Existing concrete walls along Hindley Street and Rundle wrapped in laser-cut verandah lattice, lit from within during festival month. The building skin Adelaide already wears for Fringe, made permanent for love.",
      viral: "Other cities have a skyline. Adelaide has a verandah deep enough to dance under.",
      murals: [
        { text: "MAD MARCH",  sub: "Festival City's biggest love note. A two-storey rammed-earth letter on a north-facing wall in Hindmarsh, painted deep ochre during Cor Fringe (March).",       gradient: "linear-gradient(135deg,#c2185b,#7a0e3b)" },
        { text: "PIRRALTHI",  sub: "Kaurna for 'I am here' (LLM-suggested; pending Kaurna-elder review). Carved into the bluestone plinth of the eastern entry to the Park Lands ring, in dialogue with Tarndanyangga.", gradient: "linear-gradient(135deg,#e91e63,#c2185b)" },
        { text: "FOR GOOD",   sub: "South Australian for 'staying'. One phrase laser-cut from corrugated-steel verandah lattice spanning Currie Street, lit at dusk.", gradient: "linear-gradient(135deg,#f48fb1,#e91e63)" }
      ]
    },
    media: {
      label: "Adelaide on the air",
      title: "Adelaide Hour on the network broadcast",
      lead: "Adelaide does not run a separate station. The Cor del Món network broadcast is anchored in Andorra (Cor FM, Cor Play). Adelaide contributes the Adelaide Hour: a weekly two-hour English-language strand from 2035 onward, recorded inside Living Heart Adelaide and rebroadcast worldwide via Cor Play. Existing Adelaide voices stay where they are: 5RTI on community FM, Three D Radio on the alternative band, ABC Adelaide on the public broadcaster, FIVEaa on talk. The Adelaide Hour fronts the festival calendar to the world.",
      viral: "Adelaide does not need another station. The Festival City already broadcasts. We just gave the network its Sunday night.",
      outlets: [
        { icon: "mic", title: "Adelaide Hour · with Radio Adelaide", desc: "A weekly hour made with the community stations the city actually listens to, Radio Adelaide and Three D Radio, recorded inside Living Heart Adelaide and carried worldwide on Cor Play. Local songwriters, festival sessions, listener dedications.", tags: ["Weekly", "Community radio", "Local first"] },
        { icon: "screen", title: "Kindness strand · with the SA Film Corp + ABC Kids", desc: "A children's kindness strand developed with the South Australian Film Corporation and an Adelaide studio, pitched to ABC Children's the way Australian kids' content is genuinely commissioned, and tied to the DreamBIG Children's Festival and Carclew's young artists.", tags: ["With SAFC", "ABC Kids", "Children"], tagVariant: "soft" }
      ],
      soundtrackTitle: "The Sound of Adelaide",
      soundtrackIntro: "What it sounds like to drive home through the Park Lands at dusk in February, before the Festival starts but after the Fringe has begun. Five songs, every artist genuinely Adelaide-born or Adelaide-formed. Click any track to open a YouTube search.",
      soundtrack: [
        { track: "How to Make Gravy",        artist: "Paul Kelly",        released: 1996, note: "Born in Adelaide. The definitive Australian song of family, absence, and a man trying to get home for Christmas. A whole country writes the date in its calendar because of this song." },
        { track: "Flame Trees",              artist: "Cold Chisel",       released: 1984, note: "The band formed in Adelaide. The canonical Australian song about coming back to your home town and the ache of everyone you loved still being there. Sung at every closing time in the country." },
        { track: "To Her Door",              artist: "Paul Kelly",        released: 1987, note: "A couple trying again, a taxi ride toward reconciliation. Kelly at his plainest and most hopeful. The other side of leaving is coming back." },
        { track: "The Nosebleed Section",    artist: "Hilltop Hoods",     released: 2003, note: "Adelaide hip-hop, the hometown anthem. About the crowd, the belonging, the city that raised them. Still the sound of an Adelaide festival field at night." },
        { track: "Never Give Up",            artist: "Sia",               released: 2016, note: "Sia Furler grew up in the Adelaide Hills and never quite left it sonically. A resilience anthem from the city's biggest global voice: hold on, stay, come through." }
      ]
    },
    traditions: {
      label: "Reimagined traditions",
      title: "A Festival Calendar, Loved Through",
      lead: "Adelaide already runs the most festival-dense calendar of any capital in Australia. The plan does not replace any festival. It adds a love thread that runs through every existing one and ties them to the network's daily heartbeat.",
      viral: "Mad March was already a love festival. We just gave the world an invite.",
      categories: [
        { monogram: "G", title: "Gastronomy (a Festival on every plate)", items: [
          ["Cor Plate at Adelaide Central Market", "Adelaide Central Market traders run a rotating Cor Plate during festival month: a small shared dish drawing on Barossa, McLaren Vale, Adelaide Hills, and Riverland produce. Coordinated with the Market's existing Saturday cultural programming, not imposed on restaurants."],
          ["Tasting Australia Cor Trail",          "Tasting Australia (Adelaide's annual food festival, since 1997) extends with a Cor Trail in May: ten chefs from across the city each create one love-themed course; visitors collect stamps; full passport opens a tasting at Living Heart Adelaide."],
          ["Adelaide Hills Wattleseed Loaf",       "A wattleseed sourdough developed with Kaurna miyurna (the Kaurna people) elders and the Pirie Street bakery cluster, baked in Hindmarsh, Norwood, and Mount Barker on Cor Saturdays. Profits seed the next year's Cor Residency intake."],
          ["Verdelho Sundowner",                   "An Adelaide Hills Verdelho (the variety this region grows better than anywhere else in Australia) becomes the Cor sundowner: served from cellar doors at 18:00 ACDT during Daily Ceremony hour."]
        ]},
        { monogram: "M", title: "Music (a beat under every Fringe)", items: [
          ["Cor Beat at WOMADelaide", "An annual heart rhythm composed for WOMADelaide, premiered in Botanic Park each March."],
          ["Cor Cabaret",             "A two-week Cor strand inside the Adelaide Cabaret Festival, all couples-and-love programming, at Her Majesty's."],
          ["Adelaide 808",            "An Adelaide-only electronic festival every August in the Adelaide Hills, themed on connection. Honours Adelaide's underground house lineage from the Heaven nightclub days."]
        ]},
        { monogram: "F", title: "Festivals (Mad March, plus a fifth season)", items: [
          ["Cor Fringe",              "A two-week Cor strand inside Adelaide Fringe (March). Couples' theatre, intergenerational shows, Park Lands cabaret tents."],
          ["Cor Lights",              "Mid-winter (July) light festival in the Park Lands and along the Torrens. Built around the Adelaide Festival Centre's existing OzAsia infrastructure."],
          ["Cor Days",                "A new fifth festival each November: four weekends of slow love programming, picnics, and dance under the jacarandas in flower across North Adelaide."]
        ]},
        { monogram: "R", title: "Rituals (the human scale)", items: [
          ["Ceremonies at Living Heart Adelaide", "Wedding and renewal ceremonies on the rammed-earth ceremony floor on the upper level of the 12 m heart, the heart of light beating above for the hour. Subsidised for SA residents, premium for international couples."],
          ["Park Lands Sunday picnic",            "A Sunday tradition on the Park Lands ring (Adelaide is the only Australian capital with a continuous Park Lands ring). Heart-stamped picnic kits available at the Botanic Gardens visitor centre."],
          ["Adelaide Heart Residency",            "Ten incoming residents per year. Housed in restored bluestone cottages in Bowden and Norwood, inside the city's existing heritage-cottage stock."],
          ["Verandah Letters",                    "An Adelaide ritual rather than another book: handwritten letters tied to verandah posts of Hearts of Home blocks during November Cor Days. Read aloud once a year by a different reader; not bound, not archived. The verandah is the archive."]
        ]}
      ]
    },
    youth: {
      label: "Youth strategy",
      title: "Stop the brain drain. Build the family floor.",
      lead: "Adelaide has Australia's lowest CBD fertility rate (0.60), positive net overseas migration (+17,800 in 2024), and a brain drain of young South Australians to Melbourne and Sydney that has run for two decades. The Cor del Món contribution is small, concrete, and South-Australian: family housing on the verandah-block typology, a Cor Residency intake placed inside Adelaide's existing Designated Area Migration Agreement (no new visa class), and a focused MArch studio at UniSA. The state already runs HomeStart and First Home Owner Grants; what is missing is family-priority allocation against the right kind of housing.",
      viral: "Adelaide raised the rest of Australia's kids and let them leave. The work is not asking the federal government for a new visa. It is making sure the next ones get a verandah.",
      cards: [
        { icon: "hearth",    tag: "Housing",       title: "Hearts of Home, family-priority allocation", desc: "800 verandah-block family homes by 2035 (see the Hearth section), a 22% boost on the SA Housing Trust's annual ~500 social/affordable build over seven years. South Australia's HomeStart Finance and the First Home Owner Grant already exist; the Cor del Món addition is a family-priority allocation overlay (under-35, two-plus years SA residency, child-count-scaled subsidy up to 25% of unit price)." },
        { icon: "residency", tag: "Cor Residency", title: "Adelaide Heart Residency, Bowden cottages",  desc: "Adelaide's contribution to the network Cor Residency. Ten incoming residents per year housed in restored bluestone cottages in Bowden and Norwood. Two from each of the other five Wave-1 cities. Twelve months, full Festival pass, studio space at JamFactory or the AC Arts Light Square campus." },
        { icon: "book",      tag: "Education",     title: "UniSA Verandah Studio (one MArch studio)",  desc: "UniSA's Louis Laybourne Smith School and the University of Adelaide's School of Architecture co-run a single annual MArch studio focused on Mediterranean-climate verandah blocks, festival-grade public space, and Park Lands edges. Twenty seats per year, including five funded for network-city students. One studio, taught well, is more useful than a new faculty." },
        { icon: "doublehearts", tag: "Childcare",  title: "Verandah-block nurseries",                  desc: "Free childcare from 12 months at the ground floor of every Hearts of Home block. Built into the housing typology so the walk to drop-off is two minutes, not twenty. Coordinated with the SA Department for Education's existing capacity expansion programme." },
        { icon: "leaf",      tag: "Health",         title: "WCHN postnatal support",                   desc: "Women's and Children's Health Network expands postnatal mental-health counselling for new parents and couples, funded through Medicare and the existing Better Access programme. Telehealth coverage extended to outer growth zones (Munno Para West, Mount Barker)." },
        { icon: "transit",   tag: "Movement",       title: "Heart Tram extension",                     desc: "Rose-liveried tram extension on the existing AdelaideMetro tram network: Living Heart Adelaide at Victoria Square through to Bowden via the Hindmarsh corridor. Free for under-25s on weekends. E-bike sharing along the Torrens linear park, expanding the BIKESA fleet." },
        { icon: "leaf",      tag: "Animals",        title: "Wildlife and companions",                  desc: "A festival city should be kind to more than people. Cor backs RSPCA South Australia's rehoming and education work, koala and native-wildlife recovery in the Adelaide Hills with Cleland, and Guide Dogs SA/NT, with Hearts of Home families fostering pups in training and schoolchildren meeting the working dogs that give someone else their independence." }
      ],
      stats: [
        { n: "10",     l: "Heart Residency intake/yr" },
        { n: "800",    l: "Hearts of Home by 2035" },
        { n: "20",     l: "UniSA Verandah Studio Master of Architecture seats/yr" },
        { n: "1.49M",  l: "Greater Adelaide population (2024)" }
      ]
    },
    network: {
      label: "Heart Network",
      title: "Six cities. One heartbeat.",
      lead: "Adelaide joins Cor del Món as the third wave-1 city after Andorra and Yokohama. Below are the five other network cities being built with through 2030.",
      viral: "Andorra writes love in stone. Yokohama writes love in arrivals. Adelaide writes love in festivals."
    },
    roadmap: {
      label: "The rolling wave",
      title: "Four stages, on Adelaide's pace",
      lead: "Living Heart Adelaide is South Australia's contribution to Cor del Món. Adelaide joins Andorra and Yokohama in the wave-1 trio, opening its monument in 2035 and reaching the Generation milestone in 2060.",
      viral: "Adelaide alone is sixty years of festivals. Adelaide inside Cor del Món is sixty years of festivals plus the courage to throw the next sixty for love.",
      milestones: [
        {
          year:     2028,
          stage: "Charter",
          commitment: "Cor Charter signed with the Government of South Australia and the City of Adelaide. International architecture competition for Living Heart Adelaide awarded. Site secured at Tarndanyangga (Victoria Square), where Light's grid meets the Park Lands. Yokohama signs its own Cor Charter the same year, anchoring the wave-1 parallel build.",
          metrics: { charterSigned: true, competitionAwarded: true, siteSecured: "Tarndanyangga" },
          networkContribution: "Adelaide becomes Cor del Món's first Pacific anchor and joins Andorra (live since 2027) and Yokohama (also chartering 2028) as the wave-1 trio. Adelaide hosts the Cor Biennale 2034 strand inside Adelaide Festival, one year ahead of its monument opening as a pre-opening cultural countdown.",
          status: "concept",
          lastVerified: "2026-Q3"
        },
        {
          year:     2030,
          stage: "Break Ground",
          commitment: "Construction begins on Living Heart Adelaide and on the first 400 Hearts of Home verandah-block units in Munno Para West. Cor Visa pilot opens with the first 100-couple cohort (proposed Q3 2026). Adelaide's rammed-earth thermal core is poured this year; AS 1170.4 seismic detailing complete.",
          metrics: { homesUnderConstruction: 400, corVisaCouples: 100, rammedEarthCorePoured: true },
          networkContribution: "Adelaide publishes the first ten Adelaide-authored Cor Patterns (verandah-block housing, deep-eaved Mediterranean passive cooling, Park Lands grid as a love-urbanism template). Andorra Daily Ceremony broadcasts have been running for two years; Yokohama is also under construction.",
          status: "concept",
          lastVerified: "2026-Q3"
        },
        {
          year:     2035,
          stage: "Operational",
          commitment: "Living Heart Adelaide opens at Tarndanyangga. The Daily Ceremony begins broadcasting at 18:00 ACDT from the rammed-earth ceremony floor. All 800 Hearts of Home units delivered across Munno Para West (300), Mount Barker (250), and inner-suburb infill at Norwood, Goodwood, and Prospect (250). Greater Adelaide population sustained at around 1.6M. Adelaide CBD TFR recovering from 0.60 toward 1.0. The first Cor Generation residents move into the network units.",
          metrics: { homes: 1000, monumentHeightM: 12, fertilityRate: 1.0, residentsIncoming: 10, dailyCeremonyActive: true, populationGreaterAdelaide: 1600000 },
          networkContribution: "Adelaide joins Andorra and Yokohama in the Daily Ceremony rotation. The network's three operational cities now host 30 Cor Residents per year between them. Adelaide-authored patterns reach 30 contributions to the Cor Pattern Library. University of Adelaide Cor Programme reaches 1,000 international graduate students.",
          status: "concept",
          lastVerified: "2026-Q3"
        },
        {
          year:     2060,
          stage: "Generation",
          commitment: "Living Heart Adelaide celebrates twenty-five years operational. The first Cor Generation residents who arrived in 2035 (then in their 20s, now in their 50s) have raised families inside the verandah-block stock. A second-wave Hearts of Home expansion adds 400 units across Bowden, Brompton, and the Mile End infill corridor, bringing the Cor total to 1,200. The Park Lands' Cor Forest at West and South Tce reaches maturity (tens of thousands of native trees planted over the quarter century, a thousand for every metre of the monument). The Festival City has rewritten its identity to include Family City alongside it.",
          metrics: { networkAgeYears: 25, totalHomes: 1200, generationAdults: 800, treesMature: 65000, populationStabilised: true },
          networkContribution: "Adelaide graduates into network elder status alongside Andorra (2057) and Yokohama (2060-2061). Adelaide mentors Wave-2 Pacific candidate cities (likely Auckland, Wellington, Hobart, Christchurch). The Adelaide Cor Charter becomes a template for South Pacific climate-adapted love urbanism.",
          status: "concept",
          lastVerified: "2026-Q3"
        }
      ]
    }
  },
  feasibility: {
    title: "Honest constraints",
    intro: "What a 12m monument adjacent to Tarndanyangga and an 800-home programme on Kaurna Country actually has to negotiate with.",
    category: "Adelaide CBD cultural facility plus state-housing-trust family-priority overlay. Standard SA Government urban-development category. No new permission package required.",
    permissionChain: [
      "City of Adelaide, Council development application. The Lord Mayor signs the cultural-anchor MoU.",
      "State Planning Commission of South Australia development assessment. The Minister for Planning is the responsible authority.",
      "Renewal SA, housing-programme partner. The CEO of Renewal SA signs the Hearts of Home allocation overlay.",
      "Department for Aboriginal Affairs and Reconciliation, plus Kaurna Yerta Aboriginal Corporation, consultation under the SA Aboriginal Heritage Act 1988.",
      "Department for Trade and Investment (Investment SA) for foreign-investment review where the FIRB threshold applies.",
      "Office for the Arts in the Department of Infrastructure (federal) for cultural-infrastructure recognition."
    ],
    budgetSources: [
      "Arts South Australia, cultural-infrastructure capital programme.",
      "Renewal SA family-housing capital (Hearts of Home as overlay on the existing build pipeline).",
      "Department for Trade and Investment, investment-attraction line.",
      "Australian federal Office for the Arts, cultural-infrastructure share.",
      "Cor del Món network partner-share contribution.",
      "South Australian philanthropy (Hawker Fund, James and Diana Ramsay Foundation, Adelaide Festival Foundation)."
    ],
    items: [
      { area: "Park Lands Act (2005)",       detail: "The Park Lands ring is Crown land protected by the Adelaide Park Lands Act 2005. Any structure on Park Lands needs special legislative approval. The Living Heart Adelaide therefore sits at the *northern edge* of Tarndanyangga (Victoria Square), on the immediately adjacent CBD parcel inside the ring rather than on the Park Lands themselves. Park Lands access remains intact." },
      { area: "Kaurna heritage",             detail: "SA Aboriginal Heritage Act 1988 consultation with the Kaurna Yerta Aboriginal Corporation is required from Charter year. Naming, mural language (the PIRRALTHI mural specifically), and ceremony design require Kaurna leadership, not just consultation. The proposal acknowledges this is a Kaurna miyurna decision in their own forum." },
      { area: "Building permits",            detail: "At 12m the heart is a small civic building far below any height trigger; City of Adelaide Development Plan + State Planning Commission approvals follow the standard track. The night-time heart of light is an evening projection under standard event-lighting permits, dimmed toward homes and Kaurna places. AS 1170.4 seismic detailing for the Adelaide intra-plate zone is straightforward at this scale." },
      { area: "Migration pathway",           detail: "Cor Residency intake (10 per year) fits within South Australia's existing Designated Area Migration Agreement (DAMA). Cor del Món contributes a small dedicated allocation, not a new pathway. Federal Department of Home Affairs negotiation required from Charter year to confirm the DAMA share." },
      { area: "Heritage screening",          detail: "Inner-suburb infill sites (Norwood, Goodwood, Prospect for the 250-unit Phase 3) pre-screened against the SA Heritage Places Database. No demolition of state-heritage-listed properties." },
      { area: "Funding compliance",          detail: "SA Government participation through Renewal SA + Department for Trade and Investment. Federal participation through the Building Better Regions Fund or successor. No foreign-state funding; partner-network share treated as foreign cultural-philanthropy under FIRB scrutiny if over the threshold." }
    ]
  },
  costs: {
    title: "Approximate costs (2026 USD)",
    monumentTotal: "USD 4 to 8 million",
    intro: "Order-of-magnitude estimates anchored against comparable Adelaide civic-cultural builds (Adelaide Festival Centre redevelopment was AUD 180 million, Adelaide Oval redevelopment was AUD 535 million for context). Real budgets after design competition.",
    stages: [
      { phase: "Charter (2028)",         range: "USD 0.3 to 0.7M",   scope: "International design competition + Kaurna Yerta consultation + Park Lands Act variation pathway + State Planning Commission approval cycle" },
      { phase: "Break Ground (2029-30)", range: "USD 0.7 to 1.5M", scope: "Bluestone plinth foundation, rammed-earth core formwork, AS 1170.4 seismic detailing, Tarndanyangga site preparation" },
      { phase: "Construction (2030-34)", range: "USD 2 to 4M", scope: "Rammed-earth core, corrugated-steel verandah cladding, festival-ribbon banner system, interior fitout" },
      { phase: "Operational (2035)",     range: "USD 1 to 1.8M", scope: "Adelaide Hour broadcast studio, ceremony floor fitout, opening programme inside the Adelaide Festival" }
    ],
    fundingNote: "Funding for the monument leans private: Cor del Món network partner share (35-50%), South Australian arts philanthropy (20-30%), a federal cultural-infrastructure share (15-25%), and only a modest enabling share from the SA Government (10-20%). Public housing money goes to Renewal SA and the Hearts of Home family homes, not the monument. FIRB review applies to any foreign-source share over the threshold."
  },
  impact: {
    title: "Impact and benefit",
    items: [
      { metric: "800 verandah-block family homes by 2035", note: "About 22% boost on the SA Housing Trust's annual ~500 social/affordable build over seven years. 300 Munno Para West (outer-north growth zone), 250 Mount Barker (Adelaide Hills), 250 inner-suburb infill (Norwood, Goodwood, Prospect)." },
      { metric: "10 Adelaide Heart Residency intake per year", note: "Bowden bluestone cottages and inner-Norwood terraces house international creative residents. Twelve-month stay, full Festival pass, JamFactory or AC Arts studio access." },
      { metric: "Adelaide Hour on network broadcast",     note: "Weekly English-language slot from Living Heart Adelaide studio, going out alongside FIVEaa, ABC Adelaide, 5RTI, and Three D Radio. Festival-Centre-of-the-world voice." },
      { metric: "Kaurna partnership model",                note: "Demonstration of how a non-Indigenous-led international project can be co-designed with Traditional Custodians from Charter year, not as afterthought. The PIRRALTHI mural process itself is the demonstration." },
      { metric: "Festival City permanence",                note: "Adelaide already runs the most festival-dense calendar of any Australian capital (Adelaide Festival, Fringe, WOMADelaide, Cabaret, Writers' Week). The Living Heart adds a permanent year-round Festival Heart, not just a March pulse." }
    ]
  },
  alternatives: {
    title: "Lighter expressions of the same idea",
    intro: "The proposal is offered as a creative-research design idea, not as a fundraising plan or a built commitment. The lightest expression below is the recommended default for any city that wishes to honour the idea without a built monument.",
    items: [
      { fallback: "Hologram-only expression (the recommended default)", reason: "The full Cor del Mon city experience delivered as projection, hologram, and augmented-reality installation hosted inside an existing public building, the same night-time heart of light without the 12 metre building beneath it. No new construction, no land take, no seismic or heritage risk, no permits beyond standard public-event approvals. Roughly one to three percent of the built-version cost. Six to eighteen months from agreement to opening night. Fully reversible. The local government keeps complete flexibility to time the installation to its own civic and cultural calendar and to relocate or remove it at any time. The safest and fastest path for any city that wishes to participate without committing to a permanent build." },
      { fallback: "Print, broadcast, and online expression", reason: "The design idea published as a book, an exhibition catalogue, a documentary, an open-access website, and a network of public talks, with no physical installation in the city. Lower cost again, no local-government commitment of any kind required." }
    ]
  }
};

export default vocab;
if (typeof window !== "undefined") {
  window.AdelaideVocab = vocab;
}
