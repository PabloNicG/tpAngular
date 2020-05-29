
import {NgModule} from '@angular/core';
//import {} from '';
import {InstrumentosRoutingModule} from './instrumentos-routing.module';
import {InstrumentosComponent} from './instrumentos.component';


@NgModule({
	declarations: [InstrumentosComponent],
	imports :[
	InstrumentosRoutingModule
	]
	
})

export class InstrumentosModule{}