import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteModule } from './cliente/cliente.module';
import { ReservaModule } from './reserva/reserva.module';
import { PlatoModule } from './plato/plato.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { MesaModule } from './mesa/mesa.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    CalificacionModule,
    NgxPaginationModule,
    NgbModule,
    ModalDialogModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
