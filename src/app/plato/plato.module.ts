import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatoListComponent } from './plato-list/plato-list.component';

import { PlatoService } from './plato.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PlatoListComponent],
  providers: [PlatoService],
  exports: [PlatoListComponent]
})
export class PlatoModule { }
