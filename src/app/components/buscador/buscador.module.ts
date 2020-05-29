
import {NgModule} from '@angular/core';
//import {} from '';
import {BuscadorRoutingComponent} from './buscador-routing.module';
import {BuscadorComponent} from './buscador.component';


@NgModule({
	declarations: [BuscadorComponent],
	imports :[
	BuscadorRoutingComponent
	]
	
})

export class BuscadorModule{}