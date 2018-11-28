
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reserva';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ReservaDetail } from './reserva-detail';

const API_URL = environment.apiURL;
const reservas = '/reservas';

/**
* The service provider for everything related to reservas
*/
@Injectable()
export class ReservaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }


    getReservas() : Observable<Reserva[]> {
        return this.http.get<Reserva[]>(API_URL + reservas);
    }

    getReservaDetail(reservaId): Observable<ReservaDetail> {
    return this.http.get<ReservaDetail>(API_URL + reservas + '/' + reservaId);
    }

    createReserva(reserva): Observable<ReservaDetail> {
        console.log(reserva);
        return this.http.post<ReservaDetail>(API_URL + reservas, reserva);
    }

    /**
    * Edita una reserva
    * @param reserva que se quiere actualizar
    * @returns reserva actualizado
    */
    updateReserva(reserva): Observable<ReservaDetail> {
        return this.http.put<ReservaDetail>(API_URL + reservas + '/' + reserva.id, reserva);
    }

    /**
    * Elimina una reserva
    * @param reservaId - El id de la reserva
    * @returns True si el cliente fue eliminado, false de lo contrario
    */
    deleteReserva(reserva_id): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + reservas + '/' + reserva_id);
    }

}
