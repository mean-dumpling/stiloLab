


window.STRINGHE = {
  it: {
    confezione: "Confezione",
    scopriDiPiu: "Scopri di più",
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
    confezione: "Pack of",
    scopriDiPiu: "Find out more",
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


window.formattaPrezzo = function (v) {
  if (!v) return "";
  return document.documentElement.lang === "en"
    ? "&euro;" + v
    : v + "&nbsp;&euro;";
};


window.TERMINI = {
  it: {

    cerca: /biodisponibil(?:it[àa]|e)/i,
    titolo: "Biodisponibilità",
    testo: "Quanta parte di un ingrediente il corpo riesce davvero ad assorbire e a usare. Non basta che sia nella capsula.",
    aria: "Cosa vuol dire biodisponibilità?",
    piu: "Scopri di più",
    ancora: "guida-consumatore.html#biodisponibilita"
  },
  en: {
    cerca: /bioavailab(?:ility|le)/i,
    titolo: "Bioavailability",
    testo: "How much of an ingredient the body can actually absorb and use. Being in the capsule is not enough.",
    aria: "What does bioavailability mean?",
    piu: "Find out more",
    ancora: "guida-consumatore.html#biodisponibilita"
  }
};

window.getProduct = function (id) {
  return window.PRODUCTS.find((p) => p.id === id) || null;
};


window.renderMockup = function (p, size) {
  size = size || "md";

  if (p.inArrivo) {
    return `<div class="box-mockup box-arrivo box-${size}" style="--box-color:${p.theme.main};--box-dark:${p.theme.dark}">
      <div class="box-front"><span>${window.T.inArrivo}</span></div>
    </div>`;
  }
  if (p.image) {

    let su = "";
    if (location.pathname.includes("/prodotti/")) su += "../";
    if (location.pathname.includes("/en/")) su += "../";
    return `<div class="box-mockup box-photo box-${size}">
      <img src="${su}${p.image}" alt="${window.T.confezione} ${p.name}">
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


document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });


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
  window.initSpiegaTermini();
  window.suggerisciLingua();
});


window.initSpiegaTermini = function () {
  const cfg = window.TERMINI[document.documentElement.lang === "en" ? "en" : "it"];
  if (!cfg || !document.body) return;

  const base = location.pathname.includes("/prodotti/") ? "../" : "";
  const FUORI = "a, button, h1, script, style, .spiega-wrap, .spiega-bolla," +
                " .site-header, .site-footer, .preview-card, #biodisponibilita";


  const nodi = [];
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      if (!n.nodeValue || !cfg.cerca.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      if (!n.parentElement || n.parentElement.closest(FUORI)) return NodeFilter.FILTER_REJECT;
      const dopo = n.nextSibling;
      if (dopo && dopo.classList && dopo.classList.contains("spiega-wrap")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let n;
  while ((n = tw.nextNode())) nodi.push(n);
  if (!nodi.length) return;

  let contatore = 0;
  nodi.forEach((nodo) => {
    const m = cfg.cerca.exec(nodo.nodeValue);
    if (!m) return;
    const resto = nodo.splitText(m.index + m[0].length);

    const id = "spiega-" + ++contatore;
    const wrap = document.createElement("span");
    wrap.className = "spiega-wrap";

    const segno = document.createElement("button");
    segno.type = "button";
    segno.className = "spiega";
    segno.textContent = "?";
    segno.setAttribute("aria-expanded", "false");
    segno.setAttribute("aria-label", cfg.aria);
    segno.setAttribute("aria-describedby", id);

    const bolla = document.createElement("span");
    bolla.className = "spiega-bolla";
    bolla.id = id;
    bolla.setAttribute("role", "tooltip");
    bolla.hidden = true;
    bolla.innerHTML =
      '<span class="spiega-titolo"></span><span class="spiega-testo"></span>' +
      '<a class="spiega-link" href="' + base + cfg.ancora + '"></a>';
    bolla.querySelector(".spiega-titolo").textContent = cfg.titolo;
    bolla.querySelector(".spiega-testo").textContent = cfg.testo;
    bolla.querySelector(".spiega-link").textContent = cfg.piu + " →";
    bolla.addEventListener("click", (e) => e.stopPropagation());

    segno.addEventListener("click", (e) => {
      e.stopPropagation();
      const eraAperto = segno.getAttribute("aria-expanded") === "true";
      window.chiudiSpiegazioni();
      if (eraAperto) return;
      segno.setAttribute("aria-expanded", "true");
      bolla.hidden = false;

      bolla.style.transform = "";
      bolla.style.setProperty("--coda-dx", "0px");
      const r = bolla.getBoundingClientRect();
      const margine = 12;
      let dx = 0;
      if (r.left < margine) dx = margine - r.left;
      else if (r.right > window.innerWidth - margine) dx = window.innerWidth - margine - r.right;
      if (dx) {
        bolla.style.transform = "translateX(calc(-50% + " + Math.round(dx) + "px))";
        bolla.style.setProperty("--coda-dx", -Math.round(dx) + "px");
      }
    });

    wrap.appendChild(segno);
    wrap.appendChild(bolla);
    nodo.parentNode.insertBefore(wrap, resto);
  });

  if (!window.__spiegaAscolto) {
    window.__spiegaAscolto = true;
    document.addEventListener("click", () => window.chiudiSpiegazioni());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") window.chiudiSpiegazioni();
    });
  }
};

window.chiudiSpiegazioni = function () {
  document.querySelectorAll('.spiega[aria-expanded="true"]').forEach((s) => {
    s.setAttribute("aria-expanded", "false");
    const b = s.parentNode.querySelector(".spiega-bolla");
    if (b) b.hidden = true;
  });
};


window.initTastiWhatsApp = function () {
  const tasti = document.querySelectorAll(".btn-compra-wa, .header-wa");
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
    const messaggio = prodotto
      ? (inglese ? `Hello, I would like information about ${prodotto}.`
                 : `Buongiorno, vorrei informazioni su ${prodotto}.`)
      : (inglese ? "Hello, I'm writing from the Stilo Lab website."
                 : "Buongiorno, vi scrivo dal sito Stilo Lab.");
    a.href = `https://wa.me/${numero}?text=${encodeURIComponent(messaggio)}`;
    a.target = "_blank";
    a.classList.remove("is-off");
    a.removeAttribute("aria-disabled");
  });
};


window.suggerisciLingua = function () {
  if (document.documentElement.lang !== "it") return;
  if (document.querySelector(".lang-hint")) return;

  const gemella = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!gemella || !gemella.getAttribute("href")) return;


  const lingue = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];
  if (lingue.some((l) => String(l).toLowerCase().indexOf("it") === 0)) return;


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
