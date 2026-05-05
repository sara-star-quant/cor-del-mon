# Language Review (LLM Pass, Q2 2026)

**This is not a native-speaker review.** This document captures a careful
language-model pass over every non-English string on the Cor del Món sites.
The fixes applied below are the ones I am confident about. The questions in
the "still needs native-speaker review" lists at the bottom of each city
section need actual native speakers.

When a real native speaker reviews a section, they should:
1. Replace the relevant block in the city's `vocab.js`.
2. Strike through that section's "needs review" item below.
3. Sign with their name and the date in the credits.

---

## Permission-chain and budget-source review (PR-2 follow-up, 2026-05-03)

A simulated panel of five reviewers (Catalan/Andorran-admin, Japanese-admin, Chilean-admin, Indian-admin, Western-Cape-admin) audited each city's `feasibility.permissionChain` and `feasibility.budgetSources`. Findings and applied fixes:

### Andorra (Comú-procedure reviewer)
- "Cònsol Major presides over the council vote" tightened to: Comú general session (Cònsol Major as head, Cònsol Menor as deputy, twelve conselleurs total) votes on parcel reclassification.
- "Ministeri d'Ordenament Territorial i Habitatge" corrected to "Ministeri d'Ordenament Territorial (which carries the Departament d'Habitatge)".
- "Departament de Cadastre" corrected to "Servei de Cadastre at each relevant Comú" (cadastre is parish-level in Andorra).
- "European Investment Bank cultural-infrastructure facility" softened: EU/EIB facilities are not currently open to Andorra; flagged as a future option contingent on Association-Agreement entry into force.

### Yokohama (Japanese-admin reviewer)
- "MM21 District Planning Council" corrected to "Minatomirai 21 Suishin Kyogi-kai (MM21 Promotion Council)".
- "Mitsubishi Estate signs the Pier 8 leasehold" corrected: Pier 8 / Shinko-futo is **Yokohama City Port and Harbor Bureau** land. Mitsubishi Estate is a major MM21 land-holder elsewhere (Landmark Tower district) but not the Pier 8 lessor.
- "MLIT sign-off on the foreign-led architectural design" softened: MLIT regulates the Building Standard Law framework but does not sign each project; the architect-of-record (jugyo-shi-jimusho) registered with Kanagawa Prefecture handles the foreign-led design submission.
- "AIJ seismic-isolation peer review" corrected: AIJ is a learned society (expert input only); statutory peer review is via a **Building Performance Evaluation Organization** (Sei-no Hyoka Kikan) certified under the Building Standard Law.
- "Bank of Japan plus Financial Services Agency for foreign-source funding" corrected to: **FEFTA (Foreign Exchange and Foreign Trade Act)** prior/post-notification administered by the Ministry of Finance plus the Agency for Cultural Affairs as the relevant ministry of jurisdiction. BoJ is operational, not regulatory.
- "Yokohama Cultural and Tourism Bureau (Bunka-kanko-kyoku)" added as the actual cultural-anchor preparer before the Mayor signs.

### Valparaíso (Chilean-admin reviewer)
- "Fundación Andes" REMOVED from budget sources. Fundación Andes was dissolved in 2008 after distributing its capital. Replaced with current Chilean foundations: **Fundación Mar Adentro, Fundación Cultural de Providencia, Centex (Centro de Extensión Cultural de Valparaíso), iniciativas culturales del grupo Quiñenco-Luksic**.

### Jaipur (Indian-admin reviewer)
- "Jaipur Municipal Corporation (JMC)" corrected to "Jaipur Municipal Corporation Greater (JMC-Greater, JGMC)" since JMC bifurcated in 2019; Mansarovar falls under JMC-Greater.
- "Department of Housing" corrected to "Department of Urban Development and Housing (UDH)" (single combined Rajasthan department).
- "Mukhyamantri Awas Yojana" corrected to the Rajasthan-specific scheme name "Mukhyamantri Jan Awas Yojana (MJAY)" administered by the Rajasthan Housing Board under UDH.
- "Department of Art and Culture" corrected to "Department of Art, Literature, Culture and Archaeology (DACA)".
- "Walled City Heritage Cell" corrected to "Jaipur Walled City Heritage Management Committee" (the post-UNESCO 2019 management body convened under JDA).

### Cape Town (Western-Cape-admin reviewer)
- "MEC for Local Government, Environmental Affairs and Development Planning" corrected: the post-2024 Western Cape Cabinet reshuffle moved Housing to the **Department of Infrastructure** under the **MEC for Infrastructure**. Local Government, Environmental Affairs and Development Planning is a separate MEC that reviews the spatial-planning side. Both signatures are needed.

