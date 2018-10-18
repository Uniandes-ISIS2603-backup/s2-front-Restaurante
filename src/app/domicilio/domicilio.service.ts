
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from './domicilio';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const domicilios = 'domicilios.json';

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
    
  
    getDomicilio() : Observable<Domicilio[]> {
        return this.http.get<Domicilio[]>(API_URL + domicilios);
    }
    
}