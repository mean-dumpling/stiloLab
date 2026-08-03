# Stilo Lab — Sito vetrina personalizzabile

Sito statico (HTML + CSS + JavaScript puro, **nessun build step**): si apre anche
facendo doppio clic su `index.html`, oppure con un qualsiasi server statico.

## Come è organizzato

```
index.html               Home (hero, card prodotti, punti di forza)
chi-siamo.html           Pagine di contenuto. In fondo la sezione #contatti:
valori.html                recapiti + form (mailto, nessun backend)
guida-consumatore.html
ingredienti.html         Glossario generato automaticamente dai prodotti

prodotti/                ★ Schede prodotto: una pagina HTML statica per prodotto
  cist-off.html            (nome del file = id del prodotto)
  detoxa.html
  nevralis.html
  gear-up.html
  glutagut.html
  flebocare.html
  magbis.html

data/products.js         Dati per home, anteprima e glossario ingredienti
js/site.js               Mockup scatola, modale anteprima, menu
js/main.js               Rendering della home
js/illustrations.js      Illustrazioni SVG, icone, schema corpo umano
css/style.css            Stile (palette e font nelle variabili :root)
assets/img/              Qui vanno le foto reali dei prodotti
```

Le schede prodotto **non sono più generate da JavaScript**: sono pagine HTML
complete, modificabili direttamente. Restano collegate a `js/site.js` solo per
menu, animazioni e modale di anteprima.

## Gestire i prodotti

### Aggiungere un prodotto — due passaggi
1. **`data/products.js`** — copia un blocco `{...}` dentro `window.PRODUCTS` e
   cambia `id`, nome, colori e testi. Il prodotto compare **automaticamente** in
   scaffale hero, card della home, mappa del benessere, anteprima e glossario
   ingredienti.
2. **La scheda** — duplica una pagina in `prodotti/` (es. `prodotti/detoxa.html`),
   rinominala `prodotti/<id>.html` e aggiorna testi, colori e link. Ricordati di
   aggiungere la mini-card del nuovo prodotto nella sezione "Le altre formule"
   delle altre schede.

Dentro `prodotti/` i percorsi verso il resto del sito hanno il prefisso `../`
(`../css/style.css`, `../index.html`, `../assets/img/...`); i link tra una scheda
e l'altra restano invece semplici, es. `href="detoxa.html"`.

### Modificare una scheda esistente
Si modifica direttamente il file `prodotti/<id>.html`. I campi di `data/products.js` usati
solo dalla scheda (`descrizione`, `claimTriple`, `benefici`, `beneficiNota`,
`sinergia`, `ingredientiTabella`, `dosiRiferite`, `modoUso`, `avvertenze`,
`conservazione`, `ingredientiCompleti`) restano come testo di riferimento, ma
**non vengono più letti da nessuno script**: la fonte è la pagina HTML.

### Sostituire il mockup con la foto reale
1. Metti la foto in `assets/img/` (PNG con sfondo trasparente, ~600×900 px consigliati)
2. Nel prodotto imposta: `image: "assets/img/nomefile.png"`

Finché `image` è `null`, il sito genera la scatola-mockup via CSS dai dati
(colori, testi, formato) — quindi anche i prodotti futuri hanno subito un
mockup coerente senza bisogno di grafica.

Lo stesso vale per l'illustrazione della card: `cardImage: "assets/img/..."`,
altrimenti viene usata l'illustrazione SVG scelta con `illustration:`
(`berries | artichoke | neuron | mushrooms | leaf`).

### Anteprima visiva (clic sulla card)
Cliccando una card in home si apre l'anteprima con lo schema visivo:
- `zones` — aree evidenziate sul corpo umano: `testa`, `nervi`, `addome`, `pelvi`, `muscoli`
- `zoneLabel` — etichetta sotto lo schema (es. "Vie urinarie")
- `cosa` — testo "cos'è"
- `perChi` — elenco di chip icona+testo (icone: donna, uomo, adulto, anziano,
  sport, lavoro, stress, stagione, digestione, alimentazione, studio, notte)
