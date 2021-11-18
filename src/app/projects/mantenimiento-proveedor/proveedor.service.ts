import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProveedorData } from './proveedor-model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlList = 'http://localhost:8080/ecoandino/proveedor';
  private urlRegister = 'http://localhost:8080/ecoandino/proveedor/agregar';
  private urlEdit = 'http://localhost:8080/ecoandino/proveedor/modificar';

  constructor(private http: HttpClient) { }

  listarProveedores(): Observable<ProveedorData[]> {

    return this.http.get<ProveedorData[]>(this.urlList);
  }

  registrarProveedor(presentacion: ProveedorData): Observable<ProveedorData> {

    return this.http.post<ProveedorData>(this.urlRegister, presentacion);
  }
}
