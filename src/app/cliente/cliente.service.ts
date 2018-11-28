import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';
import { ClienteDetail } from './cliente-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes = '/clientes';


/**
* The service provider for everything related to authors
*/
@Injectable()
export class ClienteService {

    /**
    * Constructor del servicio
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of authors retrieved from the API
    * @returns The list of authors in real time
    */
    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getClienteDetail(clienteId): Observable<ClienteDetail> {
        return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }

    /**
    * Crea un cliente
    * @param author The new author
    * @returns The confirmation that the author was created
    */
    createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

    /**
    * Edita un cliente
    * @param cliente que se quiere actualizar
    * @returns cliente actualizado
    */
    updateCliente(cliente): Observable<ClienteDetail> {
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
    }

    /**
    * Elimina un cliente
    * @param clienteId - El id del cliente
    * @returns True si el cliente fue eliminado, false de lo contrario
    */
    deleteCliente(cliente_id): Observable<boolean> {
        console.log(cliente_id);
        return this.http.delete<boolean>(API_URL + clientes + '/' + cliente_id);
    }
}
