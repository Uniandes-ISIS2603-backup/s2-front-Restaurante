import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';

import { ReservaService } from './reserva.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ReservaListComponent],
  providers: [ReservaService],
  exports: [ReservaListComponent]
})
export class ReservaModule { }
