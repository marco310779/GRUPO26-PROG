+----------------+  
|     Juego      | <<abstract>>   
|----------------|  
| - nombre: string|  
| - descripcion: string|  
|----------------|  
| + jugar(apuesta: Apuesta): number|  
| + leerReglas(): void|  
+----------------+  
        ^  
        |  
+------------------+  
|      Ruleta      |  
|------------------|  
| + jugar(apuesta: Apuesta): number|  
+------------------+  
   
+------------------+  
|   Tragamonedas    |  
|------------------|  
| + jugar(apuesta: Apuesta): number|  
+------------------+  
        ^  
        |  
+-------------------+  
|   JuegoInterno1   |  
|-------------------|  
| + jugar(apuesta: Apuesta): number|  
+-------------------+   

+-------------------+  
|   JuegoInterno2   |  
|-------------------|  
| + jugar(apuesta: Apuesta): number|  
+-------------------+   

+----------------+  
|    Apuesta     | <<interface>>  
|----------------|  
| + monto: number|  
| + tipo: string |  
| + validar(): boolean|  
+----------------+