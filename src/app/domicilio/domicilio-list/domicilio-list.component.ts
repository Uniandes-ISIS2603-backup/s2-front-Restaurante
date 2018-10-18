import { Component, OnInit } from '@angular/core';
import { Domicilio } from '../domicilio';
import { DomicilioService } from '../domicilio.service';

@Component({
  selector: 'app-domicilio-list',
  templateUrl: './domicilio-list.component.html',

})
export class DomicilioListComponent implements OnInit {

  constructor( private domicilioService: DomicilioService) { }
  
  domicilios: Domicilio[];
  
  getDomicilio(): void {
        this.domicilioService.getDomicilio().subscribe(domicilios => this.domicilios = domicilios);
    }

  ngOnInit() {
      this.getDomicilio();
  }

}