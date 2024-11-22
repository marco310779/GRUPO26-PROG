import { Juego } from './Juego';  
import { Apuesta } from './Apuesta';  
import { JuegoInterno1 } from './JuegoInterno1';  
import { JuegoInterno2 } from './JuegoInterno2';  

export class Tragamonedas extends Juego {  
    private juegos: Array<JuegoInterno1 | JuegoInterno2>;  

    constructor() {  
        super('Tragamonedas', 'Máquina de juego con dos juegos internos.');  
        this.juegos = [new JuegoInterno1(), new JuegoInterno2()];  
    }  

    jugar(apuesta: Apuesta): number {  
        if (!apuesta.validar()) {  
            throw new Error('Apuesta no válida');  
        }  

        // Elegir aleatoriamente uno de los juegos internos  
        const juegoElegido = this.juegos[Math.floor(Math.random() * this.juegos.length)];  
        const resultado = juegoElegido.jugar(apuesta);  
        return resultado;  
    }  
}