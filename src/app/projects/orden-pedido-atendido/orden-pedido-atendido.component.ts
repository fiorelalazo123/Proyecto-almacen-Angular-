import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenPedido, OrdenPedidoUI } from '../orden-pedido/orden-pedido-model';
import { OrdenPedidoService } from '../orden-pedido/orden-pedido.service';
import { ProductoPresentacioneData, ProductoPresentacioneUsuarioInterno } from '../producto-presentacion/producto-presentacion-model';
import { ProductoPresentacionService } from '../producto-presentacion/producto-presentacion.service';

@Component({
  selector: 'app-orden-pedido-atendido',
  templateUrl: './orden-pedido-atendido.component.html',
  styleUrls: ['./orden-pedido-atendido.component.css']
})
export class OrdenPedidoAtendidoComponent implements OnInit {

  ordenpedido: OrdenPedido = new OrdenPedido();
  ordenpedidoui: OrdenPedidoUI = new OrdenPedidoUI();
  ordenpedidoData: OrdenPedidoUI[];
  productoP: ProductoPresentacioneData = new ProductoPresentacioneData();
  productoPresentacion: ProductoPresentacioneData[];
  productoPresentacionUsuarioInterno: ProductoPresentacioneUsuarioInterno = new ProductoPresentacioneUsuarioInterno();
  dias;
  constructor(private router: Router,
              private prodPresentacionService: ProductoPresentacionService,
              private ordenpedidoServices: OrdenPedidoService) { }

  ngOnInit(): void {
    this.dias = 0;
  }

  irCatalogoProductos(): void {
    this.router.navigate(['productos-ecoandino']);
  }

  irMisPedidos(): void {
    this.router.navigate(['orden-pedido-atendido']);
  }

  irMisOrdenesMuestra(): void {
    this.router.navigate(['orden-pedido']);
  }

  capturar(): void {
    this.ordenpedidoServices.listarOrdenPedido('CL2001004', this.dias).subscribe(
      op => this.ordenpedidoData = op
    );
    console.log(this.dias, 'dias');
  }

}
