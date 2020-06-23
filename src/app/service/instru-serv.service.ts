import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Instrumento} from './../../model/Instrumento';

import * as data from 'src/assets/datos/instrumentos.json';

@Injectable({
  providedIn: 'root'
})
export class InstruServService {

  instrumentosFile:any = (data as any).default;

  path = 'http://localhost:9001/api/v1/instrumentos/';

  constructor(private http: HttpClient) {
    // console.log("Servicio ejecutado");
     console.log(this.instrumentosFile);

   }

   getAllPaged(page: number, size: number): Observable<object> {
    return this.http.get(this.path + 'allPaged', {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
    });
  }

   getOne(id:number): Observable<Instrumento>{
     return this.http.get<Instrumento>(this.path + id);
   }

   getAll(): Observable<Instrumento[]>{
     return this.http.get<Instrumento[]>(this.path + 'all');
   }

   delete(id:number){
     return this.http.delete(this.path + id);
   }

   save(data: Instrumento): Observable<Instrumento>{
     return this.http.post<Instrumento>(this.path,data);
   }

   update(id: number, data: Instrumento):Observable<Instrumento>{
     return this.http.put<Instrumento>(this.path+id, data);
   }

   search(filter): Observable<Instrumento[]>{
     return this.http.get<Instrumento[]>(this.path+ 'buscar',{
       params: new HttpParams().set('filter', filter)
     });
   }

   uploadFile(file: FormData){
     return this.http.post(this.path + 'images', file,{responseType: 'text'});
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
