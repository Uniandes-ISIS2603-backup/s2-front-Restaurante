import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { SucursalService } from '../sucursal.service';
import { Sucursal } from '../sucursal';

@Component({
    selector: 'app-sucursal-create',
    templateUrl: './sucursal-create.component.html',
    styleUrls: ['./sucursal-create.component.css']
})
export class SucursalCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private sucursalService: SucursalService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new author
    */
    sucursal: Sucursal;

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
   createSucursal(): Sucursal {
    console.log(this.sucursal);
    this.sucursalService.createSucursal(this.sucursal)
        .subscribe((sucursal) => {
            this.sucursal = sucursal;
            this.create.emit();
            this.toastrService.success("La sucursal fue creada", "Creación de la sucursal");
        });
        return this.sucursal;
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
        this.sucursal = new Sucursal();
    }

}

