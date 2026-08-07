ANTEPRIMA PRODOTTO (modale) — DISATTIVATA
=========================================

Cos'era
-------
Cliccando su una card in home si apriva una finestra sopra la pagina con:
mockup della confezione, nome e sottotitolo, "Cos'è e dove agisce" con lo
schema del corpo, "Per chi è pensato", "Quando può essere utile" e un tasto
per andare alla scheda completa.

Cosa c'è adesso al suo posto
----------------------------
La card in home è tutta un link e porta direttamente alla scheda prodotto.
Sono spariti anche il suggerimento "Clicca per l'anteprima" sulle card e il
tasto "Anteprima visiva" in cima alle schede prodotto.

File in questa cartella
-----------------------
anteprima.js    openPreview() e closePreview(), tolti da js/site.js
anteprima.css   stili .preview-*, tolti da css/style.css

PER RIATTIVARLA
---------------
1. Reincolla il contenuto di anteprima.js in js/site.js.

2. Reincolla il contenuto di anteprima.css in css/style.css.

3. Rimetti in js/site.js le voci del dizionario window.STRINGHE che servono
   alla modale, in ENTRAMBE le lingue (it / en):

     anteprima, chiudiAnteprima, cosaKicker, cosaCoda,
     perChiKicker, perChiCoda, quando, schedaCompleta, suggerimentoCard

4. In js/main.js rimetti la card come <article> cliccabile invece che come
   link, e riaggancia gli ascoltatori:

     grid.querySelectorAll(".product-card").forEach((card) => {
       card.addEventListener("click", () => window.openPreview(card.dataset.id));
       card.addEventListener("keydown", (e) => {
         if (e.key === "Enter" || e.key === " ") {
           e.preventDefault();
           window.openPreview(card.dataset.id);
         }
       });
     });

   Serve anche rimettere sull'articolo: role="button", tabindex="0",
   aria-label e data-id="<id prodotto>", e riportare il "scopri di più" da
   <span> a <a href="prodotti/<id>.html">.

5. Nelle 14 schede prodotto (prodotti/ e en/prodotti/) rimetti il tasto in
   cima, dentro <div class="scheda-cta">, prima del blocco .acquisto:

     <button class="btn btn-solid" style="--btn-bg:COLORE;--btn-bg-h:COLORE-SCURO"
             onclick="openPreview('ID-PRODOTTO')">
       Anteprima visiva <span class="btn-arrow">&rarr;</span>
     </button>

   (in inglese: "Visual preview")

ATTENZIONE
----------
In anteprima.css NON ci sono .preview-body-wrap, .perchi-list, .perchi-chip,
.perchi-ico, .quando-list, .zone-tag e .body-schema: sono rimasti in
css/style.css perché li usano anche le colonne laterali delle schede
prodotto. Non duplicarli.
