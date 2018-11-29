import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MesaService } from '../mesa.service';
import { MesaDetail } from '../mesa-detail';


@Component({
    selector: 'app-mesa-detail',
    templateUrl: './mesa-detail.component.html',
    styleUrls: ['./mesa-detail.component.css']
})
export class MesaDetailComponent implements OnInit {

    
    @Input() mesaDetail: MesaDetail;
    
    constructor(
        private route: ActivatedRoute,
        private mesaService: MesaService 
    ) { }

    
    
    mesa_id: number;
    
    getMesaDetail(): void {
        this.mesaService.getMesaDetail(this.mesa_id)
            .subscribe(mesaDetail => {
                this.mesaDetail = mesaDetail
            });
    }

   
    ngOnInit() {
        this.mesa_id = +this.route.snapshot.paramMap.get('id');
        if (this.mesa_id){
        this.mesaDetail = new MesaDetail();
        this.getMesaDetail();
        }
    }
}
