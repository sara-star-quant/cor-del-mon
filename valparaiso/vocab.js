// Valparaíso · El Faro del Corazón vocabulary, v1.0 (Q2 2026).
// Validates against /_shared/vocab.schema.json.
// Loaded as an ES module by /valparaiso/index.html and exposed on window.ValparaisoVocab
// for the Babel-standalone App script that cannot use ES import.
//
// Why Valparaíso for the Latin America slot: Valparaíso carries the deepest love-poetry
// tradition in Chilean literature (Pablo Neruda lived in La Sebastiana on Cerro Florida,
// and made the city the centre of much of his late work). The 42 cerros with their
// funiculars and corrugated-iron colourful houses give the network its most poetic
// hill-port site. UNESCO World Heritage since 2003. Smaller scale (1.02M metro, 284K in
// the commune itself) closer to Andorra's spirit than Rio would have been.

const vocab = {
  city: {
    slug: "valparaiso",
    name: { native: "Valparaíso", roman: "Valparaiso", english: "Valparaíso" },
    country: { code: "CL", name: "Chile" },
    coords: { lat: -33.0472, lon: -71.6127, tz: "America/Santiago" },
    locale: "es-CL",
    hreflang: "es"
  },
  brand: {
    monument:  { native: "El Faro del Corazón",   roman: "El Faro del Corazon",   english: "Heart Lighthouse" },
    home:      { native: "Hogares del Corazón",    roman: "Hogares del Corazon",   english: "Hearts of Home" },
    network:   { native: "Red del Corazón",        roman: "Red del Corazon",       english: "Heart Network" },
    residency: { native: "Residencia del Corazón", roman: "Residencia del Corazon", english: "Heart Residency" },
    tagline:   { native: "Donde el corazón sube las laderas", roman: "Donde el corazon sube las laderas", english: "Where the heart climbs the hills" }
  },
  palette: {
    "--rose":         "#ec407a",
    "--rose-dark":    "#880e4f",
    "--rose-light":   "#f48fb1",
    "--rose-pale":    "#fce4ec",
    "--bg":           "#0d0612",
    "--text-primary": "#fae0ec",
    "--text-muted":   "#b48aa3",
    "--accent":       "#ad1457"
  },
  typography: {
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap",
    serif: "'Cormorant Garamond', Georgia, serif",
    sans:  "'Inter', system-ui, -apple-system, sans-serif"
  },
  monument: {
    heightM: 47,
    name: "El Faro del Corazón",
    completionYear: 2030,
    signature: "Un Faro del Corazón de 47 metros en el borde de Muelle Prat, entre el casco UNESCO sobre los cerros y el puerto de trabajo. La altura es una decisión deliberada: 47 metros es la cota a la que el ascensor histórico Concepción deja al pasajero al cruzar al cerro. El monumento mide lo mismo que el primer cerro lo hace. Hierro galvanizado pintado en la paleta rosa-óxido de las casas de cerro, sobre un marco de acero con aislación basal para la zona de subducción del Pacífico. Un corazón visible desde cada cerro, cada ascensor, cada balcón sobre la bahía, sin sobrepasar nunca al cerro mismo."
  },
  nationalStyle: {
    materials: [
      { name: "Painted corrugated iron",    sourceRegion: "Chilean steelworks (CAP) reinterpreting the classic Valpo hill-house cladding",  role: "Facade panels in deep rose and rust, the city's iconic colour palette pulled into a single lantern" },
      { name: "Oregon pine and rauli",      sourceRegion: "Bío Bío forests, southern Chile",                role: "Interior structure and ceremony floor planking, mass-timber columns above the isolated base" },
      { name: "Andesite stone",             sourceRegion: "Andean cordillera quarries",                    role: "Plinth and ceremony courtyard paving, tying the building to the Andes geology behind the bay" },
      { name: "Lapis lazuli inlay",         sourceRegion: "Ovalle, north of Valparaíso (Chilean lapis)",   role: "Decorative inlay around the eternal flame and the ceremony bench, in the Cor del Món rose-blue palette" },
      { name: "Cypress shingles",           sourceRegion: "Chiloé island traditions, southern Chile",      role: "Roof shells of the entry pavilion, weathering to silver-grey against the rose facade" }
    ],
    motifs: [
      { name: "Funicular silhouette",        origin: "Valpo's 16 historic ascensores (1883 onward)",       application: "Pavilion crown geometry and the entry-pavilion sectional cut" },
      { name: "Cerro switchback path",       origin: "The zig-zag stairs and paths up every cerro",        application: "Internal circulation: the eight floors connect via a continuous switchback rather than a stacked stair core" },
      { name: "Hill-house colour grid",      origin: "Valpo's iconic painted-corrugated-iron palette",     application: "The facade panels are a curated palette of the city's actual hill-house rose, rust, mustard, and turquoise tones" },
      { name: "Trolebús arch",               origin: "The 1952 Valpo trolleybus overhead lines",            application: "Reference geometry for the ceremony pavilion ceiling truss" },
      { name: "Neruda three-house silhouette", origin: "La Sebastiana, La Chascona, Isla Negra (Neruda's three houses)", application: "Subtle pediment relief on the eastern facade, three peaks in line" }
    ],
    buildingTypology: "Painted corrugated-iron facade on a base-isolated steel frame, with mass-timber pavilions above and a continuous switchback circulation that internalises the cerro's zig-zag climb",
    referenceArchitects: ["Alejandro Aravena (ELEMENTAL incremental housing)", "Smiljan Radic", "Mathias Klotz", "Cazú Zegers"],
    silhouette: "A heart of painted corrugated iron, rose at the bottom and rust at the top, lit at evening like a lantern at the port edge"
  },
  seismic: {
    code: "NCh433.Of1996 (modified 2009 + 2012) and NCh2745.Of2013 for seismic isolation, plus AChISINA recommendations",
    designSpec: "Chilean Nazca-South American subduction zone. Valparaíso sits directly on the seismic gap. The 1906 Valparaíso earthquake (M8.2) and the 2017 Valparaíso earthquake (M6.9) are the local references. Chile has more experience with seismic-isolated tall buildings than almost any country.",
    peakAccel: "0.6g design / 1.0g MCE",
    isolation: "Lead-rubber bearings at the steel base frame, 70 cm displacement capacity. Friction pendulum dampers at four corners. Visible isolation gap at the plinth, dramatised as a horizontal copper shadow line.",
    notes: "Chile leads the world in seismic-isolated tall-building practice (Santiago has more than 30 base-isolated buildings). Valparaíso's hill-port site gives soil amplification heterogeneity, which the steel-frame-on-isolators handles. The painted corrugated iron facade above the isolated base behaves as ductile cladding through a major event.",
    designConsequences: "Base isolation is non-negotiable in this seismic context. The visible shadow gap at the plinth is the visible engineering. Above the isolators, the painted corrugated iron facade can flex without fracture, preserving the Valpo hill-house colour palette through the next major Pacific subduction event."
  },
  sections: {
    hero: {
      label: "El corazón en el cerro",
      title: "Valparaíso,",
      titleAccent: "donde el corazón sube las laderas",
      lead: "The Pearl of the Pacific, perched on 42 cerros above a working port. Pablo Neruda lived here in La Sebastiana on Cerro Florida. UNESCO World Heritage since 2003. Greater Valparaíso is around 1.02 million people, the commune itself is 285,000. 16.6% of residents are over 65, the highest aging share of any Chilean major city. Andorra writes love in mountain stone. Valparaíso writes love in funiculars and painted iron.",
      viral: "A city where the hills tell you which colour you are loved in",
      stats: [
        { n: "88m",      l: "El Faro del Corazón monumento" },
        { n: "10",       l: "Cor Landmarks (en forma de corazón)" },
        { n: "600+200", l: "Hogares incrementales + casas restauradas (2038)" },
        { n: "1 hr/sem", l: "Hora de Valparaíso en Cor FM" },
        { n: "Q1 2031",  l: "Primeras familias se mudan" }
      ]
    },
    monumentSection: {
      label: "El Faro del Corazón",
      title: "El Faro del Corazón",
      lead: "El Faro del Corazón. 47 metros de hierro pintado sobre Muelle Prat, exactamente la altura a la que el ascensor Concepción deposita al pasajero en su cerro. El monumento iguala al primer cerro, no lo sobrepasa. Pabellones de madera laminada sobre marco de acero con aislación basal. Un corazón visible desde cada cerro, ascensor, y balcón de la bahía.",
      viral: "Not the tallest building in the harbour. The one the cerros agreed to face."
    },
    passivhaus: {
      label: "Hogares del Corazón",
      title: "Hogares del Corazón",
      subtitle: "Aravena-school incremental hill-housing",
      lead: "La restricción binding de Valparaíso es la pérdida de patrimonio (35% del stock histórico perdido en 40 años), no la nueva construcción. La contribución de Cor del Món es doble: 600 cores incrementales nuevos en la tradición ELEMENTAL de Aravena (6 sitios × 100 cores), más 200 casas patrimoniales restauradas en el casco UNESCO. Total: 800 hogares para 2038, mitad nuevos en cerro y mitad restaurados en el Plan. Cada core nuevo arranca en 40m² y está diseñado para ser duplicado por la familia en una década. Fachadas de hierro galvanizado pintado en la paleta Valpo.",
      viral: "A house designed to grow with the family, the way the cerros grow with their stairs",
      cards: [
        { icon: "leaf",   title: "Pacific-coast passive design",  desc: "Deep eaves shade the north facade against the Chilean summer (the southern hemisphere flip). Sea-breeze cross-ventilation from the bay through a heart-shaped courtyard. Cypress-shingle roofs reflecting the southern sun. Roughly 60% below a conventional Santiago apartment's energy use." },
        { icon: "heart",  title: "Aravena ELEMENTAL incremental",  desc: "Each house is delivered as a 40m² core plus a doubling shell. Families add the second 40m² over a decade as resources allow, with technical support and material discounts from the Cor co-op." },
        { icon: "hearth", title: "Family-first, intergenerational", desc: "Every core: 2-3 bedrooms, soundproofed nursery, an alcove for an elder family member (essential given Valpo's demographic skew), sliding panels reconfiguring the floor plan as the family grows." },
        { icon: "key",    title: "Subsidio MINVU DS-1 con prioridad joven-familia",   desc: "Subsidio asignado dentro del DS-1 (Decreto Supremo 1) del MINVU, el programa chileno de vivienda incremental que ya financia los proyectos ELEMENTAL. Hasta 35% de subsidio sobre el core Hogares del Corazón para residentes de Valparaíso menores de 35 años con dos años en la ciudad, escalado por número de hijos. Cor del Món no monta un programa paralelo." },
        { icon: "sun",    title: "Net-zero, painted-iron skin",     desc: "Solar panels on the cypress-shingle roof, geothermal warmth from the Andean fault aquifer, rainwater harvesting into the courtyard cistern. Bills minimal year round." },
        { icon: "arc",    title: "Timeline: Q1 2031 start",         desc: "Phase 1 (2031-2033): 200 cores en sitios de cerro despejados (Cerro Mariposa, Cerro Las Cañas). Phase 2 (2033-2036): 200 cores en redesarrollo del Almendral. Phase 3 (2036-2038): 200 cores en Gran Valparaíso (Quilpué, Villa Alemana). En paralelo: 200 casas patrimoniales restauradas en el casco UNESCO (Cerro Alegre, Cerro Concepción, Plan), bajo el Plan Maestro de Recuperación Patrimonial existente. Total 800. Todas las construcciones revisadas bajo NCh433 + NCh2745 para la zona de subducción del Pacífico." }
      ],
      stats: [
        { n: "600+200", l: "Nuevos cores + restauradas (2038)" },
        { n: "60%",   l: "Energy below baseline" },
        { n: "Up to 35%", l: "Family Subsidy" },
        { n: "40+40m²", l: "Incremental footprint" }
      ]
    },
    architecture: {
      label: "Arquitectura del amor",
      title: "Edificios que pintan el cerro",
      lead: "Heart-shaped buildings in painted corrugated iron and rauli timber. Existing concrete walls along Avenida Argentina and Plan wrapped in seasonal hand-painted heart panels by Valpo street artists, lit from within during the Festival Cor del Mar each February.",
      viral: "Other cities have a skyline. Valparaíso has a cerro that loves you back in colour.",
      murals: [
        { text: "QUÉDATE",   sub: "Stay. A two-storey letter painted in deep rose on a Cerro Concepción facade.",                  gradient: "linear-gradient(135deg,#ec407a,#880e4f)" },
        { text: "ABRÁZAME",  sub: "Hold me. Hands woven in painted iron between two buildings on Pasaje Bavestrello.",                gradient: "linear-gradient(135deg,#f48fb1,#ec407a)" },
        { text: "VEN",       sub: "Come. One word in Pablo Neruda's handwriting across an apartment block in Almendral.",             gradient: "linear-gradient(135deg,#fce4ec,#f48fb1)" }
      ]
    },
    media: {
      label: "Valpo en el aire",
      title: "Hora de Valparaíso en la transmisión de la red",
      lead: "Valparaíso no monta una emisora aparte. La transmisión de Cor del Món está anclada en Andorra (Cor FM, app Cor Play). Valparaíso aporta la Hora de Valparaíso: una franja semanal de dos horas en español, grabada desde un pequeño estudio dentro de El Faro del Corazón a partir del 2038, transmitida al mundo vía Cor Play. Las emisoras existentes se quedan donde están: Radio Festival, Radio Valparaíso, TVN Regional. La Hora pone Valpo frente a la red, no encima de las emisoras locales.",
      viral: "Valpo no necesitaba otra emisora. Necesitaba una hora a la que la red presta atención.",
      soundtrackTitle: "El Sonido de Valparaíso",
      soundtrackIntro: "Lo que suena al subir un cerro en febrero a las 19:00 mientras El Faro empieza a encenderse. Un breve set de raíz porteña y de la nueva canción chilena. Haz clic en cualquier pista para abrir una búsqueda en YouTube.",
      soundtrack: [
        { track: "Gracias a la Vida",       artist: "Violeta Parra",       released: 1966, note: "Compuesta en Chile el último año de su vida. Ningún Cor del Món toma en serio el amor sin esta canción de fondo." },
        { track: "El Pueblo Unido Jamás Será Vencido", artist: "Inti-Illimani", released: 1973, note: "Compuesta a 60 km de Valpo. La melodía que Cerro Alegre canta cuando se queda sin palabras." },
        { track: "Yo Vengo a Ofrecer Mi Corazón", artist: "Mercedes Sosa", released: 1985, note: "La voz argentina que adoptó Sudamérica. Ofrecer el corazón es la única traducción posible de Cor del Món." },
        { track: "La Joya del Pacífico",    artist: "Jorge Farías",        released: 1941, note: "El vals porteño tradicional sobre Valparaíso. Lo que tocan los músicos del trolebús en las noches de verano." }
      ]
    },
    traditions: {
      label: "Tradiciones reimaginadas",
      title: "Una ciudad de poetas, fuego más caliente",
      lead: "Valparaíso es ciudad de poetas desde antes de Neruda. Las tradiciones porteñas de comida, música y fiesta ya llevan poesía amorosa en los huesos. Le subimos un poco la temperatura y las pensamos para parejas y familias.",
      viral: "Cada cerro de Valparaíso ya es una carta de amor. Solo le pusimos el sello.",
      categories: [
        { monogram: "G", title: "Gastronomia (sabor del corazón)", items: [
          ["Empanada del Cor",     "Cada local de empanadas en Valpo carga una empanada del corazón en el menú: pino y aceitunas en la masa estándar, con un corazón de chancaca dulce en el cierre."],
          ["Chorrillana del Cor",  "La chorrillana de Valpo (papas fritas, huevo, longaniza, cebolla caramelizada) servida en plato compartido para parejas, con una corona de cilantro en forma de corazón."],
          ["Pisco Sour del Cor",   "Una variación del pisco sour con jarabe de chancaca rosa, servido en copas pareadas durante el Festival Cor del Mar."],
          ["Pan amasado del Cor",  "Una panadería co-op en cada cerro horneando pan amasado en moldes en forma de corazón, con harinas chilenas tradicionales."]
        ]},
        { monogram: "M", title: "Música (latido del puerto)", items: [
          ["Cueca del Corazón",    "La cueca tradicional ganando una nueva figura: parejas formando un corazón en el centro de la rueda."],
          ["Festival Cor del Mar", "Festival anual de música cada febrero (paralelo al Festival de Viña del Mar), tocando entre Cerro Concepción y la Plaza Sotomayor."],
          ["Trolebús Acústico",    "Conciertos íntimos de guitarra y voz a bordo de los trolebuses históricos cada viernes de verano."]
        ]},
        { monogram: "F", title: "Festas (calendario del cerro)", items: [
          ["Año Nuevo del Cor",    "El Año Nuevo en el Mar de Valparaíso (los fuegos artificiales más famosos de Sudamérica) reframado para parejas: cada cerro recibe una pareja designada de un cerro hermano."],
          ["Cor del Cerro",        "Festival mensual rotando entre los 42 cerros, con cada cerro hospedando un fin de semana de su tradición de amor local."],
          ["Peregrinaje Neruda",   "Caminata anual entre las tres casas de Neruda (La Sebastiana en Valpo, La Chascona en Santiago, Isla Negra en la costa). Las parejas terminan juntas en La Sebastiana al atardecer."]
        ]},
        { monogram: "R", title: "Rituales (la escala humana)", items: [
          ["Ceremonias en El Faro del Corazón", "Bodas y renovaciones de votos dentro del pabellón del octavo piso. Subsidiadas para residentes de la Región de Valparaíso, premium para parejas internacionales."],
          ["Funicular del Cor",                 "Ritual de subir el ascensor con la persona amada en silencio. La conversación empieza al llegar arriba."],
          ["Residencia del Corazón",            "Diez residentes entrantes por año (dos de cada ciudad hermana), alojados en casas restauradas en Cerro Alegre y Cerro Concepción."],
          ["Cartas a Neruda",                   "Cartas de amor escritas a mano y depositadas en el buzón de piedra junto a La Sebastiana. Encuadernadas anualmente en el Cuaderno del Faro."]
        ]}
      ]
    },
    youth: {
      label: "Estrategia juvenil",
      title: "Detener la fuga. Restaurar el cerro. Que vuelva la familia.",
      lead: "Valparaíso envejece más rápido que cualquier otra ciudad mayor de Chile (16,6% mayor de 65 años, contra 14% nacional). La fertilidad chilena cayó a 1,4 (2024). Hace dos décadas que el Plan pierde jóvenes hacia Santiago. La contribución de Cor del Món es chica, concreta y porteña: vivienda incremental en la tradición ELEMENTAL de Aravena para los cerros, una Residencia del Corazón anclada en casas restauradas de Cerro Alegre, y un taller MArch enfocado en la PUCV. La visa Subject to Contract chilena ya existe; lo que falta es vivienda priorizada y techo seguro.",
      viral: "La ciudad que le enseñó a Sudamérica a escribir poemas de amor no necesita pedirle al gobierno una nueva visa. Necesita restaurar las casas donde esos poemas se escribieron.",
      cards: [
        { icon: "hearth",    tag: "Vivienda",      title: "Hogares del Corazón + restauración patrimonial", desc: "600 cores incrementales nuevos en los cerros + 200 casas patrimoniales restauradas en el casco UNESCO para 2038 (ver sección Hearth). El Plan Maestro de Recuperación Patrimonial de la Municipalidad ya existe; Cor del Món suma una capa de prioridad para familias jóvenes (menores de 35, dos años en Valpo, subsidio escalado por número de hijos hasta el 25%) sobre las cuotas existentes. La restauración importa más que la nueva construcción para Valpo." },
        { icon: "residency", tag: "Residencia",    title: "Residencia del Corazón en Cerro Alegre",       desc: "El aporte de Valparaíso a la Residencia Cor de la red. Diez residentes entrantes por año en casas restauradas de Cerro Alegre y Cerro Concepción. Doce meses, acceso a estudios en Galería Bahía Utópica y al taller del Parque Cultural ex-Cárcel. Dos por cada una de las otras cinco ciudades de la primera ola." },
        { icon: "book",      tag: "Educación",     title: "Taller del Cerro PUCV (un solo MArch)",         desc: "La Escuela de Arquitectura de la PUCV (referente continental por la Travesía y la Ciudad Abierta de Amereida) abre un único taller MArch enfocado: vivienda incremental en pendiente, edificio-escalera, fachadas de zinc pintado. Veinte alumnos al año, cinco cupos para estudiantes de las ciudades hermanas. Un solo taller bien dictado, sin facultades nuevas." },
        { icon: "doublehearts", tag: "Cuidado",    title: "Salas cuna en Hogares del Corazón",             desc: "Cuidado infantil gratuito desde los 12 meses en planta baja de cada bloque incremental. Coordinado con la JUNJI Valparaíso y los planes de cobertura ya existentes del MINEDUC. La caminata de la cocina a la sala cuna no excede los dos minutos." },
        { icon: "leaf",      tag: "Salud",         title: "Apoyo postnatal en el Hospital Van Buren",      desc: "Ampliación de la cobertura postnatal de salud mental para padres y parejas en el Hospital Carlos Van Buren, financiada por Fonasa y el programa GES de salud mental. Telesalud para los cerros con acceso vehicular limitado." },
        { icon: "transit",   tag: "Movilidad",     title: "Trolebús del Corazón (recorrido del Plan)",     desc: "Los trolebuses históricos de Valpo (los más antiguos del mundo en operación continua, desde 1952) suman una librea rosa para los recorridos del Plan: El Faro, los Hogares restaurados de los cerros y el casco UNESCO. Subsidiados para residentes con un pequeño aporte de los cruceros que recalan en el muelle." }
      ],
      stats: [
        { n: "10",    l: "Residencia del Corazón intake/año" },
        { n: "800",   l: "Hogares totales (600 nuevos + 200 restauradas) para 2038" },
        { n: "20",    l: "Cupos Magíster en Arquitectura, Taller del Cerro PUCV/año" },
        { n: "1.02M", l: "Gran Valparaíso (2025)" }
      ]
    },
    network: {
      label: "Red del Corazón",
      title: "Seis ciudades. Un latido.",
      lead: "Valparaíso joins Cor del Món as the fourth wave-1 city. Below are the five other cities the network is being built with through 2030.",
      viral: "Andorra writes love in stone. Yokohama in arrivals. Adelaide in festivals. Valparaíso writes love in colour and in funiculars."
    },
    roadmap: {
      label: "La ola rodante",
      title: "Cuatro etapas, al ritmo de Valparaíso",
      lead: "El Faro del Corazón es la contribución de Valparaíso a Cor del Món. Valparaíso se une a la red en la fase Spread, abriendo su monumento en 2038, después de Andorra, Adelaide y Yokohama. Generación llega en 2063.",
      viral: "Valparaíso solo es 42 cerros y un poeta. Valparaíso dentro de Cor del Món es la cuarta ciudad de la red, leyendo a Neruda mientras tres ciudades hermanas ya tienen monumento.",
      milestones: [
        {
          year:     2030,
          stage: "Charter",
          commitment: "Carta del Cor firmada con la Municipalidad de Valparaíso, el Gobierno Regional de Valparaíso, y MINVU (Ministerio de Vivienda y Urbanismo). Concurso internacional de arquitectura para El Faro del Corazón otorgado. Sitio asegurado en Muelle Prat, en el borde del puerto entre el casco UNESCO de los cerros y el muelle de trabajo. Cape Town firma su Carta el año siguiente, anclando el par Valparaíso-Cape Town del wave-1.",
          metrics: { charterSigned: true, competitionAwarded: true, siteSecured: "Muelle Prat" },
          networkContribution: "Valparaíso se convierte en el ancla del Pacífico Sur de Cor del Món, junto con Adelaide. Hospeda la Cor Biennale 2031 dentro del Festival de Viña del Mar tradicional, dos años antes de la apertura de su monumento.",
          status: "concept",
          lastVerified: "2026-Q2"
        },
        {
          year:     2032,
          stage: "Break Ground",
          commitment: "Construcción comienza en El Faro del Corazón y en los primeros 400 cores Hogares del Corazón en Cerro Mariposa. Visa del Corazón piloto abre con la primera cohorte de 100 parejas (propuesta Q2 2026). Aislamiento sísmico base (NCh2745) instalado bajo el plinto de andesita esta primavera. Andorra acaba de operar su monumento; Adelaide y Yokohama están bajo construcción.",
          metrics: { homesUnderConstruction: 400, corVisaCouples: 100, baseIsolationInstalled: true },
          networkContribution: "Valparaíso publica los primeros diez patrones autoría-Valparaíso en la Cor Pattern Library (vivienda incremental Aravena hill-port, color de fachada como identidad, restauración de fachada de hierro). Andorra Daily Ceremony broadcasts comienzan en su monumento; Valparaíso es ahora una de las cuatro ciudades en construcción simultánea.",
          status: "concept",
          lastVerified: "2026-Q2"
        },
        {
          year:     2038,
          stage: "Operational",
          commitment: "El Faro del Corazón abre. Daily Ceremony broadcasts comienzan a la hora Cor declarada por la ciudad desde el mirador del octavo piso sobre la bahía. Los primeros 600 cores Hogares del Corazón nuevos entregados a través de los cerros, Almendral y Gran Valparaíso (Quilpué, Villa Alemana); en paralelo, las primeras 100 casas patrimoniales restauradas en el casco UNESCO. Población del Gran Valparaíso sostenida en 1.05M. TFR recuperándose de 1,4 hacia 1,6. La pérdida histórica de stock patrimonial se ha estabilizado. Los primeros residentes Cor Generation se mudan a las unidades de la red.",
          metrics: { homesNew: 600, homesRestored: 100, monumentHeightM: 47, fertilityRate: 1.6, residentsIncoming: 10, dailyCeremonyActive: true, populationGreaterValparaiso: 1050000 },
          networkContribution: "Valparaíso se une a Andorra, Adelaide, y Yokohama en la rotación de Daily Ceremony, junto con Cape Town y Jaipur que también abren este año. La red ahora hospeda 60 Cor Residentes por año en total (la meta original alcanzada). UV + PUCV + UAI Cor Programme alcanza 600 estudiantes internacionales de posgrado.",
          status: "concept",
          lastVerified: "2026-Q2"
        },
        {
          year:     2063,
          stage: "Generation",
          commitment: "El Faro del Corazón celebra veinticinco años en operación. Los primeros residentes Cor Generation que llegaron en 2038 (entonces de veintipico, hoy de cincuentipico) han criado familias dentro del stock Hogares del Corazón. Una expansión segunda-ola añade 400 cores nuevos en los cerros, llevando el total nuevo a 1.000; en paralelo, la restauración patrimonial alcanza 200 casas históricas adicionales (total restauradas: 300). La pérdida histórica de stock patrimonial de Valparaíso se ha revertido al nivel de 1980. Gran Valparaíso es la ciudad más joven del Chile central por primera vez en cincuenta años.",
          metrics: { networkAgeYears: 25, totalHomesNew: 1000, totalHomesRestored: 300, generationAdults: 700, heritageStockRecovered: "to 1980 baseline" },
          networkContribution: "Valparaíso se gradúa al estado de élder de la red junto con Cape Town y Jaipur (todos del 2063-2065). Valparaíso mentoriza a las ciudades candidatas Wave-2 latinoamericanas (probables: Antofagasta, Concepción, Mar del Plata, Cartagena). El Cuaderno del Faro (las Cartas a Neruda encuadernadas anualmente) se convierte en un volumen reconocido de poesía contemporánea chilena.",
          status: "concept",
          lastVerified: "2026-Q2"
        }
      ]
    }
  },
  feasibility: {
    title: "Restricciones honestas",
    intro: "Lo que un faro de 47m en Muelle Prat realmente debe negociar, y las autoridades reales que tienen el trabajo en sus manos.",
    category: "Restauración patrimonial dentro del Plan Maestro UNESCO + ancla cultural en Muelle Prat + DS-1 vivienda incremental. Categoría existente del urbanismo chileno. No requiere paquete de permiso nuevo.",
    permissionChain: [
      "Empresa Portuaria Valparaíso (EPV) firma el arriendo de largo plazo del sitio Muelle Prat. El Gerente General de EPV firma el MoU.",
      "DIRECTEMAR (Autoridad Marítima) aprueba uso de borde costero.",
      "Consejo de Monumentos Nacionales (CMN) revisa intervenciones en el buffer UNESCO; el Secretario Ejecutivo del CMN firma.",
      "Municipalidad de Valparaíso (Plan Regulador Comunal). El Alcalde firma el MoU cultural.",
      "Gobierno Regional de Valparaíso. El Gobernador Regional aprueba la asignación capital regional.",
      "MINVU (Ministerio de Vivienda y Urbanismo) más MINCAP (Ministerio de las Culturas, las Artes y el Patrimonio) a nivel nacional.",
      "Servicio Nacional de Migraciones, cupo de Visa Subject to Contract para residentes Cor."
    ],
    budgetSources: [
      "MINVU DS-1 (programa existente de subsidio para vivienda incremental, mismo programa que financia los proyectos ELEMENTAL).",
      "MINCAP, infraestructura cultural (Programa de Infraestructura Cultural Pública).",
      "Gobierno Regional de Valparaíso, aporte capital regional (Fondo Nacional de Desarrollo Regional).",
      "Empresa Portuaria Valparaíso, aporte en especie del sitio Muelle Prat.",
      "Cor del Món red, aporte de capital partner.",
      "Filantropía chilena y latinoamericana: Fundación Mar Adentro, Fundación Cultural de Providencia, Centex (Centro de Extensión Cultural de Valparaíso), iniciativas culturales del grupo Quiñenco-Luksic. (Fundación Andes ya no existe; se disolvió en 2008 distribuyendo su capital.)"
    ],
    items: [
      { area: "Puerto",                detail: "Muelle Prat es propiedad de la Empresa Portuaria Valparaíso (EPV). El uso del sitio requiere arriendo de largo plazo con EPV más aprobación de la Autoridad Marítima (DIRECTEMAR). La negociación con EPV se inicia en el año del Charter; el faro no compite con el comercio del puerto, lo enmarca." },
      { area: "UNESCO",                detail: "Las 200 casas patrimoniales restauradas en Cerro Alegre, Cerro Concepción y el Plan requieren aprobación del Consejo de Monumentos Nacionales (CMN). Cor del Món no opera en paralelo al Plan Maestro de Recuperación Patrimonial de la Municipalidad sino dentro de él, sumando una capa de prioridad joven-familia sobre las cuotas existentes." },
      { area: "Sísmica",               detail: "NCh433 más NCh2745 para zona de subducción del Pacífico, revisada por la Cámara Chilena de la Construcción. La aislación basal del faro no es opcional, es obligatoria. Los terremotos de 1906 (M8.2) y 2017 (M6.9) son las referencias locales." },
      { area: "Residencia",            detail: "La Residencia del Corazón (10 entrantes por año) opera dentro del marco existente Subject to Contract / Definitive Permanent Residency de Chile, no como nueva categoría de visa. Servicio Nacional de Migraciones gestiona el cupo dedicado." },
      { area: "Vivienda",              detail: "Los 600 cores incrementales en cerros se asignan a través del MINVU (Ministerio de Vivienda y Urbanismo) usando el subsidio DS-1 existente. Cor del Món no monta un programa de vivienda paralelo." },
      { area: "Cumplimiento",          detail: "Financiamiento revisado bajo la normativa chilena de inversión extranjera (CIIE) y reglas anti-lavado del SII. Toda actividad comercial dentro del faro sigue las reglas del Servicio Nacional del Consumidor." }
    ]
  },
  costs: {
    title: "Costos aproximados (2026 USD)",
    monumentTotal: "USD 40 a 70 millones",
    intro: "Estimaciones de orden de magnitud, ancladas a edificios cívicos chilenos comparables (Centro Cultural Gabriela Mistral remodelado costó USD 25M en 2010; Parque Cultural Valparaíso ex-Cárcel costó USD 18M en 2011). Presupuestos reales después del concurso internacional.",
    stages: [
      { phase: "Charter (2030)",          range: "USD 2 a 4M",   scope: "Concurso internacional de diseño + acuerdo de arriendo con EPV + estudios de sitio Muelle Prat + aprobación CMN para impacto en buffer UNESCO" },
      { phase: "Break Ground (2031-32)",  range: "USD 8 a 14M",  scope: "Aislación basal NCh2745, marco de acero, plinto de mármol Pelequén, obras marítimas en Muelle Prat" },
      { phase: "Construction (2032-37)",  range: "USD 22 a 40M", scope: "Fachada de hierro galvanizado pintado, pabellones de madera laminada, mirador del octavo piso, sistema de circulación switchback" },
      { phase: "Operational (2038)",      range: "USD 6 a 10M",  scope: "Estudio de la Hora de Valparaíso, fitout de ceremonia, programa de inauguración con el Festival de Viña del Mar" }
    ],
    fundingNote: "Mezcla de financiamiento esperada: Gobierno Regional de Valparaíso más MINCAP (Ministerio de las Culturas, las Artes y el Patrimonio) (20-30%), participación red Cor del Món (35-50%), filantropía latinoamericana (Fundación Andes, Luksic Cultural) (15-25%), aporte en especie EPV (sitio). Sin financiamiento de un solo soberano extranjero."
  },
  impact: {
    title: "Impacto y beneficio",
    items: [
      { metric: "600 cores incrementales nuevos en cerros para 2038", note: "En la tradición ELEMENTAL de Aravena: cada core arranca en 40m² y se diseña para que la familia lo duplique en una década. 6 sitios × 100 cores. Sumados al subsidio DS-1 existente del MINVU." },
      { metric: "200 casas patrimoniales restauradas",                   note: "En Cerro Alegre, Cerro Concepción y el Plan, dentro del Plan Maestro de Recuperación Patrimonial. La restauración importa más que la nueva construcción para Valpo: ha perdido 35% de stock histórico en 40 años." },
      { metric: "10 residentes Cor por año",                            note: "Casas restauradas en Cerro Alegre y Cerro Concepción albergan 10 residentes creativos internacionales por año. Estudio en Galería Bahía Utópica y en el taller del Parque Cultural ex-Cárcel." },
      { metric: "Hora de Valparaíso en la transmisión de la red",        note: "Franja semanal en español desde el estudio del faro, dentro de Cor FM anclada en Andorra. Suma voz porteña a la red sin desplazar Radio Festival, Radio Valparaíso ni TVN Regional." },
      { metric: "Faro de 47m en Muelle Prat",                            note: "Altura igual al ascensor histórico Concepción. El monumento iguala al primer cerro, no lo sobrepasa. Visible desde cada cerro, ascensor y balcón sobre la bahía." }
    ]
  },
  alternatives: {
    title: "Si el sitio principal no resulta",
    intro: "Si el arriendo con EPV en Muelle Prat falla, hay caminos alternativos en la región.",
    items: [
      { fallback: "Cerro Concepción (dentro de Valparaíso, buffer UNESCO)", reason: "Mismo contexto cultural, escala más íntima, sin negociación con la autoridad portuaria. Compromiso: la altura tendría que bajar a 30-35m por restricciones del buffer UNESCO." },
      { fallback: "Viña del Mar (ciudad hermana, costa)",                   reason: "Sin carga UNESCO, contexto de balneario más turístico, más espacio buildable. Compromiso: Viña no es Valparaíso. La narrativa de Neruda y la nueva canción se diluye." },
      { fallback: "Concepción (sur de Chile, ciudad universitaria)",        reason: "Solo si todo lo anterior falla. Concepción tiene historia industrial, contexto sísmico aún más fuerte (zona de la falla 1960), y un escenario universitario joven. Pero pierde la conexión con el imaginario porteño." }
    ]
  }
};

export default vocab;
if (typeof window !== "undefined") {
  window.ValparaisoVocab = vocab;
}
