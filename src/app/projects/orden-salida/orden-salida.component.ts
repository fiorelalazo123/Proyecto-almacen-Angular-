import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenSalidaData, OrdenSalidaUsuarioInterno } from './orden-salida-model';
import { OrdenSalidaService } from './orden-salida.service';

@Component({
  selector: 'app-orden-salida',
  templateUrl: './orden-salida.component.html',
  styleUrls: ['./orden-salida.component.css']
})
export class OrdenSalidaComponent implements OnInit {

  ordenSalidaUI: OrdenSalidaUsuarioInterno[];
  ordenSalidaData: OrdenSalidaData = new OrdenSalidaData();
  constructor(public router: Router,
              private ordenSalidaervice: OrdenSalidaService) { }

  ngOnInit(): void {
  this.ordenSalidaervice.listarOrdenSalida().subscribe(
      oe => this.ordenSalidaUI = oe
    );
  }

  registrarOrdenSalida(): void {
    this.ordenSalidaervice.registrarOrdenSalida(this.ordenSalidaData)
      .subscribe(res => this.ordenSalidaervice.listarOrdenSalida().subscribe(
        response => this.ordenSalidaUI = response));
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
