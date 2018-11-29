import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DomicilioService } from '../domicilio.service';
import { DomicilioDetail } from '../domicilio-detail';


@Component({
  selector: 'app-domicilio-detail',
  templateUrl: './domicilio-detail.component.html',
  styleUrls: ['./domicilio-detail.component.css']
})
export class DomicilioDetailComponent implements OnInit {

  /**
  * El domicilio
  */
  @Input() domicilioDetail: DomicilioDetail;
  /**
  * Constructor del componente
  * @param route La ruta que muestra el id del domicilio a visualizar
  * @param authorService El proveedor de servicios del domicilio
  */
  constructor(
    private route: ActivatedRoute,
    private domicilioService: DomicilioService
  ) { }

  /**
  * El id del domicilio que viene en el path get .../domicilios/domicilio_id
  */
  domicilio_id: number;

  showDomicilios : boolean;
  showReservas : boolean;

 
  /**
  * El método que obtiene el domicilio cuyos detalles quieren visualizarse.
  */
  getdomicilioDetail(): void {
    this.domicilioService.getDomicilioDetail(this.domicilio_id)
      .subscribe(domicilioDetail => {
        this.domicilioDetail = domicilioDetail
      });
  }

  /**
  * El método que inicializa el componente
  * Debemos crear un domicilio para que no nos salga que es undefined.
  */
  ngOnInit() {
    this.domicilio_id = +this.route.snapshot.paramMap.get('id');
    if (this.domicilio_id) {
      this.domicilioDetail = new DomicilioDetail();
      this.getdomicilioDetail();
    }
    this.showReservas = true;
    this.showDomicilios = true;
  }
}