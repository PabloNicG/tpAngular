import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json'

@Injectable({
  providedIn: 'root'
})
export class InstruServService {

  instrumentosFile:any = (data as any).default;

  constructor() {
    console.log("Servicio ejecutado");
    console.log(this.instrumentosFile);

   }

   public getInstrumentos():any[]{
     return this.instrumentosFile.instrumentos;
   }
   //Hago referencia al nodo raiz de json y retorna todos los inst


   public getInstrumentoXId(id: string):any{
     for(const instrumento of this.instrumentosFile.instrumentos){
      if(instrumento.id === id){
        return instrumento;
        console.log(instrumento+"--");
      }
     }
   }

   public buscarInstrumento(termino: string): any[]{
      const instrumentosArr:any[] = [];
      termino = termino.toLowerCase();

      for(const instrumento of this.instrumentosFile.instrumentos){
        const nombre = instrumento.instrumento.toLowerCase();
          if(nombre.indexOf(termino) >= 0){
            instrumentosArr.push(instrumento);
          }/*Instrumento es la clave (que contiene su valor que será el que se muestra)
          e instrumentos es el archivo json  que es */
      }
      
      return instrumentosArr;
      
   }
}
