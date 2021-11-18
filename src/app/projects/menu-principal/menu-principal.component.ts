import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
  }

  irCatalogoProductos(): void {
    this.router.navigate(['productos-ecoandino']);
  }

  irMisOrdenesMuestra(): void {
    this.router.navigate(['orden-pedido']);
  }

  irMisPedidos(): void {
    this.router.navigate(['orden-pedido-atendido']);
  }

  irproductoPresentacion(): void {
    this.router.navigate(['producto-presentacion']);
  }
}
