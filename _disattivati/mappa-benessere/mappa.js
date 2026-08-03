/* ============================================================
   MAPPA DEL BENESSERE — codice disattivato, tenuto come riferimento
   ------------------------------------------------------------
   Era la sezione interattiva della home: si toccava una zona del corpo
   (o un chip) e comparivano i prodotti che agiscono su quella zona.
   Rimossa dal sito il 2 agosto 2026. Qui dentro c'è tutto quello che
   è stato tolto da js/illustrations.js e da js/main.js, invariato.

   Per rimetterla in funzione vedi README.txt.
   ============================================================ */

/* ————— Etichette delle zone (era in js/illustrations.js) ————— */
window.ZONES_META = {
  testa:   { label: "Mente e umore" },
  nervi:   { label: "Sistema nervoso" },
  muscoli: { label: "Muscoli" },
  addome:  { label: "Fegato e digestione" },
  pelvi:   { label: "Vie urinarie" },
  gambe:   { label: "Gambe e circolazione" }
};

/* ————— Bagliore di una zona: sfumatura + punto + anelli pulsanti —————
   Copia autonoma di zoneGlow(), che nel sito vivo sta in js/illustrations.js
   ma è una funzione privata del file e da fuori non si può chiamare.
   Tenerne una copia qui rende la cartella indipendente: se un domani il
   codice vivo cambia, questo riferimento continua a funzionare com'era.
   Coordinate tarate sulla figura di assets/img/corpo.svg:
   testa y16-50 · spalle y58-72 · braccia x≈49 e 111 · vita y≈96 ·
   bacino y130-160 · inguine y≈162 · gambe x≈69 e 91, fino a y286 */
function zoneGlow(zone, color, uid) {
  const gid = `wmg-${uid}-${zone}`;
  const grad = `
    <radialGradient id="${gid}">
      <stop offset="0%" stop-color="${color}" stop-opacity=".5"/>
      <stop offset="65%" stop-color="${color}" stop-opacity=".18"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>`;
  const pulse = (x, y) => `
    <circle cx="${x}" cy="${y}" r="12" fill="none" stroke="${color}" stroke-width="1.6" class="wm-pulse"/>
    <circle cx="${x}" cy="${y}" r="12" fill="none" stroke="${color}" stroke-width="1.6" class="wm-pulse wm-pulse-2"/>`;
  const core = (x, y) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${color}"/>`;

  switch (zone) {
    case "testa":
      return { grad, body: `<circle cx="80" cy="32" r="24" fill="url(#${gid})"/>${core(80, 32)}${pulse(80, 32)}` };
    case "nervi":
      return { grad, body: `
        <circle cx="80" cy="84" r="28" fill="url(#${gid})"/>
        <g stroke="${color}" stroke-width="2.2" stroke-linecap="round" fill="none" class="wm-nerve">
          <path d="M80 56v104" opacity=".6"/>
          <path d="M80 74l-13 8M80 74l13 8M80 100l-11 8M80 100l11 8M80 126l-9 8M80 126l9 8" opacity=".45"/>
        </g>${core(80, 84)}${pulse(80, 84)}` };
    case "addome":
      return { grad, body: `<ellipse cx="80" cy="114" rx="27" ry="20" fill="url(#${gid})"/>${core(80, 114)}${pulse(80, 114)}` };
    case "pelvi":
      return { grad, body: `<ellipse cx="80" cy="146" rx="25" ry="17" fill="url(#${gid})"/>${core(80, 146)}${pulse(80, 146)}` };
    case "muscoli":
      return { grad, body: `
        <ellipse cx="49" cy="112" rx="10" ry="30" fill="url(#${gid})" transform="rotate(3 49 112)"/>
        <ellipse cx="111" cy="112" rx="10" ry="30" fill="url(#${gid})" transform="rotate(-3 111 112)"/>
        <ellipse cx="69" cy="186" rx="11" ry="24" fill="url(#${gid})"/>
        <ellipse cx="91" cy="186" rx="11" ry="24" fill="url(#${gid})"/>
        ${core(49, 112)}${core(111, 112)}${pulse(111, 112)}` };
    case "gambe":
      return { grad, body: `
        <ellipse cx="69" cy="226" rx="12" ry="58" fill="url(#${gid})"/>
        <ellipse cx="91" cy="226" rx="12" ry="58" fill="url(#${gid})"/>
        ${core(69, 226)}${core(91, 226)}${pulse(91, 226)}` };
    default:
      return { grad: "", body: "" };
  }
}

