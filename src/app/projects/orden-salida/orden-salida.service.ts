import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenSalidaData, OrdenSalidaUsuarioInterno } from './orden-salida-model';

@Injectable({
  providedIn: 'root'
})
export class OrdenSalidaService {

  private urlList = 'http://localhost:8080/ecoandino/ordensalida';
  private urlRegister = 'http://localhost:8080/ecoandino/ordensalida/agregar';

  constructor(private http: HttpClient) { }

  listarOrdenSalida(): Observable<OrdenSalidaUsuarioInterno[]> {

    return this.http.get<OrdenSalidaUsuarioInterno[]>(this.urlList);
  }

  registrarOrdenSalida(ordenSalida: OrdenSalidaData): Observable<OrdenSalidaData> {

    return this.http.post<OrdenSalidaData>(this.urlRegister, ordenSalida);
  }
}
