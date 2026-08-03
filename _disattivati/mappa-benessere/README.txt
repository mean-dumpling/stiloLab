MAPPA DEL BENESSERE — sezione disattivata
=========================================
Disattivata il 2 agosto 2026. Non è cancellata: qui c'è tutto il
necessario per rimetterla in funzione, e una copia che gira davvero.

COS'ERA
-------
Una sezione della home: una figura umana con sei zone toccabili
(testa, sistema nervoso, muscoli, addome, bacino, gambe). Toccando una
zona — o il chip corrispondente — comparivano i prodotti che agiscono
lì. Le zone attive erano ricavate dal campo "zones" dei prodotti in
data/products.js, quindi si aggiornavano da sole.

PERCHÉ È STATA TOLTA
--------------------
Costringeva a un rapporto "un prodotto = una zona" che già oggi non
regge (nevralis ne tocca tre, magbis due), ed era il modo più lento di
arrivare a un prodotto: bisognava cliccare una zona per scoprire cosa
c'era dentro.

COSA C'È IN QUESTA CARTELLA
---------------------------
mappa.html   copia funzionante: aprila per vedere la sezione com'era
mappa.js     ZONES_META, le coordinate delle zone, wellnessMap() e il
             montaggio in pagina — cioè quanto è stato tolto da
             js/illustrations.js e js/main.js. Contiene anche una copia
             autonoma di zoneGlow(), che nel sito vivo è una funzione
             privata di illustrations.js e da fuori non si può chiamare.
mappa.css    gli stili .wellness-map e .wmap-*, tolti da css/style.css
corpo.svg    copia della figura umana usata dalla mappa

DIPENDENZE ANCORA VIVE NEL SITO
-------------------------------
La copia in mappa.html si appoggia a file del sito che sono rimasti al
loro posto perché servono anche altrove (schede prodotto e anteprima):
  data/products.js       i prodotti e le loro "zones"
  js/illustrations.js    bodySchema() e le icone
  js/site.js             renderMockup() per le mini-card
  css/style.css          .body-schema, .wm-pulse, .wm-nerve, .mini-card
  assets/img/corpo.svg   la figura, sfondo di .body-schema
Se un domani si toglie anche lo schema corpo dalle schede prodotto,
questi pezzi sparirebbero: in quel caso serve la copia corpo.svg qui
accanto e vanno recuperati gli stili condivisi dal foglio vivo.

PER RIMETTERLA IN HOME
----------------------
1. index.html — rimetti la sezione, fra "LE NOSTRE FORMULE" e
   "IL NOSTRO APPROCCIO" (il markup è dentro mappa.html, il blocco
   <section class="wellness-map">).
2. css/style.css — riporta il contenuto di mappa.css, e rimetti
   .wellness-map nella regola del padding a 560px insieme a
   .formules e .approach.
3. js/illustrations.js — riporta ZONES_META, WMAP_HOTSPOTS e
   wellnessMap() (in mappa.js), togliendo la copia di zoneGlow che
   nel file vivo c'è già.
4. js/main.js — riporta il blocco di montaggio (in mappa.js, dentro
   montaMappaBenessere) fra le card prodotto e "Il nostro approccio",
   ripristinando il link diretto "prodotti/<id>.html" al posto di
   window.__mappaBase.

NOTA
----
Lo schema corpo statico nelle schede prodotto ("Dove agisce") e nella
modale di anteprima NON è stato toccato: continua a funzionare. Qui è
disattivata solo la mappa interattiva della home.
