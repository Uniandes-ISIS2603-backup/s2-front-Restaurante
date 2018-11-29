import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalListComponent } from './sucursal-list/sucursal-list.component';

import { SucursalService } from './sucursal.service';
import { SucursalDetailComponent } from './sucursal-detail/sucursal-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SucursalCreateComponent } from './sucursal-create/sucursal-create.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import {NgxPermissionsModule} from 'ngx-permissions';

=======
import {SucursalEditComponent} from './sucursal-edit/sucursal-edit.component';
>>>>>>> de59162ea80c7b07120045cfd1973e4e6f6fd9ac

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPermissionsModule
  ],
  declarations: [SucursalListComponent, SucursalDetailComponent, SucursalCreateComponent, SucursalEditComponent],
  providers: [SucursalService]
})
export class SucursalModule { }