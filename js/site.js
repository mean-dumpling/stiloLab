/* ============================================================
   STILO LAB — FUNZIONI CONDIVISE
   (mockup scatola, anteprima prodotto, helper)
   Non serve modificare questo file per gestire i prodotti:
   tutto si configura in data/products.js
   ============================================================ */

/* ————— STRINGHE D'INTERFACCIA (it / en) —————
   Il sito esiste in italiano — il default, nella root — e in inglese, nella
   cartella en/. Ogni pagina dichiara la propria lingua in <html lang>: da lì
   si sceglie il dizionario. Così non serve un file di script per lingua, e
   soprattutto niente popup di scelta all'arrivo.
   I contenuti dei prodotti non stanno qui: le pagine inglesi caricano
   data/products-en.js al posto di data/products.js. */
window.STRINGHE = {
  it: {
    anteprima: "Anteprima",
    chiudiAnteprima: "Chiudi anteprima",
    confezione: "Confezione",
    cosaKicker: "Cos'è", cosaCoda: " e dove agisce",
    perChiKicker: "Per chi", perChiCoda: " è pensato",
    quando: "Quando può essere utile",
    schedaCompleta: "Vai alla scheda completa",
    scopriDiPiu: "Scopri di più",
    suggerimentoCard: "Clicca per l'anteprima",
    apriMenu: "Apri il menu", chiudiMenu: "Chiudi il menu",
    inArrivo: "In arrivo",
    punti: [
      { icon: "formule", title: "Formule mirate", text: "Formule essenziali, sviluppate per rispondere a esigenze specifiche." },
      { icon: "ingredienti", title: "Ingredienti selezionati", text: "Scegliamo con cura ingredienti di qualità e di origine controllata." },
      { icon: "tollerabilita", title: "Senza glutine e lattosio", text: "Formule pensate per essere ben tollerate ogni giorno." },
      { icon: "qualita", title: "Qualità e rigore", text: "Produciamo nel rispetto dei più alti standard di qualità." }
    ]
  },
  en: {
    anteprima: "Preview",
    chiudiAnteprima: "Close preview",
    confezione: "Pack of",
    cosaKicker: "What it is", cosaCoda: " and where it works",
    perChiKicker: "Who", perChiCoda: " it is for",
    quando: "When it can help",
    schedaCompleta: "See the full product page",
    scopriDiPiu: "Find out more",
    suggerimentoCard: "Click for a preview",
    apriMenu: "Open the menu", chiudiMenu: "Close the menu",
    inArrivo: "Coming soon",
    punti: [
      { icon: "formule", title: "Focused formulas", text: "Essential formulas, developed to answer specific needs." },
      { icon: "ingredienti", title: "Selected ingredients", text: "We carefully choose quality ingredients from controlled sources." },
      { icon: "tollerabilita", title: "Gluten and lactose free", text: "Formulas designed to be well tolerated every day." },
      { icon: "qualita", title: "Quality and rigour", text: "We manufacture to the highest quality standards." }
    ]
  }
};
window.T = window.STRINGHE[document.documentElement.lang === "en" ? "en" : "it"];

window.getProduct = function (id) {
  return window.PRODUCTS.find((p) => p.id === id) || null;
};

/* ————— MOCKUP SCATOLA —————
   Se product.image è impostato mostra la foto reale,
   altrimenti genera la scatola via CSS dai dati. */
window.renderMockup = function (p, size) {
  size = size || "md";
  /* Prodotto non ancora in vendita: non c'è una confezione da mostrare, al
     suo posto va il segnaposto con la scritta in diagonale. */
  if (p.inArrivo) {
    return `<div class="box-mockup box-arrivo box-${size}" style="--box-color:${p.theme.main};--box-dark:${p.theme.dark}">
      <div class="box-front"><span>${window.T.inArrivo}</span></div>
    </div>`;
  }
  if (p.image) {
    return `<div class="box-mockup box-photo box-${size}">
      <img src="${p.image}" alt="${window.T.confezione} ${p.name}">
    </div>`;
  }
  const claim = p.boxClaim || null;
  return `
  <div class="box-mockup box-${size}" style="--box-color:${p.theme.main};--box-dark:${p.theme.dark}">
    <div class="box-side"></div>
    <div class="box-front">
      <div class="box-top">
        <span class="box-name">${p.name}</span>
        <span class="box-brand-sm">STILO LAB</span>
      </div>
      <div class="box-panel">${p.boxSubtitle}</div>
      <div class="box-claim">${claim ? claim : p.tagline.toUpperCase()}</div>
      <div class="box-bottom">
        <span class="box-logo">STILO<em>LAB</em></span>
        <span class="box-format">${p.format}<br>${p.weight}</span>
      </div>
    </div>
  </div>`;
};

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

/* ————— Animazioni di comparsa (discrete, disattivate se l'utente
   preferisce ridurre il movimento) ————— */
