"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nom, ap, ed, doc, cumple, color_fav, sex) {
        this.nombre = nom;
        this.apellidos = ap;
        this.edad = ed;
        this.dni = doc;
        this.cumple = cumple;
        this.color_favorito = color_fav;
        this.sexo = sex;
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.notas = [];
    }
    // #region Getters
    getNombre() {
        return this.nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    getEdad() {
        return this.edad;
    }
    getDni() {
        return this.dni;
    }
    getCumple() {
        return this.cumple;
    }
    getColorFav() {
        return this.color_favorito;
    }
    getSexo() {
        return this.sexo;
    }
    getDirecciones() {
        return this.direcciones;
    }
    getMails() {
        return this.mails;
    }
    getTelefonos() {
        return this.telefonos;
    }
    getNotas() {
        return this.notas;
    }
    getInformacionContacto() {
        const direcciones = this.getDirecciones();
        const mails = this.getMails();
        const telefonos = this.getTelefonos();
        let contactInfo = "Información de contacto:\n\t";
        for (let i = 0; i < direcciones.length; i++) {
            //contactInfo += `Dirección ${i + 1}: ${direcciones[i].getDireccionCompleta()}${(i === direcciones.length - 1) ? '' : '\n\t'}`;
            contactInfo += `Dirección ${i + 1}: ${direcciones[i].getDireccionCompleta()}\n\t`;
        }
        for (let i = 0; i < mails.length; i++) {
            //contactInfo += `Mail ${i + 1}: ${mails[i].getDireccion()}${(i === mails.length - 1) ? '' : '\n\t'}`;
            contactInfo += `Mail ${i + 1}: ${mails[i].getDireccion()}\n\t`;
        }
        for (let i = 0; i < telefonos.length; i++) {
            //contactInfo += `Teléfono ${i + 1}: ${telefonos[i].getNumero()}${(i === telefonos.length - 1) ? '' : '\n\t'}`;
            contactInfo += `Teléfono ${i + 1}: ${telefonos[i].getNumero()}\n\t`;
        }
        return contactInfo;
    }
    getPersona() {
        const nombreApellidos = `${this.getNombre()} ${this.getApellidos()}`;
        const cumple = `${this.getCumple().getDay()}/${this.getCumple().getMonth() + 1}/${this.getCumple().getFullYear()}`;
        const nacimiento = `${this.getEdad()} años, nacid${this.getSexo() === "Femenino" ? 'a' : 'o'} el ${this.getCumple().toLocaleDateString("es")}`;
        const colorFav = `Su color favorito es el ${this.getColorFav()}.`;
        return `${nombreApellidos}, ${nacimiento}. ${colorFav}\n\t${this.getInformacionContacto()}`;
    }
    // #endregion Getters
    // #region Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setDni(dni) {
        this.dni = dni;
    }
    setCumple(cumple) {
        this.cumple = cumple;
    }
    setColorFav(color_fav) {
        this.color_favorito = color_fav;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    addDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    addMail(mail) {
        this.mails.push(mail);
    }
    addTelefono(telefono) {
        this.telefonos.push(telefono);
    }
    addNota(notas) {
        this.notas.push(notas);
    }
}
exports.Persona = Persona;
