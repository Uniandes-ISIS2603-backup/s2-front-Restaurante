
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plato } from './plato';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const plato = 'plato.json';

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
        return this.http.get<Plato[]>(API_URL + plato);
    }
    
}