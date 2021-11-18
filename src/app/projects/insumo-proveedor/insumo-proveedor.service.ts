import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsumoProveedorData, InsumoProveedorUsuarioInterno } from './insumo-proveedor-model';

@Injectable({
  providedIn: 'root'
})
export class InsumoProveedorService {

  private urlList = 'http://localhost:8080/ecoandino/insumoxproveedor';
  private urlRegister = 'http://localhost:8080/ecoandino/insumoxproveedor/agregar';
  private urlEdit = 'http://localhost:8080/ecoandino/insumoxproveedor/modificar';
  private urlDelete = 'http://localhost:8080/ecoandino/insumoxproveedor/eliminar';

  constructor(private http: HttpClient) { }

  listarInsumosProveedor(): Observable<InsumoProveedorData[]> {

    return this.http.get<InsumoProveedorData[]>(this.urlList);
  }

  registrarInsumosProveedorUsuarioI(ppUsuarioInterno: InsumoProveedorUsuarioInterno)
                                                      : Observable<InsumoProveedorUsuarioInterno> {

    return this.http.post<InsumoProveedorUsuarioInterno>(this.urlRegister, ppUsuarioInterno);
  }

  modificarInsumoProveedor(ppUsuarioInterno: InsumoProveedorData)
                                                : Observable<InsumoProveedorData> {

    return this.http.put<InsumoProveedorData>(this.urlEdit, ppUsuarioInterno);
  }

  eliminarInsumoProveedor(idProductoPresentacion: string): Observable<InsumoProveedorData> {
    return this.http.delete<InsumoProveedorData>(this.urlDelete + '/' + idProductoPresentacion);
  }

}
