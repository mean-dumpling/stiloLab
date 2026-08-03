/* ============================================================
   STILO LAB — HOME PAGE
   Genera la griglia delle card prodotto e le sezioni dai dati.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* Lo scaffale di mockup nell'hero è stato disattivato: markup, codice e
     istruzioni per il ritorno in _disattivati/scaffale-hero/ */

  /* ————— Card prodotti ————— */
  const grid = document.getElementById("product-grid");
  if (grid) {
    grid.innerHTML = window.PRODUCTS.map((p) => {
      /* la card mostra la confezione: renderMockup usa la foto del prodotto
         se c'è (campo image), altrimenti genera la scatola via CSS dai dati */
      /* per i prodotti con inArrivo:true renderMockup restituisce il segnaposto
         con la scritta in diagonale al posto della confezione */
      const art = window.renderMockup(p, "sm");
      return `
      <article class="product-card" style="--card-bg:${p.theme.cardBg};--card-main:${p.theme.main};--card-dark:${p.theme.dark}"
               role="button" tabindex="0" aria-label="${window.T.anteprima} ${p.name}"
               data-id="${p.id}">
        <div class="card-art">${art}</div>
        <h3 class="card-name">${p.displayName}</h3>
        <p class="card-tagline">${p.tagline}</p>
        <p class="card-ingredients">${p.shortIngredients}</p>
        <div class="card-actions">
          <!-- variante scura: il testo del bottone sta su fondo colorato, con
               il colore principale resterebbe sotto soglia di leggibilità -->
          <a class="btn btn-outline" style="--btn-color:${p.theme.dark};--btn-dark:${p.theme.dark}"
             href="prodotti/${p.id}.html" onclick="event.stopPropagation()">
            ${window.T.scopriDiPiu} <span class="btn-arrow">&rsaquo;</span>
          </a>
        </div>
        <span class="card-hint">${window.T.suggerimentoCard}</span>
      </article>`;
    }).join("");

    grid.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => window.openPreview(card.dataset.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.openPreview(card.dataset.id);
        }
      });
    });
  }

  /* La mappa del benessere veniva montata qui: disattivata, il codice è in
     _disattivati/mappa-benessere/mappa.js */

  /* ————— Il nostro approccio ————— */
  const approachIntro = document.getElementById("approach-intro");
  const approachSteps = document.getElementById("approach-steps");
  if (approachIntro && approachSteps && window.SITE.approach) {
    approachIntro.textContent = window.SITE.approach.intro;
    approachSteps.innerHTML = window.SITE.approach.steps
      .map(
        (s, i) => `
        <li class="approach-step">
          <span class="approach-num">${i + 1}</span>
          <h3>${s.title}</h3>
          <p>${s.text}</p>
        </li>`
      )
      .join("");
  }

  /* ————— Fascia punti di forza —————
     I testi stanno nel dizionario di js/site.js, che li serve in italiano o
     in inglese secondo il <html lang> della pagina. */
  const strip = document.getElementById("features-strip");
  if (strip) {
    strip.innerHTML = window.T.punti.map(
      (f) => `
      <div class="feature">
        <span class="feature-ico">${window.featureIcon(f.icon, "#7aa03c")}</span>
        <div>
          <h3>${f.title}</h3>
          <p>${f.text}</p>
        </div>
      </div>`
    ).join("");
  }

  window.initReveal();
});
