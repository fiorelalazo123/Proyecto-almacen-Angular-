import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteData } from './reporte-model';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private urlList = 'http://localhost:8080/ecoandino/reportes/omvsop';

  constructor(private http: HttpClient) { }

   listarReporte(): Observable<ReporteData[]> {

    return this.http.get<ReporteData[]>(this.urlList);
  }

}
