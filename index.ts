import { ApuestaConcreta } from './Apuesta';  
import { Ruleta } from './Ruleta';  
import { Tragamonedas } from './Tragamonedas';  

// Función principal del programa  
function main() {  
    const ruleta = new Ruleta();  
    const tragamonedas = new Tragamonedas();  
    
    // Crear una apuesta  
    const apuesta = new ApuestaConcreta(100, 'color rojo');  

    // Ejemplo de juego  
    try {  
        console.log('Resultado de la Ruleta:', ruleta.jugar(apuesta));  
        console.log('Resultado de Tragamonedas:', tragamonedas.jugar(apuesta));  
    } catch (error) {  
        console.error(error);  
    }  
}  

// Iniciar el programa  
main();