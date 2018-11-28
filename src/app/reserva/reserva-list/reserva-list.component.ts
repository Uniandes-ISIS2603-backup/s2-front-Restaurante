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
  edit : boolean;
  /**
    * El plato que el usuario visualiza
    */
  selectedReserva: Reserva;

 /**
   * El id del plato que el usuario quiere visualizar
   */
 reserva_id: number;
 sucursal_id: number;
  getReservas(): void {
    this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
  }

  /**
  * Shows or hides the create component
  */
  showHideCreate(): void {
    this.showCreate = !this.showCreate!
  }

  showEdit():void{
    this.edit = !this.edit;
  }

  ngOnInit() {
    this.getReservas();
  }

  /**
  * Muestra el plato
  */
 onSelected(reserva_id: number, sucursal_id:number): void {
  this.reserva_id = reserva_id;
  this.selectedReserva = new Reserva();
  this.getReserva();
  }

  getReserva(): void {
    this.reservaService.getReservaDetail(this.reserva_id)
        .subscribe(selectedReserva => {
            this.selectedReserva = selectedReserva

        });
  }



}
