
import {NgModule} from '@angular/core';
//import {} from '';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes =[
{path: '', component: HomeComponent}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class HomeRoutingModule{}