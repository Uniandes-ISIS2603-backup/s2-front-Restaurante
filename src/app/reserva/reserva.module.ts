import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservaService } from './reserva.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent],
  providers: [ReservaService],
  exports: [ReservaListComponent]
})
export class ReservaModule { }
