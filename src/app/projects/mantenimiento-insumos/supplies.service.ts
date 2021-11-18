import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsumoData } from './supplies-model';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  private urlList = 'http://localhost:8080/ecoandino/insumo';
  private urlRegister = 'http://localhost:8080/ecoandino/insumo/agregar';
  private urlEdit = 'http://localhost:8080/ecoandino/insumo/modificar';
  constructor(private http: HttpClient) { }

   listarInsumos(): Observable<InsumoData[]> {

    return this.http.get<InsumoData[]>(this.urlList);
  }

  registrarInsumo(producto: InsumoData): Observable<InsumoData> {

    return this.http.post<InsumoData>(this.urlRegister, producto);
  }
}
