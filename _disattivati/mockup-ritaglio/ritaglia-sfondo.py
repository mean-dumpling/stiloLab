#!/usr/bin/env python3
"""
Toglie lo sfondo alle foto delle confezioni e le salva in PNG trasparente.

USO
---
    python ritaglia-sfondo.py                 # legge originali/, scrive ritagliate/
    python ritaglia-sfondo.py  IN  OUT        # cartelle a scelta

Serve Pillow:   python -m pip install Pillow


COME FUNZIONA, E PERCHÉ COSÌ
----------------------------
1. Mappa dei contorni: per ogni pixel, di quanto differisce dai vicini.

2. Riempimento dai bordi dell'immagine, che avanza solo dove il salto di
   colore resta sotto MURO. Il fondo è una sfumatura liscia, quindi viene
   percorso tutto; il contorno della scatola è un salto netto e lo ferma.

   MURO = 3 non è a caso: misurato sulle quattro foto, il fondo varia al
   massimo di 2 fra pixel vicini, mentre il contorno più debole della
   scatola — il bordo superiore di cist-off, bianco su bianco — salta di 5.
   Con 4, 6 o 8 la riempitura passa da lì e si mangia i pannelli chiari.

3. Si scartano i granelli isolati.

4. INVILUPPO CONVESSO di quel che resta. È il passaggio che fa la differenza.

   Anche con la soglia giusta la riempitura entra comunque nella scatola da
   sotto, dove il bordo inferiore sfuma nella sua ombra di contatto, e una
   volta dentro dilaga sui pannelli lisci. Il risultato: bordi inferiori
   sfrangiati su tutte le foto e, su alcune, il fianco laterale mangiato via.

   Ma la scatola è un solido convesso, quindi la sua sagoma è un poligono
   convesso: ricostruirlo rende il ritaglio insensibile ai punti in cui la
   riempitura sbaglia, perché quegli errori finiscono dentro al poligono.

   Attenzione: vale finché il soggetto è convesso. Su una bottiglia con
   manico, o su due confezioni affiancate, l'inviluppo riempirebbe anche il
   vuoto in mezzo.

5. Erosione di 1px (toglie l'alone grigio dei pixel di bordo, che sono una
   mescola fra scatola e fondo), sfumatura di 0,8px, rifilatura sul contenuto
   e ridimensionamento a MAXW.


COME CONTROLLARE IL RISULTATO
-----------------------------
Non basta guardare l'immagine composita su bianco: un pezzo mancante appare
bianco e sembra a posto. Va guardato il SOLO canale alfa —

    Image.open("file.png").getchannel("A").show()

nero = trasparente, bianco = opaco. Lì i difetti si vedono subito.
"""

from PIL import Image, ImageFilter, ImageDraw
from collections import deque
import sys, os, glob

MURO = 3      # salto massimo fra pixel vicini per considerarli entrambi fondo
MINI = 0.0005 # componenti sotto questa frazione dell'immagine = granelli
MAXW = 620    # larghezza finale (sul sito la confezione si vede al massimo a 236px)


def inviluppo_convesso(punti):
    """catena monotona di Andrew"""
    punti = sorted(set(punti))
    if len(punti) < 3:
        return punti
    def croce(o, a, b):
        return (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0])
    giu = []
    for p in punti:
        while len(giu) >= 2 and croce(giu[-2], giu[-1], p) <= 0:
            giu.pop()
        giu.append(p)
    su = []
    for p in reversed(punti):
        while len(su) >= 2 and croce(su[-2], su[-1], p) <= 0:
            su.pop()
        su.append(p)
    return giu[:-1] + su[:-1]


def ritaglia(percorso_in, percorso_out):
    im = Image.open(percorso_in).convert("RGB")
    w, h = im.size
    d = im.tobytes()

    # 1. mappa dei contorni
    grad = bytearray(w*h)
    for y in range(h):
        r = y*w
        for x in range(w):
            i = r+x; b = i*3; g = 0
            if x < w-1:
                c = (i+1)*3
                g = max(g, abs(d[c]-d[b]), abs(d[c+1]-d[b+1]), abs(d[c+2]-d[b+2]))
            if y < h-1:
                c = (i+w)*3
                g = max(g, abs(d[c]-d[b]), abs(d[c+1]-d[b+1]), abs(d[c+2]-d[b+2]))
            grad[i] = min(255, g)

    # 2. riempimento dai bordi, fermato dai contorni
    fondo = bytearray(w*h)
    coda = deque()
    def semina(i):
        if not fondo[i] and grad[i] < MURO:
            fondo[i] = 1; coda.append(i)
    for x in range(w):
        semina(x); semina((h-1)*w + x)
    for y in range(h):
        semina(y*w); semina(y*w + w-1)
    while coda:
        i = coda.popleft(); y, x = divmod(i, w)
        for k, dentro in ((i-1, x > 0), (i+1, x < w-1), (i-w, y > 0), (i+w, y < h-1)):
            if dentro and not fondo[k] and grad[k] < MURO:
                fondo[k] = 1; coda.append(k)

    # 3. tutto ciò che non è fondo, tolti i granelli
    visto = bytearray(w*h); punti = []; soglia = int(w*h*MINI)
    for s in range(w*h):
        if fondo[s] or visto[s]:
            continue
        comp = []; q = deque([s]); visto[s] = 1
        while q:
            i = q.popleft(); comp.append(i); y, x = divmod(i, w)
            for k, dentro in ((i-1, x > 0), (i+1, x < w-1), (i-w, y > 0), (i+w, y < h-1)):
                if dentro and not fondo[k] and not visto[k]:
                    visto[k] = 1; q.append(k)
        if len(comp) >= soglia:
            for i in comp:
                y, x = divmod(i, w); punti.append((x, y))
    if not punti:
        raise SystemExit("nessun soggetto trovato in " + percorso_in)

    # 4. inviluppo convesso
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).polygon(inviluppo_convesso(punti), fill=255)

    # 5. rifinitura
    mask = mask.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
    out = im.convert("RGBA"); out.putalpha(mask)
    bb = out.getbbox(); pad = max(4, int(min(w, h)*0.008))
    out = out.crop((max(0, bb[0]-pad), max(0, bb[1]-pad),
                    min(w, bb[2]+pad), min(h, bb[3]+pad)))
    if out.width > MAXW:
        out = out.resize((MAXW, round(out.height*MAXW/out.width)), Image.LANCZOS)
    out.save(percorso_out, optimize=True)
    return out.size


if __name__ == "__main__":
    qui = os.path.dirname(os.path.abspath(__file__))
    cart_in  = sys.argv[1] if len(sys.argv) > 1 else os.path.join(qui, "originali")
    cart_out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(qui, "ritagliate")
    os.makedirs(cart_out, exist_ok=True)
    file = sorted(glob.glob(os.path.join(cart_in, "*.png")) +
                  glob.glob(os.path.join(cart_in, "*.jpg")))
    if not file:
        raise SystemExit("nessuna immagine in " + cart_in)
    for f in file:
        nome = os.path.basename(f)
        dim = ritaglia(f, os.path.join(cart_out, os.path.splitext(nome)[0] + ".png"))
        print("%-24s -> %dx%d" % (nome, dim[0], dim[1]))
