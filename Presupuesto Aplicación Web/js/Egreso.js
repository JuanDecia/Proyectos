class Egreso extends Dato {

    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);

        // '++Egreso' hace que el contador id comience en '1'.
        this._id = ++Egreso.contadorEgresos;
    }

    get id() {
        return this._id;
    }
}