window.initReveal = function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  if (!window.__revealIO) {
    window.__revealIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  const sel =
    ".product-card, .feature, .agisce-item, .value-card, .gloss-card, " +
    ".approach-step, .mini-card, .sinergia-panel, .benefici-list li";
  document.querySelectorAll(sel).forEach((el) => {
    if (el.dataset.rv) return;
    el.dataset.rv = "1";
    el.classList.add("reveal");
    window.__revealIO.observe(el);
  });
};

/* ————— Menu attivo + menu mobile ————— */
document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  /* menu mobile: apertura/chiusura accessibile */
  const burger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav");
  if (burger && nav) {
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.innerHTML = open ? "&#10005;" : "&#9776;";
      burger.setAttribute("aria-label", open ? window.T.chiudiMenu : window.T.apriMenu);
    };
    burger.setAttribute("aria-expanded", "false");
    burger.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) setOpen(false);
    });
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("open") && !e.target.closest(".site-header")) setOpen(false);
    });
  }

  window.initReveal();
  window.initTastiWhatsApp();
  window.suggerisciLingua();
});

/* ————— TASTO "COMPRA TRAMITE WHATSAPP" —————
   Il numero NON si scrive nelle pagine: sta in un posto solo, SITE.whatsapp
   in data/products.js (e products-en.js per il sito inglese). Da lì questa
   funzione costruisce il link wa.me di ogni scheda, con un messaggio già
   pronto che dice quale prodotto interessa — il nome lo prende dal tasto
   stesso (data-prodotto). Così per cambiare numero si tocca una riga sola.
   Finché SITE.whatsapp è vuoto il tasto resta spento e senza indirizzo, per
   non pubblicare per sbaglio un link che non porta da nessuna parte. */
window.initTastiWhatsApp = function () {
  const tasti = document.querySelectorAll(".btn-compra-wa");
  if (!tasti.length) return;
  const numero = ((window.SITE && window.SITE.whatsapp) || "").replace(/\D/g, "");
  const inglese = document.documentElement.lang === "en";

  tasti.forEach((a) => {
    if (!numero) {
      a.classList.add("is-off");
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      return;
    }
    const prodotto = a.dataset.prodotto || "";
    const messaggio = inglese
      ? `Hello, I would like information about ${prodotto}.`
      : `Buongiorno, vorrei informazioni su ${prodotto}.`;
    a.href = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;
    a.target = "_blank";
    a.classList.remove("is-off");
    a.removeAttribute("aria-disabled");
  });
};

/* ————— SUGGERIMENTO DI LINGUA —————
   Regola: nessun popup all'arrivo. Chi ha il browser in italiano non vede
   assolutamente niente — l'italiano è il default del sito e resta tale.
   Solo a chi ha il browser in un'altra lingua compare una barra discreta in
   fondo, scritta in inglese (chi la legge non sa l'italiano), che propone la
   versione inglese. Si può ignorare: non blocca né copre la pagina.
   L'indirizzo della pagina gemella non è scritto qui, si legge dal
   <link rel="alternate" hreflang="en"> che ogni pagina ha già: così una
   pagina nuova funziona da sola, senza toccare questo file.
   La risposta si ricorda, quindi la barra si vede una volta sola. */
window.suggerisciLingua = function () {
  if (document.documentElement.lang !== "it") return;
  if (document.querySelector(".lang-hint")) return;

  const gemella = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!gemella || !gemella.getAttribute("href")) return;

  /* navigator.languages è l'elenco in ordine di preferenza; se anche una sola
     delle lingue preferite è l'italiano, non c'è niente da chiedere. */
  const lingue = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];
  if (lingue.some((l) => String(l).toLowerCase().indexOf("it") === 0)) return;

  /* in navigazione privata localStorage può lanciare: in quel caso il
     suggerimento resta valido per la sessione e basta */
  const CHIAVE = "stilolab-lingua";
  const ricorda = (v) => { try { localStorage.setItem(CHIAVE, v); } catch (e) {} };
  try { if (localStorage.getItem(CHIAVE)) return; } catch (e) {}

  const barra = document.createElement("div");
  barra.className = "lang-hint";
  barra.lang = "en";
  barra.setAttribute("role", "region");
  barra.setAttribute("aria-label", "Language");
  barra.innerHTML =
    "<p>This site is also available in English.</p>" +
    '<div class="lang-hint-azioni">' +
    '<a class="btn btn-solid" href="' + gemella.getAttribute("href") + '">Read in English</a>' +
    '<button type="button" class="lang-hint-no">Stay in Italian</button>' +
    "</div>";
  document.body.appendChild(barra);
  requestAnimationFrame(() => barra.classList.add("in"));

  const chiudi = () => {
    ricorda("it");
    barra.classList.remove("in");
    setTimeout(() => barra.remove(), 250);
  };
  barra.querySelector("a").addEventListener("click", () => ricorda("en"));
  barra.querySelector(".lang-hint-no").addEventListener("click", chiudi);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.contains(barra)) chiudi();
  });
};
