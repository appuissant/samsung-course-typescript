"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(ti, num) {
        this.tipo = ti;
        this.numero = num;
    }
    // #region Getters
    getType() {
        return this.tipo;
    }
    getNumero() {
        return this.numero;
    }
    // #endregion Getters
    // #region Setters
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setNumero(numero) {
        this.numero = numero;
    }
}
exports.Telefono = Telefono;
