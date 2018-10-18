import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomicilioListComponent } from './domicilio-list/domicilio-list.component';

import { DomicilioService } from './domicilio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DomicilioListComponent],
  providers: [DomicilioService],
  exports: [DomicilioListComponent]
})
export class DomicilioModule { }