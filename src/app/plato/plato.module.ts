import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatoListComponent } from './plato-list/plato-list.component';

import { PlatoService} from './plato.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PlatoCreateComponent } from './plato-create/plato-create.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [PlatoListComponent, PlatoCreateComponent],
  providers: [PlatoService],

})
export class PlatoModule { }
