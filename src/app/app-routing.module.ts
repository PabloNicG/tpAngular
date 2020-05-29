import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'; 
import {InstrumentosComponent} from './components/instrumentos/instrumentos.component'; 
import {SharedComponent} from './components/shared/shared.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import {DetalleInstrumentoComponent} from './components/detalle_instrumento/detalle_instrumento.component';


const routes: Routes = [
//{path: '', redirectTo: 'index', pathMatch:'full'},

//Formato de trabajo LazyLoading

{path: 'home', loadChildren: () => import('./components/home/home.module').then(m=> m.HomeModule) },
{path: 'buscador/:terminos', loadChildren: () => import('./components/buscador/buscador.module').then(m=> m.BuscadorModule) },
{path: 'shared', loadChildren: () => import('./components/shared/shared.module').then(m=> m.SharedModule)},
{path: 'instrumentos', loadChildren: () => import('./components/instrumentos/instrumentos.module').then(m=> m.InstrumentosModule)},
{path: 'detalle_instrumento/:id', loadChildren: () => import('./components/detalle_instrumento/detalle_instrumento.module').then(m=> m.Detalle_InstrumentosModule)},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
