import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calificacion } from './calificacion';

const API_URL = "../../assets/"; 
const calificacion = 'calificaciones.json';


@Injectable()

export class CalificacionService 
{

  constructor(private http : HttpClient) 
  { }

  getCalificaciones(): Observable<Calificacion[]>
  {
    return this.http.get<Calificacion[]>(API_URL+ calificacion)
  }
}
