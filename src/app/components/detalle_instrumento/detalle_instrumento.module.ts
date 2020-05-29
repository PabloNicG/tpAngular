
import {NgModule} from '@angular/core';
//import {} from '';
import {Detalle_InstrumentoRoutingModule} from './detalle_instrumento-routing.module';
import {DetalleInstrumentoComponent} from './detalle_instrumento.component';


@NgModule({
	declarations: [DetalleInstrumentoComponent],
	imports :[
	Detalle_InstrumentoRoutingModule
	]
	
})

export class Detalle_InstrumentosModule{}