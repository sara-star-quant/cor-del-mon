// Cape Town · Living Heart Cape Town vocabulary, v1.0 (Q3 2026).
// Validates against /_shared/vocab.schema.json.
// Loaded as an ES module by /capetown/index.html and exposed on window.CapeTownVocab
// for the Babel-standalone App script that cannot use ES import.
//
// Cape Town sits on the traditional lands of the Khoekhoen and the San. The Khoekhoegowab
// name for the Cape Town area is ǁHui !Gaeb (where the clouds gather). This proposal
// acknowledges Khoekhoen and San as the traditional custodians and is offered in
// respectful dialogue with any future Indigenous-led naming and design review.
//
// Cape Town anchors the African cluster of Cor del Món as the Wave-1 city. Marrakech
// joins as a Wave-2 transitional city sponsored by Cape Town (around 2034-2041), and
// Stone Town Zanzibar joins as a full Wave-2 candidate (post-2042). See the Africa
// Cluster section of /network-constitution.md for the cluster's Q3 2026 numbers and
// timing-uncertain markers.

const vocab = {
  city: {
    slug: "capetown",
    name: { native: "Cape Town", roman: "Cape Town", english: "Cape Town", nativeAlt: "ǁHui !Gaeb (Khoekhoegowab)" },
    country: { code: "ZA", name: "South Africa" },
    coords: { lat: -33.9249, lon: 18.4241, tz: "Africa/Johannesburg" },
    locale: "en-ZA",
    hreflang: "en-za"
  },
  brand: {
    monument:  { native: "Living Heart Cape Town", roman: "Living Heart Cape Town", english: "Living Heart Cape Town" },
    home:      { native: "Hearts of Home Cape",     roman: "Hearts of Home Cape",     english: "Hearts of Home" },
    network:   { native: "Heart Network",            roman: "Heart Network",            english: "Heart Network" },
    residency: { native: "Cape Heart Residency",     roman: "Cape Heart Residency",     english: "Cape Heart Residency" },
    tagline:   { native: "The heart at the foot of the mountain", roman: "The heart at the foot of the mountain", english: "The heart at the foot of the mountain" }
  },
  palette: {
    "--rose":         "#ad1457",
    "--rose-dark":    "#640d3a",
    "--rose-light":   "#d63384",
    "--rose-pale":    "#f48fb1",
    "--bg":           "#0f0710",
    "--text-primary": "#fae0e9",
    "--text-muted":   "#b18494",
    "--accent":       "#880e4f"
  },
  typography: {
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Work+Sans:wght@300;400;500;600;700&display=swap",
    serif: "'Cormorant Garamond', Georgia, serif",
    sans:  "'Work Sans', system-ui, -apple-system, sans-serif"
  },
  monument: {
    heightM: 12,
    name: "Living Heart Cape Town",
    completionYear: 2039,
    signature: "A 12 metre Living Heart at the V&A Waterfront, with Table Mountain rising behind it and the Atlantic at its plinth, the same 12 metre heart every Cor city builds. At this height the south-easterly Cape Doctor wind that governs tall structures here is a non-issue, and the build is cheap and quick. Table Mountain sandstone facade, the Cape's own heritage building stone, glowing honey-grey by day and rose at sunset, on a Cape granite plinth that has held this coast for centuries and shrugs off the salt. Cape pine timber inside, marine-grade stainless fixings, water-positive design that recycles greywater into a public reflective pool. By night, during accepted hours, the little stone heart becomes a heart of light that beats, sending out waves of light-hearts that ripple across the bay at the foot of the mountain on every pulse of the shared 60 BPM heartbeat, weightless and fully reversible, dimmed away from Table Mountain's protected view corridors. The heart that sits at the foot of the mountain and never competes with it, identical at its core to its five sisters around one flame."
  },
  nationalStyle: {
    materials: [
      { name: "Table Mountain sandstone", sourceRegion: "Table Mountain Group sandstone, the Cape Peninsula's own heritage building stone", role: "Facade panels in warm honey-grey, the stone of the Cape's old civic buildings, glowing rose at sunset against the mountain" },
      { name: "Cape granite",         sourceRegion: "Peninsula granite at the mountain's foot (Sea Point, Boulders)", role: "Plinth and splash-zone base, the salt-proof stone that has held the Cape coast for centuries" },
      { name: "Cape pine timber",     sourceRegion: "Tokai and Newlands plantation forests, Cape Peninsula",    role: "Interior pavilion structure, ceremony floor planking, mass-timber columns above the plinth" },
      { name: "Hempcrete",            sourceRegion: "Western Cape hemp plantations (post-2018 legalisation)",    role: "Hearts of Home wall infill, low-carbon thermal mass for the Mediterranean climate" },
      { name: "Patinated copper",     sourceRegion: "Northern Cape copper belt (Springbok)",                     role: "Roof shells of the entry pavilion, weathering to verdigris green-rose" },
      { name: "Western Cape glass",   sourceRegion: "PFG Building Glass plant, Western Cape",                    role: "Curtain wall in subtle rose tint, framing Table Mountain views from every floor" },
      { name: "Rose-bronze accent (illustrative)", sourceRegion: "Adapts to the final site and local sourcing", role: "A thin rose-bronze rim that catches the daytime sun over the primary stone or skin. The named materials are worked examples chosen for durability and local character; the final material and accent would be set with local quarries and craftspeople for the specific site." }
    ],
    motifs: [
      { name: "Table Mountain silhouette", origin: "The defining horizon of Cape Town (1,086m flat-top profile)", application: "Pavilion crown geometry; the building's roofline echoes Table Mountain's flat top in deliberate dialogue" },
      { name: "Cape Dutch gable",          origin: "17th-century Cape Dutch architecture (Stellenbosch heritage)",  application: "Reinterpreted in the entry pavilion's curved gable form" },
      { name: "Six-petal protea",          origin: "King Protea, South Africa's national flower",                   application: "Subtle relief on the western facade, six petals arranged as the network's six-city signature" },
      { name: "Veld horizon line",         origin: "Karoo and Western Cape veld",                                   application: "Floor-plate logic of the building, with horizontal banding referencing the Karoo veld" },
      { name: "Cape Doctor wind diagrams", origin: "The south-easterly Cape Doctor that scrubs the city in summer", application: "Internal ventilation design, bay-front cross-ventilation tuned to the prevailing wind" }
    ],
    buildingTypology: "Table Mountain sandstone facade on a reinforced concrete core, with Cape pine timber pavilions above the plinth, water-positive systems, and a Table Mountain silhouette echoed in the roofline",
    referenceArchitects: ["Jo Noero", "Heinrich Wolff", "KMH Architects (Kotze Marais Holscher)", "Sumayya Vally (Counterspace, 2021 Serpentine Pavilion)"],
    silhouette: "A heart of warm Table Mountain sandstone with a flat-topped pavilion crown that echoes Table Mountain, lit at evening with patinated copper roof shells catching the Cape Doctor wind"
  },
  seismic: {
    code: "SANS 10160-4:2017 (Basis of structural design and actions for buildings, Part 4: Seismic actions and general requirements for buildings) and SANS 10100-1 for reinforced concrete",
    designSpec: "Cape Town sits in a low-to-moderate intra-plate seismic zone. The 1969 Ceres earthquake (M6.3, around 120km from Cape Town) is the local reference. Hazard factor (Z) for Cape Town is around 0.10 to 0.15g.",
    peakAccel: "0.15g design / 0.25g MCE",
    isolation: "No base isolation needed at this seismicity level. The Table Mountain sandstone facade panels are mounted on a ductile reinforced-concrete core with internal vertical steel and post-tensioning. Cape pine timber pavilions above the plinth use moment-resisting CLT joints designed for the modest seismic demand.",
    notes: "Cape Town is South Africa's most active intra-plate seismic city, but still well below the demand levels of Pacific or Mediterranean cities. SANS 10160-4 governs. The building's main structural challenge is the Cape Doctor wind (south-easterly, gusts to 90 km/h) rather than seismic forces.",
    designConsequences: "Without the cost burden of base isolation, the budget shifts to the water-positive systems (a real necessity in post-Day-Zero Cape Town) and to the Table Mountain sandstone facade quality. The building reads as Cape vernacular at every scale, from the flat-topped roofline to the warm-pink stone."
  },
  sections: {
    hero: {
      label: "The heart at the mountain",
      title: "Cape Town,",
      titleAccent: "the heart at the foot of the mountain",
      lead: "Greater Cape Town, around 5.06 million people on the traditional lands of the Khoekhoen and San. Table Mountain rises behind. The Atlantic stretches west. The Indian Ocean meets the Atlantic at Cape Point, two hours south. South Africa's national fertility is 2.21 (2025); Cape Town's housing inequality is real (14% of households in informal settlements use only 4% of municipal water). The 2015 to 2020 Day Zero water crisis is a scar that shapes every new building's design brief. Cor del Món asks Cape Town to do what it already knows how to do: build with the water it has, the wind it has, the mountain it has, and the people it has.",
      viral: "A city that almost ran out of water. A city that did not. A city that knows what real urban love looks like.",
      stats: [
        { n: "12m",      l: "Living Heart (the shared heart, +heartbeat of light)" },
        { n: "10",       l: "Heart-shaped Cor landmarks" },
        { n: "1,500",    l: "Hearts of Home by 2040" },
        { n: "1 hr/wk",  l: "Cape Town Hour on Cor FM" },
        { n: "Q1 2032",  l: "First Families Move In" }
      ]
    },
    monumentSection: {
      label: "Living Heart Cape Town",
      title: "The Heart at the V&A Waterfront",
      lead: "A 12 metre Living Heart at the V&A Waterfront, the same heart every Cor city builds. At this height the Cape Doctor wind is a non-issue. Table Mountain sandstone facade glowing honey-grey by day and rose at sunset, Cape granite plinth against the salt, Cape pine timber inside, water-positive design that recycles greywater into a public reflective pool. By night it becomes a heart of light that beats, rippling out in waves of light-hearts across the bay on every pulse of the shared heartbeat, dimmed from the protected view corridors.",
      viral: "Other cities build with concrete. Cape Town builds with sandstone, timber, and the conviction that water is precious."
    },
    passivhaus: {
      label: "Hearts of Home",
      title: "Hearts of Home Cape Town",
      subtitle: "Water-positive family homes for the Mediterranean Cape",
      lead: "Cape Town is 5.06M people in a structural housing crisis: 14% of households live in informal settlements and use only 4% of the city's municipal water. The 2015 to 2020 Day Zero crisis was a near miss; the next drought will not be. The Breaking New Ground (BNG) programme builds around 10,000 RDP/BNG units a year in Greater Cape Town. The Cor del Món contribution adds 1,500 Hearts of Home family homes by 2040 (about 1.7% of BNG output over nine years), specifically hempcrete-insulated water-positive bay-courtyard blocks with rainwater harvesting and greywater recycling: 700 in Khayelitsha (formal infill), 500 in Mitchells Plain (revitalisation of apartheid-era stock), and 300 in Belhar (transit-oriented infill). The novelty is the water-positive typology, not the count.",
      viral: "A house that catches its own rain, recycles its own water, and faces Table Mountain through every window",
      cards: [
        { icon: "drop",   title: "Water-positive design",            desc: "Rainwater harvesting from every roof, greywater recycling for toilets and laundry, native fynbos landscape that needs no irrigation. Each block produces more water than it consumes in an average rainfall year." },
        { icon: "leaf",   title: "Hempcrete bay-courtyard blocks",   desc: "Hemp-lime insulation in the south-facing walls (Western Cape grown, post-2018 legalisation). Each block of 12 units around a heart-shaped courtyard with a fynbos garden and a single milkwood tree." },
        { icon: "hearth", title: "Family-first, intergenerational",  desc: "Every unit: 3+ bedrooms, soundproofed nurseries, an alcove for an elder family member, sliding panels reconfiguring the floor plan as the family grows. Designed for a multi-generational South African household." },
        { icon: "key",    title: "Subsidised for young families",    desc: "Eligible Cape Town residents under 35 with two-plus years of residency: up to 30% subsidy on Hearts of Home units, scaled by number of children. Income-tested. Coordinated with the City of Cape Town's existing Breaking New Ground (BNG) housing programme. Proposed Q3 2026." },
        { icon: "sun",    title: "Net-zero, Cape-Doctor cooled",     desc: "Solar shingles on every unit, geothermal warmth from the Cape Flats aquifer, evaporative comfort through the Cape Doctor wind during summer. Bills minimal year round, water-positive in normal rainfall years." },
        { icon: "arc",    title: "Timeline: Q1 2033 start",          desc: "Phase 1 (2033-2036): 700 units in Khayelitsha (formal infill upgrade alongside existing community). Phase 2 (2036-2038): 500 in Mitchells Plain (revitalisation of apartheid-era stock). Phase 3 (2038-2040): 300 in Belhar (transit-oriented infill). Total 1,500. All builds reviewed under SANS 10160-4 for Cape intra-plate seismic conditions." }
      ],
      stats: [
        { n: "1,500", l: "Homes by 2040" },
        { n: "Water+", l: "Net producer in average year" },
        { n: "Up to 30%", l: "Family Subsidy" },
        { n: "3+",    l: "Bedrooms Min" }
      ]
    },
    architecture: {
      label: "Architecture of love",
      title: "Buildings That Face the Mountain",
      lead: "Heart-shaped buildings in Table Mountain sandstone and Cape pine. Existing concrete walls along Long Street and Bree wrapped in laser-cut six-petal protea panels, lit at dusk during the Cape Cor Festival each March.",
      viral: "Other cities have a skyline. Cape Town has a horizon line that includes a mountain.",
      murals: [
        { text: "BLY",                sub: "Stay (Afrikaans). A two-storey letter cut from Table Mountain sandstone on a south-facing Bo-Kaap wall, picked up by the Cape Doctor wind at dusk.",          gradient: "linear-gradient(135deg,#ad1457,#640d3a)" },
        { text: "SALA KAHLE",         sub: "Stay well (isiXhosa farewell-as-greeting; LLM-suggested phrasing pending native review). Hands woven in patinated copper between two buildings on Greenmarket Square, lit gold from the V&A side.", gradient: "linear-gradient(135deg,#d63384,#ad1457)" },
        { text: "UNDER THE MOUNTAIN", sub: "English. Six words across an apartment block facing Table Mountain in Woodstock. Visible from the cable car. The mountain stays the city's only triple-digit landmark.", gradient: "linear-gradient(135deg,#f48fb1,#d63384)" }
      ]
    },
    media: {
      label: "Cape Town on the air",
      title: "Cape Town Hour on the network broadcast",
      lead: "Cape Town does not run a separate station. The Cor del Món network broadcast is anchored in Andorra (Cor FM, Cor Play). Cape Town contributes the Cape Town Hour: a weekly two-hour multilingual strand from 2038 onward, in English, Afrikaans, and isiXhosa, recorded inside Living Heart Cape Town and rebroadcast worldwide via Cor Play. Cape Talk, Heart 104.9, SABC Radio Western Cape, and Bush Radio stay where they are; the Cape Town Hour brings the Cape's three-language conversation to the rest of the network.",
      viral: "Cape Town has been speaking three languages over breakfast for centuries. The Cape Town Hour is not a new voice. It is the existing one, on the network's frequency.",
      outlets: [
        { icon: "mic", title: "Cape Town Hour · with Bush Radio", desc: "A weekly multilingual hour made with Bush Radio, one of Africa's oldest community stations, and its long tradition of teaching young people to make their own radio. Cape jazz, kwaito, isiXhosa and Afrikaans love songs, carried worldwide on Cor Play.", tags: ["Weekly", "Community radio", "Three languages"] },
        { icon: "screen", title: "Kindness strand · with SABC and Takalani Sesame", desc: "A children's kindness strand co-produced through SABC Education in the spirit of Takalani Sesame, South Africa's own Sesame Street, with the District Six Museum's education team. Puppet stories about coming home across a once-divided city.", tags: ["SABC Education", "Takalani", "Children"], tagVariant: "soft" }
      ],
      soundtrackTitle: "The Sound of the Cape",
      soundtrackIntro: "What it sounds like to drive over Kloof Nek at sunset with Table Mountain at your back and the Atlantic ahead. Five songs of home, return, and reconciliation, from Cape jazz to kwaito-house. Click any track to open a YouTube search.",
      soundtrack: [
        { track: "Mannenberg",                   artist: "Abdullah Ibrahim",    released: 1974, note: "The Cape jazz anthem, named for a Cape Flats township, an unofficial hymn of resilience and identity through the apartheid years. If the Cape has one piece of music that is wholly its own, this is it." },
        { track: "Pata Pata",                    artist: "Miriam Makeba",       released: 1967, note: "Mama Africa's joyful Xhosa dance song, the first South African record to reach the Billboard charts, and still the one street vendors hum at the V&A. Pure delight, no apology." },
        { track: "Asimbonanga",                  artist: "Johnny Clegg & Savuka", released: 1987, note: "Written for Mandela while he was still on Robben Island, in sight of the Cape coast. English and Zulu woven together: the city's clearest love letter to the man who came back." },
        { track: "Stimela",                      artist: "Hugh Masekela",       released: 1974, note: "The coal-train song, about the migrant workers carried far from the people they love. Not romance but the deeper thing under it: the ache for home. The horn that taught the world how to mourn." },
        { track: "Ndihamba Nawe",                artist: "Mafikizolo",          released: 2002, note: "Kwaito-house from the Mzansi golden era, the Cape's wedding-DJ default for two decades. The chorus means, roughly, 'I will go with you.' The plainest love line there is." }
      ]
    },
    traditions: {
      label: "Reimagined traditions",
      title: "Three layers, hotter fire",
      lead: "Cape Town's traditions already mix Khoekhoen, Cape Malay, Xhosa, Zulu, Afrikaans, English, and a dozen diaspora cuisines. The Cape Cor calendar weaves a love thread through every existing festival and adds a daily ceremony at 18:00 SAST.",
      viral: "Cape Town has been three cities in one for four hundred years. Now it is six cities in one network.",
      categories: [
        { monogram: "K", title: "Kos (the Cape table, three layers)", items: [
          ["Bo-Kaap bredie share",         "A Cape Malay tradition: slow-cooked tomato bredie or boontjiebredie shared from one pot at long tables. Bo-Kaap families and restaurants host on the second Saturday of each month, reservations open to the public, takings split with Bo-Kaap heritage preservation."],
          ["Cape Heritage table",          "A monthly long-table at the Company's Garden integrating Khoekhoen-traditional ingredients (veldkos, dassiepis, melkbos) curated by traditional custodians. Honours the cuisine that fed the Cape before 1652. Limited covers, full notice posted via the Iziko Museums calendar."],
          ["Snoek braai on Kalk Bay quay", "The False Bay snoek-fishing season (June through August) gets a Cor Saturday: snoek smoked over rooibos coals on the Kalk Bay harbour wall. Open to fishing families and visitors alike."],
          ["Stellenbosch single-pour",     "A small Cor pour at participating Stellenbosch and Hemel-en-Aarde estates. One vintage, one variety, one Saturday in May. Honours the wine farms still doing land-restitution work with the Stellenbosch land claimants."]
        ]},
        { monogram: "M", title: "Music (Cape jazz, choral, klopse)", items: [
          ["V&A Cape Jazz on the first Sunday", "A monthly Cape jazz residency at the V&A amphitheatre. Hugh Masekela's lineage handed forward, with one new commission per year from a Western Cape composer under 30."],
          ["Klopse Cor float",                  "The Tweede Nuwe Jaar (Cape Minstrels) parade integrates a Cor float on 2 January, designed each year by a different Cape Town primary school. Rose-and-gold costuming next to the traditional satin colours."],
          ["UCT-led Cape Choral programme",     "A choral programme led by the UCT South African College of Music, partnering with Khayelitsha and Mitchells Plain secondary schools. Builds on the existing strong Cape choral tradition rather than replacing it."]
        ]},
        { monogram: "F", title: "Festivals (the Cape calendar)", items: [
          ["Cape Cor Festival",         "A two-week annual love festival every March, alongside the existing Cape Town International Jazz Festival. Spans the V&A, Long Street, and the Company's Garden, with anchor programmes at the Castle of Good Hope and District Six Museum."],
          ["Lion's Head sunset walk",   "Monthly community walk to Lion's Head, finishing at the plateau at sunset. Open to all ages and abilities. The slow loop, not the summit, is the point."],
          ["Whale Cor at Hermanus",     "The Hermanus whale-watching season (June to November) gets a Cor weekend in September, with extra ferries from the V&A and a southern-right calving briefing from MCM scientists."]
        ]},
        { monogram: "R", title: "Rituals (Table Mountain time)", items: [
          ["Ceremonies at Living Heart Cape Town", "Wedding and renewal ceremonies in the Table Mountain sandstone ceremony hall, looking out at Table Mountain. Subsidised for Western Cape residents, premium for international couples."],
          ["Sunday Sea Point Promenade",            "The Sunday family-walk tradition along the Sea Point Promenade gains a Cor segment: rose-painted benches every kilometre, reserved for handed-down conversations on the first Sunday of each month."],
          ["Cape Heart Residency",                  "Ten incoming residents per year housed in restored Bo-Kaap and Woodstock cottages. Two from each of the other five Wave-1 cities. Twelve months, V&A studio access, partnership with the Greatmore Studios artist programme."],
          ["Mountain conversations",                "An oral-tradition contribution rather than a book. Once a year on Heritage Day (24 September), a different Capetonian gives an unrecorded talk on the south slope of Table Mountain about a person they have loved well. No archive, no publication, no anthology. The mountain is the archive."]
        ]}
      ]
    },
    youth: {
      label: "Youth strategy",
      title: "Hold the family. Save the water. Restore the cottage.",
      lead: "Cape Town's housing crisis is the inverse of Adelaide's: people are choosing to come, and people are struggling to stay. 14% of households live in informal settlements with 4% of the city's water. South Africa already has a strong Critical Skills Visa programme; Cape Town does not need a new visa class. What the city needs is water-positive family housing, restored Bo-Kaap and Woodstock cottages for the network's residency intake, and a focused Cape Heritage MArch studio at UCT. Small contributions, plugged into existing Western Cape provincial programmes that already work.",
      viral: "The city that figured out Day Zero already knows the answer. The Cor del Món contribution is housing that catches its own water, not another visa category.",
      cards: [
        { icon: "hearth",    tag: "Housing",       title: "Hearts of Home, Breaking New Ground overlay",    desc: "1,500 hempcrete water-positive family homes by 2040 across Khayelitsha (700), Mitchells Plain (500), and Belhar (300). Sized at about 1.7% of BNG's annual ~10,000-unit output over nine years; the contribution is the water-positive hempcrete typology rather than the count. Allocated through the City of Cape Town's existing Breaking New Ground programme with a young-family priority overlay (under 35, two-plus years Western Cape residency, child-count-scaled subsidy up to 30%)." },
        { icon: "residency", tag: "Cor Residency", title: "Cape Heart Residency, Bo-Kaap and Woodstock",    desc: "Cape Town's contribution to the network Cor Residency. Ten incoming residents per year housed in restored cottages in Bo-Kaap (heritage-quarter terraces) and Woodstock (the artist-precinct row houses behind the Old Biscuit Mill). Twelve months, partnership with Greatmore Studios for studio space. Two residents per other Wave-1 city." },
        { icon: "book",      tag: "Education",     title: "UCT Cape Heritage Studio (one MArch)",           desc: "UCT's School of Architecture, Planning and Geomatics runs a single annual MArch studio on water-positive design, Cape Malay heritage, and Township-CBD reconnection. Twenty seats per year including five funded for network-city students. Stellenbosch and UWC architecture co-teach the Mediterranean-arid module. One studio, well-taught, beats new faculties." },
        { icon: "doublehearts", tag: "Childcare",  title: "Hempcrete bay-courtyard nurseries",              desc: "Free childcare from 12 months at the ground floor of every Hearts of Home block. Built into the housing typology so the walk to drop-off is two minutes. Coordinated with the Western Cape Department of Social Development and the existing ECD subsidy framework." },
        { icon: "leaf",      tag: "Health",         title: "Mowbray Maternity postnatal support",           desc: "Mowbray Maternity Hospital and Groote Schuur expand postnatal mental-health counselling for new parents and couples through the existing Western Cape provincial health services. Telehealth across Khayelitsha, Mitchells Plain, and Belhar where transport to central Cape Town is the binding constraint." },
        { icon: "transit",   tag: "Movement",       title: "Heart MyCiTi loop",                              desc: "Rose-liveried MyCiTi BRT loop connecting Living Heart Cape Town at the V&A, the Hearts of Home blocks (Khayelitsha, Mitchells Plain, Belhar), and the Sea Point Promenade. Subsidised through the existing City Mobility levy. Builds on the existing MyCiTi network, not new infrastructure." },
        { icon: "leaf",      tag: "Animals",        title: "Penguins and the coast",                         desc: "The African penguin was listed critically endangered in 2024, with the Boulders Beach colony at Simon's Town among its last strongholds. Cor backs SANCCOB's seabird rescue and the Cape of Good Hope SPCA, with Hearts of Home school groups joining beach-clean and fish-count days. A city that saved itself from Day Zero can help save the little birds that share its coast." }
      ],
      stats: [
        { n: "10",      l: "Cape Heart Residency intake/yr" },
        { n: "1,500",   l: "Hearts of Home by 2040" },
        { n: "20",      l: "UCT Cape Heritage Studio Master of Architecture seats/yr" },
        { n: "5.06M",   l: "Greater Cape Town (2025)" }
      ]
    },
    network: {
      label: "Heart Network",
      title: "Six cities. One heartbeat. One mountain to face it from.",
      lead: "Cape Town joins Cor del Món as the fifth wave-1 city, anchoring the African cluster. Marrakech joins as a Wave-2 transitional city sponsored by Cape Town (around 2034 to 2041). Stone Town Zanzibar joins as a full Wave-2 candidate (post-2042).",
      viral: "Andorra writes love in stone. Yokohama in arrivals. Adelaide in festivals. Valparaíso in colour. Cape Town writes love in water and in mountain stone."
    },
    roadmap: {
      label: "The rolling wave",
      title: "Four stages, on Cape Town's pace",
      lead: "Living Heart Cape Town is the Cape's contribution to Cor del Món. Cape Town joins the network in the Spread phase, opening its monument in 2038-2039 alongside Valparaíso and Jaipur. Generation arrives in 2063-2064.",
      viral: "Cape Town alone is Table Mountain and the Atlantic. Cape Town inside Cor del Món is the African anchor of a six-city heartbeat that learns from the Day Zero playbook.",
      milestones: [
        {
          year:     2031,
          stage: "Charter",
          commitment: "Cor Charter signed with the City of Cape Town and the Western Cape Provincial Government. International architecture competition for Living Heart Cape Town awarded. Site secured at the V&A Waterfront, with Table Mountain sightline preserved. Cape Town hosts the Cor Biennale 2033 ahead of its monument opening, as a pre-build cultural moment.",
          metrics: { charterSigned: true, competitionAwarded: true, siteSecured: "V&A Waterfront" },
          networkContribution: "Cape Town becomes Cor del Món's African anchor and the formal sponsor of the Marrakech Wave-2 transitional admission. The African cluster of three (Cape Town live; Marrakech transitional; Stone Town Zanzibar full Wave-2) is documented in the Constitution.",
          status: "concept",
          lastVerified: "2026-Q3"
        },
        {
          year:     2033,
          stage: "Break Ground",
          commitment: "Construction begins on Living Heart Cape Town and on the first 400 Hearts of Home hempcrete units in Khayelitsha. Cor Visa pilot opens with the first 100-couple cohort (proposed Q3 2026). Cape Town hosts the Cor Biennale 2033 inside the V&A festival schedule. Marrakech Wave-2 admission process opens this year, sponsored by Cape Town.",
          metrics: { homesUnderConstruction: 400, corVisaCouples: 100, biennaleHosted: true, marrakechAdmitted: "Wave-2 process opens" },
          networkContribution: "Cape Town publishes the first ten Cape-authored Cor Patterns (water-positive urbanism, hempcrete bay-courtyard housing, Day-Zero-resilient design). Andorra Daily Ceremony broadcasts have been running for one year; Cape Town is now part of the four-city construction wave alongside Adelaide, Yokohama, Valparaíso.",
          status: "concept",
          lastVerified: "2026-Q3"
        },
        {
          year:     2039,
          stage: "Operational",
          commitment: "Living Heart Cape Town opens at the V&A Waterfront. Daily Ceremony begins broadcasting at the city's declared Cor hour from the Table Mountain sandstone ceremony hall. The first 1,200 of 1,500 Hearts of Home units delivered across Khayelitsha (Phase 1 complete, 700 done), Mitchells Plain (Phase 2 underway, 500 in build), Belhar (Phase 3 starting, 300 to come). Cape Town's TFR recovering toward 2.0. The first Cor Generation residents move into the network units.",
          metrics: { homes: 1000, monumentHeightM: 12, fertilityRate: 1.95, residentsIncoming: 10, dailyCeremonyActive: true, populationGreaterCapeTown: 5500000 },
          networkContribution: "Cape Town joins Andorra, Adelaide, Yokohama, Valparaíso (and Jaipur 2038 to 2040) in the Daily Ceremony rotation. The full wave-1 six-city ceremony is now active. The network's six operational cities host the target 60 Cor Residents per year. Cape Town-authored patterns reach 30 contributions to the Cor Pattern Library, leading on water-positive design.",
          status: "concept",
          lastVerified: "2026-Q3"
        },
        {
          year:     2064,
          stage: "Generation",
          commitment: "Living Heart Cape Town celebrates twenty-five years operational. The first Cor Generation residents who arrived in 2039 (then in their 20s, now in their 50s) have raised families inside the hempcrete stock. A second-wave expansion adds 700 hempcrete units across Sea Point and Observatory, bringing the Cor total to 2,200. The Day Zero scar of 2018 is now a curriculum module taught in every Cape primary school via the network broadcast's Cape Kids strand. Cape Town's water-positive hempcrete typology has become a continental reference.",
          metrics: { networkAgeYears: 25, totalHomes: 2200, generationAdults: 1500, dayZeroResilience: "permanent" },
          networkContribution: "Cape Town graduates into network elder status alongside Valparaíso and Jaipur (all 2063-2065). Cape Town mentors Wave-2 African candidate cities: Marrakech (operational 2040-2041 under Cape Town's transitional sponsorship), Stone Town Zanzibar (Wave-2 candidate post-2042), Dakar, and Lagos. The Mountain Anthology (Letters to the Mountain bound annually) becomes a recognised volume of contemporary South African writing.",
          status: "concept",
          lastVerified: "2026-Q3"
        }
      ]
    }
  },
  feasibility: {
    title: "Honest constraints",
    intro: "What a 12m monument at the V&A and a 1,500-home water-positive programme actually have to negotiate with, given Cape Town's binding contradictions.",
    category: "V&A cultural anchor plus Breaking New Ground (BNG) housing scheme overlay. Existing City of Cape Town urban-development category. No new permission package required.",
    permissionChain: [
      "V&A Waterfront (Pty) Ltd signs the long-term cultural-anchor lease (Growthpoint Properties and the Public Investment Corporation as joint owners).",
      "City of Cape Town Department of Spatial Planning and Environment, development approval. The Mayor of Cape Town signs the cultural-anchor MoU.",
      "Western Cape Provincial Government, Department of Infrastructure (which carries the Housing portfolio in the post-2024 reshuffle), BNG family-priority overlay approval. The MEC for Infrastructure is the responsible authority. The Department of Local Government, Environmental Affairs and Development Planning is a separate MEC and reviews the spatial-planning side.",
      "South African Heritage Resources Agency (SAHRA) plus Heritage Western Cape (HWC) for Bo-Kaap and Woodstock heritage approvals.",
      "Bo-Kaap Civic and Ratepayers Association community sign-off on heritage-precinct work.",
      "Department of Sport, Arts and Culture (national) cultural-infrastructure recognition.",
      "South African Reserve Bank approval for foreign-source funding above threshold; FATF and PRECCA compliance."
    ],
    budgetSources: [
      "Western Cape Provincial Government, Housing capital line (BNG existing programme).",
      "City of Cape Town BNG annual capital allocation.",
      "National Department of Sport, Arts and Culture, cultural-infrastructure line.",
      "V&A Waterfront in-kind lease contribution.",
      "Cor del Món network partner-share.",
      "South African philanthropy (Oppenheimer Memorial Trust, Patrice Motsepe Foundation, Mary Slack Investments, Discovery Foundation)."
    ],
    items: [
      { area: "V&A site",              detail: "V&A Waterfront is privately owned by V&A Waterfront (Pty) Ltd, jointly held by Growthpoint Properties and the Public Investment Corporation (PIC). Living Heart Cape Town site lease negotiated commercially with V&A management on terms similar to V&A's existing cultural-anchor partnerships (Zeitz MOCAA precedent). Not a sovereign concession." },
      { area: "Heritage approvals",    detail: "Bo-Kaap and Woodstock cottage restoration coordinated with the South African Heritage Resources Agency (SAHRA) and Heritage Western Cape (HWC). Bo-Kaap is a designated heritage area; restoration must align with the Bo-Kaap Civic and Ratepayers Association's existing community guidelines." },
      { area: "Housing approvals",     detail: "1,500 hempcrete units allocated through City of Cape Town's existing Breaking New Ground (BNG) programme. Western Cape Department of Local Government and Housing approval required from Charter year. Sized at about 1.7% of BNG's annual output, so additive rather than competitive." },
      { area: "Day Zero context",      detail: "14% of households live in informal settlements with 4% of municipal water. Building even a small 12m cultural monument in this context is sensitive unless it visibly serves the housing-water gap. The water-positive Hearts of Home typology and the Khayelitsha-first phasing are the proposal's answer to this; framing the monument as a cultural anchor for township-CBD reconnection rather than a luxury build is essential and non-negotiable." },
      { area: "Funding compliance",    detail: "All foreign-source funding compliant with the Financial Action Task Force (FATF) and Prevention and Combating of Corrupt Activities Act (PRECCA) standards. Full source disclosure from Charter signature. South African Reserve Bank approval for any sovereign-state funding (excluded by the network's policy in any case)." },
      { area: "Safety and access",     detail: "V&A is among the safest CBD-adjacent destinations in Cape Town. Khayelitsha and Mitchells Plain Hearts of Home phasing must be designed with the existing community-safety frameworks (CPF, neighbourhood watch, City Safety Plan), not parachuted on top. Cor del Món contributes typology and family priority; community safety is the City's work." }
    ]
  },
  costs: {
    title: "Approximate costs (2026 USD)",
    monumentTotal: "USD 5 to 10 million",
    intro: "Order-of-magnitude estimates anchored against comparable Cape Town builds (Zeitz MOCAA at the V&A cost roughly USD 38M in 2017; the Norval Foundation cost about USD 50M in 2018). At 60m on a concrete core, without base isolation and with the wind-driven structure kept low, this stays modest. Real budgets after the international design competition.",
    stages: [
      { phase: "Charter (2031)",          range: "USD 0.4 to 0.8M",    scope: "International design competition + V&A site lease negotiation + SAHRA + HWC approvals + Western Cape Provincial Government negotiation" },
      { phase: "Break Ground (2032-33)",  range: "USD 0.8 to 2M",  scope: "RC core foundation, ductile seismic detailing for SANS 10160-4, water-positive systems infrastructure, Table Mountain sandstone and Cape granite supply contracts" },
      { phase: "Construction (2033-38)",  range: "USD 2.5 to 5M",  scope: "Table Mountain sandstone facade, Cape granite plinth, Cape pine timber pavilions, water-positive systems (rainwater + greywater), Cape Doctor wind diagrams in ventilation, V&A site work" },
      { phase: "Operational (2038-39)",   range: "USD 1.3 to 2.2M",  scope: "Cape Town Hour multilingual broadcast studio, ceremony hall fitout, Cape Town International Jazz Festival partnership integration" }
    ],
    fundingNote: "Funding mix expected for the monument: Cor del Món network partner share (35-50%), South African arts philanthropy (illustrative: Oppenheimer, Mary Slack, Motsepe foundations) (25-35%), V&A Waterfront in-kind via a discounted cultural-anchor lease (Zeitz MOCAA precedent) (15-25%), national Department of Sport, Arts and Culture (5-15%), small bilateral cultural partnerships (5-10%). Provincial and city public funds go to the Hearts of Home housing track, not the monument: post-Day-Zero Cape Town has to put homes and water first. All foreign-source funding under FATF and PRECCA review."
  },
  impact: {
    title: "Impact and benefit",
    items: [
      { metric: "1,500 hempcrete water-positive family homes by 2040", note: "About 1.7% of BNG's annual ~10,000-unit output over nine years. The novelty is the water-positive hempcrete typology, not the count. 700 Khayelitsha + 500 Mitchells Plain + 300 Belhar; only city in the network that goes UP from the original 1,200." },
      { metric: "Day Zero resilience as continental reference",        note: "Cape Town is the only major city in the network that has lived through a near-water-zero crisis (2015-2020). The water-positive typology demonstrated at scale here becomes a continental-African export, especially relevant to other dry African coastal cities." },
      { metric: "10 Cape Heart Residency intake per year",             note: "Bo-Kaap heritage-quarter terraces and Woodstock artist-precinct row houses. Greatmore Studios partnership for studio space. Twelve-month stay, V&A access." },
      { metric: "Cape Town Hour multilingual broadcast",                note: "English, Afrikaans, isiXhosa each in rotation. From the Table Mountain sandstone ceremony hall studio. Cape Talk, Heart 104.9, SABC Radio Western Cape, Bush Radio stay where they are; the Cor contribution is the network slot." },
      { metric: "12m heart + night heart of light, under Table Mountain (1086m)", note: "The same 12m heart every Cor city builds; at this height the Cape Doctor wind is a non-issue and the Mountain's sightlines are untouched. The night-time heart of light beats with all six cities and is dimmed from protected view corridors. Tiny, cheap, salt-durable." }
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
  window.CapeTownVocab = vocab;
}
