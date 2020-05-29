
import {NgModule} from '@angular/core';
//import {} from '';
import {SharedRoutingModule} from './shared-routing.module';
import {SharedComponent} from './shared.component';


@NgModule({
	declarations: [SharedComponent],
	imports :[
	SharedRoutingModule
	]
	
})

export class SharedModule{}