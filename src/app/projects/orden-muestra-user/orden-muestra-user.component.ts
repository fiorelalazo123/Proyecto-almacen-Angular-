import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { OrdenMuestra, OrdenMuestraUI } from '../cotizar-pedido/orden-muestra-model';
import { OrdenMuestraService } from '../cotizar-pedido/orden-muestra.service';

@Component({
  selector: 'app-orden-muestra-user',
  templateUrl: './orden-muestra-user.component.html',
  styleUrls: ['./orden-muestra-user.component.css']
})
export class OrdenMuestraUserComponent implements OnInit {

  ordenmuestra: OrdenMuestra = new OrdenMuestra();
  ordenmuestraData: OrdenMuestraUI[];
  dias;

  constructor(public router: Router,
              private ordenmuestraServices: OrdenMuestraService) { }

  ngOnInit(): void {
    this.ordenmuestra.idUsuarioInterno = 'U202001001';
    this.ordenmuestra.idOrdenMuestra = 'OM20210005';
    this.ordenmuestraServices.listarOrdenMuestra('CL2001004', 0).subscribe(
      pp => this.ordenmuestraData = pp
    );

  }


  irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
  }

  buscarCliente(): void {
    this.ordenmuestraServices.listarOrdenMuestra(this.ordenmuestra.idCliente, this.dias).subscribe(
      pp => this.ordenmuestraData = pp
    );
  }

  capturar(): void {
    this.ordenmuestraServices.listarOrdenMuestra(this.ordenmuestra.idCliente, this.dias).subscribe(
      pp => this.ordenmuestraData = pp
    );
    console.log(this.dias, 'dias');
  }

  atenderOrdenMuestra(): void {
    this.ordenmuestraServices.atenderOrdenMuestra(this.ordenmuestra)
      .subscribe(response => this.ordenmuestraServices.listarOrdenMuestra('CL2001004', 30).subscribe(
        pp => this.ordenmuestraData = pp));
  }

  irMenu(): void {
    this.router.navigate(['menu-principal-vendedor']);
  }

  irproductoPresentacion(): void {
    this.router.navigate(['producto-presentacion']);
  }

  irPresentacion(): void {
    this.router.navigate(['mantenimiento-presentacion']);
  }

  irOrdenMuestraUser(): void {
    this.router.navigate(['orden-muestraUser']);
  }

  irOrdenPedidoUser(): void {
    this.router.navigate(['orden-pedidoUser']);
  }

}
