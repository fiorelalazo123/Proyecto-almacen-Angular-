import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoPresentacioneData, ProductoPresentacioneUsuarioInterno } from './producto-presentacion-model';

@Injectable({
  providedIn: 'root'
})
export class ProductoPresentacionService {

  private urlList = 'http://localhost:8080/ecoandino/productoxpresentacion';
  private urlRegister = 'http://localhost:8080/ecoandino/productoxpresentacion/agregar';
  private urlEdit = 'http://localhost:8080/ecoandino/productoxpresentacion/modificar';
  private urlDelete = 'http://localhost:8080/ecoandino/productoxpresentacion/eliminar';
  private urlCotizar = 'http://localhost:8080/ecoandino/productoxpresentacion/cotizar';
  private urlPrecio = 'http://localhost:8080/ecoandino/productoxpresentacion/precio';

  constructor(private http: HttpClient) { }

  listarProductosPresentacion(): Observable<ProductoPresentacioneData[]> {

    return this.http.get<ProductoPresentacioneData[]>(this.urlList);
  }

  registrarProductoPresentacionUsuarioI(ppUsuarioInterno: ProductoPresentacioneUsuarioInterno)
                                                      : Observable<ProductoPresentacioneUsuarioInterno> {

    return this.http.post<ProductoPresentacioneUsuarioInterno>(this.urlRegister, ppUsuarioInterno);
  }

  modificarProductoPresentacion(ppUsuarioInterno: ProductoPresentacioneUsuarioInterno)
                                                : Observable<ProductoPresentacioneUsuarioInterno> {

    return this.http.put<ProductoPresentacioneUsuarioInterno>(this.urlEdit, ppUsuarioInterno);
  }

  eliminarProductoPresentacion(idProductoPresentacion: string): Observable<ProductoPresentacioneUsuarioInterno> {
    return this.http.delete<ProductoPresentacioneUsuarioInterno>(this.urlDelete + '/' + idProductoPresentacion);
  }

  cotizarProductoPresentacion(idProductoPresentacion: string, cantidad: number, idCliente):
                                                Observable<ProductoPresentacioneUsuarioInterno> {
    return this.http.post<ProductoPresentacioneUsuarioInterno>(this.urlCotizar + '/' + idProductoPresentacion + '/' +
                                    cantidad, { idProductoPresentacion, idCliente, cantidad});
  }

  precioProductoPresentacion(idProductoPresentacion: ProductoPresentacioneUsuarioInterno): Observable<ProductoPresentacioneUsuarioInterno> {
    return this.http.post<ProductoPresentacioneUsuarioInterno>(this.urlPrecio , idProductoPresentacion);
  }

  obtenerProducto(idProductoPresentacion: string): Observable<ProductoPresentacioneUsuarioInterno> {
  return this.http.get<ProductoPresentacioneUsuarioInterno>(this.urlList + '/' + idProductoPresentacion);
  }

}
