import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteData } from './reporte-model';
import { ReporteService } from './reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  reporteData: ReporteData[];

  constructor(private reporteService: ReporteService,
              public router: Router) { }

  ngOnInit(): void {
    this.reporteService.listarReporte().subscribe(
      rp => this.reporteData = rp);
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
