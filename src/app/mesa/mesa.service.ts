import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mesa } from './mesa';
import { MesaDetail } from './mesa-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const mesas = '/mesas';


@Injectable()
export class MesaService {
    
    
    constructor(private http: HttpClient) { }
    
    
    getMesas() : Observable<Mesa[]> {
        return this.http.get<Mesa[]>(API_URL + mesas);
    }

   
   getMesaDetail(mesaId): Observable<MesaDetail> {
    return this.http.get<MesaDetail>(API_URL + mesas + '/' + mesaId);
    
}

}