### Adelaide (SA-admin reviewer; no fixes applied)
- All listed authorities (City of Adelaide, State Planning Commission, Renewal SA, Department for Aboriginal Affairs and Reconciliation, Kaurna Yerta Aboriginal Corporation, Investment SA) are accurate as of 2026.
- The federal "Office for the Arts in the Department of Infrastructure" framing is accurate (Office for the Arts sits under DITRDCA since 2022).

### Still needs actual reviewer follow-up
- A Comú-secretary review of the Andorra cadastre + Comú vote sequencing.
- A Yokohama Cultural and Tourism Bureau staff review of cultural-anchor MoU precedent.
- A Valparaíso/Empresa Portuaria review of the Muelle Prat lease typology.
- A JDA Jaipur Walled City Heritage Management Committee review of the partnership memorandum framing.
- A Western Cape Department of Infrastructure review of BNG family-priority overlay precedent.

---

## Architecture-mural phrases (PR-1, 2026-05-03)

Three mural texts need community-level review before any real-world implementation:

- **Adelaide `PIRRALTHI`** (claimed Kaurna for "I am here"): I am NOT confident this is the correct Kaurna form or orthography. Kaurna has been in active revival since the 1990s through Kaurna Plains School and Kaurna Warra Karrpanthi. Before any built-form deployment, replace with a confirmed Kaurna phrase from published Kaurna Warra Karrpanthi materials, or remove the mural slot entirely. **Do NOT ship to a real wall without Kaurna-elder review.**
- **Cape Town `SALA KAHLE`** (isiXhosa farewell-as-greeting, "stay well"): widely known as a spoken farewell. Reasonably safe LLM pick, but the question is whether it reads as natural in an architectural-mural context (vs only a verbal farewell). Flag for native isiXhosa-speaker review on register.
- **Jaipur `ठहरो / गुलाबी में / जयपुर का दिल`** (Hindi: "Stay / In Pink / Heart of Jaipur"): correct standard Hindi, confidence high on grammar. Open question: do these read as Pink City voice (Marwari-influenced Hindi) or as Delhi/Mumbai voice? Flag for Rajasthani Hindi-speaker review on register.

---

## Yokohama (Japanese)

