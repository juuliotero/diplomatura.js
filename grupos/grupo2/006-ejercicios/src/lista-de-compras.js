
document.getElementById('app').innerHTML = 'Lista de productos';
const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];

let idLista = document.getElementById('lista');
let ultimoID = TODO.length;
for (let i = 0; i < TODO.length; i++) {
    let item = creatItemLi(TODO[i], i + 1);
    let btmDelete = createBtnDelete()
    item.appendChild(btmDelete);
    idLista.appendChild(item);
}

/** Creo un item - text: texto le la lista, id del item li  */
function creatItemLi(text, id) {
    let itemLi = document.createElement('li');
    let textLi = document.createTextNode(text);
    itemLi.appendChild(textLi);
    itemLi.setAttribute("id", id);
    return itemLi
}

/** Creo un boton eliminar y lo devuelvo */
function createBtnDelete() {
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btnEliminar');
    let textBtn = document.createTextNode("Eliminar");
    deleteBtn.appendChild(textBtn);
    deleteBtn.onclick = eliminarItem;   // GlobalEventHandlers.onclick
    return deleteBtn
}
function eliminarItem() {
    let parentNode = this.parentNode;
    if (parentNode) {
        parentNode.parentNode.removeChild(parentNode);
    }
}

/* Agrego un item a la lista */
let btnAgregar = document.querySelector('.after');
btnAgregar.addEventListener('click', function () {
    ultimoID += 1;
    let item = creatItemLi(document.getElementById('entrada').value, ultimoID);
    document.getElementById('entrada').innerHTML = '';
    let btmDelete = createBtnDelete();
    item.appendChild(btmDelete);
    idLista.appendChild(item);
});
