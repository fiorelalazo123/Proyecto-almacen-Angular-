import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsumoProveedorData, InsumoProveedorUsuarioInterno } from './insumo-proveedor-model';
import { InsumoProveedorService } from './insumo-proveedor.service';

@Component({
  selector: 'app-insumo-proveedor',
  templateUrl: './insumo-proveedor.component.html',
  styleUrls: ['./insumo-proveedor.component.css']
})
export class InsumoProveedorComponent implements OnInit {

  insumoProveedor: InsumoProveedorData[];
  insumoProveedorUI: InsumoProveedorUsuarioInterno = new InsumoProveedorUsuarioInterno();

  constructor(public router: Router,
              private insumoProveedorService: InsumoProveedorService) { }

  ngOnInit(): void {
    this.insumoProveedorService.listarInsumosProveedor().subscribe(
      ip => this.insumoProveedor = ip
    );
  }

  registrarIPusuarioInterno(): void {
    this.insumoProveedorService.registrarInsumosProveedorUsuarioI(this.insumoProveedorUI)
      .subscribe(res => this.insumoProveedorService.listarInsumosProveedor().subscribe(
        response => this.insumoProveedor = response));
  }

  eliminarInsumoProveedor(proveedor: string): void {

    this.insumoProveedorService.eliminarInsumoProveedor(proveedor).subscribe(
      res => this.insumoProveedorService.listarInsumosProveedor().subscribe(
        response => this.insumoProveedor = response)
    );
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
