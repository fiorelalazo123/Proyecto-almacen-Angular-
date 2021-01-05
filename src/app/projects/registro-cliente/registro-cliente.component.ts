import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteData } from './cliente-model';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  cliente: ClienteData = new ClienteData();

  constructor(public router: Router,
              private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  irLogin(): void {
    this.router.navigate(['login']);
  }

  registrar(): void {
    console.log(this.cliente);
    this.clienteService.registrarCliente(this.cliente).subscribe(
      res => this.router.navigate(['login'])
    );
  }

}
