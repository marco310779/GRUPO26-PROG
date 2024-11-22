"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApuestaConcreta = void 0;
// Implementación concreta de la apuesta  
class ApuestaConcreta {
    constructor(monto, tipo) {
        this.monto = monto;
        this.tipo = tipo;
    }
    validar() {
        return this.monto > 0;
    }
}
exports.ApuestaConcreta = ApuestaConcreta;
