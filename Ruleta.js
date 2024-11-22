"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
const Juego_1 = require("./Juego");
class Ruleta extends Juego_1.Juego {
    constructor() {
        super('Ruleta', 'Juego de azar donde apuestas a un número o color.');
    }
    jugar(apuesta) {
        if (!apuesta.validar()) {
            throw new Error('Apuesta no válida');
        }
        const resultado = Math.random() < 0.5; // 50% de ganar  
        return resultado ? apuesta.monto * 2 : -apuesta.monto; // Ganar o perder  
    }
}
exports.Ruleta = Ruleta;
