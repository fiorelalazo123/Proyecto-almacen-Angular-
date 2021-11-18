import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteData } from '../registro-cliente/cliente-model';
import { UsuarioInternoData } from './usuarioInterno-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/ecoandino/cliente/logear';
  private urlUsuarioInterno = 'http://localhost:8080/ecoandino/usuariointerno/logear';

  constructor(private http: HttpClient) { }

  loginCliente(cliente: ClienteData): Observable<ClienteData> {

    return this.http.post<ClienteData>(this.url, cliente);
  }

  loginUsuarioInterno(usuarioInterno: UsuarioInternoData): Observable<UsuarioInternoData> {

    return this.http.post<UsuarioInternoData>(this.urlUsuarioInterno, usuarioInterno);
  }
}
