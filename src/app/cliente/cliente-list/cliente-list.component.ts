import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

/**
* The author's list component
*/
@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

    /**
    * Constructor del componente
    * @param clienteService El proveedor de servicios de cliente
    */
    constructor(
        private clienteService: ClienteService) { }

    /**
    * La lista de clientes de la aplicación
    */
    clientes: Cliente[];
    
    /**
    * El id del cliente que el usuario quiere visualizar
    */
    cliente_id: number;
    
    /**
     * El cliente que el usuario visualiza
     */
    selectedCliente : Cliente;
    
    
    /**
    * Muestra el autor
    */
    onSelected(cliente_id: number):void {
        this.cliente_id = cliente_id;
        this.selectedCliente = new ClienteDetail();
        this.getClienteDetail();
    }
    
    
    /**
    * Actualiza la lista de clientes
    */
    getClientes(): void {
        this.clienteService.getClientes()
            .subscribe(clientes => {
                this.clientes = clientes;
            });
    }

    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(selectedCliente => {
                this.selectedCliente = selectedCliente
            });
    }
    /**
    * Inicializa el componente retornando la lista de clientes
    * El método se llama cuando se crea el componente.
    */
    ngOnInit() {
        this.selectedCliente = undefined;
        this.cliente_id = undefined;
        this.getClientes();
    }
}