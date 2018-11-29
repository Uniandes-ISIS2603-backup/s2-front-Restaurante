import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomicilioListComponent } from './domicilio-list/domicilio-list.component';

import { DomicilioService } from './domicilio.service';
import { FormsModule } from '@angular/forms';
import { DomicilioCreateComponent } from './domicilio-create/domicilio-create.component';
import {NgxPermissionsModule} from 'ngx-permissions';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPermissionsModule
  ],
  declarations: [DomicilioListComponent, DomicilioCreateComponent],
  providers: [DomicilioService],
  exports: [DomicilioListComponent]
})
export class DomicilioModule { }
