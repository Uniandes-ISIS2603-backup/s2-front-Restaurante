import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  @Input() clienteDetail: ClienteDetail;

  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute, private toastrService: ToastrService, private router: Router) { 
  }


  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  /**
   * Actualiza un cliente
   */
  updateCliente(): void {
    this.clienteService.updateCliente(this.clienteDetail)
        .subscribe(() => {
            this.toastrService.success("La información del cliente ha sido actualizada", "Editar Cliente");
            this.update.emit();
        });
}

  ngOnInit() {
    
  }

  cancelEdit() : void{
  this.cancel.emit();
  }

}
