import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ClienteData } from '../registro-cliente/cliente-model';
import { LoginService } from './login.service';
import { UsuarioInternoData } from './usuarioInterno-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cliente: ClienteData = new ClienteData();
  usuarioInterno: UsuarioInternoData = new UsuarioInternoData();
  constructor(public router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.cliente.delCliente = '0';
    this.usuarioInterno.delUsuario = '0';
  }

  abrirRegistro(): void {
    this.router.navigate(['registro-cliente']);
  }

  entrarMenuPr(): void {
    // LOGIN CLIENTE
    let login1 = this.loginService.loginCliente(this.cliente).subscribe(
        res => res.idCliente.startsWith('C') ? this.router.navigate(['menu-principal']) : null
      );

    // LOGIN USUARIO INTERNO
    let login2 = this.loginService.loginUsuarioInterno(this.usuarioInterno).subscribe(
      res => res.idRol === 2 ? this.router.navigate(['menu-principal-vendedor']) :
            res.idRol === 3 ? this.router.navigate(['menu-principal-almacen']) :
            res.idRol === 4 ? this.router.navigate(['menu-principal-directivo']) : null
    );

    let final_login = forkJoin([login1, login2]);
    final_login.subscribe(x => console.log(x));
  }
}
