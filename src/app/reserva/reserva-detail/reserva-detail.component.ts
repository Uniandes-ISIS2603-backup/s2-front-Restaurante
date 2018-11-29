  import { Component, OnInit, Input } from '@angular/core';
  import { ReservaService } from '../reserva.service';
  import { ActivatedRoute } from '@angular/router';
  import { ReservaDetail } from '../reserva-detail';
  import { Reserva } from '../reserva';


  @Component({
    selector: 'app-reserva-detail',
    templateUrl: './reserva-detail.component.html',
    styleUrls: ['./reserva-detail.component.css']
  })

  export class ReservaDetailComponent implements OnInit {


    /**
       * The reserva
    */
   @Input() reservaDetail: ReservaDetail;


    constructor(
      private reservaService: ReservaService,
      private route: ActivatedRoute) { }

   reserva_id: number;

   getReservaDetail(): void {
      this.reservaService.getReservaDetail(this.reserva_id)
          .subscribe(reservaDetail => {
              this.reservaDetail = reservaDetail
          });
  }

    ngOnInit() {
      this.reserva_id = +this.route.snapshot.paramMap.get('id');
      if (this.reserva_id){
         this.reservaDetail = new ReservaDetail();
         this.getReservaDetail();
         }
    }

  }
