ILLUSTRAZIONI DELLE CARD — disattivate
======================================
Disattivate il 2 agosto 2026. Le card della home mostrano ora la
confezione del prodotto (renderMockup), non più un'illustrazione.

COS'ERANO
---------
Otto disegni vettoriali, uno per prodotto più un ripiego, mostrati
sopra al nome nelle card della home. Ricevevano il colore del prodotto,
quindi ogni card aveva la sua versione colorata.

  bolt       gear-up    fulmine, energia
  purify     detoxa     goccia, depurazione
  neuron     nevralis   neurone
  mineral    magbis     cristalli
  intestine  glutagut   ansa intestinale
  berries    cist-off   tre bacche e due foglie
  flow       flebocare  vaso che si dirama, ritorno venoso
  leaf       —          ripiego per prodotti nuovi

Sono la versione buona, rifatta da zero: le prime erano contorni sottili
e tratti a bassa opacità che a 150px diventavano poltiglia. Queste hanno
figure piene, contorno a 5.5px, tutto entro raggio 76 dal centro e le
giunzioni che si toccano davvero. Le regole di disegno sono scritte in
testa a illustrazioni.js: se un domani si riprende la strada, conviene
partire da lì invece che ridisegnare a caso.

COSA C'È IN QUESTA CARTELLA
---------------------------
illustrazioni.js   l'oggetto ILLUSTRATIONS completo, come era
anteprima.html     le otto illustrazioni a dimensione di card, ciascuna
                   sul colore e sul fondo del prodotto a cui apparteneva

PER RIMETTERLE
--------------
1. js/illustrations.js — riporta in cima il contenuto di illustrazioni.js
2. js/main.js — nella costruzione delle card sostituisci
      const art = window.renderMockup(p, "sm");
   con
      const art = p.cardImage
        ? `<img class="card-art-img" src="${p.cardImage}" alt="">`
        : (window.ILLUSTRATIONS[p.illustration] || window.ILLUSTRATIONS.leaf)(p.theme.main);
3. css/style.css — riporta .card-art a height 150px e margin-bottom 10px
   (ora è 176px per far stare la confezione)

Il campo "illustration" è rimasto in data/products.js su ogni prodotto:
non lo legge più nessuno, ma dice a quale disegno corrispondeva ciascuno.
