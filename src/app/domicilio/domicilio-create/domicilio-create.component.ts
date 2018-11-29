import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { DomicilioService } from '../domicilio.service';
import { Domicilio } from '../domicilio';

@Component({
    selector: 'app-domicilio-create',
    templateUrl: './domicilio-create.component.html',
    styleUrls: ['./domicilio-create.component.css']
})
export class DomicilioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authorService The author's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private domicilioService: DomicilioService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new author
    */
    domicilio: Domicilio;

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
   createDomicilio(): Domicilio {
    console.log(this.domicilio);
    this.domicilioService.createDomicilio(this.domicilio)
        .subscribe((domicilio) => {
            this.domicilio = domicilio;
            this.create.emit();
        });
        return this.domicilio;
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
        this.domicilio = new Domicilio();
    }
    

}

