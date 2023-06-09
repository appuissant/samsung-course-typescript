import { Types } from './Main';

export class Mail {
    tipo: Types;
    direccion: string;

    constructor(ti: Types, dir: string) {
        this.tipo = ti;
        this.direccion = dir;
    }

    // #region Getters

    getType(): Types {
        return this.tipo;
    }

    getDireccion(): string {
        return this.direccion;
    }

    // #endregion Getters

    // #region Setters

    setTipo(tipo: Types) {
        this.tipo = tipo;
    }

    setDireccion(direccion: string) {
        this.direccion = direccion;
    }

    // #endregion Setters
}