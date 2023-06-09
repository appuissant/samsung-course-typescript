"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(ti, dir) {
        this.tipo = ti;
        this.direccion = dir;
    }
    // #region Getters
    getType() {
        return this.tipo;
    }
    getDireccion() {
        return this.direccion;
    }
    // #endregion Getters
    // #region Setters
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
}
exports.Mail = Mail;
