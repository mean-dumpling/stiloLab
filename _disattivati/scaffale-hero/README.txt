SCAFFALE DI MOCKUP NELL'HERO — disattivato
==========================================
Tolto dalla home il 2 agosto 2026. I mockup delle scatole restano
ovunque: schede prodotto, mini-card "le altre formule", modale di
anteprima. Qui è disattivato solo lo scaffale che stava nell'hero.

COS'ERA
-------
La colonna destra dell'hero: le scatole dei prodotti disposte su ripiani.
Fino a 4 per ripiano in formato "sm", oppure 3 in fila unica in formato
"md" se i prodotti erano tre o meno. Aggiungendo prodotti lo scaffale
cresceva in altezza invece di schiacciare i mockup.

MARKUP (stava in index.html, dentro .hero-inner, dopo il blocco di testo)
------------------------------------------------------------------------
      <div class="hero-shelf" id="hero-shelf"><!-- scaffale generato da js/main.js --></div>

CODICE (stava in js/main.js, in cima al DOMContentLoaded)
--------------------------------------------------------
  const shelf = document.getElementById("hero-shelf");
  if (shelf) {
    const perRow = 4;
    const size = window.PRODUCTS.length <= 3 ? "md" : "sm";
    const rows = [];
    for (let i = 0; i < window.PRODUCTS.length; i += perRow) {
      rows.push(window.PRODUCTS.slice(i, i + perRow));
    }
    shelf.innerHTML = rows
      .map(
        (row) =>
          `<div class="shelf-row">` +
          `<div class="shelf-boxes">${row.map((p) => window.renderMockup(p, size)).join("")}</div>` +
          `<div class="shelf-base"></div>` +
          `</div>`
      )
      .join("");
  }

STILI
-----
Le regole .hero-shelf, .shelf-row, .shelf-boxes e .shelf-base sono
rimaste in css/style.css: le usa ancora _candidati.html nel primo
mockup di banner. Se un domani si cancella anche quello, si possono
togliere.

PER RIMETTERLO
--------------
Rimetti il markup e il codice qui sopra, e riporta .hero-inner a due
colonne in css/style.css:
  grid-template-columns: minmax(320px, 1fr) minmax(400px, 1.15fr);
togliendo il max-width aggiunto al blocco di testo.
