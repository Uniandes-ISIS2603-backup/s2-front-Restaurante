import { Component, OnInit } from '@angular/core';
import { Plato } from '../plato';
import { PlatoService } from '../plato.service';

@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
})
export class PlatoListComponent implements OnInit {

  constructor(private platoService: PlatoService) { }

  platos: Plato[]

  /**
   * Muestra u oculta el componente de crear plato
   */
  showCreate: boolean;

  getPlatos(): void {
    this.platoService.getPlatos().subscribe(platos => this.platos = platos);
  }

  ngOnInit() {
    this.getPlatos();
  }

  /**
   * Muetra u oculta el componente de crear
   */
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

}
