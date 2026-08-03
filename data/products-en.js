/* ============================================================
   STILO LAB — CATALOGO PRODOTTI
   ------------------------------------------------------------
   Questo file alimenta HOME, ANTEPRIMA e GLOSSARIO INGREDIENTI.
   Le schede prodotto sono invece pagine HTML statiche nella cartella
   prodotti/ : prodotti/<id>.html — si modificano direttamente lì.

   ▸ Per AGGIUNGERE un prodotto: copia un blocco {...} e cambia i valori
     (comparirà automaticamente in home, anteprima e glossario),
     poi duplica una pagina in prodotti/ e rinominala prodotti/<id>.html.

   ▸ Per SOSTITUIRE il mockup con una FOTO REALE:
     metti la foto in  assets/img/  e imposta
        image: "assets/img/nomefile.png"
     (se image è null, il sito genera la scatola-mockup via CSS).
     È la stessa immagine che compare nella card in home.

   ▸ theme: colori del prodotto (pannello scatola, card, testi).
   ▸ zones: aree evidenziate nello schema corpo dell'anteprima.
     Valori possibili: "testa" | "nervi" | "addome" | "pelvi" | "muscoli" | "gambe"
   ▸ perChi: icone possibili → donna, uomo, adulto, anziano, sport,
     lavoro, stress, stagione, digestione, alimentazione, studio, notte
   ============================================================ */

window.SITE = {
  brandName: "stilo",
  brandAccent: "Lab",
  brandSub: "FARMACIA STILO",
  claim: "Wellbeing mirato,\nformule essenziali.",
  claimHighlight: ".",
  heroText:
    "Stilo Lab sviluppa integratori alimentari con ingredienti selezionati e formule essenziali, per accompagnarti ogni giorno nel tuo benessere naturale.",
  formulesTitle: "Our formulas, designed for your balance.",
  formulesSub: "Integratori alimentari con ingredienti selezionati e formule essenziali.",

  /* ——— Sezione "Our approach" (home + chi-siamo) ——— */
  approach: {
    title: "Our approach",
    intro:
      "We do not simply add “trending” ingredients. Every extract is chosen by weighing the quality of the raw material, standardisation, the scientific literature, bioavailability and compatibility with the other components of the formula, with the aim of arriving at a rational, coherent composition.",
    steps: [
      { title: "Review of the literature", text: "Every formula starts from an analysis of the available scientific evidence." },
      { title: "Standardised extracts", text: "We select standardised extracts, for quality that stays consistent over time." },
      { title: "Assessment of assays", text: "We verify the actual concentration of the active constituents." },
      { title: "Setting effective doses", text: "Dosages consistent with the literature, never token amounts." },
      { title: "Checking synergies", text: "We assess compatibility and synergies between the ingredients of the formula." }
    ]
  },

  footerNote: "© 2026 Stilo Lab – Farmacia Stilo.\nAll rights reserved.",
  email: "info@farmaciastilo.it",
  phone: "+39 000 000 0000",

  /* ——— WhatsApp: DA CONFIGURARE ———
     Metti il numero in formato internazionale, solo cifre: niente +, niente
     spazi, niente zero iniziale. Es. per +39 333 123 4567 → "393331234567".
     Finché resta vuoto, il tasto nella sezione contatti resta spento. */
  whatsapp: "",
  address: "Via Esempio 1, 00000 Città (XX), Italy"
};

