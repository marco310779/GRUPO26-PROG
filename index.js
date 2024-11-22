"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Apuesta_1 = require("./Apuesta");
const Ruleta_1 = require("./Ruleta");
const Tragamonedas_1 = require("./Tragamonedas");
// Función principal del programa  
function main() {
    const ruleta = new Ruleta_1.Ruleta();
    const tragamonedas = new Tragamonedas_1.Tragamonedas();
    // Crear una apuesta  
    const apuesta = new Apuesta_1.ApuestaConcreta(100, 'color rojo');
    // Ejemplo de juego  
    try {
        console.log('Resultado de la Ruleta:', ruleta.jugar(apuesta));
        console.log('Resultado de Tragamonedas:', tragamonedas.jugar(apuesta));
    }
    catch (error) {
        console.error(error);
    }
}
// Iniciar el programa  
main();
