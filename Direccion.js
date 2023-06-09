"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(cal, num, p, l, cp, pob, prov) {
        this.calle = cal;
        this.numero = num;
        this.piso = p;
        this.letra = l;
        this.codigo_postal = cp;
        this.poblacion = pob;
        this.provincia = prov;
    }
    // #region Getters
    getCalle() {
        return this.calle;
    }
    getNumero() {
        return this.numero;
    }
    getPiso() {
        return this.piso;
    }
    getLetra() {
        return this.letra;
    }
    getCodigoPostal() {
        return this.codigo_postal;
    }
    getPoblacion() {
        return this.poblacion;
    }
    getProvincia() {
        return this.provincia;
    }
    getDireccionCompleta() {
        return `${this.calle}, ${this.numero ? this.numero : 'S/N'} ${this.piso}${this.letra}. ${this.codigo_postal}, ${this.poblacion}, ${this.provincia}`;
    }
    // #endregion Getters
    // #region Setters
    setCalle(calle) {
        this.calle = calle;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    setPiso(piso) {
        this.piso = piso;
    }
    setLetra(letra) {
        this.letra = letra;
    }
    setCodigoPostal(codigo_postal) {
        this.codigo_postal = codigo_postal;
    }
    setPoblacion(poblacion) {
        this.poblacion = poblacion;
    }
    setProvincia(provincia) {
        this.provincia = provincia;
    }
}
exports.Direccion = Direccion;
