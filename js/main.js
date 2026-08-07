

document.addEventListener("DOMContentLoaded", () => {



  const grid = document.getElementById("product-grid");
  if (grid) {
    grid.innerHTML = window.PRODUCTS.map((p) => {


      const art = window.renderMockup(p, "sm");

      return `
      <a class="product-card" href="prodotti/${p.id}.html"
         style="--card-bg:${p.theme.cardBg};--card-main:${p.theme.main};--card-dark:${p.theme.dark}">
        <div class="card-art">${art}</div>
        <h3 class="card-name">${p.displayName}</h3>
        <p class="card-tagline">${p.tagline}</p>
        <p class="card-ingredients">${p.shortIngredients}</p>
        <div class="card-actions">

          <span class="card-prezzo" style="color:${p.theme.dark}">${window.formattaPrezzo(p.price)}</span>

          <span class="btn btn-outline" style="--btn-color:${p.theme.dark};--btn-dark:${p.theme.dark}">
            ${window.T.scopriDiPiu} <span class="btn-arrow">&rsaquo;</span>
          </span>
        </div>
      </a>`;
    }).join("");
  }




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

  window.initSpiegaTermini();
});
