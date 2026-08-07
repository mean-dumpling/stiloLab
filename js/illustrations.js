


window.PERCHI_ICONS = {
  donna: `<circle cx="12" cy="7" r="3.5"/><path d="M12 10.5 8 19h8l-4-8.5Z"/><path d="M9.5 19v2.5M14.5 19v2.5"/>`,
  uomo: `<circle cx="12" cy="6.5" r="3.5"/><path d="M8 21v-6a4 4 0 0 1 8 0v6"/>`,
  adulto: `<circle cx="12" cy="6.5" r="3.5"/><path d="M8 21v-6a4 4 0 0 1 8 0v6"/>`,
  anziano: `<circle cx="11" cy="6.5" r="3.5"/><path d="M7 21v-6a4 4 0 0 1 7-2.5"/><path d="M17 12v9M17 12l1.5-1.5"/>`,
  sport: `<circle cx="13" cy="5.5" r="2.5"/><path d="M13 8 8 12l3 3-2 6M13 8l4 3 3-1M11 15l4 2"/>`,
  lavoro: `<rect x="4" y="9" width="16" height="10" rx="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2M4 13h16"/>`,
  stress: `<circle cx="12" cy="12" r="7"/><path d="M9 10.5h.01M15 10.5h.01M9.5 15.5c1.5-1.2 3.5-1.2 5 0"/>`,
  stagione: `<circle cx="12" cy="12" r="4"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>`,
  digestione: `<path d="M9 4v4a5 5 0 0 0 5 5h1a4 4 0 0 1 0 8h-4"/><path d="M13 4v3"/>`,
  alimentazione: `<path d="M7 3v7a2.5 2.5 0 0 0 5 0V3M9.5 3v18"/><path d="M16 3c2 2 3 5 3 8s-1.5 4-3 4v6"/>`,

  dieta: `<path d="M12 21c-3.6 0-6.5-2.9-6.5-6.5 0-3.4 2.2-4.6 3.2-7.4C9.4 5 10.5 3 12 3s2.6 2 3.3 4.1c1 2.8 3.2 4 3.2 7.4 0 3.6-2.9 6.5-6.5 6.5Z"/><ellipse cx="12" cy="14.6" rx="2.8" ry="3.1"/>`,
  studio: `<path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M7 9.5V15c0 1.5 2.5 3 5 3s5-1.5 5-3V9.5"/><path d="M21 7v6"/>`,
  notte: `<path d="M20 14A8.5 8.5 0 0 1 10 4a8 8 0 1 0 10 10Z"/><path d="M16 5h3M17.5 3.5v3" opacity=".7"/>`
};

window.perChiIcon = function (key, color) {
  const path = window.PERCHI_ICONS[key] || window.PERCHI_ICONS.adulto;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
};


window.FEATURE_ICONS = {
  formule: `<path d="M12 3c-4 3-6 7-6 11a6 6 0 0 0 12 0c0-4-2-8-6-11Z"/><path d="M12 8v9M9.5 12.5 12 15l2.5-2.5"/>`,
  ingredienti: `<path d="M18 4C10 5 5 10 5 17c0 1 .5 2 .5 2S7 20 9 20c7 0 10-6 9-16Z"/><path d="M6 19C9 13 13 9 17 6"/>`,

  tollerabilita: `<path d="M12 21v-6.6"/><path d="M12 14.4c0-1.8 1.5-3.2 3.4-3.2 0 1.8-1.5 3.2-3.4 3.2Z"/><path d="M12 14.4c0-1.8-1.5-3.2-3.4-3.2 0 1.8 1.5 3.2 3.4 3.2Z"/><path d="M12 10.2c0-1.8 1.5-3.2 3.4-3.2 0 1.8-1.5 3.2-3.4 3.2Z"/><path d="M12 10.2c0-1.8-1.5-3.2-3.4-3.2 0 1.8 1.5 3.2 3.4 3.2Z"/><path d="M12 6.2c-1-1.1-1-2.6 0-3.7 1 1.1 1 2.6 0 3.7Z"/><path d="M3.5 20.5 20.5 3.5"/>`,
  qualita: `<path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9 11.5 2.2 2.2L15.5 9.5"/>`
};

window.featureIcon = function (key, color) {
  const path = window.FEATURE_ICONS[key] || window.FEATURE_ICONS.formule;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
};




function bodySilhouette(color) {
  return `
    <ellipse cx="80" cy="152" rx="66" ry="142" fill="${color}" opacity=".05"/>`;
}


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

window.bodySchema = function (zones, color) {
  const uid = String(color).replace(/[^a-z0-9]/gi, "");
  const parts = zones.map((z) => zoneGlow(z, color, uid));
  return `
  <svg viewBox="0 0 160 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="body-schema" aria-hidden="true">
    <defs>${parts.map((p) => p.grad).join("")}</defs>
    ${bodySilhouette(color)}
    ${parts.map((p) => p.body).join("")}
  </svg>`;
};

