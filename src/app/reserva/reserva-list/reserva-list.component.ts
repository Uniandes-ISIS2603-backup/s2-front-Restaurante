import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Reserva } from '../reserva';
import { ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { ReservaService } from '../reserva.service';
import { ReservaDetail } from '../reserva-detail';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',

})
export class ReservaListComponent implements OnInit {

  constructor( private reservaService: ReservaService) { }

  public reservas: Reserva[];
  /**
  * Shows or hides the create component
  */
  showCreate: boolean;

  getReservas(): void {
    this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
  }

  /**
  * Shows or hides the create component
  */
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }

  ngOnInit() {
    this.getReservas();
  }

}