window.PRODUCTS = [
  /* ────────────────────────────────────────────── GEAR-UP */
  {
    id: "gear-up",
    name: "GEAR-UP",
    displayName: "Gear-up",
    tagline: "Adaptogenic tonic for mood and mental wellbeing",
    boxSubtitle: "ADAPTOGENIC TONIC FOR MOOD AND MENTAL WELLBEING",
    boxClaim: "FOOD SUPPLEMENT WITH RHODIOLA AND REISHI",
    shortIngredients: "Rhodiola and Reishi",
    format: "30 vegetable capsules",
    weight: "19,3 g",
    image: "assets/img/gearupmockup.png",
    cardImage: null,
    illustration: "bolt",
    theme: {
      main: "#377998",
      dark: "#346b85",
      cardBg: "#dbecf0",
      soft: "#dde9ec"
    },

    zones: ["testa"],
    zoneLabel: "Mind and mood",
    cosa:
      "A supplement formulated to support the body through periods of intense physical and mental effort, when the demand for energy, concentration and adaptability runs high. Rhodiola rosea and Reishi support the physiological response to stress and cognitive performance.",
    perChi: [
      { icon: "lavoro", label: "Those going through high-pressure periods" },
      { icon: "studio", label: "Students during exams" },
      { icon: "stress", label: "Those feeling a drop in mental energy" },
      { icon: "notte", label: "Those who struggle to recover their energy" }
    ],
    quando: ["Periods of prolonged stress", "Dips in motivation and energy", "Changes of pace and of season"],

    descrizione:
      "GEAR-UP is a supplement formulated to support the body through periods of intense physical and mental effort, when the demand for energy, concentration and adaptability runs high. The combination of Rhodiola rosea and Reishi (Ganoderma lucidum) is designed to support the physiological response to stress and help maintain cognitive performance and general tone.",
    claimTriple: ["Focus", "Energy", "Adaptation"],
    benefici: [
      "Supports the body's resistance to physical and mental stress, sustaining the physiological activity of the hypothalamic-pituitary-adrenal (HPA) axis",
      "Supports concentration, clarity and the ability to focus",
      "Supports energy levels during periods of fatigue",
      "Contributes to the balance of the body's natural defences",
      "Supports the physiological processes of adaptation"
    ],
    comeAgisce: [
      { title: "Rhodiola rosea", text: "Root assayed at 3% rosavins, a standardised extract traditionally used as an adaptogen to support physical and mental resilience. It helps maintain cognitive performance under stress and fatigue, and supports energy and mental clarity." },
      { title: "Reishi (Ganoderma lucidum)", text: "Fruiting body assayed at 30% bioactive polysaccharides, a functional mushroom traditionally used to support the body's natural defences. It helps maintain physiological balance and supports the adaptive response to oxidative stress. It is the subject of studies for its potential role in supporting the balance of immune function and the body's physiological response to environmental and oxidative stressors." }
    ],
    sinergia: {
      subtitle: "A formula designed for adaptive performance",
      intro:
        "Gear-Up is not simply a combination of adaptogens, but a rational formulation built to support the stress response on several levels.",
      points: [
        { title: "Rhodiola rosea", text: "support for mental performance and resistance to fatigue" },
        { title: "Reishi", text: "support for physiological balance and the body's natural defences" }
      ],
      outro:
        "The formulation uses standardised, assayed extracts, selected to guarantee consistent quality and a coherent active profile."
    },
    ingredientiTabella: [
      { nome: "Rhodiola rosea d.e.", quantita: "300 mg", max: "600 mg" },
      { nome: "of which rosavins", quantita: "9 mg", max: "18 mg" },
      { nome: "Ganoderma lucidum d.e.", quantita: "200 mg", max: "400 mg" },
      { nome: "of which polysaccharides", quantita: "60 mg", max: "120 mg" }
    ],
    dosiRiferite: "Typical content per daily dose.",
    doseCol1: "1 capsule",
    doseColMax: "Max dose (2 caps)",
    modoUso:
      "One capsule at breakfast and one after lunch, according to need, with a glass of water.",
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Food supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. During pregnancy and breastfeeding, seek the advice of your pharmacist or doctor.",
    conservazione:
      "Store tightly closed in a cool, dry place, away from direct sunlight and heat sources. The expiry date refers to the product correctly stored in an intact pack.",
    ingredientiCompleti:
      "Rhodiola (Rhodiola rosea L.) root d.e. assayed at 3% rosavins; Reishi (Ganoderma lucidum (Curtis) P.) fruiting body d.e. assayed at 30% polysaccharides; Coating agent (capsule shell): cellulose; Anti-caking agents: fatty acids, magnesium salts of fatty acids, silicon dioxide; vegetable gelatine capsule. Gluten free · Lactose free · Vegetable capsule, suitable for vegetarians and vegans."
  },

  /* ────────────────────────────────────────────── DETOXA */
  {
    id: "detoxa",
    name: "DETOXA",
    displayName: "Detoxa",
    tagline: "For liver and digestive function",
    boxSubtitle:
      "FOOD SUPPLEMENT WITH MILK THISTLE, ARTICHOKE, DANDELION AND FUMITORY",
    shortIngredients: "Milk thistle, Artichoke, Dandelion, Fumitory and NAC",
    format: "30 vegetable capsules",
    weight: "19,3 g",
    image: "assets/img/detoxamockup.png",
    cardImage: null,
    illustration: "purify",
    theme: {
      main: "#6d7a34",
      dark: "#5e6b2c",
      cardBg: "#f0f4d7",
      soft: "#e8ecd5"
    },

    zones: ["addome"],
    zoneLabel: "Liver and digestion",
    cosa:
      "Five complementary actives — milk thistle, artichoke, dandelion, fumitory and NAC — brought together in a single formula to support the body's natural cleansing process, liver function and lighter digestion.",
    perChi: [
      { icon: "digestione", label: "Those who feel heaviness after meals" },
      { icon: "alimentazione", label: "During or after periods of rich eating" },
      { icon: "dieta", label: "Those following a ketogenic diet" },
      { icon: "stagione", label: "For cleansing at the change of season" },
      { icon: "adulto", label: "Adults who want to support the liver" }
    ],
    quando: ["After the holidays", "At the change of season", "Periodic cleansing cycles"],

    descrizione:
      "DETOXA is a supplement designed to support the body's natural cleansing process, encourage lighter digestion and support the proper working of the liver, the organ central to eliminating waste and to metabolism. It works through the synergistic action of milk thistle, artichoke, dandelion, fumitory and N-acetylcysteine (NAC).",
    claimTriple: ["Cleanses", "Protects", "Lightens"],
    benefici: [
      "Supports the body's physiological cleansing",
      "Supports liver function",
      "Improves digestion and reduces the feeling of heaviness",
      "Supports the drainage of body fluids",
      "Contributes to the metabolism of fats and cholesterol",
      "Supports the body's natural antioxidant defences"
    ],
    beneficiNota:
      "A properly working liver also contributes to the physiological metabolism of many substances, hormones included.",
    comeAgisce: [
      { title: "Milk thistle", text: "Fruits assayed at 80% silymarin. It helps protect liver cells from oxidative stress and supports the liver's natural capacity to regenerate." },
      { title: "Artichoke", text: "Leaves assayed at 5% chlorogenic acid. It supports the production and flow of bile, easing the digestion of fats and contributing to the physiological metabolism of cholesterol." },
      { title: "Dandelion", text: "Root assayed at 2% inulin. It promotes the body's cleansing, supports diuresis and contributes to bowel regularity thanks to its inulin content." },
      { title: "Fumitory", text: "Aerial parts assayed for protopine. Traditionally used to support hepatobiliary function: it contributes to the physiological flow of bile and supports digestive processes, useful in cases of slow digestion and heaviness after meals." },
      { title: "N-acetylcysteine (NAC)", text: "A precursor of cysteine and of glutathione, one of the body's main antioxidant systems. It supports natural defences against oxidative stress and the physiological processes of cellular detoxification." }
    ],
    sinergia: {
      subtitle: "A formulation built on synergy",
      intro:
        "DETOXA is not merely a pairing of ingredients traditionally used for the liver: each component was selected to act on complementary aspects of liver physiology.",
      points: [
        { title: "Milk thistle", text: "protection and support of hepatocytes" },
        { title: "NAC", text: "support for endogenous antioxidant systems and glutathione" },
        { title: "Artichoke and fumitory", text: "biliary and digestive function" },
        { title: "Dandelion", text: "physiological cleansing, fluid drainage and bowel regularity" }
      ],
      outro:
        "The formulation was developed by pharmacists with an approach based on synergy between the actives, favouring standardised extracts and high-quality raw materials."
    },
    ingredientiTabella: [
      { nome: "Milk thistle d.e.", quantita: "150 mg" },
      { nome: "of which silymarin", quantita: "120 mg" },
      { nome: "Dandelion d.e.", quantita: "100 mg" },
      { nome: "of which inulin", quantita: "2 mg" },
      { nome: "Artichoke d.e.", quantita: "100 mg" },
      { nome: "of which chlorogenic acid", quantita: "5 mg" },
      { nome: "Fumitory d.e.", quantita: "50 mg" },
      { nome: "of which protopine", quantita: "20 mcg" },
      { nome: "N-acetylcysteine (NAC)", quantita: "50 mg" }
    ],
    dosiRiferite: "Typical content per daily dose (1 capsule).",
    modoUso:
      "One capsule a day, preferably after breakfast, with a glass of water.",
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Food supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. Do not give to children under three years of age. During pregnancy and breastfeeding, seek the advice of your pharmacist or doctor.",
    conservazione:
      "Store tightly closed in a cool, dry place, away from direct sunlight and heat sources. The expiry date refers to the product correctly stored in an intact pack.",
    ingredientiCompleti:
      "Milk thistle (Silybum marianum (L.) Gaertn.) fruit d.e. assayed at 80% silymarin; Dandelion (Taraxacum officinale (L.) Weber ex F.H.Wigg.) root d.e. assayed at 2% inulin; Coating agent (capsule shell): cellulose; Artichoke (Cynara scolymus L.) leaf d.e. assayed at 5% chlorogenic acid; Anti-caking agents: fatty acids, magnesium salts of fatty acids, silicon dioxide; Fumitory (Fumaria officinalis L.) aerial parts d.e. assayed at 0.04% protopine; N-acetylcysteine. Gluten free · Lactose free · Vegetable capsule, suitable for vegetarians and vegans."
  },

  /* ────────────────────────────────────────────── NEVRALIS */
  {
    id: "nevralis",
    name: "NEVRALIS",
    displayName: "Nevralis",
    tagline: "Advanced support for nervous system function",
    boxSubtitle:
      "FOOD SUPPLEMENT WITH PROLONGED-RELEASE ALPHA-LIPOIC ACID, B VITAMINS, QUATREFOLIC® FOLATE, MERIVA® TURMERIC AND VITAMIN D",
    boxClaim: "ADVANCED SUPPORT FOR NERVOUS SYSTEM FUNCTION",
    shortIngredients: "Prolonged-release α-lipoic acid, B vitamins, Quatrefolic®, Meriva® turmeric and vitamin D",
    format: "30 tablets",
    weight: "41,4 g",
    image: "assets/img/nevralismockup.png",
    cardImage: null,
    illustration: "neuron",
    theme: {
      main: "#3b5fa0",
      dark: "#2b487d",
      cardBg: "#dbe2ed",
      soft: "#e0e4eb"
    },

    zones: ["testa", "nervi", "muscoli"],
    zoneLabel: "Nervous system and muscles",
    cosa:
      "A complete formula bringing together prolonged-release α-lipoic acid, B-group vitamins, active Quatrefolic® folate, turmeric from the patented Indena® extract and vitamin D, to support normal nervous system function, energy metabolism and protection from oxidative stress.",
    perChi: [
      { icon: "lavoro", label: "Those facing periods of intense effort" },
      { icon: "anziano", label: "Over-60s, for neuromuscular tone" },
      { icon: "sport", label: "Those putting their muscles under repeated strain" },
      { icon: "stress", label: "During periods of mental and physical fatigue" }
    ],
    quando: ["Persistent fatigue", "Recurring tingling and tension", "On a professional's advice"],

    descrizione:
      "NEVRALIS is a food supplement formulated to support normal nervous system function through a synergistic combination of prolonged-release α-lipoic acid, B-group vitamins, active Quatrefolic® folate, turmeric from the patented Indena® extract and vitamin D. A complete formula pairing selected ingredients with innovative technologies to support energy metabolism, contribute to protection from oxidative stress and promote the body's physiological balance.",
    claimTriple: ["Nerve function", "Cellular energy", "Protection"],
    benefici: [
      "Contributes to the normal function of the nervous system",
      "Contributes to normal energy-yielding metabolism",
      "Contributes to the reduction of tiredness and fatigue",
      "Contributes to normal homocysteine metabolism",
      "Contributes to normal psychological function e alla normale emopoiesi",
      "Contributes to the maintenance of normal muscle function and of normal bones and teeth",
      "Contributes to the normal function of the immune system",
      "Supports digestive function, liver function and joint function"
    ],
    beneficiNota:
      "Prolonged-release α-lipoic acid and Phytosome® curcuminoids help counter oxidative stress, supporting cellular balance and the wellbeing of the nervous system.",
    comeAgisce: [
      { title: "Prolonged-release α-lipoic acid", text: "A compound naturally present in the body and one of the most studied antioxidants for its role in cellular, energy and glucose metabolism. The prolonged-release technology favours a gradual availability of the active through the day, complementing the action of the B-group vitamins. Its antioxidant activity helps counter oxidative stress, supporting cellular balance and the wellbeing of the nervous system." },
      { title: "Vitamins B1, B6 and B12", text: "They play a fundamental role in the physiological processes linked to the nervous system and to energy production: they contribute to the normal function of the nervous system and to normal energy-yielding metabolism. Vitamins B6 and B12 also contribute to the reduction of tiredness and fatigue; vitamin B6 to normal homocysteine metabolism." },
      { title: "Active Quatrefolic® folate", text: "The active, highly bioavailable form of folate (5-MTHF), directly usable by the body. Folate contributes to normal homocysteine metabolism, normal psychological function, normal haematopoiesis and the reduction of tiredness and fatigue, making it an important support in metabolic and cellular processes." },
      { title: "Meriva® Phytosome® turmeric (Indena®)", text: "A patented extract of Curcuma longa rhizome, guaranteeing high quality standards and great reliability of the raw material. Turmeric supports digestive function and the working of the digestive system, supports liver and joint function and exerts an antioxidant action. It also contributes to the body's wellbeing in relation to menstrual cycle discomfort." },
      { title: "Vitamin D (cholecalciferol)", text: "It contributes to the normal function of the immune system, to the maintenance of normal muscle function and to the maintenance of normal bones and teeth. It also contributes to the normal absorption and use of calcium and phosphorus and plays a part in the process of cell division." }
    ],
    sinergia: {
      subtitle: "A synergy designed for the wellbeing of the nervous system",
      intro:
        "The pairing of prolonged-release α-lipoic acid, B-group vitamins, active Quatrefolic® folate, patented Indena® turmeric and vitamin D makes NEVRALIS a complete formulation, designed to accompany the body in maintaining its physiological balance.",
      points: [
        { title: "Prolonged-release α-lipoic acid", text: "gradual availability through the day and protection from oxidative stress" },
        { title: "B-group vitamins", text: "nervous system function and energy metabolism" },
        { title: "Quatrefolic® folate", text: "the active 5-MTHF form, homocysteine metabolism and psychological function" },
        { title: "Meriva® turmeric", text: "antioxidant action and digestive, liver and joint support" },
        { title: "Vitamin D", text: "muscle and immune function, maintenance of bones and teeth" }
      ],
      outro:
        "A formula pairing selected ingredients with innovative technologies — patented extracts and active vitamin forms — to guarantee consistent quality and a coherent active profile."
    },
    ingredientiTabella: [
      { nome: "α-lipoic acid (prolonged release)", quantita: "600 mg" },
      { nome: "Meriva® Phytosome® curcuminoids (Curcuma longa rhizome d.e.)", quantita: "250 mg" },
      { nome: "Thiamine (vit. B1)", quantita: "12,2 mg (1109% VNR*)" },
      { nome: "Vitamin B6 (pyridoxine)", quantita: "4,8 mg (343% VNR*)" },
      { nome: "Folate (Quatrefolic® 5-MTHF)", quantita: "216 µg (108% VNR*)" },
      { nome: "Vitamin D (cholecalciferol)", quantita: "50 µg (1000% VNR*)" },
      { nome: "Vitamin B12 (cyanocobalamin)", quantita: "10 µg (400% VNR*)" }
    ],
    dosiRiferite: "per daily dose (1 tablet) — *NRV: Nutrient Reference Values",   // ⚠ %VNR calcolati dai valori del PDF: da verificare con l'etichetta
    modoUso:
      "One tablet a day, preferably with a meal, with a glass of water.",
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. If you are undergoing drug treatment, consult your doctor."
  },

  /* ────────────────────────────────────────────── MAGBIS */
  {
    id: "magbis",
    inArrivo: true,   // non ancora in vendita: mostra l'etichetta "in arrivo"
    name: "MAGBIS",
    displayName: "Magbis",
    tagline: "Highly bioavailable magnesium bisglycinate",
    boxSubtitle: "MAGNESIUM BISGLYCINATE FOOD SUPPLEMENT",
    boxClaim: "HIGHLY BIOAVAILABLE MAGNESIUM IN THE GLYCINE-CHELATED FORM",
    shortIngredients: "Magnesium bisglycinate, chelated with glycine",
    format: "60 vegetable capsules",   // ⚠ DA CONFERMARE — non indicato nel PDF
    weight: "48 g",                  // ⚠ DA CONFERMARE — non indicato nel PDF
    image: null,                     // ⟵ nessun mockup fotografico: il sito genera la scatola via CSS
    cardImage: null,
    illustration: "mineral",
    theme: {
      main: "#7561ad",
      dark: "#5c4a95",
      cardBg: "#ded8e9",
      soft: "#e1dce8"
    },

    zones: ["nervi", "muscoli"],
    zoneLabel: "Muscles and nervous system",
    cosa:
      "Magnesium in bisglycinate form — the mineral bound to two glycine molecules — for daily supplementation with high bioavailability and excellent intestinal tolerability, supporting muscle function, the nervous system and energy metabolism.",
    perChi: [
      { icon: "stress", label: "During periods of greater physical or mental effort" },
      { icon: "sport", label: "Those putting their muscles under repeated strain" },
      { icon: "digestione", label: "Those looking for a well-tolerated magnesium" },
      { icon: "adulto", label: "Adults wanting daily supplementation" }
    ],
    quando: ["Tiredness and fatigue", "Periods of intense physical or mental effort", "As ongoing daily supplementation"],

    descrizione:
      "MAGBIS is a food supplement based on magnesium bisglycinate, a chelated form in which the mineral is bound to two molecules of glycine, an amino acid naturally present in the body. Magnesium is an essential mineral involved in many physiological processes: its availability contributes to the proper working of the nervous system, to normal muscle function and to maintaining energy balance. This particular chelated form carries magnesium through an organic bond with high intestinal tolerability, making it an ideal choice for anyone seeking a gentle, readily usable form of magnesium.",
    claimTriple: ["Bioavailability", "Tolerability", "Balance"],
    benefici: [
      "Contributes to the reduction of tiredness and fatigue",
      "Contributes to the normal function of the nervous system",
      "Contributes to normal muscle function",
      "Contributes to normal energy-yielding metabolism",
      "Contributes to electrolyte balance",
      "Contributes to normal psychological function",
      "Contributes to normal protein synthesis",
      "Contributes to the maintenance of normal bones and teeth"
    ],
    beneficiNota:
      "The need for magnesium can rise in particular phases of life marked by greater physical or mental effort: an adequate intake helps maintain the body's normal functions, supporting energy, balance and muscle function.",
    comeAgisce: [
      { title: "Magnesium bisglycinate", text: "A chelated form in which the magnesium ion is coordinated with two glycine molecules: the bond with the amino acid produces an organic complex with high stability and good gastrointestinal tolerability. Magnesium is involved in over 300 enzymatic reactions and contributes to many physiological functions: energy metabolism, nerve impulse transmission, muscle contraction and normal muscle function, electrolyte balance, protein synthesis and the maintenance of normal psychological function." },
      { title: "Glycine", text: "The simplest of the protein amino acids and the organic component that characterises magnesium bisglycinate. Besides its structural role in the chelated complex, glycine is naturally involved in physiological processes linked to the balance of the nervous system and to the body's relaxation mechanisms." }
    ],
    sinergia: {
      subtitle: "Why choose magnesium bisglycinate",
      intro:
        "Not all magnesium salts behave the same way. In the bisglycinate, magnesium is bound to glycine, forming an organic complex that favours good availability of the mineral and better gastrointestinal tolerability.",
      points: [
        { title: "Chelated form", text: "the magnesium ion is coordinated with two glycine molecules" },
        { title: "High bioavailability", text: "a stable organic bond, readily usable by the body" },
        { title: "High intestinal tolerability", text: "without the gastrointestinal discomfort typical of some magnesium forms" },
        { title: "Glycine", text: "an amino acid involved in the physiological mechanisms of balance and relaxation" }
      ],
      outro:
        "Compared with some inorganic forms of magnesium, amino-acid chelated forms are generally used to improve the management of mineral intake and to favour good availability of magnesium in the body: a suitable choice for ongoing supplementation."
    },
    /* ⚠ Quantità DA CONFERMARE: il PDF non riporta dosaggi */
    ingredientiTabella: [
      { nome: "Magnesium bisglycinate", quantita: "1500 mg" },
      { nome: "of which magnesium", quantita: "300 mg (80% VNR*)" }
    ],
    dosiRiferite: "Typical content per daily dose (2 capsules) — *NRV: Nutrient Reference Values.",   // ⚠ DA CONFERMARE
    modoUso:
      "Two capsules a day with a glass of water, preferably during or after meals.",   // ⚠ DA CONFERMARE
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Food supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. During pregnancy and breastfeeding, seek the advice of your pharmacist or doctor.",
    conservazione:
      "Store tightly closed in a cool, dry place, away from direct sunlight and heat sources. The expiry date refers to the product correctly stored in an intact pack.",
    ingredientiCompleti:
      "Magnesium bisglycinate; Coating agent (capsule shell): cellulose; Anti-caking agents: fatty acids, magnesium salts of fatty acids, silicon dioxide. Gluten free · Lactose free · Vegetable capsule, suitable for vegetarians and vegans."   // ⚠ DA CONFERMARE — lista completa non presente nel PDF
  },

  /* ────────────────────────────────────────────── GLUTAGUT */
  {
    id: "glutagut",
    inArrivo: true,   // non ancora in vendita: mostra l'etichetta "in arrivo"
    name: "GLUTAGUT",
    displayName: "Glutagut",
    tagline: "For intestinal barrier function",
    boxSubtitle: "FOOD SUPPLEMENT BASED ON L-GLUTAMINE",
    boxClaim: "THE STRUCTURAL BASIS OF GUT WELLBEING",
    shortIngredients: "L-glutamine",
    format: "30 sachets",   // ⚠ DA CONFERMARE — non indicato nel PDF
    weight: "165 g",        // ⚠ DA CONFERMARE — non indicato nel PDF
    image: null,            // ⟵ nessun mockup fotografico: il sito genera la scatola via CSS
    cardImage: null,
    illustration: "intestine",
    theme: {
      main: "#9c6934",
      dark: "#8e5c2d",
      cardBg: "#f7e9d9",
      soft: "#eee1cf"
    },

    zones: ["addome"],
    zoneLabel: "Gut",
    cosa:
      "An essential formula based on L-glutamine alone, the most abundant amino acid in the body and the preferred energy source for the cells of the intestinal lining: targeted support for maintaining the integrity of the intestinal barrier and the physiological function of the mucosa.",
    perChi: [
      { icon: "digestione", label: "Those wanting to support gut function" },
      { icon: "alimentazione", label: "After periods of irregular eating" },
      { icon: "sport", label: "Athletes, during periods of intense physical effort" },
      { icon: "adulto", label: "Adults looking for a foundation for daily wellbeing" }
    ],
    quando: ["During periods of irregular bowel function", "After phases of intense physical effort", "As the basis of a wellbeing programme"],

    descrizione:
      "GLUTAGUT is a food supplement based on L-glutamine, an amino acid naturally present in the body and a key component of tissues with high cell turnover. The gut is central to the body's overall balance: with its L-glutamine-only formulation, GLUTAGUT offers targeted support for maintaining the integrity of the intestinal barrier and the physiological function of the mucosa. An essential formula providing a key nutrient on which to build daily balance and wellbeing.",
    claimTriple: ["Barrier", "Balance", "Wellbeing"],
    benefici: [
      "Supports the maintenance of intestinal barrier integrity",
      "Supports the physiological function of the intestinal mucosa",
      "Provides a preferred energy source for intestinal cells",
      "Supports the physiological cell renewal of the mucosa",
      "Supports muscle recovery processes after physical activity",
      "Helps cover the increased requirement during periods of intense physical effort"
    ],
    beneficiNota:
      "Gut wellbeing is closely tied to the body's overall balance: supporting the intestinal barrier means giving a solid foundation to the natural processes of maintenance and recovery.",
    comeAgisce: [
      { title: "L-glutamine", text: "The most abundant amino acid in the body and the preferred energy source for the cells of the intestinal lining. It plays an important role in maintaining the integrity of the intestinal barrier, supporting physiological cell renewal and contributing to the proper balance of gut function." },
      { title: "L-glutamine and muscle recovery", text: "An amino acid involved in the body's metabolic processes, also used in sports nutrition to support muscle recovery after physical activity. It can be a useful support during periods of greater physical effort, when the need for nutrients involved in recovery increases." }
    ],
    ingredientiTabella: [
      { nome: "L-glutamine", quantita: "5000 mg" }   // ⚠ DA CONFERMARE — non indicato nel PDF
    ],
    dosiRiferite: "Typical content per daily dose (1 sachet).",   // ⚠ DA CONFERMARE
    modoUso:
      "One sachet a day, dissolved in a glass of water, preferably away from meals.",   // ⚠ DA CONFERMARE
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Food supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. Do not give to children under three years of age. During pregnancy and breastfeeding, seek the advice of your pharmacist or doctor.",
    conservazione:
      "Store tightly closed in a cool, dry place, away from direct sunlight and heat sources. The expiry date refers to the product correctly stored in an intact pack.",
    ingredientiCompleti:
      "L-glutamine. Gluten free · Lactose free · Suitable for vegetarians and vegans."   // ⚠ DA CONFERMARE — lista completa non presente nel PDF
  },

  /* ────────────────────────────────────────────── CIST-OFF */
  {
    id: "cist-off",
    name: "CIST-OFF",
    displayName: "Cist-off",
    tagline: "For urinary tract function",
    boxSubtitle:
      "FOOD SUPPLEMENT WITH D-MANNOSE, CRANBERRY, PROPOLISS AND N-ACETYLCYSTEINE",
    shortIngredients: "D-mannose, Cranberry, Propoliss and N-acetylcysteine",
    format: "30 vegetable capsules",
    weight: "19 g",
    image: "assets/img/cistoffmockup.png",  // ⟵ foto reale del prodotto (sostituisce il mockup)
    cardImage: null,      // ⟵ foto/illustrazione custom per la card
    illustration: "berries",
    theme: {
      main: "#b94d75",    // colore principale (nome, bottoni, pannello)
      dark: "#9e3c60",    // variante scura
      cardBg: "#f4dfe4",  // sfondo card in home
      soft: "#efdce0"     // sfondo tenue (schema anteprima)
    },

    /* ——— ANTEPRIMA (schema visivo) ——— */
    zones: ["pelvi"],
    zoneLabel: "Urinary tract",
    cosa:
      "A concentrated formula combining D-mannose, cranberry extract, propolis and N-acetylcysteine to support urinary tract function and the drainage of body fluids.",
    perChi: [
      { icon: "donna", label: "Women prone to recurring episodes" },
      { icon: "stress", label: "During more vulnerable periods" },
      { icon: "stagione", label: "At the first signs of discomfort" },
      { icon: "adulto", label: "Adults looking for natural support" }
    ],
    quando: ["At the first discomfort", "As support during recurring cycles", "On the pharmacist's advice"],

    /* ——— SCHEDA PRODOTTO ——— */
    descrizione:
      "CIST-OFF is a supplement formulated to support urinary tract function and the physiological balance of the urinary system, through the synergistic combination of D-mannose, cranberry assayed for proanthocyanidins (PACs), N-acetylcysteine and propolis standardised for galangin. The formulation brings together ingredients selected to act on complementary aspects of urinary physiology, pairing components traditionally used for urinary wellbeing with innovative ingredients such as N-acetylcysteine.",
    claimTriple: ["Drainage", "Urinary wellbeing", "Protection"],
    benefici: [
      "Supports urinary tract function",
      "Supports the drainage of body fluids",
      "Supports the physiological balance of the urinary environment",
      "Supports the body's natural antioxidant defences",
      "Contributes to the general wellbeing of the urinary system"
    ],
    comeAgisce: [
      { title: "D-mannose", text: "A simple sugar naturally present in some plant species, birch among them. It is traditionally used to support urinary tract function and is studied for its role in bacterial adhesion mechanisms, particularly with regard to Escherichia coli." },
      { title: "Cranberry", text: "Fruit d.e. assayed at 25% proanthocyanidins (PACs), the most studied bioactive fraction of cranberry: standardised PACs guarantee a controlled intake of the extract's main characterising compounds. It supports urinary tract function and the drainage of body fluids." },
      { title: "N-acetylcysteine (NAC)", text: "A derivative of cysteine and a precursor of glutathione, one of the body's main antioxidant systems. Its presence in the formulation is aimed at supporting natural antioxidant defences, and it is the subject of studies in the field of biofilm-related processes." },
      { title: "Propolis", text: "Resin d.e. assayed at 12% galangin, a plant extract rich in phenolic compounds and flavonoids. Standardisation for galangin guarantees a consistent intake of one of propolis's main bioactive components." }
    ],
    sinergia: {
      subtitle: "A formulation built on synergy",
      intro:
        "CIST-OFF is not merely a pairing of ingredients traditionally used for urinary wellbeing: each component was selected to contribute to an integrated, complementary approach.",
      points: [
        { title: "D-mannose", text: "support for the physiological mechanisms linked to bacterial adhesion" },
        { title: "Cranberry assayed for PACs", text: "an intake of standardised proanthocyanidins, the characterising fraction of cranberry" },
        { title: "NAC", text: "support for endogenous antioxidant systems, studied in biofilm-related processes" },
        { title: "Propoliss standardised for galangin", text: "an intake of bioactive phenolic compounds and flavonoids" }
      ],
      outro:
        "The formulation was developed by pharmacists with an approach based on synergy between the actives, favouring standardised extracts, declared assays and high-quality raw materials."
    },
    ingredientiTabella: [
      { nome: "D-mannose", quantita: "200 mg", max: "1200 mg" },
      { nome: "Cranberry d.e.", quantita: "150 mg", max: "900 mg" },
      { nome: "of which proanthocyanidins", quantita: "37,5 mg", max: "225 mg" },
      { nome: "N-acetylcysteine", quantita: "100 mg", max: "600 mg" },
      { nome: "Propoliss d.e.", quantita: "50 mg", max: "300 mg" },
      { nome: "of which galangin", quantita: "6 mg", max: "36 mg" }
    ],
    dosiRiferite: "Typical content per daily dose.",
    doseCol1: "1 capsule",
    doseColMax: "Max dose (6 caps)",
    modoUso:
      "Take the capsules with water. Taking them on an emptied bladder, preferably after urinating, is recommended to favour the presence of the actives in the urinary environment; keeping well hydrated through the day is advised. Maintenance dose: 1 capsule a day. Intensive dose: up to 6 capsules a day, as needed and following the directions on the label.",
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Food supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. Do not give to children under three years of age. Because it contains propolis, the product is not advised in case of hypersensitivity to bee products. During pregnancy and breastfeeding, seek the advice of your pharmacist or doctor.",
    conservazione:
      "Store tightly closed in a cool, dry place, away from direct sunlight and heat sources. The expiry date refers to the product correctly stored in an intact pack.",
    ingredientiCompleti:
      "D-mannose; Cranberry (Vaccinium macrocarpon Aiton) fruit d.e. assayed at 25% proanthocyanidins; N-acetylcysteine; Coating agent (capsule shell): cellulose; Propoliss resin d.e. assayed at 12% galangin; Anti-caking agents: silicon dioxide, fatty acids, magnesium salts of fatty acids. Gluten free · Lactose free · Vegetable capsule, suitable for vegetarians."
  },

  /* ────────────────────────────────────────────── FLEBOCARE */
  {
    id: "flebocare",
    name: "FLEBOCARE",
    displayName: "Flebocare",
    tagline: "For venous circulation and microcirculation",
    boxSubtitle:
      "FOOD SUPPLEMENT WITH MICRONISED DIOSMIN, BUTCHER'S BROOM, HORSE CHESTNUT AND RED VINE",
    boxClaim: "MICROCIRCULATION · VENOUS FUNCTION · VASCULAR PROTECTION",
    shortIngredients: "Micronised diosmin, Butcher's broom, Horse chestnut and Red vine",
    format: "30 tablets",   // ⚠ DA CONFERMARE — non indicato nel PDF
    weight: "33 g",           // ⚠ DA CONFERMARE — non indicato nel PDF
    image: null,              // ⟵ nessun mockup fotografico: il sito genera la scatola via CSS
    cardImage: null,
    illustration: "flow",
    theme: {
      main: "#367e75",
      dark: "#2e6e66",
      cardBg: "#dcf1eb",
      soft: "#dbe9e4"
    },

    zones: ["gambe"],
    zoneLabel: "Legs and microcirculation",
    cosa:
      "Four complementary actives — micronised diosmin, butcher's broom, horse chestnut and red vine — to support the physiological function of venous circulation and microcirculation, contributing to the wellbeing of the legs and to maintaining the integrity of the vascular wall.",
    perChi: [
      { icon: "donna", label: "Those who feel heaviness and swelling in the legs" },
      { icon: "lavoro", label: "Those who stand or sit for long periods" },
      { icon: "stagione", label: "In the warm months, when discomfort increases" },
      { icon: "adulto", label: "Adults wanting to support microcirculation" }
    ],
    quando: ["A feeling of heavy legs", "Long days on your feet or at a desk", "Periodic cycles in the warm months"],

    descrizione:
      "FLEBOCARE is a supplement developed to support the physiological function of venous circulation and microcirculation, contributing to the wellbeing of the legs and to maintaining the integrity of the vascular wall. It works through the synergistic action of micronised diosmin, butcher's broom, horse chestnut and red vine.",
    claimTriple: ["Microcirculation", "Venous function", "Vascular protection"],
    benefici: [
      "Supports microcirculation function",
      "Supports physiological venous circulation",
      "Contributes to the wellbeing of the haemorrhoidal plexus",
      "Counters the feeling of heaviness in the legs",
      "Supports the regular function of the cardiovascular system",
      "Contributes to protecting cells from oxidative stress thanks to the polyphenols of red vine"
    ],
    beneficiNota:
      "The proper working of microcirculation and venous circulation is fundamental to the wellbeing of the legs and to the physiological drainage of fluids.",
    comeAgisce: [
      { title: "Micronised diosmin", text: "A natural flavonoid obtained from citrus fruit, it is one of the most studied actives in the nutraceutical support of venous function. Micronisation improves particle dispersion, favouring bioavailability. It is the cornerstone of the formulation thanks to the extensive scientific documentation available." },
      { title: "Butcher's broom (Ruscus aculeatus)", text: "Traditionally used to support the function of venous circulation. It contributes to microcirculation function (heaviness in the legs) and to venous circulation function, supporting the wellbeing of the haemorrhoidal plexus." },
      { title: "Horse chestnut (Aesculus hippocastanum)", text: "A natural source of aescin, it is used to support the physiological function of microcirculation and to complete the support given to the venous system." },
      { title: "Red vine (Vitis vinifera)", text: "Rich in polyphenols and proanthocyanidins, it contributes to microcirculation function and to the regular function of the cardiovascular system, and exerts a significant antioxidant activity." }
    ],
    sinergia: {
      subtitle: "A formulation built on synergy",
      intro:
        "FLEBOCARE comes from a pairing of ingredients selected to act in complementary ways on the wellbeing of the veno-lymphatic system.",
      points: [
        { title: "Micronised diosmin", text: "the cornerstone of the formulation, widely studied for supporting venous function" },
        { title: "Butcher's broom", text: "support for venous circulation, microcirculation and the wellbeing of the haemorrhoidal plexus" },
        { title: "Horse chestnut", text: "support for microcirculation function" },
        { title: "Red vine", text: "antioxidant protection and support for microcirculation and the cardiovascular system" }
      ],
      outro:
        "The formulation was developed by pharmacists with an approach based on synergy between the actives, favouring assayed and standardised extracts, selected raw materials and ingredients backed by the scientific literature."
    },
    /* ⚠ TUTTE le quantità qui sotto sono DA CONFERMARE: il PDF non riporta dosaggi */
    ingredientiTabella: [
      { nome: "Micronised diosmin", quantita: "450 mg" },
      { nome: "Butcher's broom d.e.", quantita: "100 mg" },
      { nome: "of which ruscogenins", quantita: "10 mg" },
      { nome: "Horse chestnut d.e.", quantita: "100 mg" },
      { nome: "of which aescin", quantita: "20 mg" },
      { nome: "Red vine d.e.", quantita: "100 mg" },
      { nome: "of which polyphenols", quantita: "30 mg" }
    ],
    dosiRiferite: "Typical content per daily dose (1 tablet).",   // ⚠ DA CONFERMARE
    modoUso:
      "One tablet a day with a glass of water.",   // ⚠ DA CONFERMARE
    avvertenze:
      "Do not exceed the recommended daily dose. Keep out of reach of children under 3 years of age. Food supplements are not intended as a substitute for a varied, balanced diet and a healthy lifestyle. During pregnancy and breastfeeding, seek the advice of your pharmacist or doctor. In caso di terapie farmacologiche in corso, in particolare con anticoagulanti, consultare il medico.",
    conservazione:
      "Store tightly closed in a cool, dry place, away from direct sunlight and heat sources. The expiry date refers to the product correctly stored in an intact pack.",
    ingredientiCompleti:
      "Micronised diosmin; Butcher's broom (Ruscus aculeatus L.) rhizome d.e.; Horse chestnut (Aesculus hippocastanum L.) seed d.e. assayed for aescin; Red vine (Vitis vinifera L.) leaf d.e. assayed for polyphenols; Anti-caking agents: fatty acids, magnesium salts of fatty acids, silicon dioxide. Gluten free · Lactose free · Suitable for vegetarians and vegans."   // ⚠ DA CONFERMARE — lista completa non presente nel PDF
  }

];
