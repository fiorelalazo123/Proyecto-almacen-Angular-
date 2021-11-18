import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal-vendedor',
  templateUrl: './menu-principal-vendedor.component.html',
  styleUrls: ['./menu-principal-vendedor.component.css']
})
export class MenuPrincipalVendedorComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

   irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
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

  irMenu(): void {
    this.router.navigate(['menu-principal-vendedor']);
  }
}
