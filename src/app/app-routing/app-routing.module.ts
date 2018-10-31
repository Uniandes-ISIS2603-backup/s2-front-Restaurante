import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { DomicilioListComponent } from '../domicilio/domicilio-list/domicilio-list.component';
import { MesaListComponent } from '../mesa/mesa-list/mesa-list.component';
import { ReservaListComponent } from '../reserva/reserva-list/reserva-list.component';
import { SucursalListComponent } from '../sucursal/sucursal-list/sucursal-list.component';
import { PlatoListComponent } from '../plato/plato-list/plato-list.component';
import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';

const routes: Routes = [

  {
    path: 'clientes',
    children: [
      {
          path: 'list',
          component: ClienteListComponent,
          runGuardsAndResolvers: 'always'
          
      },
      {
          path: ':id',
          component: ClienteDetailComponent,
          runGuardsAndResolvers: 'always'
      }
  ]
  },
  {
    path: 'domicilios',
    component: DomicilioListComponent
  },
  {
    path: 'mesas',
    component: ClienteListComponent
  },
  {
    path: 'platos',
    component: PlatoListComponent
  },
  {
    path: 'reservas',
        children: [
            {
                path: 'list',
                component: ReservaListComponent
            }
          
        ]
  },
  {
    path: 'sucursales',
    component: SucursalListComponent
  },
  {
    path: 'calificaciones',
    component: CalificacionListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

}
