import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaListComponent } from './mesa-list/mesa-list.component';
import { MesaService } from './mesa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MesaListComponent],
  exports: [MesaListComponent],
  providers: [MesaService]

})
export class MesaModule { }
