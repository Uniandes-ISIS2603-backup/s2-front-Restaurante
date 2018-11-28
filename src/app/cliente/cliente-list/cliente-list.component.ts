import { Component, OnInit } from '@angular/core';


import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';

/**
* El componente que muestra los clientes
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
    selectedCliente: Cliente;

    /**
    * Shows or hides the author-create-component
    */
    showCreate: boolean;

    showInfo: boolean;

    edit: boolean;

    /**
    * Muestra el cliente
    */
    onSelected(cliente_id: number): void {
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
                this.showInfo = false;
            });
    }

    deleteCliente(clienteId): void {
        this.clienteService.deleteCliente(clienteId)
            .subscribe(() => {
                this.ngOnInit();
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
        this.showInfo = true;
    }

    /**
   * Muestra u oculta el componente de crear
   */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }

    showEdit(): void {
        this.edit = !this.edit;
    }

}