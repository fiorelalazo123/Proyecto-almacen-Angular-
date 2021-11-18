import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoPresentacioneData, ProductoPresentacioneUsuarioInterno } from '../producto-presentacion/producto-presentacion-model';
import { ProductoPresentacionService } from '../producto-presentacion/producto-presentacion.service';

@Component({
  selector: 'app-productos-ecoandino',
  templateUrl: './productos-ecoandino.component.html',
  styleUrls: ['./productos-ecoandino.component.css']
})
export class ProductosEcoandinoComponent implements OnInit {

  urlImage: string;
  productoPresentacion: ProductoPresentacioneData[];
  productoP: ProductoPresentacioneData = new ProductoPresentacioneData();
  productoPresentacionUsuarioInterno: ProductoPresentacioneUsuarioInterno = new ProductoPresentacioneUsuarioInterno();
  constructor(public router: Router,
              private prodPresentacionService: ProductoPresentacionService) { }

  ngOnInit(): void {
    this.prodPresentacionService.listarProductosPresentacion().subscribe(
      pp => this.productoPresentacion = pp
    );

    // this.prodPresentacionService.listarProductosPresentacion().subscribe(
    //   pp => pp[0].idProductoPresentacion === 'PP202000201' ? this.urlImage = 'pp00201.png'  :
    //         pp[1].idProductoPresentacion === 'PP202000301' ? this.urlImage = 'pp00301.png' :
    //         pp[2].idProductoPresentacion === 'PP202000302' ? this.urlImage = 'pp00302.png' :
    //         pp[4].idProductoPresentacion === 'PP202000405' ? this.urlImage = 'pp00405.png' : this.urlImage = 'images.jpg'
    // );
  }



  irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
  }

  irCatalogoProductos(): void {
    this.router.navigate(['productos-ecoandino']);
  }

  irCotizarProducto(): void {
    this.router.navigate(['cotizar-producto']);
  }

  irMisOrdenesMuestra(): void {
    this.router.navigate(['orden-pedido']);
  }

  irMisPedidos(): void {
    this.router.navigate(['orden-pedido-atendido']);
  }

}
