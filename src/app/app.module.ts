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
import { TablaComponent } from './components/Abm/tabla/tabla.component';
import { ModalComponent } from './components/Abm/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { TargetaComponent } from './components/shared/targeta/targeta.component';
import { NavigateComponent } from './components/shared/navigate/navigate.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    HomeComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    InstrumentosComponent,
    DondeEstamosComponent,
    TablaComponent,
    ModalComponent,
    TargetaComponent,
    NavigateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
