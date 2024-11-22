"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoInterno2 = void 0;
const Juego_1 = require("./Juego");
class JuegoInterno2 extends Juego_1.Juego {
    constructor() {
        super('Juego Interno 2', 'Simulación de otro juego interno de tragamonedas.');
    }
    jugar(apuesta) {
        if (!apuesta.validar()) {
            throw new Error('Apuesta no válida');
        }
        const resultado = Math.random() < 0.4; // 40% de ganar  
        return resultado ? apuesta.monto * 3 : -apuesta.monto; // Ganar o perder  
    }
}
exports.JuegoInterno2 = JuegoInterno2;
