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
import {FormGroup, FormControl} from '@angular/forms';

import { HttpService } from 'src/app/services/http.service';
import { CurvaAbc } from 'src/app/types/curva-abc';
import * as moment from 'moment';

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

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDay();

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit{
  @ViewChild("chart", {static: false}) chart!: ChartComponent;

  public chartOptions!: ChartOptions;
  dados: CurvaAbc[] = [];
  data_series: number[] = [];
  data_categories: string[] = [];
  
  constructor(private httpservice: HttpService){
    this.chartOptions = {
      series: [
        {
          name: "Faturamento do fornecedor",
          data: []
        }
      ],

      chart: {
        height: 600,
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
        categories: [],
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
          show: true
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

  filterDate = new FormGroup({
    start: new FormControl(new Date(year, month, day)),
    end: new FormControl(new Date(year, month, day)),
  });

  ngOnInit(): void {
    this.getFornecedores();

    // console.log(moment(this.filterDate.value.start).format( "DD/MM/YYYY"))
    console.log(this.filterDate);
  }


  private getFornecedores(){
    this.httpservice.getRelatorio().subscribe(data =>{
      return this.populationGraph(data);
      
    })
  }

  private populationGraph(array: CurvaAbc[] = []){
    array.map(async dataset=>{
      this.data_series.push(dataset.total);
      this.data_categories.push(dataset.nome);

      this.chartOptions.series = [{
        name: 'Faturamento do fornecedor',
        data: this.data_series
      }]

      this.chartOptions.xaxis = {
        categories: this.data_categories
      }
    })
  }
}
