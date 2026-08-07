

window.SITE = {
  brandName: "stilo",
  brandAccent: "Lab",
  brandSub: "FARMACIA STILO",
  claim: "Benessere mirato,\nformule essenziali.",
  claimHighlight: ".",
  heroText:
    "Stilo Lab sviluppa integratori alimentari con ingredienti selezionati e formule essenziali, per accompagnarti ogni giorno nel tuo benessere naturale.",
  formulesTitle: "Le nostre formule, pensate per il tuo equilibrio.",
  formulesSub: "Integratori alimentari con ingredienti selezionati e formule essenziali.",


  approach: {
    title: "Il nostro approccio",
    intro:
      "Non ci limitiamo a inserire ingredienti “di tendenza”. Ogni estratto viene scelto valutando qualità della materia prima, standardizzazione, letteratura scientifica, biodisponibilità e compatibilità con gli altri componenti della formula, con l'obiettivo di ottenere una composizione razionale e coerente.",
    steps: [
      { title: "Revisione della letteratura", text: "Ogni formula parte dall'analisi delle evidenze scientifiche disponibili." },
      { title: "Estratti standardizzati", text: "Selezioniamo estratti standardizzati, per una qualità costante nel tempo." },
      { title: "Valutazione delle titolazioni", text: "Verifichiamo la concentrazione effettiva dei principi attivi." },
      { title: "Definizione delle dosi efficaci", text: "Dosaggi coerenti con la letteratura, mai simbolici." },
      { title: "Verifica delle sinergie", text: "Valutiamo compatibilità e sinergie tra gli ingredienti della formula." }
    ]
  },

  footerNote: "© 2026 Stilo Lab – Farmacia Stilo.\nTutti i diritti riservati.",
  email: "farmastilosrl@gmail.com",
  phone: "+39 0365 502143",


  whatsapp: "390365502143",
  address: "Farmacia Stilo, Via San Giovanni 32, 25080 Moniga del Garda (BS)"
};

