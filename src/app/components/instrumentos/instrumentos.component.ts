import { InstruServService } from './../../service/instru-serv.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Instrumento} from '../../../model/Instrumento';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentos: Instrumento[] = [];

  constructor(private instruServService: InstruServService, private router: Router) { }

  ngOnInit(): void {
    // this.instrumentosArr = this.instruServService.getInstrumentos();
    // console.log(this.instrumentosArr);
    //llamo a getInstrumentos del service y retorna el json se almacenan en la var instArr en forma de array
    this.getAllInstrumento();
  }

    
getAllInstrumento(){
  this.instruServService.getAll().subscribe(
    res => {
      this.instrumentos = res;
    }, error =>{
      console.log(error.message);
    }
  );
}

   verInstrumento(id){
    console.log("ID INSTRUMENTO" + id);
    this.router.navigate(['/detalleInstrumento',id]);
  }

  

}