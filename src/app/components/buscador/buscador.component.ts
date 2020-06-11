

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InstruServService } from 'src/app/service/instru-serv.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentoBuscar:any = [];
  termino:string;

  constructor(private activatedRouter: ActivatedRoute, private instruServService: InstruServService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params=>{

      this.termino = params['termino'];
      this.instrumentoBuscar = this.instruServService.buscarInstrumento(params['termino']);
    });
  }

public verInstrumento(id: string){
  this.router.navigate(['/detalleInstrumento', id]);
  console.log(id+"- ins");
}

}
