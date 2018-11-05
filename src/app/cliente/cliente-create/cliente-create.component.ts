import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-cliente-create',
    templateUrl: './cliente-create.component.html',
    styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new author
    */
    cliente: Cliente;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an author
    */
    createAuthor(): void {
        var cliente_create = {
            name: this.cliente.name,
            metodoPago: this.cliente.metodoPago
        };
        this.clienteService.createCliente(cliente_create)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("El cliente fue creado", "Creación de cliente");
            });
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.cliente = new Cliente();
    }

}

