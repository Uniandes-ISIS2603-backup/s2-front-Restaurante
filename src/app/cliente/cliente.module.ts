import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

import {ClienteService} from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  providers: [ClienteService]
})

export class ClienteModule { }
