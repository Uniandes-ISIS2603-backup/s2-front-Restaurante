import { Component, OnInit } from '@angular/core';
import { CalificacionService } from '../calificacion.service';
import { Calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class CalificacionListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param clienteService The author's services provider
     */
    constructor(private calificacionService: CalificacionService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    calificaciones: Calificacion[];

    /**
     * Asks the service to update the list of editorials
     */
    getCalificaciones(): void {
        this.calificacionService.getCalificaciones().subscribe(calificaciones => this.calificaciones = calificaciones);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getCalificaciones();
    }
}
