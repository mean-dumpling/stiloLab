TEMA CREMA — SOSTITUITO DAL BIANCO
==================================

Il sito era su fondo crema. È stato portato al bianco. Qui ci sono tutti i
valori di prima, per tornare indietro senza doverli ricostruire.

Attenzione: il crema non stava solo nelle due variabili. Compariva anche
scritto a mano nel velo sopra la foto dell'hero e in qualche sfondo minore.
Se si cambiano solo le variabili, il velo dell'hero resta crema sopra una
pagina bianca e si vede lo stacco. Vanno rimessi tutti i punti dell'elenco.


1. VARIABILI in css/style.css, blocco :root
-------------------------------------------
  --cream: #f7eedd;          /* sfondo hero */
  --cream-soft: #fdf9f1;     /* sfondo pagina */

   valori del bianco che le hanno sostituite:
  --cream: #f4f4f2;
  --cream-soft: #ffffff;


2. ALONE CALDO dietro all'hero  (regola .hero)
----------------------------------------------
  radial-gradient(circle at 78% 42%, #f3e2cc 0%, transparent 34%),

   sostituito con:  #ededea


3. VELO SOPRA LA FOTO DELL'HERO  (.hero-bg-panel::after)
--------------------------------------------------------
   desktop:
  background: linear-gradient(90deg, #f7eedd 0%, rgba(247,238,221,.85) 8%, rgba(247,238,221,.32) 24%, rgba(247,238,221,0) 44%);

   sotto i 900px:
  background:
    radial-gradient(110% 34% at 50% 43%, rgba(247,238,221,.84) 0%, rgba(247,238,221,.7) 45%, rgba(247,238,221,0) 100%),
    linear-gradient(180deg, rgba(247,238,221,.62) 0%, rgba(247,238,221,.3) 26%, rgba(247,238,221,.1) 60%, rgba(247,238,221,0) 100%);

   Nel bianco gli stessi gradienti usano #f4f4f2 / rgba(244,244,242,...).
   Le percentuali e le opacità NON vanno toccate: sono tarate sul contrasto
   del testo sopra la foto (misurato: titolo e paragrafo restano sopra
   soglia). Cambiare solo il colore.


4. SFONDI MINORI
----------------
  .box-side          background-color: #f3efe8;   → #f1f1ef
  .ingredienti-table td   border-top: 1px solid #f1ece1;   → #eeeeec
  .label-info        background: #faf8f3;         → #f9f9f8


5. COLORE DELLA BARRA DEL BROWSER  (26 pagine .html)
----------------------------------------------------
  <meta name="theme-color" content="#f7eedd">   → #ffffff


NON è stato toccato
-------------------
--line (#dfcca9), il bordo color sabbia: sul bianco risalta di più e tiene
insieme la parte calda dell'identità. Se lo si vuole neutro, un grigio
chiaro equivalente è #e4e4e0.
