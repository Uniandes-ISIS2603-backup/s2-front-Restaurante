import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { ReservaModule } from './reserva/reserva.module';
import { PlatoModule } from './plato/plato.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { MesaModule } from './mesa/mesa.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { CalificacionListComponent } from './calificacion/calificacion-list/calificacion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalificacionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClienteModule,
    ReservaModule,
    PlatoModule,
    SucursalModule,
    DomicilioModule,
    MesaModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
