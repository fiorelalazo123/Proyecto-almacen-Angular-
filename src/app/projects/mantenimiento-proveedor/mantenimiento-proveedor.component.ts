import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorData } from './proveedor-model';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-mantenimiento-proveedor',
  templateUrl: './mantenimiento-proveedor.component.html',
  styleUrls: ['./mantenimiento-proveedor.component.css']
})
export class MantenimientoProveedorComponent implements OnInit {

  proveedor: ProveedorData[];
  proveedorData: ProveedorData = new ProveedorData();

  constructor(public router: Router,
              private proveedorService: ProveedorService) { }

  ngOnInit(): void {
  this.proveedorService.listarProveedores().subscribe(
      p => this.proveedor = p
    );
  }

  registrarProveedor(): void {
    this.proveedorService.registrarProveedor(this.proveedorData)
      .subscribe(res => this.proveedorService.listarProveedores().subscribe(
        response => this.proveedor = response));
  }

  irInsumo(): void {
    this.router.navigate(['mantenimiento-insumos']);
  }

  irInsumoProveedor(): void {
    this.router.navigate(['insumo-proveedor']);
  }

  irOrdenSalida(): void {
    this.router.navigate(['orden-salida']);
  }

  irOrdenEntrada(): void {
    this.router.navigate(['orden-entrada']);
  }

  irProveedor(): void {
    this.router.navigate(['mantenimiento-proveedor']);
  }

  irMenu(): void {
    this.router.navigate(['menu-principal-almacen']);
  }

}
