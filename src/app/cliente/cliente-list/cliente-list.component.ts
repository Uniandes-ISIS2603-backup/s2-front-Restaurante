import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html', 
})
export class ClienteListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param clienteService The author's services provider
     */
    constructor(private clienteService: ClienteService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    clientes: Cliente[];

    /**
     * Asks the service to update the list of editorials
     */
    getClientes(): void {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getClientes();
    }
}