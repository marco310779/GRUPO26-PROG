import { Juego } from './Juego';  
import { Apuesta } from './Apuesta';  

export class JuegoInterno1 extends Juego {  
    constructor() {  
        super('Juego Interno 1', 'Simulación de un juego interno de tragamonedas.');  
    }  

    jugar(apuesta: Apuesta): number {  
        if (!apuesta.validar()) {  
            throw new Error('Apuesta no válida');  
        }  
        const resultado = Math.random() < 0.3; // 30% de ganar  
        return resultado ? apuesta.monto * 2.5 : -apuesta.monto; // Ganar o perder  
    }  
}