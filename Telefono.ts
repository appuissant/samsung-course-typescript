import { Types } from './Main';

export class Telefono {
    tipo: Types;
    numero: string;

    constructor(ti: Types, num: string) {
        this.tipo = ti;
        this.numero = num;
    }

    // #region Getters

    getType(): Types {
        return this.tipo;
    }

    getNumero(): string {
        return this.numero;
    }

    // #endregion Getters

    // #region Setters

    setTipo(tipo: Types) {
        this.tipo = tipo;
    }

    setNumero(numero: string) {
        this.numero = numero;
    }

    // #endregion Setters
}