import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ReservaService} from '../reserva.service';
import {ClienteService} from '../../cliente/cliente.service';
import {SucursalService} from '../../sucursal/sucursal.service';
import {Reserva} from '../reserva';
import {Cliente} from '../../cliente/cliente';
import { Sucursal } from '../../sucursal/sucursal';
import { Mesa } from '../../mesa/mesa';
import { MesaService } from '../../mesa/mesa.service';
import {FormControl} from '@angular/forms';
import { MesaDetail } from 'src/app/mesa/mesa-detail';
import { observe } from "rxjs-observe";
import { HoraMinutos } from './hora';


@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [DatePipe]
})
export class ReservaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private reservaService: ReservaService,
    private clienteService: ClienteService,
    private sucursalService: SucursalService,
    private mesaService: MesaService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  reserva: Reserva;
  hora: number;
  minuto: number;
  clientes: Cliente[];
  reservas: Reserva[];
  sucursales: Sucursal[];
  mesas: MesaDetail[];
  mesasDeSucursal: MesaDetail[];
  meridian = true;
  horasDisponibles = new Array<HoraMinutos>();
  horaSeleccionada : HoraMinutos;
  mesaObserver = x => {
    next: this.getSucursalesFromMesa(x);
  }

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an editorial
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new editorial
  */
  @Output() create = new EventEmitter();

  log(event) {
    console.log(event.target.value);
    this.getSucursalesFromMesa(event.target.value);
  }
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if ((value.hour > 15 && value.hour < 18) || value.hour > 22) {
      return {tooLate: true};
    }


    console.log(this.horaSeleccionada);
    this.hora = value.hour;
    this.minuto = value.minute;
    return null;
  });

  toggleMeridian() {
    this.meridian = !this.meridian;
  }


  getReservas(): void {
    this.reservaService.getReservas()
    .subscribe(reservas => {
      this.reservas = reservas;
    }, err => {
      this.toastrService.error(err, 'Error');
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

  getSucursalesFromMesa(idSucursal) {
    this.mesasDeSucursal = this.mesas.filter(mesaa => mesaa.sucursal.id == idSucursal);
  }

  getMesas(): void {
    this.mesaService.getMesas()
    .subscribe(mesas => {
      this.mesas = mesas;
    }, err => {
      this.toastrService.error(err, 'Error');
    });
  }

  cancelCreation(): void {
    this.cancel.emit();
    this.toastrService.warning('The reserva wasn\'t created', 'Reserva creation');
    this.router.navigate(['/reservas/list']);
  }

  createReserva(): Reserva {
    this.toastrService.info('Se está creando la reserva', 'Crear Reserva', {timeOut: 2000, progressBar: true});
    let dateB: Date = new Date(this.reserva.hora.year, this.reserva.hora.month - 1, this.reserva.hora.day, this.horaSeleccionada.hora, this.horaSeleccionada.minutos);

    this.reserva.hora = this.dp.transform(dateB, 'yyyy-MM-ddTHH:mm:ss');
    this.reservaService.createReserva(this.reserva)
    .subscribe(reserva => {
      this.reserva.id = reserva.id;
      this.router.navigate(['/reservas/' + reserva.id]);
      this.toastrService.success('La reserva se ha creado exitosamente', 'Crear Reserva')
    }, err => {
      this.toastrService.error(err, 'Error');
    });

    return this.reserva;
  }

  comprobarDisponibilidad(): Reserva {


    return this.reserva;
  }




  ngOnInit() {
    this.reserva = new Reserva();
    this.reserva.cliente = new Cliente();
    this.reserva.sucursal = new Sucursal();
    this.reserva.mesa = new Mesa();
    this.horaSeleccionada = new HoraMinutos();

    for (let i = 12; i < 15; i++) {

        this.horasDisponibles.push(new HoraMinutos().setHoraMinuto(i, "00", 0));

    }

    for (let i = 18; i < 23; i++) {
        this.horasDisponibles.push(new HoraMinutos().setHoraMinuto(i, "00", 0));
      
    }


    this.getClientes();
    this.getSucursales();
    this.getMesas();
  }

}
