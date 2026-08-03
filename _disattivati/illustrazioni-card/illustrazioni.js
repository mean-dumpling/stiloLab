/* ============================================================
   STILO LAB — ILLUSTRAZIONI E ICONE SVG
   Ogni illustrazione riceve il colore del prodotto.
   Per aggiungerne una nuova: aggiungi una chiave a ILLUSTRATIONS
   e usala nel campo "illustration" di data/products.js.

   Il soggetto non è per forza l'ingrediente: dove l'ingrediente non
   si legge o non dice niente, il segno racconta l'effetto (il fulmine
   per l'energia, la goccia per la depurazione, il vaso per il flusso).

   ——— Regole di disegno (rispettarle, o il set si sfalda) ———
   Le card mostrano queste immagini a 150px: a quella misura i contorni
   sottili e i tratti a bassa opacità diventano poltiglia. Quindi:
   1. disco bianco al 60% come fondo, per staccare la figura dalla card
   2. figura PIENA col colore del prodotto al 18-20%, contorno dello
      stesso colore a 5.5px — mai solo contorno
   3. tutto il disegno sta entro raggio 76 dal centro (100,100): il disco
      è 84, così nessuna forma lo buca nemmeno col contorno
   4. le parti che si toccano si toccano DAVVERO, e quelle separate hanno
      un distacco netto: niente forme che si compenetrano per sbaglio
   5. niente segni decorativi: ogni tratto appartiene al soggetto
   6. massimo sei forme, geometria simmetrica e allineata
   ============================================================ */

window.ILLUSTRATIONS = {
  /* GEAR-UP — fulmine: energia, spinta, prontezza */
  bolt: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <path d="M112 32 62 108h30l-14 60 62-84h-32Z"
          fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="5.5"
          stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`,

  /* DETOXA — goccia: depurazione. Una forma sola, niente dentro */
  purify: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <path d="M100 26c27 38 42 61 42 80a42 42 0 0 1-84 0c0-19 15-42 42-80Z"
          fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="5.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  /* NEVRALIS — neurone: ogni dendrite parte dal bordo del soma (r=26 da
     98,96) e finisce esattamente sotto il proprio pallino */
  neuron: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <g fill="none" stroke="${c}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M80 78 52 50M72 92 40 86M80 114 52 132M116 80l24-26"/>
      <path d="M116 112c12 10 18 24 18 38"/>
      <path d="M134 150l-16 12M134 150l14 4M134 150l-2 18"/>
    </g>
    <circle cx="98" cy="96" r="26" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="5.5"/>
    <circle cx="98" cy="96" r="9" fill="${c}"/>
    <g fill="${c}">
      <circle cx="52" cy="50" r="6"/><circle cx="40" cy="86" r="6"/>
      <circle cx="52" cy="132" r="6"/><circle cx="140" cy="54" r="6"/>
    </g>
  </svg>`,

  /* MAGBIS — cristalli: prisma appuntito e cristallo minore, compenetrati */
  mineral: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <g fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M96 38 126 74v70l-30 22-30-22V74Z"/>
      <path d="M66 74l30 18 30-18M96 92v74" fill="none"/>
      <path d="M132 100l18 20v32l-18 10-12-8v-42Z"/>
      <path d="M120 120l12 8 18-8" fill="none"/>
    </g>
  </svg>`,

  /* GLUTAGUT — ansa intestinale: un tubo che serpeggia */
  intestine: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <path d="M66 56h44a24 24 0 0 1 0 48H90a24 24 0 0 0 0 48h44" fill="none"
          stroke="${c}" stroke-opacity=".22" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M66 56h44a24 24 0 0 1 0 48H90a24 24 0 0 0 0 48h44" fill="none"
          stroke="${c}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  /* CIST-OFF — tre bacche staccate e due foglie sopra, separate.
     Distanza fra i centri 48-60 contro 42 di raggi sommati: non si toccano. */
  berries: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <g fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M95 64c-17-4-29-16-30-32 17-2 30 9 32 27Z"/>
      <path d="M105 64c17-4 29-16 30-32-17-2-30 9-32 27Z"/>
      <circle cx="70" cy="114" r="21"/>
      <circle cx="130" cy="114" r="21"/>
      <circle cx="100" cy="152" r="21"/>
    </g>
  </svg>`,

  /* FLEBOCARE — vaso che si dirama e flusso che risale: ritorno venoso */
  flow: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <g fill="none" stroke="${c}" stroke-linecap="round" stroke-linejoin="round">
      <g stroke-opacity=".2" stroke-width="36"><path d="M100 156V94M100 94 68 52M100 94l32-42"/></g>
      <g stroke-width="5.5"><path d="M100 156V94M100 94 68 52M100 94l32-42"/></g>
      <g stroke-width="6"><path d="M88 146l12-13 12 13M88 122l12-13 12 13"/></g>
    </g>
  </svg>`,

  /* Foglia (ripiego per prodotti senza illustrazione propria) */
  leaf: (c) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="84" fill="#fff" opacity=".6"/>
    <g fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M102 40c36 17 49 49 42 84-30 11-63 2-80-25-11-19-4-44 38-59Z"/>
      <path d="M102 40c-9 30-11 68-2 102" fill="none"/>
      <path d="M82 78c11 4 23 4 32 0M73 106c13 6 26 6 37 0" fill="none"/>
      <path d="M100 142v26" fill="none"/>
    </g>
  </svg>`
};

