import { Juego } from './Juego';  
import { Apuesta } from './Apuesta';  

export class JuegoInterno2 extends Juego {  
    constructor() {  
        super('Juego Interno 2', 'Simulación de otro juego interno de tragamonedas.');  
    }  

    jugar(apuesta: Apuesta): number {  
        if (!apuesta.validar()) {  
            throw new Error('Apuesta no válida');  
        }  
        const resultado = Math.random() < 0.4; // 40% de ganar  
        return resultado ? apuesta.monto * 3 : -apuesta.monto; // Ganar o perder  
    }  
}