- `quando` — elenco puntato "quando può essere utile"

### Struttura di una scheda prodotto
Ogni `prodotti/<id>.html` ha lo stesso scheletro dentro `<main id="product-page">`.
I blocchi facoltativi si eliminano semplicemente cancellandoli dall'HTML:
- `.scheda-claim3` — claim a tre parole nell'hero
- "A cosa contribuisce" (`.benefici-list`, + `.benefici-nota` per la nota finale)
- "I principali ingredienti" (`.agisce-grid`) — ogni `.agisce-item` si apre con
  l'immagine dell'ingrediente presa da `assets/img/ingredienti/`. Due classi:
  `ing-foto` per le fotografie (riempiono il riquadro) e `ing-tavola` per tavole
  botaniche e formule di struttura (si vedono intere, su fondo tenue).
  Provenienza e licenze in `assets/img/ingredienti/CREDITI.txt`: tutto pubblico
  dominio o CC0, nessuna attribuzione dovuta.
- "Perché questa combinazione?" (`.sinergia-panel`) — assente ad es. in `glutagut.html`
- "Contenuti medi" — con `class="ingredienti-table has-max"` e tre colonne quando
  la tabella riporta anche la dose massima (es. `cist-off.html`, `gear-up.html`)
- "Informazioni in etichetta" (`details.label-info`) — un `.label-block` per
  ingredienti, avvertenze e conservazione

I colori del prodotto si passano come variabili CSS inline
(`--p-main`, `--p-dark`, `--p-bg`, `--p-soft`): sostituendo i quattro valori
esadecimali si ricolora l'intera scheda.

### Schema corpo ("Dove agisce")
Il riquadro nelle schede prodotto e nella modale di anteprima è generato da
`bodySchema(zones, color)` in `js/illustrations.js`: evidenzia sulla figura le
zone indicate dal campo `zones` del prodotto.

> La **mappa del benessere** interattiva che stava in home è stata disattivata.
> Non è cancellata: codice, stili, una copia funzionante e le istruzioni per
> rimetterla sono in `_disattivati/mappa-benessere/`.

#### La figura umana
La sagoma è l'immagine **`assets/img/corpo.svg`**, messa come sfondo del
riquadro da `.body-schema` in `css/style.css`; i bagliori delle zone sono
disegnati in SVG sopra di essa.

Origine: "Male body silhouette" di *mlampret*, da
[Openclipart](https://openclipart.org/detail/82639/male-body-silhouette-by-mlampret)
via [publicdomainvectors.org](https://publicdomainvectors.org/en/free-clipart/Male-body-silhouette-vector-graphics/22372.html)
— **public domain**, uso commerciale libero, nessuna attribuzione dovuta
(la manteniamo per tracciabilità). Adattata: riquadratura e ricolorazione
sulla palette del sito.

Per cambiarla basta **sostituire quel file**, mantenendo il riquadro
**160×300** (es. 320×600 px): figura di fronte, centrata sull'asse `x=80`,
testa in alto (`y≈16`) e piedi in basso (`y≈286`), sfondo trasparente. Il
cambio vale in un colpo solo per home, anteprima e tutte le schede prodotto.

Se cambi le proporzioni della figura vanno ritarate le zone in `zoneGlow`
(`js/illustrations.js`). Riferimenti attuali:
testa 80,32 · torace 80,84 · addome 80,114 · bacino 80,146 ·
braccia x 49 e 111 a y 112 · cosce x 69 e 91 a y 186 · gambe fino a y 286.

### Dati del brand
Nome, claim, testi della home, sezione "Il nostro approccio" (`SITE.approach`)
e recapiti sono in `window.SITE` (sempre in `data/products.js`).

## Cambiare palette e font
In cima a `css/style.css`, variabili `:root` (`--green`, `--cream`, font, ecc.).
I colori di ciascun prodotto sono invece nel suo campo `theme` in `data/products.js`.
