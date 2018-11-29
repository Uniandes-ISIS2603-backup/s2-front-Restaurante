import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Plato } from '../plato';
import { PlatoService } from '../plato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-plato-edit',
  templateUrl: './plato-edit.component.html',
  styleUrls: ['./plato-edit.component.css']
})
export class PlatoEditComponent implements OnInit {

  @Input() plato: Plato;

  constructor(private platoService: PlatoService,
    private route: ActivatedRoute, private toastrService: ToastrService, private router: Router) { 
  }


  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();

  /**
   * Actualiza un plato
   */
  updatePlato(): void {
    this.platoService.updatePlato(this.plato)
        .subscribe(() => {
          this.router.navigate(['/platos/' + this.plato.id]);
            this.toastrService.success("La información del plato ha sido actualizada", "Editar Plato");
        });



}

  ngOnInit() {
    console.log(this.plato.name);
  }

  cancelEdit() : void{
  this.cancel.emit();
  }
}
