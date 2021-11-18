import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenMuestra, OrdenMuestraUI } from './orden-muestra-model';

@Injectable({
  providedIn: 'root'
})
export class OrdenMuestraService {

  private url = 'http://localhost:8080/ecoandino/ordenmuestra/registrar';
  private urlList = 'http://localhost:8080/ecoandino/ordenmuestraxcliente';
  private urlAtender = 'http://localhost:8080/ecoandino/ordenmuestraxcliente/atender';

  constructor(private http: HttpClient) { }

  listarOrdenMuestra(idCliente: string, dias: number): Observable<OrdenMuestraUI[]>{
    return this.http.get<OrdenMuestraUI[]>(this.urlList + '/' + idCliente + '/' + dias);
  }

  registrarOrdenMuestra(ordenmuestra: OrdenMuestra): Observable<OrdenMuestra>{
    return this.http.post<OrdenMuestra>(this.url, ordenmuestra);
  }

  atenderOrdenMuestra(atenderordenmuestra: OrdenMuestra): Observable<OrdenMuestra>{
    return this.http.put<OrdenMuestra>(this.urlAtender, atenderordenmuestra);
  }

}
