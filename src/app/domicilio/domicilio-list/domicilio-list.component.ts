import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DomicilioService } from '../domicilio.service';
import { Domicilio } from '../domicilio';

/**
* El componente que muestra los Domicilios
*/
@Component({
    selector: 'app-domicilio-list',
    templateUrl: './domicilio-list.component.html',
    styleUrls: ['./domicilio-list.component.css']
})
export class DomicilioListComponent implements OnInit {

    /**
    * Constructor del componente
    * @param DomicilioService El proveedor de servicios de Domicilio
    */
    constructor(
        private DomicilioService: DomicilioService) { }

    /**
    * La lista de Domicilios de la aplicación
    */
    Domicilios: Domicilio[];

    /**
    * El id del Domicilio que el usuario quiere visualizar
    */
    Domicilio_id: number;

    /**
     * El Domicilio que el usuario visualiza
     */
    selectedDomicilio: Domicilio;

    /**
    * Shows or hides the author-create-component
    */
    showCreate: boolean;


    /**
    * Actualiza la lista de Domicilios
    */
    getDomicilios(): void {
        this.DomicilioService.getDomicilios()
            .subscribe(Domicilios => {
                this.Domicilios = Domicilios;
            });
    }

    /**
    * Inicializa el componente retornando la lista de Domicilios
    * El método se llama cuando se crea el componente.
    */
    ngOnInit() {
        this.selectedDomicilio = undefined;
        this.Domicilio_id = undefined;
        this.getDomicilios();
    }

    /**
   * Muestra u oculta el componente de crear
   */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
}