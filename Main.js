"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
const Direccion_1 = require("./Direccion");
const Persona_1 = require("./Persona");
const Mail_1 = require("./Mail");
const Telefono_1 = require("./Telefono");
var Types;
(function (Types) {
    Types["personal"] = "Personal";
    Types["trabajo"] = "Trabajo";
})(Types || (exports.Types = Types = {}));
// #region Funciones
const mostrarRegistros = (personas) => {
    for (let persona of personas) {
        console.log(`${persona.getPersona()}`);
    }
};
const buscarPersonaPorDni = (personas, dni) => {
    for (let i = 0; i < personas.length - 1; i++) {
        if (personas[i].getDni() === dni)
            return i;
    }
};
// #endregion Funciones
// #region Main
const persona1 = new Persona_1.Persona("José", "Pérez", 38, "12345678A", new Date("1985, 01, 26"), "Rojo", "Masculino");
const persona2 = new Persona_1.Persona("Laura", "Gómez", 28, "23456789B", new Date("1995, 03, 15"), "Negro", "Femenino");
const persona3 = new Persona_1.Persona("Lola", "Martínez", 45, "42416789A", new Date("1978, 02, 22"), "Verde", "Femenino");
persona1.addDireccion(new Direccion_1.Direccion("Calle Mayor", 5, 2, "B", 46184, "San Antonio de Benagéber", "Valencia"));
persona1.addMail(new Mail_1.Mail(Types.personal, "jose.perez@gmail.com"));
persona1.addTelefono(new Telefono_1.Telefono(Types.personal, "612345678"));
persona1.addNota("Bloque 5");
persona1.addNota("Escalera A");
persona2.addDireccion(new Direccion_1.Direccion("Calle Las Palmas", 35, 12, "A", 18510, "Benalúa", "Granada"));
persona2.addMail(new Mail_1.Mail(Types.personal, "laura.gomez@gmail.com"));
persona2.addMail(new Mail_1.Mail(Types.trabajo, "l.gomez@hotmail.com"));
persona2.addTelefono(new Telefono_1.Telefono(Types.personal, "623456789"));
persona2.addNota("Es en planta baja");
persona3.addDireccion(new Direccion_1.Direccion("Calle Zeus", 6, 1, "C", 0o3016, "Ciudad de Alicante", "Alicante"));
persona3.addMail(new Mail_1.Mail(Types.personal, "lola.martinez@gmail.com"));
persona3.addTelefono(new Telefono_1.Telefono(Types.personal, "687123450"));
persona3.addTelefono(new Telefono_1.Telefono(Types.trabajo, "996234567"));
persona3.addNota("Hace esquina con la calle Mirador");
const personas = [persona1, persona2, persona3];
console.log("Registros de persona:\n");
mostrarRegistros(personas);
let numPersona = buscarPersonaPorDni(personas, "12345678A");
if (numPersona != undefined) {
    personas[numPersona].addDireccion(new Direccion_1.Direccion("Plaza España", 75, 5, "C", 46440, "Sagunto", "Valencia"));
    personas[numPersona].addMail(new Mail_1.Mail(Types.trabajo, "j.perez@hotmail.com"));
    personas[numPersona].addTelefono(new Telefono_1.Telefono(Types.trabajo, "633578215"));
    console.log("Registros de persona actualizados:\n");
}
else
    console.error("No existe ningún registro de persona con ese número de DNI. No se ha actualizado ningún registro.");
mostrarRegistros(personas);
// #endregion Main
