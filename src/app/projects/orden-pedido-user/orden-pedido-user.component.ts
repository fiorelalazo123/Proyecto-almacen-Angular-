import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenPedido, OrdenPedidoUI } from '../orden-pedido/orden-pedido-model';
import { OrdenPedidoService } from '../orden-pedido/orden-pedido.service';

@Component({
  selector: 'app-orden-pedido-user',
  templateUrl: './orden-pedido-user.component.html',
  styleUrls: ['./orden-pedido-user.component.css']
})
export class OrdenPedidoUserComponent implements OnInit {

  ordenpedido: OrdenPedido = new OrdenPedido();
  ordenpedidoui: OrdenPedidoUI = new OrdenPedidoUI();
  ordenpedidoData: OrdenPedidoUI[];
  dias: number;

  constructor(public router: Router,
              private ordenpedidoServices: OrdenPedidoService) { }

  ngOnInit(): void {
    this.ordenpedido.idOrdenPedido = 'OP20210003';

    this.ordenpedidoServices.listarOrdenPedido('C20210004', 0).subscribe(
      op => this.ordenpedidoData = op
    );

  }

   atenderOrdenPedido(): void {
    this.ordenpedidoServices.atenderOrdenPedido(this.ordenpedido)
      .subscribe(response => this.ordenpedidoServices.listarOrdenPedido('C20210004', 0).subscribe(
        op => this.ordenpedidoData = op));
  }


  irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
  }
  buscarCliente(): void {
    this.ordenpedidoServices.listarOrdenPedido(this.ordenpedidoui.idUsuarioInterno, this.dias).subscribe(
      pp => this.ordenpedidoData = pp
    );
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
