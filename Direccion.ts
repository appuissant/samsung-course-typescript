export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigo_postal: number;
    poblacion: string;
    provincia: string;

    constructor(
        cal: string,
        num: number,
        p: number,
        l: string,
        cp: number,
        pob: string,
        prov: string) {
        this.calle = cal;
        this.numero = num;
        this.piso = p;
        this.letra = l;
        this.codigo_postal = cp;
        this.poblacion = pob;
        this.provincia = prov;
    }

    // #region Getters

    getCalle(): string {
        return this.calle;
    }

    getNumero(): number {
        return this.numero;
    }

    getPiso(): number {
        return this.piso;
    }

    getLetra(): string {
        return this.letra;
    }

    getCodigoPostal(): number {
        return this.codigo_postal;
    }

    getPoblacion(): string {
        return this.poblacion;
    }

    getProvincia(): string {
        return this.provincia;
    }

    getDireccionCompleta(): string {
        return `${this.calle}, ${this.numero ? this.numero : 'S/N'} ${this.piso}${this.letra}. ${this.codigo_postal}, ${this.poblacion}, ${this.provincia}`;
    }

    // #endregion Getters

    // #region Setters

    setCalle(calle: string) {
        this.calle = calle;
    }

    setNumero(numero: number) {
        this.numero = numero;
    }

    setPiso(piso: number) {
        this.piso = piso;
    }

    setLetra(letra: string) {
        this.letra = letra;
    }

    setCodigoPostal(codigo_postal: number) {
        this.codigo_postal = codigo_postal;
    }

    setPoblacion(poblacion: string) {
        this.poblacion = poblacion;
    }

    setProvincia(provincia: string) {
        this.provincia = provincia;
    }

    // #endregion Setters
}