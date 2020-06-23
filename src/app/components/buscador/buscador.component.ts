

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InstruServService } from 'src/app/service/instru-serv.service';
import { Instrumento } from 'src/model/Instrumento';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  // instrumentoBuscar:any = [];
  instrumentoBuscar: Instrumento[] = [];
  terminoEncontrado:string;

  constructor(private activatedRouter: ActivatedRoute, private instruServService: InstruServService, private router: Router) { }

  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(data=>{
      this.terminoEncontrado = data.termino;
      this.getAllFiltered(data.termino);
    })
    // this.activatedRouter.params.subscribe(params=>{

    //   this.termino = params['termino'];
    //   this.instrumentoBuscar = this.instruServService.buscarInstrumento(params['termino']);
    // });
  }


public verInstrumento(id: string){
  this.router.navigate(['/detalleInstrumento', id]);
  console.log(id+"- ins");
}


getAllFiltered(filter: string){
  this.instruServService.search(filter).subscribe(
    res => {
      this.instrumentoBuscar = res;
    }, error => {
      console.log(error.message);
    }
  );
}

}
