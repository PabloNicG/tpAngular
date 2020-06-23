import { InstruServService } from "../../../service/instru-serv.service";
import { Component, OnInit } from "@angular/core";
import { Instrumento } from "../../../../model/Instrumento";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.css"],
})
export class TablaComponent implements OnInit {
  public instrumentos: Instrumento[];
  public instrumentoActual: Instrumento = {
    id: 0,
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: 0,
    costoEnvio: '',
    cantidadVendida: 0,
    descripcion: ''
  };

  public paginaActual = 1;

  constructor(private instruServService: InstruServService) {}

  ngOnInit(): void {
    this.getAllInstrumentos();
  }

  getAllInstrumentos(): void {
    this.instruServService.getAll().subscribe((data) => {
      this.instrumentos = data;
    });
  }

  onPreUpdate(instrumento: Instrumento): void {
    this.instrumentoActual = Object.assign({}, instrumento);
    //copio las propiedades
  }

  delete(instrumento: Instrumento): void {
    const opcion = confirm("¿Desea eliminar el registro?");
    if (opcion === true) {
      this.instruServService.delete(instrumento.id).subscribe(data => {
        alert("Registro eliminado exitosamente");
        const indexOfInstrumento = this.instrumentos.indexOf(instrumento);
        console.log(indexOfInstrumento);
        this.instrumentos.splice(indexOfInstrumento, 1);
        //con splice puedo eliminar elementos de la matriz
      });
    }
  }
}
