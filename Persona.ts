import { Direccion } from './Direccion';
import { Mail } from './Mail';
import { Telefono } from './Telefono';

export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumple: Date;
    color_favorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: string[];

    constructor(nom: string, ap: string, ed: number, doc: string, cumple: Date, color_fav: string, sex: string) {
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
    getNombre(): string {
        return this.nombre;
    }

    getApellidos(): string {
        return this.apellidos;
    }

    getEdad(): number {
        return this.edad;
    }

    getDni(): string {
        return this.dni;
    }

    getCumple(): Date {
        return this.cumple;
    }

    getColorFav(): string {
        return this.color_favorito;
    }

    getSexo(): string {
        return this.sexo;
    }

    getDirecciones(): Direccion[] {
        return this.direcciones;
    }

    getMails(): Mail[] {
        return this.mails;
    }

    getTelefonos(): Telefono[] {
        return this.telefonos;
    }

    getNotas(): string[] {
        return this.notas;
    }

    getInformacionContacto(): string {
        const direcciones: Direccion[] = this.getDirecciones();
        const mails: Mail[] = this.getMails();
        const telefonos: Telefono[] = this.getTelefonos();
        let contactInfo: string = "Información de contacto:\n\t";

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

    getPersona(): string {
        const nombreApellidos: string =  `${this.getNombre()} ${this.getApellidos()}`;
        const cumple: string = `${this.getCumple().getDay()}/${this.getCumple().getMonth() + 1}/${this.getCumple().getFullYear()}`;
        const nacimiento: string = `${this.getEdad()} años, nacid${this.getSexo() === "Femenino" ? 'a' : 'o'} el ${this.getCumple().toLocaleDateString("es")}`;
        const colorFav: string = `Su color favorito es el ${this.getColorFav()}.`;

        return `${nombreApellidos}, ${nacimiento}. ${colorFav}\n\t${this.getInformacionContacto()}`;
    }

    // #endregion Getters

    // #region Setters

    setNombre(nombre: string){
        this.nombre = nombre;
    }

    setApellidos(apellidos: string){
        this.apellidos = apellidos;
    }

    setEdad(edad: number){
        this.edad = edad;
    }

    setDni(dni: string){
        this.dni = dni;
    }

    setCumple(cumple: Date){
        this.cumple = cumple;
    }

    setColorFav(color_fav: string){
        this.color_favorito = color_fav;
    }

    setSexo(sexo: string){
        this.sexo = sexo;
    }

    addDireccion(direccion: Direccion){
        this.direcciones.push(direccion);
    }

    addMail(mail: Mail){
        this.mails.push(mail);
    }

    addTelefono(telefono: Telefono){
        this.telefonos.push(telefono);
    }

    addNota(notas: string){
        this.notas.push(notas);
    }

    // #endregion Setters
}