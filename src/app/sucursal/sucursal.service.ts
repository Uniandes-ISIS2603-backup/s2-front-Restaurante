import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Sucursal } from './sucursal';
import { SucursalDetail } from './sucursal-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const sucursales = '/sucursales';

/**
* The service provider for everything related to authors
*/
@Injectable()
export class SucursalService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of authors retrieved from the API
    * @returns The list of authors in real time
    */
    getSucursales(): Observable<Sucursal[]> {
        return this.http.get<Sucursal[]>(API_URL + sucursales);
    }
    
    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getSucursalDetail(sucursalId): Observable<SucursalDetail> {
        return this.http.get<SucursalDetail>(API_URL + sucursales + '/' + sucursalId);
    }
    
    /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
    createSucursal(sucursal): Observable<Sucursal> {
        return this.http.post<Sucursal>(API_URL + sucursales, sucursal);
    }

    
}
