import { Direccion } from "./Direccion";
import { Persona } from "./Persona";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export enum Types {
    personal = "Personal",
    trabajo = "Trabajo"
}

// #region Funciones
const mostrarRegistros = (personas: Persona[]) => {
    for (let persona of personas) {
        console.log(`${persona.getPersona()}`);
    }
}

const buscarPersonaPorDni = (personas: Persona[], dni: string) => {
    for (let i = 0; i < personas.length - 1; i++) {
        if (personas[i].getDni() === dni)
            return i;
    }
};

// #endregion Funciones

// #region Main
const persona1: Persona = new Persona("José", "Pérez", 38, "12345678A", new Date("1985, 01, 26"), "Rojo", "Masculino");
const persona2: Persona = new Persona("Laura", "Gómez", 28, "23456789B", new Date("1995, 03, 15"), "Negro", "Femenino");
const persona3: Persona = new Persona("Lola", "Martínez", 45, "42416789A", new Date("1978, 02, 22"), "Verde", "Femenino");

persona1.addDireccion(new Direccion("Calle Mayor", 5, 2, "B", 46184, "San Antonio de Benagéber", "Valencia"));
persona1.addMail(new Mail(Types.personal, "jose.perez@gmail.com"));
persona1.addTelefono(new Telefono(Types.personal, "612345678"));
persona1.addNota("Bloque 5");
persona1.addNota("Escalera A");

persona2.addDireccion(new Direccion("Calle Las Palmas", 35, 12, "A", 18510, "Benalúa", "Granada"));
persona2.addMail(new Mail(Types.personal, "laura.gomez@gmail.com"));
persona2.addMail(new Mail(Types.trabajo, "l.gomez@hotmail.com"));
persona2.addTelefono(new Telefono(Types.personal, "623456789"));
persona2.addNota("Es en planta baja");

persona3.addDireccion(new Direccion("Calle Zeus", 6, 1, "C", 0o3016, "Ciudad de Alicante", "Alicante"));
persona3.addMail(new Mail(Types.personal, "lola.martinez@gmail.com"));
persona3.addTelefono(new Telefono(Types.personal, "687123450"));
persona3.addTelefono(new Telefono(Types.trabajo, "996234567"));
persona3.addNota("Hace esquina con la calle Mirador");

const personas: Persona[] = [persona1, persona2, persona3];

console.log("Registros de persona:\n");
mostrarRegistros(personas);

let numPersona = buscarPersonaPorDni(personas, "12345678A");

if (numPersona != undefined) {
    personas[numPersona].addDireccion(new Direccion("Plaza España", 75, 5, "C", 46440, "Sagunto", "Valencia"));
    personas[numPersona].addMail(new Mail(Types.trabajo, "j.perez@hotmail.com"));
    personas[numPersona].addTelefono(new Telefono(Types.trabajo, "633578215"));

    console.log("Registros de persona actualizados:\n");    
}
else
    console.error("No existe ningún registro de persona con ese número de DNI. No se ha actualizado ningún registro.");

mostrarRegistros(personas);
// #endregion Main