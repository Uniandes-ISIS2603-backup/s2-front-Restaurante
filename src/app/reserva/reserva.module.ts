import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservaService } from './reserva.service';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent, ReservaEditComponent],
  providers: [ReservaService],
  exports: [ReservaListComponent]
})
export class ReservaModule { }
