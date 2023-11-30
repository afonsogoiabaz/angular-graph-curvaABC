import { Component, ViewChild } from '@angular/core';
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
  
} from "ng-apexcharts";

export interface ChartOptions {
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
export class BarChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor(){
    this.chartOptions = {
      series: [
        {
          name: "Faturamento do fornecedor",
          data: [1456515.95, 440487.59, 154559.27, 35493.2]
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
}
