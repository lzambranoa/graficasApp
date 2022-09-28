import { GraficasService } from './../../services/graficas.service';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{data: []}]
  };
  public doughnutChartType: ChartType = 'doughnut';


  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor(private graficasService: GraficasService){}

  ngOnInit(): void {
    
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     this.doughnutChartData={
    //       labels:Object.keys(data),
    //       datasets:[{data:Object.values(data)}]
    //     }
    //   })

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(({labels, datasets}) => {
        this.doughnutChartData = { labels, datasets}
      })
  }

 

}
