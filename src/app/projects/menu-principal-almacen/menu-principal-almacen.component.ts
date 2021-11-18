import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal-almacen',
  templateUrl: './menu-principal-almacen.component.html',
  styleUrls: ['./menu-principal-almacen.component.css']
})
export class MenuPrincipalAlmacenComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  irInsumo(): void {
    this.router.navigate(['mantenimiento-insumos']);
  }

  irOrdenSalida(): void {
    this.router.navigate(['orden-salida']);
  }

  irOrdenEntrada(): void {
    this.router.navigate(['orden-entrada']);
  }

  irInsumoProveedor(): void {
    this.router.navigate(['insumo-proveedor']);
  }

  irProveedor(): void {
    this.router.navigate(['mantenimiento-proveedor']);
  }

  irMenu(): void {
    this.router.navigate(['menu-principal-almacen']);
  }
}
