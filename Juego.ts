import { Apuesta } from './Apuesta';
export abstract class Juego {  
    protected constructor(public nombre: string, public descripcion: string) {}  

    abstract jugar(Apuesta: Apuesta): number;  

    leerReglas() {  
        const fs = require('fs');  
        try {  
            const data = fs.readFileSync('reglas.txt', 'utf8');  
            console.log(data);  
        } catch (err) {  
            console.error('Error leyendo el archivo de reglas', err);  
        }  
    }  
}