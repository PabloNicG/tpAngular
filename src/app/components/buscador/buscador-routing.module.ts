
import {NgModule} from '@angular/core';
//import {} from '';
import {Routes, RouterModule} from '@angular/router';
import {BuscadorComponent} from './buscador.component';

const routes: Routes =[
{path: '', component: BuscadorComponent}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class BuscadorRoutingComponent{}