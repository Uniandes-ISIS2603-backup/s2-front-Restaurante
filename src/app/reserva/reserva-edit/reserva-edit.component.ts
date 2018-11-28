import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../../cliente/cliente';
import { Sucursal } from '../../sucursal/sucursal';
import { MesaDetail } from '../../mesa/mesa-detail';
import {ClienteService} from '../../cliente/cliente.service';
import {SucursalService} from '../../sucursal/sucursal.service';
import { MesaService } from '../../mesa/mesa.service';
import { HoraMinutos } from '../reserva-create/hora';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-reserva-edit',
  templateUrl: './reserva-edit.component.html',
  styleUrls: ['./reserva-edit.component.css'],
  providers: [DatePipe]
})
export class ReservaEditComponent implements OnInit {

  mesasDeSucursal: MesaDetail[];
  mesas: MesaDetail[];
  clientes: Cliente[];
  reservas: Reserva[];
  sucursales: Sucursal[];
  horasDisponibles = new Array<HoraMinutos>();
  horaSeleccionada : HoraMinutos;
  reserva: Reserva;
  reservaEdit: Reserva;
  @Input() reserva_id: number;
  constructor(
              private dp: DatePipe,

              private reservaService: ReservaService,
              private route: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router,
              private clienteService: ClienteService,
              private sucursalService: SucursalService,
              private mesaService: MesaService) { }

  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();


  mesaObserver = x => {
    next: this.getSucursalesFromMesa(x);
  }

  log(event) {
    console.log(event.target.value);
    this.getSucursalesFromMesa(event.target.value);
  }

  getSucursalesFromMesa(idSucursal) {
    this.mesasDeSucursal = this.mesas.filter(mesaa => mesaa.sucursal.id == idSucursal);
  }
  updateReserva(): void {

    console.log(this.reserva);
    let dateB: Date = new Date(this.reserva.hora.year, this.reserva.hora.month - 1, this.reserva.hora.day, this.horaSeleccionada.hora, this.horaSeleccionada.minutos);

    this.reserva.hora = this.dp.transform(dateB, 'yyyy-MM-ddTHH:mm:ss');
    this.reservaService.updateReserva(this.reserva)
        .subscribe(() => {
          this.router.navigate(['/reservas/' + this.reserva.id]);
            this.toastrService.success("La información de la reserva ha sido actualizada", "Editar Reserva");
        });
      }


  getClientes(): void {
    this.clienteService.getClientes()
    .subscribe(clientes => {
      this.clientes = clientes;
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  }

  getSucursales(): void {
    this.sucursalService.getSucursales()
    .subscribe(sucursales => {
      this.sucursales = sucursales;
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  }

    getMesas(): void {
      this.mesaService.getMesas()
      .subscribe(mesas => {
        this.mesas = mesas;
      }, err => {
        this.toastrService.error(err, 'Error');
      });
    }

  cancelEdit() : void{
  this.cancel.emit();
  }

  ngOnInit() {
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    this.getClientes();
    this.getSucursales();
    this.getMesas();
    this.getReserva();
    this.horaSeleccionada = new HoraMinutos();

    for (let i = 12; i < 15; i++) {

        this.horasDisponibles.push(new HoraMinutos().setHoraMinuto(i, "00", 0));

    }

    for (let i = 18; i < 23; i++) {
        this.horasDisponibles.push(new HoraMinutos().setHoraMinuto(i, "00", 0));

    }









  }

  getReserva(): void {
    this.reservaService.getReservaDetail(this.reserva_id)
        .subscribe(selectedReserva => {
            this.reserva = selectedReserva

        });
  }




}
