RITAGLIO DELLO SFONDO DEI MOCKUP — NON IN USO
=============================================

Sul sito ci sono le foto originali, con il loro sfondo pieno.
Qui c'è tutto il necessario per passare alle versioni trasparenti, se un
giorno si vuole: le immagini già ritagliate e lo script che le produce.


COSA C'È
--------
ritaglia-sfondo.py     lo script (serve Pillow)
ritagliate/            le quattro confezioni già ritagliate, pronte all'uso


PER PASSARE ALLE TRASPARENTI
----------------------------
Copiare i quattro file da ritagliate/ in assets/img/ sovrascrivendo.

Poi due ritocchi in css/style.css:

1. L'OMBRA. Nella regola .box-mockup c'è

       filter: drop-shadow(0 12px 14px rgba(100, 75, 40, .22));

   che va cambiata in

       filter: drop-shadow(0 7px 22px rgba(100, 75, 40, .17));

   Con le foto rettangolari l'ombra resta nascosta dietro al rettangolo e va
   bene così. Con le foto ritagliate segue la sagoma vera della scatola, e con
   lo scarto quasi pari alla sfocatura (12 contro 14) il contorno spostato
   sbuca sotto il bordo inferiore come una riga scura netta — molto visibile
   nello spigolo in basso a destra, dove per la prospettiva la scatola è più
   alta. Serve la sfocatura circa tripla dello scarto.

2. Il commento sopra a .box-photo img, che parla del fondo pieno.

Le immagini ritagliate sono rifilate sul contorno, quindi hanno proporzioni
diverse dalle originali: nel riquadro la confezione apparirà più grande,
perché non ha più il bordo di fondo attorno.


PERCHÉ PER ORA SI RESTA CON LE ORIGINALI
----------------------------------------
Scelta di chi cura il sito. Il ritaglio funziona ed è stato verificato, ma le
foto originali restano quelle fornite dal fotografo.


SE SERVE RITAGLIARE ALTRE FOTO
------------------------------
    python ritaglia-sfondo.py  CARTELLA_IN  CARTELLA_OUT

Lo script è commentato: dentro c'è spiegato come sono state scelte le soglie
e perché usa l'inviluppo convesso invece di seguire il contorno.

Un avvertimento che vale la pena ripetere: per controllare il risultato NON
basta guardare l'immagine su fondo bianco, perché un pezzo mancante appare
bianco e sembra a posto. Va guardato il solo canale alfa —

    Image.open("file.png").getchannel("A").show()

nero = trasparente, bianco = opaco. È così che sono venuti fuori i difetti
dei primi tentativi: bordi sfrangiati e un fianco intero mangiato via, che
sulla composita non si vedevano.
