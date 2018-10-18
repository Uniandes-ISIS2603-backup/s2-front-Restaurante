import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalListComponent } from './sucursal-list/sucursal-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SucursalListComponent],
  exports: [SucursalListComponent]
})
export class SucursalModule { }
