import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteModule } from './cliente/cliente.module';
import { ReservaModule } from './reserva/reserva.module';
import { PlatoModule } from './plato/plato.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { MesaModule } from './mesa/mesa.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    ClienteModule,
    ReservaModule,
    PlatoModule,
    SucursalModule,
    DomicilioModule,
    MesaModule,
    TarjetaModule,
    CalificacionModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
