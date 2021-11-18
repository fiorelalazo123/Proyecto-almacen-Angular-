import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoPresentacioneData, ProductoPresentacioneUsuarioInterno } from './producto-presentacion-model';
import { ProductoPresentacionService } from './producto-presentacion.service';

@Component({
  selector: 'app-producto-presentacion',
  templateUrl: './producto-presentacion.component.html',
  styleUrls: ['./producto-presentacion.component.css']
})
export class ProductoPresentacionComponent implements OnInit {

  productoP: ProductoPresentacioneData = new ProductoPresentacioneData();
  productoPresentacion: ProductoPresentacioneData[];
  productoPresentacionUsuarioInterno: ProductoPresentacioneUsuarioInterno = new ProductoPresentacioneUsuarioInterno();

  constructor(public router: Router,
              private activatedeRoute: ActivatedRoute,
              private prodPresentacionService: ProductoPresentacionService) {
  }

  ngOnInit(): void {
    this.prodPresentacionService.listarProductosPresentacion().subscribe(
      pp => this.productoPresentacion = pp
    );

    console.log(this.productoPresentacion, 'producto');
  }

  irModalEditar(): void {
    this.router.navigate(['modal-editarproductoPresentacion']);
  }

  irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
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

  registrarPPUsuarioInterno(): void {
    this.prodPresentacionService.registrarProductoPresentacionUsuarioI(this.productoPresentacionUsuarioInterno)
      .subscribe(res => this.prodPresentacionService.listarProductosPresentacion().subscribe(
        response => this.productoPresentacion = response));
  }

  editarPP(prodPrUsuarioI: string): void {
    this.prodPresentacionService.modificarProductoPresentacion(this.productoPresentacionUsuarioInterno)
      .subscribe(res => this.prodPresentacionService.listarProductosPresentacion().subscribe(
        response => this.productoPresentacion = response));

  }

  cargar(prodPrUsuarioI: string): void {

    this.activatedeRoute.params.subscribe(
      e => {
        let id = e[' idProductoPresentacion '];
        if (id) {
          this.prodPresentacionService.obtenerProducto(id).subscribe(
            es => this.productoPresentacionUsuarioInterno = es
          );
        }
      }
    );

  }

  eliminarPP(prodPrUsuarioI: string): void {

    this.prodPresentacionService.eliminarProductoPresentacion(prodPrUsuarioI).subscribe(
      res => this.prodPresentacionService.listarProductosPresentacion().subscribe(
        response => this.productoPresentacion = response)
    );
  }

}
