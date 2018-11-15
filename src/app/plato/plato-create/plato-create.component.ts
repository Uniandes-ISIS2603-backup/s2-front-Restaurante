import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { PlatoService } from '../plato.service';
import { Plato } from '../plato';

@Component({
    selector: 'app-plato-create',
    templateUrl: './plato-create.component.html',
    styleUrls: ['./plato-create.component.css']
})
export class PlatoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private platoService: PlatoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new author
    */
    plato: Plato;

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
   createPlato(): Plato {
    console.log(this.plato);
    this.platoService.createPlato(this.plato)
        .subscribe((plato) => {
            console.log(this.plato);
            this.plato = plato;
            this.create.emit();
            this.toastrService.success("El plato fue creado", "Creación del plato");
        });
        return this.plato;
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
        this.plato = new Plato();
    }

}
