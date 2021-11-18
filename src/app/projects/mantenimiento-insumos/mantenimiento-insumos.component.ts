import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsumoData } from './supplies-model';
import { InsumoService } from './supplies.service';

@Component({
  selector: 'app-mantenimiento-insumos',
  templateUrl: './mantenimiento-insumos.component.html',
  styleUrls: ['./mantenimiento-insumos.component.css']
})
export class MantenimientoInsumosComponent implements OnInit {

  insumoData: InsumoData = new InsumoData();
  insumo: InsumoData[];

  constructor(public router: Router,
              private insumoService: InsumoService) { }

  ngOnInit(): void {
    this.insumoService.listarInsumos().subscribe(
      i => this.insumo = i
    );
  }

  registrarInsumo(): void {
    this.insumoService.registrarInsumo(this.insumoData)
      .subscribe(res => this.insumoService.listarInsumos().subscribe(
        response => this.insumo = response));
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
