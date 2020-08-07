function getNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function crearGlobo(top, left, color) {
    let frag = document.createDocumentFragment(),
        globo = document.createElement('div');
    globo.innerHTML = `<div class='globo' onclick='this.remove();checkJuego()' style='top:${top}px;left:${left}px;'><div class='cuerpo' style='background:${color}
        ;'></div > <div class='nudo' style='border-bottom: 10px solid ${color};'></div> <div class='soga'></div></div >`;
    while (globo.firstChild) {
        frag.appendChild(globo.firstChild);
    }
    return frag;
}

const colores = ['#ff5832', '#373782', '#ffff83'];
const cantGlobos = getNumeroRandom(10, 30);

for (i = 1; i <= cantGlobos; i++) {
    const globo = crearGlobo(getNumeroRandom(10, 410), getNumeroRandom(10, 1100), colores[i % 3]);
    document.body.insertBefore(globo, document.body.childNodes[2]);
}
