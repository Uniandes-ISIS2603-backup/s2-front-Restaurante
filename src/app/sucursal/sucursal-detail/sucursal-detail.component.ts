import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SucursalService} from '../sucursal.service';
import {SucursalDetail} from '../sucursal-detail';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'limitTo'})

@Component({
    selector: 'app-sucursal-detail',
    templateUrl: './sucursal-detail.component.html',
    styleUrls: ['./sucursal-detail.component.css']
})
export class SucursalDetailComponent implements OnInit {
    
    @Input() sucursalDetail: SucursalDetail;
    constructor(
        private route: ActivatedRoute,
        private sucursalService: SucursalService
    ) {}


    sucursal_id: number;
    
    showPlatos: boolean;

    getSucursalDetail(): void {
        this.sucursalService.getSucursalDetail(this.sucursal_id)
            .subscribe(sucursalDetail => 
            {
                this.sucursalDetail = sucursalDetail
            });
    }


    ngOnInit() {
        this.sucursal_id = +this.route.snapshot.paramMap.get('id');
        if (this.sucursal_id) {
            this.sucursalDetail = new SucursalDetail();
            this.getSucursalDetail();
        }
        this.showPlatos = true;
    }
}
