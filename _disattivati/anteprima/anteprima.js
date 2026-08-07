/* Modale d'anteprima prodotto — DISATTIVATA.
   Tolta da js/site.js. Per riattivarla vedi README.txt.
   ============================================================ */

/* ————— ANTEPRIMA PRODOTTO (modale con schema visivo) ————— */
window.openPreview = function (id) {
  const p = window.getProduct(id);
  if (!p) return;

  /* L'anteprima si apre sia dalle pagine in root sia dalle schede in prodotti/ */
  const base = location.pathname.includes("/prodotti/") ? "" : "prodotti/";

  let overlay = document.getElementById("preview-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "preview-overlay";
    overlay.className = "preview-overlay";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) window.closePreview();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") window.closePreview();
    });
  }

  const chips = p.perChi
    .map(
      (c) => `
      <li class="perchi-chip">
        <span class="perchi-ico">${window.perChiIcon(c.icon, p.theme.dark)}</span>
        <span>${c.label}</span>
      </li>`
    )
    .join("");

  const quando = p.quando
    .map((q) => `<li style="--dot:${p.theme.main}">${q}</li>`)
    .join("");

  overlay.innerHTML = `
  <div class="preview-card" role="dialog" aria-modal="true" aria-label="${window.T.anteprima} ${p.name}" style="--pv-main:${p.theme.main};--pv-dark:${p.theme.dark};--pv-soft:${p.theme.soft};--pv-bg:${p.theme.cardBg}">
    <button class="preview-close" aria-label="${window.T.chiudiAnteprima}" onclick="closePreview()">&times;</button>

    <header class="preview-head">
      <div class="preview-mock">${window.renderMockup(p, "sm")}</div>
      <div>
        <h3 class="preview-name">${p.displayName}</h3>
        <p class="preview-tagline">${p.tagline}</p>
      </div>
    </header>

    <div class="preview-grid">
      <section class="preview-col preview-cosa">
        <h4><span class="pv-kicker">${window.T.cosaKicker}</span>${window.T.cosaCoda}</h4>
        <p>${p.cosa}</p>
        <div class="preview-body-wrap">
          ${window.bodySchema(p.zones, p.theme.main)}
          <span class="zone-tag" style="background:${p.theme.main}">${p.zoneLabel}</span>
        </div>
      </section>

      <section class="preview-col preview-chi">
        <h4><span class="pv-kicker">${window.T.perChiKicker}</span>${window.T.perChiCoda}</h4>
        <ul class="perchi-list">${chips}</ul>
        <h4 class="preview-quando-title">${window.T.quando}</h4>
        <ul class="quando-list">${quando}</ul>
      </section>
    </div>

    <footer class="preview-foot">
      <span class="preview-format">${p.format} · ${p.weight}</span>
      <a class="btn btn-solid" style="--btn-bg:${p.theme.main};--btn-bg-h:${p.theme.dark}" href="${base}${p.id}.html">
        ${window.T.schedaCompleta} <span class="btn-arrow">&rarr;</span>
      </a>
    </footer>
  </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closePreview = function () {
  const overlay = document.getElementById("preview-overlay");
  if (overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
};
