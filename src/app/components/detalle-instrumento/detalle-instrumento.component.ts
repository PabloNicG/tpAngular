import { InstruServService } from "./../../service/instru-serv.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detalle-instrumento",
  templateUrl: "./detalle-instrumento.component.html",
  styleUrls: ["./detalle-instrumento.component.css"],
})
export class DetalleInstrumentoComponent implements OnInit {
  instrumento: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private instruServService: InstruServService
  ) {
    console.log("ID PARAM " + this.activatedRoute.params["id"]);

    this.activatedRoute.params.subscribe((params) => {
      console.log(params["id"]);
      this.instrumento = this.instruServService.getInstrumentoXId(params["id"]);
    });
  }

  ngOnInit(): void {}
}
