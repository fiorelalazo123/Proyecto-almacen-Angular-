import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chart.js';

import { Router } from '@angular/router';

import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent  {

  public barChartOptions: ChartOptions = {
    responsive: true,
       scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 86, 27, 90 , 28, 48], label: 'Órdenes de muestra solicitados' },
    { data: [28, 20, 30, 50, 19, 46, 30 , 50, 16, 80, 19, 30], label: 'Pedido concretadas' }
  ];

  constructor(public router: Router) { }

  public doughnutChartLabels: Label[] = ['Algarrobo', 'Maca', 'Chía' , 'Cacao', 'Café', 'Quinua', 'Yacón', 'Aguaymanto', 'Maíz Morado'];
  public doughnutChartData: MultiDataSet = [
    [7, 20, 5, 20, 15, 10, 2, 6, 5, 10]
  ];
  public doughnutChartType: ChartType = 'doughnut';



  public barChartLabels2: Label[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
  public barChartType2: ChartType = 'bar';
  public barChartLegend2 = true;
  public barChartPlugins2 = [pluginDataLabels];

  public barChartData2: ChartDataSets[] = [
    { data: [350, 400, 362, 100, 56, 58, 40, 86, 27, 90 , 28, 48], label: 'Ingresos por pedidos' },
  ];

  public barChartLabels3: Label[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
  public barChartType3: ChartType = 'bar';
  public barChartLegend3 = true;
  public barChartPlugins3 = [pluginDataLabels];

  public barChartData3: ChartDataSets[] = [
       { data: [10, 16, 34, 9, 9, 8, 2 , 3, 5, 8, 6, 5], label: 'Egresos por insumos' }
  ];

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
