"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoInterno1 = void 0;
const Juego_1 = require("./Juego");
class JuegoInterno1 extends Juego_1.Juego {
    constructor() {
        super('Juego Interno 1', 'Simulación de un juego interno de tragamonedas.');
    }
    jugar(apuesta) {
        if (!apuesta.validar()) {
            throw new Error('Apuesta no válida');
        }
        const resultado = Math.random() < 0.3; // 30% de ganar  
        return resultado ? apuesta.monto * 2.5 : -apuesta.monto; // Ganar o perder  
    }
}
exports.JuegoInterno1 = JuegoInterno1;
