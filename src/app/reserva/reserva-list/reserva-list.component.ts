import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',

})
export class ReservaListComponent implements OnInit {

  constructor( private reservaService: ReservaService) { }
  
  public reservas: Reserva[];
  
  getReservas(): void {
        this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
    }

  ngOnInit() {
      this.getReservas();
  }

}
