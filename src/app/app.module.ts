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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClienteModule,
    ReservaModule,
    PlatoModule,
    SucursalModule,
    DomicilioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
