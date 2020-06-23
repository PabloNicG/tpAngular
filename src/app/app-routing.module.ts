import { TablaComponent } from './components/Abm/tabla/tabla.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { SharedComponent } from './components/shared/shared.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'Abm', component: TablaComponent },
    { path: 'instrumentos', component: InstrumentosComponent },
    { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'shared', component: SharedComponent },
    { path: 'dondeEstamos', component: DondeEstamosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
