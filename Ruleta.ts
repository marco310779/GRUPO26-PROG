import { Juego } from './Juego';  
import { Apuesta } from './Apuesta';  

export class Ruleta extends Juego {  
    constructor() {  
        super('Ruleta', 'Juego de azar donde apuestas a un número o color.');  
    }  

    jugar(apuesta: Apuesta): number {  
        if (!apuesta.validar()) {  
            throw new Error('Apuesta no válida');  
        }  
        const resultado = Math.random() < 0.5; // 50% de ganar  
        return resultado ? apuesta.monto * 2 : -apuesta.monto; // Ganar o perder  
    }  
}