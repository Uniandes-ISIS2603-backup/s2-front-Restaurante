import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes = '/clientes';

/**
* The service provider for everything related to cliente
*/
@Injectable()
export class ClienteService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Retorna el objeto Observable que contiene la lista de clientes retornada desde el API.
    * @returns La lista de cliente en tiempo real.
    */
    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }

    /**
    * Returna el objeto Observable con los detalles de un cliente retornado desde el API.
    * @returns Los detalles del cliente
    
   getAuthorDetail(authorId): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>(API_URL + authors + '/' + authorId);
    
}
*/
}
