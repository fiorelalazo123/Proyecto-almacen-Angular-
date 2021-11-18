import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenMuestra, OrdenMuestraUI } from '../cotizar-pedido/orden-muestra-model';
import { OrdenMuestraService } from '../cotizar-pedido/orden-muestra.service';
import { OrdenPedido, OrdenPedidoUI } from './orden-pedido-model';
import { OrdenPedidoService } from './orden-pedido.service';

@Component({
  selector: 'app-orden-pedido',
  templateUrl: './orden-pedido.component.html',
  styleUrls: ['./orden-pedido.component.css']
})
export class OrdenPedidoComponent implements OnInit {

  ordenmuestra: OrdenMuestra = new OrdenMuestra();
  ordenmuestraData: OrdenMuestraUI[];
  ordenpedido: OrdenPedido = new OrdenPedido();
  ordenpedidoData: OrdenPedidoUI[];
  dias: number;

  constructor(public router: Router,
              private ordenmuestraServices: OrdenMuestraService,
              private ordenpedidoServices: OrdenPedidoService) { }

  ngOnInit(): void {

    this.ordenpedido.idOrdenMuestra = 'OM20210005';
    this.ordenpedido.idDestinoPedido = 'D202001002';
    this.ordenpedido.fecRegPedido = '2020-02-03';

    this.ordenmuestraServices.listarOrdenMuestra('C20210004', 0).subscribe(
      pp => this.ordenmuestraData = pp
    );

  }

  registrarOrdenPedido(): void {
    this.ordenpedidoServices.registrarOrdenPedido(this.ordenpedido)
      .subscribe(response => console.log(response));
  }

  irCatalogoProductos(): void {
    this.router.navigate(['productos-ecoandino']);
  }

  irRegistroPedido(): void {
    this.router.navigate(['registro-pedido']);
  }

  irMisPedido(): void {
    this.router.navigate(['orden-pedido']);
  }

  irMenuPrincipal(): void {
    this.router.navigate(['menu-principal']);
  }
}
