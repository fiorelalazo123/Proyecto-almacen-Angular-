import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal-directivo',
  templateUrl: './menu-principal-directivo.component.html',
  styleUrls: ['./menu-principal-directivo.component.css']
})
export class MenuPrincipalDirectivoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  irMenu(): void {
    this.router.navigate(['menu-principal-directivo']);
  }

  irReporte(): void {
    this.router.navigate(['reporte']);
  }

  irGraficas(): void {
    this.router.navigate(['graficos']);
  }
}
