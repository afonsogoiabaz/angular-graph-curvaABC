import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexLegend
} 
from "ng-apexcharts";

import { HttpService } from 'src/app/services/http.service';
import { CurvaAbc } from 'src/app/types/curva-abc';

export interface ChartOptions{
  chart?: ApexChart;
  colors?: any[];
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  labels?: string[];
  plotOptions?: ApexPlotOptions;
  series: ApexAxisChartSeries;
  title?: ApexTitleSubtitle;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  legend?: ApexLegend;
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{
  @ViewChild("chart") chart!: ChartComponent;

  public chartOptions!: ChartOptions;
  dados: CurvaAbc[] = [];
  
  constructor(private httpservice: HttpService){
    this.chartOptions = {
      series: [
        {
          name: "Faturamento do fornecedor",
          data: [1,2,3,4]
        }
      ],

      chart: {
        height: 350,
        type: "bar",
      },

      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },

      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return "R$ " + val;
        },
        offsetY: -30,
        style: {
          fontSize: "14px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "GRAM INDUSTRIA",
          "8 GRAM INDUSTRIA",
          "ANTONELLA COSMETICOS",
          "GRAM INDUSTRIA"
        ],
        position: "bottom",
        labels: {
          offsetY: 0
        },
        axisBorder: {
          show: false
        },
        tooltip: {
          enabled: false,
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          type: "gradient",
          shadeIntensity: 0.25,
          gradientToColors: ['#30EF6A', '#14152d'],
          inverseColors: true,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [10, 100, 10]
        }
      },

      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          formatter: function(val) {
            return "R$ "+ val;
          }
        }
      },
      title: {
        text: "Gráfico do faturamento por fornecedor",
        offsetY: 10,
        floating: false,
        align: "center",
        style: {
          color: "#444",
          fontFamily: 'Aleo',
          fontSize: '16px'
        }
      }
    };
  }

  ngOnInit(): void {
    this.getFornecedores();
  }

  private getFornecedores(){
    this.httpservice.getRelatorio().subscribe(data=>{
      this.dados = data;

      this.populationGraph();
    })
  }

  private populationGraph(){
    this.dados.map(dado=>{
      console.log(this.chartOptions);
    })
  }

}
