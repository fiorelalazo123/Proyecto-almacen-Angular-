import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-productos',
  templateUrl: './mantenimiento-productos.component.html',
  styleUrls: ['./mantenimiento-productos.component.css']
})
export class MantenimientoProductosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public irProductos() {
    this.router.navigate(['mantenimiento-productos']);
  }

  public irMenu() {
    this.router.navigate(['menu-principal']);
  }

  public abrirModalProducto() {
    this.router.navigate(['registrar-producto']);
  }
}
