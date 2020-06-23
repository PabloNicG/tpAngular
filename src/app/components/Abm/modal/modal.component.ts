import { InstruServService } from 'src/app/service/instru-serv.service';
import { Component, OnInit, Host, ViewChild, ElementRef, Input } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { Instrumento } from 'src/model/Instrumento';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private instruServService: InstruServService, @Host() private tabla: TablaComponent) { }



  /* Permite comunicar componentes, crea una referencia hacia el evento (click) que se encuentra en el btnClose del html */
  @ViewChild('btnClose', { static: true }) btnClose: ElementRef;

  /* Recibe lo que viene desde la tabla */
  @Input() instrumentoActual: Instrumento;
  @Input() instrumentos: Instrumento[];

  public isError = false;

  ngOnInit() {
  }

  onSaveInstrumento(formInstrumento: NgForm): void {
    console.log(formInstrumento.value);
    if (formInstrumento.invalid || this.instrumentoActual.imagen === '') {
      this.isError = true;
    } else {
      if (formInstrumento.value.id === 0) {
        // Nuevo 
        this.add(formInstrumento.value);
      } else {
        // Actualización
        this.instrumentoActual = formInstrumento.value;
        this.update(this.instrumentoActual);
      }
      /* Cierra  modal */
      this.btnClose.nativeElement.click();
    }
  }

  add(instrumento: Instrumento) {
    this.instruServService.save(instrumento).subscribe(
      res => {
        this.instrumentos.push(res);
      },
      err => {
        alert('Ocurrió un error al agregar instrumento');
      }
    );
  }

  update(instrumento: Instrumento) {
    this.instruServService.update(instrumento.id, instrumento).subscribe(
      res => {
        alert('Instrumento actualizado con éxitosamente');
        this.tabla.instrumentos.filter(item => {
          if (item.id === instrumento.id) {
            const idex = this.tabla.instrumentos.indexOf(item);
            this.tabla.instrumentos.splice(idex, 1, res);
          }
        });
      },
      err => {
        alert('Ocurrió un error al actualizar instrumento');
      });
  }

  handleFileInput(files: FileList) {
    this.instrumentoActual.imagen = files.item(0).name;
    const data: FormData = new FormData();
    data.append('file', files.item(0));
    // Llamo al servicio y realizo el upload de la imagen
    this.instruServService.uploadFile(data).subscribe(
      res => {
        alert('Imagen cargada con éxito');
      }, error => {
        alert('Ocurrió un error al cargar la imagen, intenta nuevamente.');
        this.instrumentoActual.imagen = '';
        console.log(error);
      });
  }

  onClose(formPersona: NgForm): void {
    this.instrumentoActual = {
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
  }

  onCloseAlert() {
    this.isError = false;
  }
}