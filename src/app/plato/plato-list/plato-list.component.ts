import { Component, OnInit } from '@angular/core';
import { Plato } from '../plato';
import { PlatoService } from '../plato.service';

@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {

  constructor(private platoService: PlatoService) { }

 /**
    * La lista de platos de la aplicación
    */
  platos: Plato[]

  /**
   * Muestra u oculta el componente de crear plato
   */
  showCreate: boolean;
  edit : boolean;
  showInfo : boolean;
   /**
     * El plato que el usuario visualiza
     */
    selectedPlato: Plato;

  /**
    * El id del plato que el usuario quiere visualizar
    */
  plato_id: number;

  

  ngOnInit() {
    this.getPlatos();
  }

  /**
   * Muetra u oculta el componente de crear
   */
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }
  showEdit():void{
    this.edit = !this.edit;
}

    /**
    * Muestra el plato
    */
   onSelected(plato_id: number): void {
    this.plato_id = plato_id;
    this.selectedPlato = new Plato();
    this.getPlato();
}
getPlato(): void {
  this.platoService.getPlato(this.plato_id)
      .subscribe(selectedPlato => {
          this.selectedPlato = selectedPlato
          this.showInfo = false;
      });
}

    /**
    * Actualiza la lista de platos
    */
   getPlatos(): void {
    this.platoService.getPlatos()
        .subscribe(platos => {
            this.platos = platos;
        });
}


}
