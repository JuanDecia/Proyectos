class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);

        // '++Ingreso' realiza el contador a partir de '1'.
        this._id = ++Ingreso.contadorIngresos;
    }

    get id() {
        return this._id;
    }
}