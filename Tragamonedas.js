"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const Juego_1 = require("./Juego");
const JuegoInterno1_1 = require("./JuegoInterno1");
const JuegoInterno2_1 = require("./JuegoInterno2");
class Tragamonedas extends Juego_1.Juego {
    constructor() {
        super('Tragamonedas', 'Máquina de juego con dos juegos internos.');
        this.juegos = [new JuegoInterno1_1.JuegoInterno1(), new JuegoInterno2_1.JuegoInterno2()];
    }
    jugar(apuesta) {
        if (!apuesta.validar()) {
            throw new Error('Apuesta no válida');
        }
        // Elegir aleatoriamente uno de los juegos internos  
        const juegoElegido = this.juegos[Math.floor(Math.random() * this.juegos.length)];
        const resultado = juegoElegido.jugar(apuesta);
        return resultado;
    }
}
exports.Tragamonedas = Tragamonedas;