/* ————— Figura interattiva: tutte le zone toccabili —————
   (era in js/illustrations.js, sotto bodySchema) */
const WMAP_HOTSPOTS = { testa: [80, 32], nervi: [80, 84], muscoli: [111, 112], addome: [80, 114], pelvi: [80, 146], gambe: [91, 226] };

window.wellnessMap = function (active, color) {
  const uid = "map" + String(color).replace(/[^a-z0-9]/gi, "");
  const act = zoneGlow(active, color, uid);
  const spots = Object.keys(WMAP_HOTSPOTS).map((z) => {
    const [x, y] = WMAP_HOTSPOTS[z];
    const isActive = z === active;
    return `
    <g class="wmap-hot${isActive ? " wmap-hot-active" : ""}" data-zone="${z}" role="button" tabindex="0"
       aria-label="${window.ZONES_META[z].label}" aria-pressed="${isActive}">
      <circle cx="${x}" cy="${y}" r="17" fill="transparent"/>
      ${isActive ? "" : `<circle cx="${x}" cy="${y}" r="4.5" fill="#c3b69f" opacity=".75"/>
      <circle cx="${x}" cy="${y}" r="9" fill="none" stroke="#c3b69f" stroke-width="1.4" opacity=".45"/>`}
    </g>`;
  }).join("");
  return `
  <svg viewBox="0 0 160 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="body-schema wmap-svg">
    <defs>${act.grad}</defs>
    <ellipse cx="80" cy="152" rx="66" ry="142" fill="${color}" opacity=".05"/>
    ${act.body}
    ${spots}
  </svg>`;
};

/* ————— Montaggio in pagina (era in js/main.js) ————— */
window.montaMappaBenessere = function () {
  const wmapFigure = document.getElementById("wmap-figure");
  const wmapChips = document.getElementById("wmap-chips");
  const wmapProducts = document.getElementById("wmap-products");
  if (!(wmapFigure && wmapChips && wmapProducts)) return;

  const zones = Object.keys(window.ZONES_META).filter((z) =>
    window.PRODUCTS.some((p) => p.zones.includes(z))
  );
  const productsFor = (z) => window.PRODUCTS.filter((p) => p.zones.includes(z));
  const colorFor = (z) => productsFor(z)[0].theme.main;
  let active = zones[0];

  const renderMap = () => {
    const color = colorFor(active);
    wmapFigure.innerHTML = window.wellnessMap(active, color);

    wmapChips.innerHTML = zones
      .map((z) => {
        const isActive = z === active;
        const c = colorFor(z);
        return `<button class="wmap-chip${isActive ? " active" : ""}" data-zone="${z}"
                  style="--chip-main:${c}" aria-pressed="${isActive}">
                  <span class="wmap-chip-dot"></span>${window.ZONES_META[z].label}
                </button>`;
      })
      .join("");

    wmapProducts.innerHTML = productsFor(active)
      .map(
        (p) => `
        <a class="mini-card" href="${window.__mappaBase || ""}prodotti/${p.id}.html"
           style="--card-bg:${p.theme.cardBg};--card-main:${p.theme.main}">
          <div class="mini-mock">${window.renderMockup(p, "xs")}</div>
          <div>
            <strong>${p.displayName}</strong>
            <span>${p.tagline}</span>
          </div>
        </a>`
      )
      .join("");
  };

  const selectZone = (z) => {
    if (!z || z === active || !zones.includes(z)) return;
    active = z;
    renderMap();
  };

  wmapChips.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-zone]");
    if (chip) selectZone(chip.dataset.zone);
  });
  wmapFigure.addEventListener("click", (e) => {
    const hot = e.target.closest("[data-zone]");
    if (hot) selectZone(hot.dataset.zone);
  });
  wmapFigure.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const hot = e.target.closest("[data-zone]");
    if (hot) {
      e.preventDefault();
      selectZone(hot.dataset.zone);
    }
  });

  renderMap();
};

document.addEventListener("DOMContentLoaded", window.montaMappaBenessere);
