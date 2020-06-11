import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { SharedComponent } from './components/shared/shared.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { InstruServService } from './service/instru-serv.service';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    InstrumentosComponent,
    DondeEstamosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [InstruServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
