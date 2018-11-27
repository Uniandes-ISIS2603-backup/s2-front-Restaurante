
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plato } from './plato';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const platos = '/platos';

/**
* The service provider for everything related to plato
*/
@Injectable()
export class PlatoService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getPlatos() : Observable<Plato[]> {
        return this.http.get<Plato[]>(API_URL + platos);
    }
     /**
    * Crea un plato
    * @param plato nuevo plato
    * @returns The confirmation that the author was created
    */
   createPlato(plato): Observable<Plato> {
    return this.http.post<Plato>(API_URL + platos, plato);
   
   

}


    
getPlato(platoId): Observable<Plato> {
    return this.http.get<Plato>(API_URL + platos + '/' + platoId);
}

 /**
    * Edita un cliente
    * @param cliente que se quiere actualizar
    * @returns cliente actualizado
    */
   updatePlato(plato): Observable<Plato> {
    return this.http.put<Plato>(API_URL + platos + '/' + plato.id, plato);
}
}