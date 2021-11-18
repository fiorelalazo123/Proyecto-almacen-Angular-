import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresentacionData } from './presentacion-model';
import { PresentacionService } from './presentacion.service';

@Component({
  selector: 'app-mantenimiento-presentacion',
  templateUrl: './mantenimiento-presentacion.component.html',
  styleUrls: ['./mantenimiento-presentacion.component.css']
})
export class MantenimientoPresentacionComponent implements OnInit {

  presentacion: PresentacionData[];
  presentacionData: PresentacionData = new PresentacionData();
  constructor(public router: Router,
              private presentacionService: PresentacionService) { }

  ngOnInit(): void {

  this.presentacionService.listarPresentacion().subscribe(
      p => this.presentacion = p
    );
  }

  registrarPresentacion(): void {
    this.presentacionService.registrarPresentacion(this.presentacionData)
      .subscribe(res => this.presentacionService.listarPresentacion().subscribe(
        response => this.presentacion = response));
  }

  irProductos(): void {
    this.router.navigate(['mantenimiento-productos']);
  }

  irPresentacion(): void {
    this.router.navigate(['mantenimiento-presentacion']);
  }

  irMenu(): void {
    this.router.navigate(['menu-principal-vendedor']);
  }

  irproductoPresentacion(): void {
    this.router.navigate(['producto-presentacion']);
  }

}
