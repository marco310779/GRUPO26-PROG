"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
class Juego {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    leerReglas() {
        const fs = require('fs');
        try {
            const data = fs.readFileSync('reglas.txt', 'utf8');
            console.log(data);
        }
        catch (err) {
            console.error('Error leyendo el archivo de reglas', err);
        }
    }
}
exports.Juego = Juego;
