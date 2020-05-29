
import {NgModule} from '@angular/core';
//import {} from '';
import {Routes, RouterModule} from '@angular/router';
import {DetalleInstrumentoComponent} from './detalle_instrumento.component';

const routes: Routes =[
{path: '', component: DetalleInstrumentoComponent}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class Detalle_InstrumentoRoutingModule{}