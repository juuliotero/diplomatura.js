export class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    sumar(vector) {
        let nuevoVector = new Vector();
        nuevoVector.x = this.getX() + vector.x;
        nuevoVector.y = this.getY() + vector.y;
        return nuevoVector;
    }
}
