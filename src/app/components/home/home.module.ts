
import {NgModule} from '@angular/core';
//import {} from '';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';


@NgModule({
	declarations: [HomeComponent],
	imports :[
	HomeRoutingModule
	]
	
})

export class HomeModule{}