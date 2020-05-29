
import {NgModule} from '@angular/core';
//import {} from '';
import {Routes, RouterModule} from '@angular/router';
import {SharedComponent} from './shared.component';

const routes: Routes =[
{path: '', component: SharedComponent}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class SharedRoutingModule{}