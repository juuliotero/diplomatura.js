export class Collection {

    constructor(eltos) {
        this.elementos = eltos;
    }

    add(elto) {
        this.elementos.push(elto);
        console.log(this.elementos);
    }

    delete(elto) {
        let i = this.elementos.indexOf(elto);
        if (i !== -1) {
            this.elementos.splice(i, 1);
        }
    }

    has(elto) {
        let i = this.elementos.indexOf(elto);
        if (i !== -1) {
            return true;
        } else {
            return false;
        }
    }
}
