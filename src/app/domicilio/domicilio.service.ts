
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from './domicilio';
import { DomicilioDetail } from './domicilio-detail';
import { Observable } from 'rxjs';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const domicilios = '/domicilios';

/**
* The service provider for everything related to reservas
*/
@Injectable()
export class DomicilioService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getDomicilios() : Observable<Domicilio[]> {
        return this.http.get<Domicilio[]>(API_URL + domicilios);
    }
    
    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
   getDomicilioDetail(domicilioId): Observable<DomicilioDetail> {
    return this.http.get<DomicilioDetail>(API_URL + domicilios + '/' + domicilioId);
}
     /**
    * Creates an author
    * @param author The new author
    * @returns The confirmation that the author was created
    */
   createDomicilio(domicilio): Observable<Domicilio> {
    return this.http.post<Domicilio>(API_URL + domicilios, domicilio);
   }
}