### Fixes applied
- `伝統の再構成` → `伝統の再解釈`. The original (literally "reconstruction
  of traditions") reads structural and bureaucratic; the replacement
  (literally "reinterpretation") matches the warm "reimagined" voice.
- Section monograms changed from Roman letters (G/M/F/R) to single Japanese
  kanji (食/音/祭/儀) so the page does not have a Romance-language layer
  bolted on top of Japanese content.
- Section titles: `Gastronomia (味の心)` → `Food (味の心)`, etc. Spanish
  word in Japanese context was a copy-paste leftover from the Andorra
  template.
- Removed the `del Cor` suffix from item names (`Chukagai del Cor`,
  `Yamate Bakery del Cor`, `Iekei del Cor`, `Bayside Jazz del Cor`,
  `Yokohama del Cor`, `Cha-no-yu del Cor`). These items are now named for
  the actual existing Yokohama tradition they extend (Chukagai Cor weeks,
  Yamate yokopan, Iekei paired-bowl, Yokohama Jazz Promenade Cor strand,
  Yokohama Festival Cor strand, Cha-no-yu pair sitting).
- "Letters to Minatokokoro" → "Senbazuru letters" (the actual paper-crane
  tradition, named for what it is in Japanese).

### Defensible choices kept
- `心の網 (Kokoro no Ami)` for "Heart Network" reads as "net of the heart"
  in Japanese, more poetic than literal "network". A native review may
  prefer `心の輪` (ring of hearts) or just the katakana loanword
  `ハートネットワーク`. Kept the poetic form.
- `心宿 (Kokoro Yado)` for "Heart Residency": coined compound, defensible
  brand name. Native review may prefer `ハートレジデンシー` katakana.
- `港心 (Minatokokoro)` for the monument: coined brand name, defensible.

### Still needs native-speaker review
- All hero-section copy fluency.
- The kanji choice in section monograms (食/音/祭/儀): a native speaker
  may prefer different selections.
- "Senbazuru letters": confirm the senbazuru (千羽鶴) folding context fits
  the Yokohama Triennale exhibition framing.

---

## Valparaíso (Chilean Spanish)

### Fixes applied
- `mientras El Faro empieza a encender` → `empieza a encenderse`
  (reflexive needed; "encender" is transitive and requires an object).
- `nueva canción chilena` → `de la nueva canción chilena` (article
  needed for the genre name).
- `Ningún Cor del Món es serio sobre el amor` → `Ningún Cor del Món
  toma en serio el amor` (the original is a literal English-to-Spanish
  calque; the replacement is idiomatic Spanish).
- `taller MArch focalizado en la PUCV` → `enfocado en la PUCV`
  (`focalizado` exists but `enfocado` is the natural Chilean choice).
- `un overlay de prioridad joven-familia` → `una capa de prioridad para
  familias jóvenes` (drops English `overlay` anglicism and the awkward
  hyphenated `joven-familia`).
- `Cor Residency` (English in mid-Spanish-sentence) → `Residencia Cor`.
- `wave-1` (English) → `de la primera ola`.
- `Loop Heart Trolebús` → `Trolebús del Corazón (recorrido del Plan)`
  (consistent Spanish word order).
- `Hospital Van Buren postnatal` (calque) → `Apoyo postnatal en el
  Hospital Van Buren` (natural prepositional phrase).
- `Pelegrinaje` → `Peregrinaje` (correct spelling).
- `Jardines en Hogares del Corazón` → `Salas cuna en Hogares del
  Corazón` (Chilean technical term for crèche; "jardines" usually means
  pre-school for over-2s).
- The `traditions.lead` was English bleed in a Spanish-led section;
  rewrote in Chilean Spanish.
- `escalera-edificio` → `edificio-escalera` (correct compound order).
- `mayor de 65` → `mayor de 65 años` (more natural).

### Defensible choices kept
- `chica` (informal Chilean for "small") in the youth lead. Fits the
  warm conversational voice.
- `de la primera ola` instead of `wave-1`. May read formal; Chilean
  reviewer can decide.
- `vivienda incremental en la tradición ELEMENTAL`: kept the all-caps
  `ELEMENTAL` as Aravena's office uses it that way in their own copy.

### Still needs native-speaker review
- `Festival Cor del Mar` and `Cor del Cerro` brand-mash names: native
  speaker should confirm these read as Chilean Spanish, not as something
  cobbled together by a Catalan project.
- `Trolebús Acústico` is fine but "trolebús" specifically refers to the
  trackless trolley vehicle; the unidad mayor name in Chilean usage is
  `trolebús` or sometimes `troles`. Confirm.
- Pisco Sour del Cor: a Chilean would have an opinion on whether the
  chancaca syrup variation reads as authentic or as foreign-imposed.

---

## Jaipur (Hindi / Devanagari)

### Fixes applied
- `परम्पराएँ` → `परंपराएं` (modern standard Hindi orthography; the
  half-character `म्` form is older / more formal-literary).
- Section monograms changed from Roman letters (G/M/F/R) to single
  Devanagari letters (अ/स/उ/र), with kanji-style "anchor character +
  English+Devanagari title" pattern. So `Gastronomy` becomes
  `अन्न · Food`, `Música` becomes `संगीत · Music`, etc.
- Removed `Sant Jordi` (Catalan) and `Pelegrinatge` (Catalan) leftovers
  from the Andorra template. Replaced with culturally-sourced names:
  `Phool-Patta Diwas (फूल-पत्ता दिवस)` and `Yatra to Hawa Mahal
  (हवा महल यात्रा)`.
- Removed `del Cor` suffix from items (`Cor Manganiyar`, `Hriday Tabla`,
  `Holi del Cor`, `Teej del Cor`, `Cor Diwali`). Replaced with names that
  describe what the tradition actually is (`Manganiyar at Jawahar Kala
  Kendra`, `Hriday Tabla composition`, `Pink Holi (rangon ka pyaar)`,
  `Teej for couples (तीज जोड़ी)`, `Cor lights at Diwali`).
- `Pink City Sant Jordi` reframed as `Phool-Patta Diwas` with the
  Rajasthani phool-patta wedding tradition as the actual source, not as
  a Catalan import.
- `18:00 IST` (rigid Western clock time) → "the local sunset hour"
  (since Jaipur sunset varies from 17:30 in winter to 19:30 in summer
  and 18:00 IST in summer is full daylight, which would not be a sunset
  ceremony).
- Added a sentence in `Ceremonies at Hriday Mahal` clarifying that the
  monument-pavilion ceremony is for the Western model only; multi-day
  Hindu weddings stay across their existing baraat venues. This responds
  to the cultural-realism critique that one monument hour cannot host a
  real Hindu wedding.

### Defensible choices kept
- `हृदय जाल (Hriday Jaal)` for "Heart Network" reads as "net of the
  heart". Like the Japanese, more poetic than literal `नेटवर्क`. Native
  review may prefer the loanword.
- `लम्बी लहर (lambi lahar)` for "long wave / rolling wave". Native
  Hindi.
- `गुलाबी शहर (Gulabi shahar)` for "Pink City". Universally used in
  Jaipur.

### Still needs native-speaker review
- The Devanagari section monograms (अ/स/उ/र): a Hindi-speaker may prefer
  different anchor characters. The choice was based on the first
  character of the romanised category word (अन्न / संगीत / उत्सव / रिवाज़).
- `Phool-Patta Diwas` is plausibly a real Rajasthani wedding term but I
  am not certain it is in everyday use. A Rajasthani would know whether
  this names something that exists or sounds invented.
- `तीज जोड़ी (Teej Jodi)` for "Teej for couples": "jodi" (pair, couple)
  is correct Hindi, but a Rajasthani may prefer `तीज जोड़ा` or another
  form.
- The `पुनर्कल्पित परंपराएं` traditions-section title is correct but
  formal/Sanskritic. A more colloquial Hindi alternative could be
  `नई कहानी, पुरानी रस्में`.

---

## Cape Town (English with isiXhosa, Afrikaans, Cape Malay, Khoekhoegowab references)

### Fixes applied
- The Khoekhoegowab name `ǁHui !Gaeb` (where the clouds gather) was
  already correctly transcribed with the lateral-click `ǁ` and the
  alveolar-click `!`. No change.

### Defensible choices kept
- `Bo-Kaap bredie`: bredie (slow-cooked stew) is a Cape Malay term,
  correct usage.
- `Tweede Nuwe Jaar` (Cape Minstrels parade, 2 January): Afrikaans,
  correct usage.
- Khoekhoen and San as the traditional custodians of the Cape Town
  area: historically accurate.

### Still needs native-speaker review
- The actual content does not contain extended isiXhosa or Khoekhoegowab
  text; only place names and tradition names. A Capetonian reviewer
  should confirm cultural-respect framing in the traditions section,
  particularly "Cape Heritage table" with "Khoekhoen-traditional
  ingredients (veldkos, dassiepis, melkbos)". A Khoekhoen-language
  consultant or San-community partnership would be the right way to
  ground this.
- "Mountain conversations" on Heritage Day (24 September): confirm the
  framing respects the day's actual purpose (formerly Shaka Day,
  multi-cultural reframing) and is not appropriative.

