import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  /**
  * El cliente
  */
  @Input() clienteDetail: ClienteDetail;
  /**
  * Constructor del componente
  * @param route La ruta que muestra el id del cliente a visualizar
  * @param authorService El proveedor de servicios del cliente
  */
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  /**
  * El id del cliente que viene en el path get .../clientes/cliente_id
  */
  cliente_id: number;

  showDomicilios : boolean;
  showReservas : boolean;

 
  /**
  * El método que obtiene el cliente cuyos detalles quieren visualizarse.
  */
  getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id)
      .subscribe(clienteDetail => {
        this.clienteDetail = clienteDetail
      });
  }

  /**
  * El método que inicializa el componente
  * Debemos crear un cliente para que no nos salga que es undefined.
  */
  ngOnInit() {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    if (this.cliente_id) {
      this.clienteDetail = new ClienteDetail();
      this.getClienteDetail();
    }
    this.showReservas = true;
    this.showDomicilios = true;
  }
}