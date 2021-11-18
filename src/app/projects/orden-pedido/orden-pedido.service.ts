import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenPedido, OrdenPedidoUI } from './orden-pedido-model';

@Injectable({
  providedIn: 'root'
})
export class OrdenPedidoService {

  private url = 'http://localhost:8080/ecoandino/ordenpedido/registrar';
  private urlList = 'http://localhost:8080/ecoandino/ordenpedidoxcliente';
  private urlAtender = 'http://localhost:8080/ecoandino/ordenpedido/atender';

  constructor(private http: HttpClient) { }

  listarOrdenPedido(idCliente: string, dias: number): Observable<OrdenPedidoUI[]> {
    return this.http.get<OrdenPedidoUI[]>(this.urlList + '/' + idCliente + '/' + dias);
  }

  registrarOrdenPedido(ordenpedido: OrdenPedido): Observable<OrdenPedido> {
    return this.http.post<OrdenPedido>(this.url, ordenpedido);
  }

  atenderOrdenPedido(atenderordenpedido: OrdenPedido): Observable<OrdenPedido>{
    return this.http.put<OrdenPedido>(this.urlAtender, atenderordenpedido);
  }
}
