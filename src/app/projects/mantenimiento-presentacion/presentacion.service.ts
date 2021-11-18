import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PresentacionData } from './presentacion-model';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  private urlList = 'http://localhost:8080/ecoandino/presentacion';
  private urlRegister = 'http://localhost:8080/ecoandino/presentacion/agregar';
  private urlEdit = 'http://localhost:8080/ecoandino/presentacion/modificar';
  constructor(private http: HttpClient) { }

  listarPresentacion(): Observable<PresentacionData[]> {

    return this.http.get<PresentacionData[]>(this.urlList);
  }

  registrarPresentacion(presentacion: PresentacionData): Observable<PresentacionData> {

    return this.http.post<PresentacionData>(this.urlRegister, presentacion);
  }
}
