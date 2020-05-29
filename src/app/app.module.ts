import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';

@NgModule({
  declarations: [
    AppComponent,
    //SharedComponent,
    HomeComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    InstrumentosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
