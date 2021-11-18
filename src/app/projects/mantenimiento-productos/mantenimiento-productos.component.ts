import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoData } from './producto-model';
import { ProductoUserData } from './producto-user-model';
import { ProductoUserService } from './producto-user.service';

@Component({
  selector: 'app-mantenimiento-productos',
  templateUrl: './mantenimiento-productos.component.html',
  styleUrls: ['./mantenimiento-productos.component.css']
})
export class MantenimientoProductosComponent implements OnInit {

  prodUser: ProductoUserData = new ProductoUserData();
  productoUser: ProductoUserData[];
  productoData: ProductoData = new ProductoData();

  constructor(public router: Router,
              private productoUserService: ProductoUserService) { }

  ngOnInit(): void {
    this.productoUserService.listarProductos().subscribe(
      p => this.productoUser = p
    );
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

  registrarProducto(): void {
    this.productoUserService.registrarProducto(this.productoData)
      .subscribe(res => this.productoUserService.listarProductos().subscribe(
        response => this.productoUser = response));
  }

  irPresentacion(): void {
    this.router.navigate(['mantenimiento-presentacion']);
  }
}
