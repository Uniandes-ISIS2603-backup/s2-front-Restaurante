import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  @Input() cliente: ClienteDetail;

  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { 
  }


  cliente_id : number;

  @Output() cancel = new EventEmitter();
  @Output() edit = new EventEmitter();

  editCliente( ) : ClienteDetail {
    console.log(this.cliente);
    this.clienteService.editCliente(this.cliente_id, this.cliente)
    .subscribe((cliente) => {
      this.cliente = cliente;
      this.edit.emit();
    });
    return this.cliente;
  }

  ngOnInit() {
    console.log(this.cliente);
  }

  cancelEdit() : void{
  this.cancel.emit();
  }

}
