import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteData } from './cliente-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost:8080/ecoandino/cliente/registrar';

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: ClienteData): Observable<ClienteData> {

    return this.http.post<ClienteData>(this.url, cliente);
  }
}
