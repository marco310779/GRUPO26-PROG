export interface Apuesta {  
    monto: number;  
    tipo: string;  
    validar(): boolean;  
}  

// Implementación concreta de la apuesta  
export class ApuestaConcreta implements Apuesta {  
    constructor(public monto: number, public tipo: string) {}  

    validar(): boolean {  
        return this.monto > 0;  
    }  
}