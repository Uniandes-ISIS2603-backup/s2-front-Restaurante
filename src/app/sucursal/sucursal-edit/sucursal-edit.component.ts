import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from '../sucursal.service';
import { SucursalDetail } from '../sucursal-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sucursal-edit',
  templateUrl: './sucursal-edit.component.html',
  styleUrls: ['./sucursal-edit.component.css']
})
export class SucursalEditComponent implements OnInit {

  @Input() sucursalDetail: SucursalDetail;

  constructor(private sucursalService: SucursalService,
    private route: ActivatedRoute, private toastrService: ToastrService, private router: Router) { 
  }


  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  /**
   * Actualiza una sucursal
   */
  updateSucursal(): void {
    this.sucursalService.updateSucursal(this.sucursalDetail)
        .subscribe(() => {
          this.router.navigate(['/sucursales/' + this.sucursalDetail.id]);
            this.toastrService.success("La información de la sucursal ha sido actualizada", "Editar Sucursal");
        });
}

  ngOnInit() {
    
  }

  cancelEdit() : void{
  this.cancel.emit();
  }

}