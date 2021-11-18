import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenEntradaData, OrdenEntradaUsuarioInterno } from './orden-entrada-model';
import { OrdenEntradaService } from './orden-entrada.service';

@Component({
  selector: 'app-orden-entrada',
  templateUrl: './orden-entrada.component.html',
  styleUrls: ['./orden-entrada.component.css']
})
export class OrdenEntradaComponent implements OnInit {

  ordenEntradaUI: OrdenEntradaUsuarioInterno[];
  ordenEntradaData: OrdenEntradaData = new OrdenEntradaData();
  constructor(public router: Router,
              private ordenEntradaService: OrdenEntradaService) { }

  ngOnInit(): void {
  this.ordenEntradaService.listarOrdenEntrada().subscribe(
      oe => this.ordenEntradaUI = oe
    );
  }

  registrarOrdenEntrada(): void {
    this.ordenEntradaService.registrarOrdenEntrada(this.ordenEntradaData)
      .subscribe(res => this.ordenEntradaService.listarOrdenEntrada().subscribe(
        response => this.ordenEntradaUI = response));
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
