import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoData } from './producto-model';
import { ProductoUserData } from './producto-user-model';

@Injectable({
  providedIn: 'root'
})
export class ProductoUserService {

  private urlList = 'http://localhost:8080/ecoandino/productouser';
  private urlRegister = 'http://localhost:8080/ecoandino/producto/agregar';
  private urlEdit = 'http://localhost:8080/ecoandino/productouser/modificar';
  constructor(private http: HttpClient) { }

   listarProductos(): Observable<ProductoUserData[]> {

    return this.http.get<ProductoUserData[]>(this.urlList);
  }

  registrarProducto(producto: ProductoData): Observable<ProductoData> {

    return this.http.post<ProductoData>(this.urlRegister, producto);
  }
}
