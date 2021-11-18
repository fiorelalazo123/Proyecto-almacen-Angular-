import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoData } from '../mantenimiento-productos/producto-model';
import { ProductoUserData } from '../mantenimiento-productos/producto-user-model';
import { ProductoUserService } from '../mantenimiento-productos/producto-user.service';
import { ProductoPresentacioneData, ProductoPresentacioneUsuarioInterno } from '../producto-presentacion/producto-presentacion-model';
import { ProductoPresentacionService } from '../producto-presentacion/producto-presentacion.service';
import { ClienteData } from '../registro-cliente/cliente-model';
import { OrdenMuestra } from './orden-muestra-model';
import { OrdenMuestraService } from './orden-muestra.service';

@Component({
  selector: 'app-cotizar-pedido',
  templateUrl: './cotizar-pedido.component.html',
  styleUrls: ['./cotizar-pedido.component.css']
})
export class CotizarPedidoComponent implements OnInit {

  ordenmuestra: OrdenMuestra = new OrdenMuestra();
  ordenmuestraData: OrdenMuestra[];
  productoP: ProductoPresentacioneData = new ProductoPresentacioneData();
  productoPresentacion: ProductoPresentacioneData[];
  productoPresentacionUsuarioInterno: ProductoPresentacioneUsuarioInterno = new ProductoPresentacioneUsuarioInterno();
  prodUser: ProductoUserData = new ProductoUserData();
  productoUser: ProductoUserData[];
  productoData: ProductoData = new ProductoData();
  cliente: ClienteData = new ClienteData();
  precio: any;
  cantidad: number;

  constructor(private ordenmuestraServices: OrdenMuestraService,
              private prodPresentacionService: ProductoPresentacionService,
              private productoUserService: ProductoUserService,
              private router: Router) { }

  ngOnInit(): void {
    this.precio = 0.00;
    this.ordenmuestra.idCliente = 'CL2001004';
    this.ordenmuestra.idProductoPresentacion = 'PP202000301';
    this.productoPresentacionUsuarioInterno.idProductoPresentacion = 'PP202000301';
    console.log(this.productoPresentacionUsuarioInterno.idProductoPresentacion);
    this.prodPresentacionService.listarProductosPresentacion().subscribe(
      pp => this.productoPresentacion = pp
    );

    this.productoUserService.listarProductos().subscribe(
      p => this.productoUser = p
    );

  }

  registrarOrdenMuestra(): void {
    this.ordenmuestraServices.registrarOrdenMuestra(this.ordenmuestra)
      .subscribe(response => console.log(response));
  }

  cotizarPedido(): void {
    this.prodPresentacionService.cotizarProductoPresentacion(this.productoPresentacionUsuarioInterno.idProductoPresentacion,
      this.cantidad, this.ordenmuestra.idCliente)
      .subscribe(res => this.precio = res.preProductoPresentacion);
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
}