window.PRODUCTS = [

  {
    id: "gear-up",
    name: "GEAR-UP",
    displayName: "Gear-up",
    tagline: "Tonico adattogeno per il tono dell'umore e il benessere mentale",
    boxSubtitle: "TONICO ADATTOGENO PER IL TONO DELL'UMORE E IL BENESSERE MENTALE",
    boxClaim: "INTEGRATORE ALIMENTARE CON RODIOLA E REISHI",
    shortIngredients: "Rodiola e Reishi",
    format: "30 capsule vegetali",
    weight: "19,3 g",
    price: "18,50",
    image: "assets/img/gearupmockup.webp",
    cardImage: null,
    illustration: "bolt",
    theme: {
      main: "#377998",
      dark: "#346b85",
      cardBg: "#dbecf0",
      soft: "#dde9ec"
    },

    zones: ["testa"],
    zoneLabel: "Mente e umore",
    cosa:
      "Un integratore formulato per supportare l'organismo nei periodi di intenso impegno fisico e mentale, quando richiesta energetica, concentrazione e capacità di adattamento risultano elevate. Rodiola rosea e Reishi sostengono la risposta fisiologica allo stress e la performance cognitiva.",
    perChi: [
      { icon: "lavoro", label: "Chi vive periodi di forte pressione" },
      { icon: "studio", label: "Studenti sotto esame" },
      { icon: "stress", label: "Chi sente calo di energia mentale" },
      { icon: "notte", label: "Chi fatica a recuperare le energie" }
    ],
    quando: ["Periodi di stress prolungato", "Cali di motivazione ed energia", "Cambi di ritmo e di stagione"],

    descrizione:
      "GEAR-UP è un integratore formulato per supportare l'organismo nei periodi di intenso impegno fisico e mentale, quando richiesta energetica, concentrazione e capacità di adattamento risultano elevate. La combinazione di Rhodiola rosea e Reishi (Ganoderma lucidum) è studiata per sostenere la risposta fisiologica allo stress e favorire il mantenimento della performance cognitiva e del tono generale.",
    claimTriple: ["Focus", "Energia", "Adattamento"],
    benefici: [
      "Sostiene la resistenza dell'organismo allo stress fisico e mentale, supportando la fisiologica attività dell'asse ipotalamo-ipofisi-surrene (HPA)",
      "Favorisce concentrazione, lucidità e capacità di focus",
      "Supporta il tono energetico nei periodi di affaticamento",
      "Contribuisce all'equilibrio delle naturali difese dell'organismo",
      "Supporta i processi fisiologici di adattamento"
    ],
    comeAgisce: [
      { title: "Rhodiola rosea", text: "Radice titolata al 3% in rosavin, estratto standardizzato tradizionalmente utilizzato come adattogeno per il supporto della resistenza fisica e mentale. Contribuisce al mantenimento della performance cognitiva in condizioni di stress e affaticamento e supporta energia e lucidità mentale." },
      { title: "Reishi (Ganoderma lucidum)", text: "Sporoforo titolato al 30% in polisaccaridi bioattivi, fungo funzionale tradizionalmente impiegato per il supporto delle naturali difese dell'organismo. Contribuisce al mantenimento dell'equilibrio fisiologico e supporta la risposta adattativa allo stress ossidativo. È oggetto di studi per il suo potenziale ruolo nel sostegno dell'equilibrio delle funzioni immunitarie e della risposta fisiologica dell'organismo agli stressor ambientali e ossidativi." }
    ],
    sinergia: {
      subtitle: "Una formula pensata per la performance adattativa",
      intro:
        "Gear-Up non è una semplice combinazione di adattogeni, ma una formulazione razionale costruita per supportare diversi livelli della risposta allo stress.",
      points: [
        { title: "Rhodiola rosea", text: "supporto alla performance mentale e alla resistenza alla fatica" },
        { title: "Reishi", text: "supporto dell'equilibrio fisiologico e delle naturali difese dell'organismo" }
      ],
      outro:
        "La formulazione utilizza estratti standardizzati e titolati, selezionati per garantire qualità costante e un profilo attivo coerente."
    },
    ingredientiTabella: [
      { nome: "Rodiola rosea e.s.", quantita: "300 mg", max: "600 mg" },
      { nome: "di cui Rosavin", quantita: "9 mg", max: "18 mg" },
      { nome: "Ganoderma lucidum e.s.", quantita: "200 mg", max: "400 mg" },
      { nome: "di cui polisaccaridi", quantita: "60 mg", max: "120 mg" }
    ],
    dosiRiferite: "Contenuti medi per dose giornaliera.",
    doseCol1: "1 capsula",
    doseColMax: "Dose max (2 cps)",
    modoUso:
      "Si consiglia l'assunzione di una capsula a colazione e una dopo pranzo, a seconda della necessità, accompagnata da un bicchiere d'acqua.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini di età inferiore a 3 anni. Gli integratori alimentari non vanno intesi come sostituti di una dieta varia ed equilibrata e di uno stile di vita sano. Per l'uso in gravidanza e allattamento si consiglia di sentire il parere del farmacista o del medico.",
    conservazione:
      "Conservare ben chiuso in luogo fresco e asciutto, al riparo dalla luce solare diretta e da fonti di calore. La data di fine validità si riferisce al prodotto correttamente conservato, in confezione integra.",
    ingredientiCompleti:
      "Rodiola (Rhodiola rosea L.) radice e.s. tit. 3% in Rosavin; Reishi (Ganoderma lucidum (Curtis) P.) sporoforo e.s. tit. 30% in polisaccaridi; Agente di rivestimento (involucro capsula): cellulosa; Agenti antiagglomeranti: acidi grassi, sali di magnesio degli acidi grassi, biossido di silicio; capsula in gelatina vegetale. Gluten free · Lactose free · Capsula vegetale, adatto a vegetariani e vegani."
  },

  {
    id: "detoxa",
    name: "DETOXA",
    displayName: "Detoxa",
    tagline: "Per la funzionalità epatica e digestiva",
    boxSubtitle:
      "INTEGRATORE ALIMENTARE CON CARDO MARIANO, CARCIOFO, TARASSACO E FUMARIA",
    shortIngredients: "Cardo mariano, Carciofo, Tarassaco, Fumaria e NAC",
    format: "30 capsule vegetali",
    weight: "19,3 g",
    price: "18,50",
    image: "assets/img/detoxamockup.webp",
    cardImage: null,
    illustration: "purify",
    theme: {
      main: "#6d7a34",
      dark: "#5e6b2c",
      cardBg: "#f0f4d7",
      soft: "#e8ecd5"
    },

    zones: ["addome"],
    zoneLabel: "Fegato e digestione",
    cosa:
      "Cinque attivi complementari — Cardo mariano, Carciofo, Tarassaco, Fumaria e NAC — riuniti in un'unica formula per sostenere il naturale processo di depurazione dell'organismo, la funzionalità epatica e una digestione più leggera.",
    perChi: [
      { icon: "digestione", label: "Chi avverte pesantezza dopo i pasti" },
      { icon: "alimentazione", label: "Durante o dopo periodi di alimentazione ricca" },
      { icon: "dieta", label: "Chi segue una dieta chetogenica" },
      { icon: "stagione", label: "Per la depurazione nei cambi di stagione" },
      { icon: "adulto", label: "Adulti che desiderano sostenere il fegato" }
    ],
    quando: ["Dopo le festività", "Nei cambi di stagione", "Cicli depurativi periodici"],

    descrizione:
      "DETOXA è un integratore studiato per sostenere il naturale processo di depurazione dell'organismo, favorire una digestione più leggera e supportare il corretto funzionamento del fegato, organo fondamentale per l'eliminazione delle sostanze di scarto e il metabolismo. Agisce grazie all'azione sinergica di Cardo mariano, Carciofo, Tarassaco, Fumaria e N-Acetilcisteina (NAC).",
    claimTriple: ["Depura", "Protegge", "Alleggerisce"],
    benefici: [
      "Favorisce la fisiologica depurazione dell'organismo",
      "Sostiene la funzionalità epatica",
      "Migliora la digestione e riduce la sensazione di pesantezza",
      "Favorisce il drenaggio dei liquidi corporei",
      "Contribuisce al metabolismo di grassi e colesterolo",
      "Sostiene le naturali difese antiossidanti dell'organismo"
    ],
    beneficiNota:
      "Il corretto funzionamento del fegato contribuisce anche al fisiologico metabolismo di numerose sostanze, compresi gli ormoni.",
    comeAgisce: [
      { title: "Cardo mariano", text: "Frutti titolati all'80% in silimarina. Aiuta a proteggere le cellule del fegato dallo stress ossidativo e sostiene la naturale capacità di rigenerazione epatica." },
      { title: "Carciofo", text: "Foglie titolate al 5% in acido clorogenico. Favorisce la produzione e il flusso della bile, facilitando la digestione dei grassi e contribuendo al fisiologico metabolismo del colesterolo." },
      { title: "Tarassaco", text: "Radice titolata al 2% in inulina. Promuove la depurazione dell'organismo, sostiene la diuresi e contribuisce alla regolarità intestinale grazie al suo contenuto di inulina." },
      { title: "Fumaria", text: "Parti aeree titolate in protopina. Tradizionalmente impiegata per favorire la funzionalità epatobiliare: contribuisce al fisiologico flusso della bile e supporta i processi digestivi, utile in caso di digestione lenta e pesantezza dopo i pasti." },
      { title: "N-Acetilcisteina (NAC)", text: "Precursore della cisteina e del glutatione, uno dei principali sistemi antiossidanti dell'organismo. Sostiene le naturali difese dallo stress ossidativo e i fisiologici processi di detossificazione cellulare." }
    ],
    sinergia: {
      subtitle: "Una formulazione costruita per sinergia",
      intro:
        "DETOXA non nasce dalla semplice associazione di ingredienti tradizionalmente utilizzati per il fegato: ogni componente è stato selezionato per agire su aspetti complementari della fisiologia epatica.",
      points: [
        { title: "Cardo mariano", text: "protezione e supporto degli epatociti" },
        { title: "NAC", text: "sostegno ai sistemi antiossidanti endogeni e al glutatione" },
        { title: "Carciofo e Fumaria", text: "funzione biliare e digestiva" },
        { title: "Tarassaco", text: "depurazione fisiologica, drenaggio dei liquidi e regolarità intestinale" }
      ],
      outro:
        "La formulazione è stata sviluppata da farmacisti con un approccio basato sulla sinergia tra gli attivi, privilegiando estratti standardizzati e materie prime di elevata qualità."
    },
    ingredientiTabella: [
      { nome: "Cardo mariano e.s.", quantita: "150 mg" },
      { nome: "di cui silimarina", quantita: "120 mg" },
      { nome: "Tarassaco e.s.", quantita: "100 mg" },
      { nome: "di cui inulina", quantita: "2 mg" },
      { nome: "Carciofo e.s.", quantita: "100 mg" },
      { nome: "di cui acido clorogenico", quantita: "5 mg" },
      { nome: "Fumaria e.s.", quantita: "50 mg" },
      { nome: "di cui protopina", quantita: "20 mcg" },
      { nome: "N-acetilcisteina (NAC)", quantita: "50 mg" }
    ],
    dosiRiferite: "Contenuti medi per dose giornaliera (1 capsula).",
    modoUso:
      "Si consiglia l'assunzione di una capsula al giorno, preferibilmente dopo colazione, accompagnata da un bicchiere d'acqua.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini di età inferiore a 3 anni. Gli integratori alimentari non vanno intesi come sostituti di una dieta varia ed equilibrata e di uno stile di vita sano. Non somministrare ai bambini al di sotto dei tre anni di età. Per l'uso in gravidanza e allattamento si consiglia di sentire il parere del farmacista o del medico.",
    conservazione:
      "Conservare ben chiuso in luogo fresco e asciutto, al riparo dalla luce solare diretta e da fonti di calore. La data di fine validità si riferisce al prodotto correttamente conservato, in confezione integra.",
    ingredientiCompleti:
      "Cardo mariano (Silybum marianum (L.) Gaertn.) frutti e.s. tit. 80% in silimarina; Tarassaco (Taraxacum officinale (L.) Weber ex F.H.Wigg.) radice e.s. tit. 2% in inulina; Agente di rivestimento (involucro capsula): cellulosa; Carciofo (Cynara scolymus L.) foglie e.s. tit. 5% in acido clorogenico; Agenti antiagglomeranti: acidi grassi, sali di magnesio degli acidi grassi, biossido di silicio; Fumaria (Fumaria officinalis L.) parti aeree e.s. tit. 0,04% in protopina; N-acetilcisteina. Gluten free · Lactose free · Capsula vegetale, adatto a vegetariani e vegani."
  },

  {
    id: "nevralis",
    name: "NEVRALIS",
    displayName: "Nevralis",
    tagline: "Supporto avanzato per la funzionalità del sistema nervoso",
    boxSubtitle:
      "INTEGRATORE ALIMENTARE CON ACIDO ALFA-LIPOICO A RILASCIO PROLUNGATO, VITAMINE B, FOLATO QUATREFOLIC®, CURCUMA MERIVA® E VITAMINA D",
    boxClaim: "SUPPORTO AVANZATO PER LA FUNZIONALITÀ DEL SISTEMA NERVOSO",
    shortIngredients: "Acido α-lipoico R.P., Vitamine B, Quatrefolic®, Curcuma Meriva® e Vitamina D",
    format: "30 compresse",
    weight: "41,4 g",
    price: "25,00",
    image: "assets/img/nevralismockup.webp",
    cardImage: null,
    illustration: "neuron",
    theme: {
      main: "#3b5fa0",
      dark: "#2b487d",
      cardBg: "#dbe2ed",
      soft: "#e0e4eb"
    },

    zones: ["testa", "nervi", "muscoli"],
    zoneLabel: "Sistema nervoso e muscoli",
    cosa:
      "Una formula completa che unisce acido α-lipoico a rilascio prolungato, vitamine del gruppo B, folato attivo Quatrefolic®, curcuma da estratto brevettato Indena® e vitamina D, per sostenere la normale funzionalità del sistema nervoso, il metabolismo energetico e la protezione dallo stress ossidativo.",
    perChi: [
      { icon: "lavoro", label: "Chi affronta periodi di intenso impegno" },
      { icon: "anziano", label: "Over 60, per il tono neuro-muscolare" },
      { icon: "sport", label: "Chi sottopone i muscoli a sforzi ripetuti" },
      { icon: "stress", label: "Nei periodi di affaticamento psico-fisico" }
    ],
    quando: ["Affaticamento persistente", "Formicolii e tensioni ricorrenti", "Su consiglio del professionista"],

    descrizione:
      "NEVRALIS è un integratore alimentare formulato per sostenere la normale funzionalità del sistema nervoso grazie a una combinazione sinergica di acido α-lipoico a rilascio prolungato, vitamine del gruppo B, folato attivo Quatrefolic®, curcuma da estratto brevettato Indena® e vitamina D. Una formula completa che associa ingredienti selezionati e tecnologie innovative per supportare il metabolismo energetico, contribuire alla protezione dallo stress ossidativo e favorire il fisiologico equilibrio dell'organismo.",
    claimTriple: ["Funzionalità nervosa", "Energia cellulare", "Protezione"],
    benefici: [
      "Contribuisce al normale funzionamento del sistema nervoso",
      "Contribuisce al normale metabolismo energetico",
      "Contribuisce alla riduzione della stanchezza e dell'affaticamento",
      "Contribuisce al normale metabolismo dell'omocisteina",
      "Contribuisce alla normale funzione psicologica e alla normale emopoiesi",
      "Contribuisce al mantenimento della normale funzione muscolare e di ossa e denti normali",
      "Contribuisce alla normale funzione del sistema immunitario",
      "Sostiene la funzione digestiva, la funzionalità epatica e quella articolare"
    ],
    beneficiNota:
      "L'acido α-lipoico a rilascio prolungato e i curcuminoidi Fitosoma® contribuiscono a contrastare lo stress ossidativo, sostenendo l'equilibrio cellulare e il benessere del sistema nervoso.",
    comeAgisce: [
      { title: "Acido α-lipoico a rilascio prolungato", text: "Composto naturalmente presente nell'organismo e uno degli antiossidanti più studiati per il suo ruolo nel metabolismo cellulare, energetico e glucidico. La tecnologia a rilascio prolungato favorisce una disponibilità graduale dell'attivo nell'arco della giornata, integrandosi con l'azione delle vitamine del gruppo B. La sua attività antiossidante contribuisce a contrastare lo stress ossidativo, sostenendo l'equilibrio cellulare e il benessere del sistema nervoso." },
      { title: "Vitamine B1, B6 e B12", text: "Svolgono un ruolo fondamentale nei processi fisiologici legati al sistema nervoso e alla produzione di energia: contribuiscono al normale funzionamento del sistema nervoso e al normale metabolismo energetico. Le vitamine B6 e B12 contribuiscono inoltre alla riduzione della stanchezza e dell'affaticamento; la vitamina B6 al normale metabolismo dell'omocisteina." },
      { title: "Folato attivo Quatrefolic®", text: "Forma attiva e altamente biodisponibile di folato (5-MTHF), direttamente utilizzabile dall'organismo. Il folato contribuisce al normale metabolismo dell'omocisteina, alla normale funzione psicologica, alla normale emopoiesi e alla riduzione della stanchezza e dell'affaticamento, rappresentando un importante supporto nei processi metabolici e cellulari." },
      { title: "Curcuma Meriva® Fitosoma® (Indena®)", text: "Estratto brevettato di Curcuma longa da rizoma, che garantisce elevati standard qualitativi e un'elevata affidabilità della materia prima. La curcuma favorisce la funzione digestiva e la funzionalità del sistema digerente, sostiene la funzionalità epatica e articolare ed esercita un'azione antiossidante. Contribuisce inoltre al benessere dell'organismo in relazione ai disturbi del ciclo mestruale." },
      { title: "Vitamina D (colecalciferolo)", text: "Contribuisce alla normale funzione del sistema immunitario, al mantenimento della normale funzione muscolare e al mantenimento di ossa e denti normali. Contribuisce inoltre al normale assorbimento e utilizzo del calcio e del fosforo e interviene nel processo di divisione delle cellule." }
    ],
    sinergia: {
      subtitle: "Una sinergia studiata per il benessere del sistema nervoso",
      intro:
        "L'associazione di acido α-lipoico a rilascio prolungato, vitamine del gruppo B, folato attivo Quatrefolic®, curcuma brevettata Indena® e vitamina D rende NEVRALIS una formulazione completa, pensata per accompagnare l'organismo nel mantenimento del suo fisiologico equilibrio.",
      points: [
        { title: "Acido α-lipoico R.P.", text: "disponibilità graduale nell'arco della giornata e protezione dallo stress ossidativo" },
        { title: "Vitamine del gruppo B", text: "funzionalità del sistema nervoso e metabolismo energetico" },
        { title: "Folato Quatrefolic®", text: "forma attiva 5-MTHF, metabolismo dell'omocisteina e funzione psicologica" },
        { title: "Curcuma Meriva®", text: "azione antiossidante e supporto digestivo, epatico e articolare" },
        { title: "Vitamina D", text: "funzione muscolare e immunitaria, mantenimento di ossa e denti" }
      ],
      outro:
        "Una formula che associa ingredienti selezionati e tecnologie innovative — estratti brevettati e forme vitaminiche attive — per garantire qualità costante e un profilo attivo coerente."
    },
    ingredientiTabella: [
      { nome: "Acido α-lipoico (a rilascio prolungato)", quantita: "600 mg" },
      { nome: "Curcuminoidi Fitosoma® Meriva® (Curcuma longa rizoma e.s.)", quantita: "250 mg" },
      { nome: "Tiamina (Vit. B1)", quantita: "12,2 mg (1109% VNR*)" },
      { nome: "Vitamina B6 (piridossina)", quantita: "4,8 mg (343% VNR*)" },
      { nome: "Folato (Quatrefolic® 5-MTHF)", quantita: "216 µg (108% VNR*)" },
      { nome: "Vitamina D (colecalciferolo)", quantita: "50 µg (1000% VNR*)" },
      { nome: "Vitamina B12 (cianocobalamina)", quantita: "10 µg (400% VNR*)" }
    ],
    // Verificare le percentuali VNR.
    dosiRiferite: "per dose giornaliera (1 compressa) — *VNR: Valori Nutritivi di Riferimento",
    modoUso:
      "Si consiglia l'assunzione di 1 compressa al giorno, preferibilmente durante un pasto, con un bicchiere d'acqua.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini al di sotto dei 3 anni. Gli integratori non vanno intesi come sostituti di una dieta variata ed equilibrata e di uno stile di vita sano. In caso di terapie farmacologiche in corso consultare il medico."
  },

  {
    id: "cist-off",
    name: "CIST-OFF",
    displayName: "Cist-off",
    tagline: "Per la funzionalità delle vie urinarie",
    boxSubtitle:
      "INTEGRATORE ALIMENTARE CON D-MANNOSIO, CRANBERRY, PROPOLI E N-ACETILCISTEINA",
    shortIngredients: "D-Mannosio, Cranberry, Propoli e N-Acetilcisteina",
    format: "30 capsule vegetali",
    weight: "19 g",
    price: "18,50",
    image: "assets/img/cistoffmockup.webp",
    cardImage: null,
    illustration: "berries",
    theme: {
      main: "#b94d75",
      dark: "#9e3c60",
      cardBg: "#f4dfe4",
      soft: "#efdce0"
    },


    zones: ["pelvi"],
    zoneLabel: "Vie urinarie",
    cosa:
      "Una formula concentrata che unisce D-Mannosio, estratto di Cranberry, Propoli e N-Acetilcisteina per sostenere la funzionalità delle vie urinarie e il drenaggio dei liquidi corporei.",
    perChi: [
      { icon: "donna", label: "Donne soggette a episodi ricorrenti" },
      { icon: "stress", label: "Nei periodi di maggiore vulnerabilità" },
      { icon: "stagione", label: "Ai primi segnali di fastidio" },
      { icon: "adulto", label: "Adulti che cercano un supporto naturale" }
    ],
    quando: ["Ai primi fastidi", "Come supporto nei cicli ricorrenti", "Dopo consiglio del farmacista"],


    descrizione:
      "CIST-OFF è un integratore formulato per favorire la funzionalità delle vie urinarie e sostenere il fisiologico equilibrio dell'apparato urinario, grazie alla combinazione sinergica di D-Mannosio, Cranberry titolato in proantocianidine (PAC), N-Acetilcisteina e Propoli standardizzata in galangina. La formulazione nasce dall'integrazione di ingredienti selezionati per agire su aspetti complementari della fisiologia urinaria, associando componenti tradizionalmente utilizzati per il benessere delle vie urinarie con ingredienti innovativi come la N-Acetilcisteina.",
    claimTriple: ["Drenaggio", "Benessere urinario", "Protezione"],
    benefici: [
      "Favorisce la funzionalità delle vie urinarie",
      "Favorisce il drenaggio dei liquidi corporei",
      "Sostiene il fisiologico equilibrio dell'ambiente urinario",
      "Supporta le naturali difese antiossidanti dell'organismo",
      "Contribuisce al benessere generale dell'apparato urinario"
    ],
    comeAgisce: [
      { title: "D-Mannosio", text: "Zucchero semplice naturalmente presente in alcune specie vegetali, tra cui la betulla. È tradizionalmente utilizzato per il supporto della funzionalità delle vie urinarie ed è studiato per il suo ruolo nei meccanismi di adesione batterica, in particolare nei confronti di Escherichia coli." },
      { title: "Cranberry", text: "Frutti e.s. titolato al 25% in proantocianidine (PAC), la frazione bioattiva del cranberry maggiormente studiata: la presenza di PAC standardizzate garantisce un apporto controllato dei principali composti caratterizzanti dell'estratto. Favorisce la funzionalità delle vie urinarie e il drenaggio dei liquidi corporei." },
      { title: "N-Acetilcisteina (NAC)", text: "Derivato della cisteina e precursore del glutatione, uno dei principali sistemi antiossidanti dell'organismo. La sua presenza nella formulazione è finalizzata a sostenere le naturali difese antiossidanti ed è oggetto di studi nell'ambito dei processi correlati al biofilm." },
      { title: "Propoli", text: "Resina e.s. titolata al 12% in galangina, estratto vegetale ricco in composti fenolici e flavonoidi. La standardizzazione in galangina permette di garantire un apporto costante di uno dei principali componenti bioattivi della propoli." }
    ],
    sinergia: {
      subtitle: "Una formulazione costruita per sinergia",
      intro:
        "CIST-OFF non nasce dalla semplice associazione di ingredienti tradizionalmente utilizzati per il benessere urinario: ogni componente è stato selezionato per contribuire a un approccio integrato e complementare.",
      points: [
        { title: "D-Mannosio", text: "supporto ai meccanismi fisiologici legati all'adesione batterica" },
        { title: "Cranberry titolato in PAC", text: "apporto di proantocianidine standardizzate, frazione caratterizzante del cranberry" },
        { title: "NAC", text: "supporto ai sistemi antiossidanti endogeni, oggetto di studi sui processi correlati al biofilm" },
        { title: "Propoli standardizzata in galangina", text: "apporto di composti fenolici e flavonoidi bioattivi" }
      ],
      outro:
        "La formulazione è stata sviluppata da farmacisti con un approccio basato sulla sinergia tra gli attivi, privilegiando estratti standardizzati, titolazioni dichiarate e materie prime di elevata qualità."
    },
    ingredientiTabella: [
      { nome: "D-Mannosio", quantita: "200 mg", max: "1200 mg" },
      { nome: "Cranberry e.s.", quantita: "150 mg", max: "900 mg" },
      { nome: "di cui proantocianidine", quantita: "37,5 mg", max: "225 mg" },
      { nome: "N-acetilcisteina", quantita: "100 mg", max: "600 mg" },
      { nome: "Propoli e.s.", quantita: "50 mg", max: "300 mg" },
      { nome: "di cui galangina", quantita: "6 mg", max: "36 mg" }
    ],
    dosiRiferite: "Contenuti medi per dose giornaliera.",
    doseCol1: "1 capsula",
    doseColMax: "Dose max (6 cps)",
    modoUso:
      "Assumere le capsule con acqua. Si consiglia l'assunzione a vescica svuotata, preferibilmente dopo la minzione, per favorire la presenza degli attivi nell'ambiente urinario; è consigliato mantenere una buona idratazione durante la giornata. Dose di mantenimento: 1 capsula al giorno. Dose intensiva: fino a 6 capsule al giorno, secondo necessità e secondo le indicazioni riportate in etichetta.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini di età inferiore a 3 anni. Gli integratori alimentari non vanno intesi come sostituti di una dieta varia ed equilibrata e di uno stile di vita sano. Non somministrare ai bambini al di sotto dei tre anni di età. Per la presenza di propoli, il prodotto è sconsigliato in caso di ipersensibilità ai derivati apistici. Per l'uso in gravidanza e allattamento si consiglia di sentire il parere del farmacista o del medico.",
    conservazione:
      "Conservare ben chiuso in luogo fresco e asciutto, al riparo dalla luce solare diretta e da fonti di calore. La data di fine validità si riferisce al prodotto correttamente conservato, in confezione integra.",
    ingredientiCompleti:
      "D-Mannosio; Cranberry (Vaccinium macrocarpon Aiton) frutti e.s. tit. 25% in proantocianidine; N-acetilcisteina; Agente di rivestimento (involucro capsula): cellulosa; Propoli resina e.s. tit. 12% in galangina; Agenti antiagglomeranti: biossido di silicio, acidi grassi, sali di magnesio degli acidi grassi. Gluten free · Lactose free · Capsula vegetale, adatto a vegetariani."
  },

  {
    id: "flebocare",
    name: "FLEBOCARE",
    displayName: "Flebocare",
    tagline: "Per la circolazione venosa e il microcircolo",
    boxSubtitle:
      "INTEGRATORE ALIMENTARE CON DIOSMINA® MICRONIZZATA, RUSCO, IPPOCASTANO E VITE ROSSA",
    boxClaim: "MICROCIRCOLO · FUNZIONALITÀ VENOSA · PROTEZIONE VASCOLARE",
    shortIngredients: "Diosmina® micronizzata, Rusco, Ippocastano e Vite rossa",
    // Verificare formato, dosaggi e ingredienti.
    format: "30 compresse",
    weight: "33 g",
    price: "18,50",
    image: "assets/img/flebocaremockup.webp",
    cardImage: null,
    illustration: "flow",
    theme: {
      main: "#367e75",
      dark: "#2e6e66",
      cardBg: "#dcf1eb",
      soft: "#dbe9e4"
    },

    zones: ["gambe"],
    zoneLabel: "Gambe e microcircolo",
    cosa:
      "Quattro attivi complementari — Diosmina® micronizzata, Rusco, Ippocastano e Vite rossa — per sostenere la fisiologica funzionalità della circolazione venosa e del microcircolo, contribuendo al benessere degli arti inferiori e al mantenimento dell'integrità della parete vascolare.",
    perChi: [
      { icon: "donna", label: "Chi avverte pesantezza e gonfiore alle gambe" },
      { icon: "lavoro", label: "Chi resta a lungo in piedi o seduto" },
      { icon: "stagione", label: "Nei mesi caldi, quando il disagio aumenta" },
      { icon: "adulto", label: "Adulti che vogliono sostenere il microcircolo" }
    ],
    quando: ["Sensazione di gambe pesanti", "In caso di emorroidi", "Lunghe giornate in piedi o alla scrivania", "Cicli periodici nei mesi caldi"],

    descrizione:
      "FLEBOCARE è un integratore sviluppato per sostenere la fisiologica funzionalità della circolazione venosa e del microcircolo, contribuendo al benessere degli arti inferiori e al mantenimento dell'integrità della parete vascolare. Agisce grazie all'azione sinergica di Diosmina® micronizzata, Rusco, Ippocastano e Vite rossa.",
    claimTriple: ["Microcircolo", "Funzionalità venosa", "Protezione vascolare"],
    benefici: [
      "Sostiene la funzionalità del microcircolo",
      "Favorisce la fisiologica circolazione venosa",
      "Contribuisce al benessere del plesso emorroidario",
      "Contrasta la sensazione di pesantezza delle gambe",
      "Sostiene la regolare funzionalità dell'apparato cardiovascolare",
      "Contribuisce alla protezione delle cellule dallo stress ossidativo grazie ai polifenoli della Vite rossa"
    ],
    beneficiNota:
      "Il corretto funzionamento del microcircolo e della circolazione venosa rappresenta un elemento fondamentale per il benessere degli arti inferiori e per il fisiologico drenaggio dei liquidi.",
    comeAgisce: [
      { title: "Diosmina® micronizzata", text: "Flavonoide naturale ottenuto dagli agrumi, è uno degli attivi maggiormente studiati nell'ambito del supporto nutraceutico della funzionalità venosa. La micronizzazione — un processo brevettato — riduce la dimensione delle particelle e ne migliora la dispersione, favorendone la biodisponibilità. Rappresenta il fulcro della formulazione grazie all'ampia documentazione scientifica disponibile." },
      { title: "Rusco (Ruscus aculeatus)", text: "Tradizionalmente utilizzato per sostenere la funzionalità della circolazione venosa. Contribuisce alla funzionalità del microcircolo (pesantezza delle gambe) e alla funzionalità della circolazione venosa, favorendo il benessere del plesso emorroidario." },
      { title: "Ippocastano (Aesculus hippocastanum)", text: "Fonte naturale di escina, è impiegato per sostenere la fisiologica funzionalità del microcircolo e completare il supporto al sistema venoso." },
      { title: "Vite rossa (Vitis vinifera)", text: "Ricca di polifenoli e proantocianidine, contribuisce alla funzionalità del microcircolo, alla regolare funzionalità dell'apparato cardiovascolare e svolge un'importante attività antiossidante." }
    ],
    sinergia: {
      subtitle: "Una formulazione costruita per sinergia",
      intro:
        "FLEBOCARE nasce dall'associazione di ingredienti selezionati per agire in modo complementare sul benessere del sistema veno-linfatico.",
      points: [
        { title: "Diosmina® micronizzata", text: "ingrediente cardine della formulazione, ampiamente studiato per il supporto della funzionalità venosa" },
        { title: "Rusco", text: "sostegno della circolazione venosa, del microcircolo e del benessere del plesso emorroidario" },
        { title: "Ippocastano", text: "supporto della funzionalità del microcircolo" },
        { title: "Vite rossa", text: "protezione antiossidante e sostegno del microcircolo e dell'apparato cardiovascolare" }
      ],
      outro:
        "La formulazione è stata sviluppata da farmacisti con un approccio basato sulla sinergia tra gli attivi, privilegiando estratti titolati e standardizzati, materie prime selezionate e ingredienti supportati dalla letteratura scientifica."
    },

    ingredientiTabella: [
      { nome: "Diosmina® micronizzata", quantita: "450 mg" },
      { nome: "Rusco e.s.", quantita: "100 mg" },
      { nome: "di cui ruscogenine", quantita: "10 mg" },
      { nome: "Ippocastano e.s.", quantita: "100 mg" },
      { nome: "di cui escina", quantita: "20 mg" },
      { nome: "Vite rossa e.s.", quantita: "100 mg" },
      { nome: "di cui polifenoli", quantita: "30 mg" }
    ],
    dosiRiferite: "Contenuti medi per compressa.",
    modoUso:
      "Si consiglia l'assunzione di 1-2 compresse al giorno, accompagnate da un bicchiere d'acqua.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini di età inferiore a 3 anni. Gli integratori alimentari non vanno intesi come sostituti di una dieta varia ed equilibrata e di uno stile di vita sano. Per l'uso in gravidanza e allattamento si consiglia di sentire il parere del farmacista o del medico. In caso di terapie farmacologiche in corso, in particolare con anticoagulanti, consultare il medico.",
    conservazione:
      "Conservare ben chiuso in luogo fresco e asciutto, al riparo dalla luce solare diretta e da fonti di calore. La data di fine validità si riferisce al prodotto correttamente conservato, in confezione integra.",
    ingredientiCompleti:
      "Diosmina® micronizzata; Rusco (Ruscus aculeatus L.) rizoma e.s.; Ippocastano (Aesculus hippocastanum L.) semi e.s. tit. in escina; Vite rossa (Vitis vinifera L.) foglie e.s. tit. in polifenoli; Agenti antiagglomeranti: acidi grassi, sali di magnesio degli acidi grassi, biossido di silicio. Gluten free · Lactose free · Adatto a vegetariani e vegani."
  },

  {
    id: "magbis",
    inArrivo: true,
    name: "MAGBIS",
    displayName: "Magbis",
    tagline: "Magnesio bisglicinato ad alta biodisponibilità",
    boxSubtitle: "INTEGRATORE ALIMENTARE DI MAGNESIO BISGLICINATO",
    boxClaim: "MAGNESIO AD ALTA BIODISPONIBILITÀ NELLA FORMA CHELATA CON GLICINA",
    shortIngredients: "Magnesio bisglicinato, chelato con glicina",
    // Verificare formato, dosaggi e ingredienti.
    format: "60 capsule vegetali",
    weight: "48 g",
    price: "18,50",
    image: null,
    cardImage: null,
    illustration: "mineral",
    theme: {
      main: "#7561ad",
      dark: "#5c4a95",
      cardBg: "#ded8e9",
      soft: "#e1dce8"
    },

    zones: ["nervi", "muscoli"],
    zoneLabel: "Muscoli e sistema nervoso",
    cosa:
      "Magnesio in forma bisglicinata — il minerale legato a due molecole di glicina — per un'integrazione quotidiana ad alta biodisponibilità ed elevata tollerabilità intestinale, a sostegno della funzione muscolare, del sistema nervoso e del metabolismo energetico.",
    perChi: [
      { icon: "stress", label: "Nei periodi di maggiore impegno fisico o mentale" },
      { icon: "sport", label: "Chi sottopone i muscoli a sforzi ripetuti" },
      { icon: "digestione", label: "Chi cerca un magnesio ben tollerato" },
      { icon: "adulto", label: "Adulti che desiderano un'integrazione quotidiana" }
    ],
    quando: ["Stanchezza e affaticamento", "Periodi di intenso impegno fisico o mentale", "Come integrazione quotidiana continuativa"],

    descrizione:
      "MAGBIS è un integratore alimentare a base di magnesio bisglicinato, una forma chelata in cui il minerale è legato a due molecole di glicina, un amminoacido naturalmente presente nell'organismo. Il magnesio è un minerale essenziale coinvolto in numerosi processi fisiologici: la sua disponibilità contribuisce al corretto funzionamento del sistema nervoso, alla normale funzione muscolare e al mantenimento dell'equilibrio energetico. Questa particolare forma chelata permette di veicolare il magnesio attraverso un legame organico, caratterizzato da un'elevata tollerabilità intestinale, rendendolo una scelta ideale anche per chi ricerca una forma di magnesio delicata e facilmente utilizzabile.",
    claimTriple: ["Biodisponibilità", "Tollerabilità", "Equilibrio"],
    benefici: [
      "Contribuisce alla riduzione della stanchezza e dell'affaticamento",
      "Contribuisce al normale funzionamento del sistema nervoso",
      "Contribuisce alla normale funzione muscolare",
      "Contribuisce al normale metabolismo energetico",
      "Contribuisce all'equilibrio elettrolitico",
      "Contribuisce alla normale funzione psicologica",
      "Contribuisce alla normale sintesi proteica",
      "Contribuisce al mantenimento di ossa e denti normali"
    ],
    beneficiNota:
      "Il fabbisogno di magnesio può aumentare in particolari periodi della vita caratterizzati da maggiore impegno fisico o mentale: un adeguato apporto contribuisce al mantenimento delle normali funzioni dell'organismo, supportando energia, equilibrio e funzionalità muscolare.",
    comeAgisce: [
      { title: "Magnesio bisglicinato", text: "Forma chelata nella quale lo ione magnesio è coordinato con due molecole di glicina: il legame con l'amminoacido determina un complesso organico caratterizzato da elevata stabilità e buona tollerabilità gastrointestinale. Il magnesio è coinvolto in oltre 300 reazioni enzimatiche e contribuisce a numerose funzioni fisiologiche: metabolismo energetico, trasmissione degli impulsi nervosi, contrazione e normale funzione muscolare, equilibrio elettrolitico, sintesi proteica e mantenimento della normale funzione psicologica." },
      { title: "Glicina", text: "Il più semplice degli amminoacidi proteici e componente organico che caratterizza il magnesio bisglicinato. Oltre a svolgere un ruolo strutturale nel complesso chelato, la glicina è naturalmente coinvolta nei processi fisiologici legati all'equilibrio del sistema nervoso e ai meccanismi di rilassamento dell'organismo." }
    ],
    sinergia: {
      subtitle: "Perché scegliere il magnesio bisglicinato",
      intro:
        "Non tutti i sali di magnesio presentano le stesse caratteristiche. Nel bisglicinato il magnesio è legato alla glicina, formando un complesso organico che favorisce una buona disponibilità del minerale e una migliore tollerabilità a livello gastrointestinale.",
      points: [
        { title: "Forma chelata", text: "lo ione magnesio è coordinato con due molecole di glicina" },
        { title: "Elevata biodisponibilità", text: "un legame organico stabile e facilmente utilizzabile dall'organismo" },
        { title: "Alta tollerabilità intestinale", text: "senza il tipico disagio gastrointestinale associato ad alcune forme di magnesio" },
        { title: "Glicina", text: "amminoacido coinvolto nei meccanismi fisiologici di equilibrio e rilassamento" }
      ],
      outro:
        "Rispetto ad alcune forme inorganiche di magnesio, le forme chelate con aminoacidi vengono generalmente utilizzate per migliorare la gestione dell'apporto minerale e favorire una buona disponibilità del magnesio nell'organismo: una scelta adatta a un'integrazione continuativa."
    },

    ingredientiTabella: [
      { nome: "Magnesio bisglicinato", quantita: "1500 mg" },
      { nome: "di cui magnesio", quantita: "300 mg (80% VNR*)" }
    ],
    dosiRiferite: "Contenuti medi per dose giornaliera (2 capsule) — *VNR: Valori Nutritivi di Riferimento.",
    modoUso:
      "Si consiglia l'assunzione di 2 capsule al giorno, accompagnate da un bicchiere d'acqua, preferibilmente durante o dopo i pasti.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini di età inferiore a 3 anni. Gli integratori alimentari non vanno intesi come sostituti di una dieta varia ed equilibrata e di uno stile di vita sano. Per l'uso in gravidanza e allattamento si consiglia di sentire il parere del farmacista o del medico.",
    conservazione:
      "Conservare ben chiuso in luogo fresco e asciutto, al riparo dalla luce solare diretta e da fonti di calore. La data di fine validità si riferisce al prodotto correttamente conservato, in confezione integra.",
    ingredientiCompleti:
      "Magnesio bisglicinato; Agente di rivestimento (involucro capsula): cellulosa; Agenti antiagglomeranti: acidi grassi, sali di magnesio degli acidi grassi, biossido di silicio. Gluten free · Lactose free · Capsula vegetale, adatto a vegetariani e vegani."
  },

  {
    id: "glutagut",
    inArrivo: true,
    name: "GLUTAGUT",
    displayName: "Glutagut",
    tagline: "Per la funzionalità della barriera intestinale",
    boxSubtitle: "INTEGRATORE ALIMENTARE A BASE DI L-GLUTAMMINA",
    boxClaim: "LA BASE STRUTTURALE DEL BENESSERE INTESTINALE",
    shortIngredients: "L-Glutammina",
    // Verificare formato, dosaggi e ingredienti.
    format: "30 bustine",
    weight: "165 g",
    price: "18,50",
    image: null,
    cardImage: null,
    illustration: "intestine",
    theme: {
      main: "#9c6934",
      dark: "#8e5c2d",
      cardBg: "#f7e9d9",
      soft: "#eee1cf"
    },

    zones: ["addome"],
    zoneLabel: "Intestino",
    cosa:
      "Una formula essenziale a base di sola L-glutammina, l'aminoacido più abbondante nell'organismo e fonte energetica privilegiata per le cellule della mucosa intestinale: un supporto mirato al mantenimento dell'integrità della barriera intestinale e alla fisiologica funzionalità della mucosa.",
    perChi: [
      { icon: "digestione", label: "Chi vuole sostenere la funzionalità intestinale" },
      { icon: "alimentazione", label: "Dopo periodi di alimentazione irregolare" },
      { icon: "sport", label: "Sportivi, nei periodi di intenso impegno fisico" },
      { icon: "adulto", label: "Adulti che cercano una base per il benessere quotidiano" }
    ],
    quando: ["Nei periodi di irregolarità intestinale", "Dopo fasi di intenso impegno fisico", "Come base di un percorso di benessere"],

    descrizione:
      "GLUTAGUT è un integratore alimentare a base di L-glutammina, un aminoacido naturalmente presente nell'organismo e componente fondamentale dei tessuti ad elevato turnover cellulare. L'intestino rappresenta un elemento fondamentale per l'equilibrio generale dell'organismo: grazie alla sua formulazione a base di sola L-glutammina, GLUTAGUT offre un supporto mirato al mantenimento dell'integrità della barriera intestinale e della fisiologica funzionalità della mucosa. Una formula essenziale che fornisce un nutriente chiave per costruire le basi dell'equilibrio e del benessere quotidiano.",
    claimTriple: ["Barriera", "Equilibrio", "Benessere"],
    benefici: [
      "Sostiene il mantenimento dell'integrità della barriera intestinale",
      "Favorisce la fisiologica funzionalità della mucosa intestinale",
      "Fornisce una fonte energetica privilegiata per le cellule intestinali",
      "Favorisce il fisiologico rinnovamento cellulare della mucosa",
      "Supporta i processi di recupero muscolare dopo l'attività fisica",
      "Contribuisce a coprire il maggiore fabbisogno nei periodi di intenso impegno fisico"
    ],
    beneficiNota:
      "Il benessere dell'intestino è strettamente collegato all'equilibrio generale dell'organismo: sostenere la barriera intestinale significa fornire una base solida ai naturali processi di mantenimento e recupero.",
    comeAgisce: [
      { title: "L-Glutammina", text: "L'aminoacido più abbondante nell'organismo e fonte energetica privilegiata per le cellule della mucosa intestinale. Svolge un ruolo importante nel mantenimento dell'integrità della barriera intestinale, favorendo il fisiologico rinnovamento cellulare e contribuendo al corretto equilibrio della funzionalità intestinale." },
      { title: "L-Glutammina e recupero muscolare", text: "Aminoacido coinvolto nei processi metabolici dell'organismo, utilizzato anche nell'ambito della nutrizione sportiva per supportare il recupero muscolare dopo l'attività fisica. Può rappresentare un valido supporto nei periodi di maggiore impegno fisico, quando aumenta il fabbisogno di nutrienti coinvolti nei processi di recupero." }
    ],
    ingredientiTabella: [
      { nome: "L-Glutammina", quantita: "5000 mg" }
    ],
    dosiRiferite: "Contenuti medi per dose giornaliera (1 bustina).",
    modoUso:
      "Si consiglia l'assunzione di 1 bustina al giorno, sciolta in un bicchiere d'acqua, preferibilmente lontano dai pasti.",
    avvertenze:
      "Non superare la dose giornaliera consigliata. Tenere fuori dalla portata dei bambini di età inferiore a 3 anni. Gli integratori alimentari non vanno intesi come sostituti di una dieta varia ed equilibrata e di uno stile di vita sano. Non somministrare ai bambini al di sotto dei tre anni di età. Per l'uso in gravidanza e allattamento si consiglia di sentire il parere del farmacista o del medico.",
    conservazione:
      "Conservare ben chiuso in luogo fresco e asciutto, al riparo dalla luce solare diretta e da fonti di calore. La data di fine validità si riferisce al prodotto correttamente conservato, in confezione integra.",
    ingredientiCompleti:
      "L-Glutammina. Gluten free · Lactose free · Adatto a vegetariani e vegani."
  }

];
