import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { SucursalService } from '../sucursal.service';
import { Sucursal } from '../sucursal';
import { SucursalDetail } from '../sucursal-detail';

/**
* The author's list component
*/
@Component({
    selector: 'app-sucursal-list',
    templateUrl: './sucursal-list.component.html',
    styleUrls: ['./sucursal-list.component.css']
})
export class SucursalListComponent implements OnInit {

    
    constructor(
        private sucursalService: SucursalService) { }

    
    sucursales: Sucursal[];
    
    sucursal_id: number;
    
    
        selectedSucursal : Sucursal;
    
    /**
    * Shows or hides the author-create-component
    */
   showCreate: boolean;
   
   showInfo : boolean;
   
   showEdit : boolean;
    
    /**
    * Muestra el autor
    */
    onSelected(sucursal_id: number):void {
        this.sucursal_id = sucursal_id;
        this.selectedSucursal = new SucursalDetail();
        this.getSucursalDetail();
    }
    
    
    
    getSucursales(): void {
        this.sucursalService.getSucursales()
            .subscribe(sucursales => {
                this.sucursales = sucursales;
            });
    }

    getSucursalDetail(): void {
        this.sucursalService.getSucursalDetail(this.sucursal_id)
            .subscribe(selectedSucursal => {
                this.selectedSucursal = selectedSucursal
                this.showInfo = false;
            });
    }
    
    ngOnInit() {
        this.selectedSucursal = undefined;
        this.sucursal_id = undefined;
        this.getSucursales();
        this.showInfo = true
    }

     /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showCreate = !this.showCreate;
    }
    
    showHideEdit() : void {
        this.showEdit = !this.showEdit;
    }
}