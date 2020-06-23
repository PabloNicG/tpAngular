import { Router } from '@angular/router';
import { Instrumento } from './../../../../model/Instrumento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: ['./targeta.component.css']
})
export class TargetaComponent implements OnInit {

  @Input() instrumentoAux: Instrumento;

  @Output() instrumentoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.instrumentoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public verInstrumento(id) {
    this.instrumentoSeleccionado.emit(id);
  }

}