---

## Andorra (Catalan)

### Fixes applied
- None. The Catalan content (`On l'amor es construeix`, `Llars del Cor`,
  `Xarxa del Cor`, `Residència del Cor`, `Quatre barres`) reads as
  natural Catalan.

### Defensible choices kept
- `Xarxa del Cor` for "Heart Network": `xarxa` is the natural Catalan
  word for network (compare Japanese `心の網` and Hindi `हृदय जाल`
  which use the more literal "net" calque).
- `Cor FM`, `Cor Kids TV`: English-Catalan brand mix, defensible as
  international brand names.

### Still needs native-speaker review
- The `Cor` brand prefix (`El Cor Viu`, `Llars del Cor`, `Cor FM`, etc.):
  `cor` in Catalan literally means "heart". A native Catalan-speaker
  should confirm this reads as natural Catalan branding rather than as
  awkward English-Catalan code-switching.

---

## Cross-cutting items still owed

1. **18:00 ceremony timing**: harmonised in some places to "local sunset
   hour" but rigid `18:00 LOCAL_TZ` still appears in others. A future
   PR should sweep all references and either commit to "local sunset" or
   to "the city's chosen Cor hour" with the actual hour set per city.
2. **Cor Residency capacity**: still uniform at 10/year per city across
   the network. Andorra (microstate, ~5/year is more realistic) and
   Yokohama (international port, capable of 20+/year) should not be
   the same number. Worth a follow-up.
3. **"African cluster" of Cape Town + Marrakech + Stone Town Zanzibar**
   remains geographically uncomfortable: three distinct cultural zones
   (Southern African, Maghrebi-Arab, Swahili-coast). Worth revisiting
   with input from people from each region.
4. **Per-city housing typology**: "12 units around a heart-shaped
   courtyard" is genuine in Catalan (patio), Indian (chowk), and Latin
   American (patio) housing traditions. It is not native to Japanese,
   South African, or modern Australian housing. Each city's typology
   should map to its actual local family-housing pattern.

---

*Generated 2026-05-03 by a careful LLM language-pass. Updates welcome
from any native speaker; please follow the format above when updating.*
