import { InstruServService } from "./../../service/instru-serv.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalle-instrumento",
  templateUrl: "./detalle-instrumento.component.html",
  styleUrls: ["./detalle-instrumento.component.css"],
})
export class DetalleInstrumentoComponent implements OnInit {
  
  instrumentoBuscado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private instruServService: InstruServService
  ) {
    // console.log("ID PARAM " + this.activatedRoute.params["id"]);

    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params["id"]);
    //   this.instrumento = this.instruServService.getInstrumentoXId(params["id"]);
    // });
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data =>{
      if(data.id !== 0){
        this.getInstrumento(data.id);
      }
    }
    );
}


getInstrumento(id: number){
  this.instruServService.getOne(id).subscribe(
    res => {
      this.instrumentoBuscado = res;
    }, error =>{
      console.log(error.message);
    }
  );
}
}