import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenEntradaData, OrdenEntradaUsuarioInterno } from './orden-entrada-model';

@Injectable({
  providedIn: 'root'
})
export class OrdenEntradaService {

  private urlList = 'http://localhost:8080/ecoandino/ordenentrada';
  private urlRegister = 'http://localhost:8080/ecoandino/ordenentrada/agregar';

  constructor(private http: HttpClient) { }

  listarOrdenEntrada(): Observable<OrdenEntradaUsuarioInterno[]> {

    return this.http.get<OrdenEntradaUsuarioInterno[]>(this.urlList);
  }

  registrarOrdenEntrada(ordenSalida: OrdenEntradaData): Observable<OrdenEntradaData> {

    return this.http.post<OrdenEntradaData>(this.urlRegister, ordenSalida);
  }
}
