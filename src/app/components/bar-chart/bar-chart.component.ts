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
          name: "Faturamento por fornecedor",
          data: [2.3, 3.1, 4.0, 10.1]
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
          return val + "%";
        },
        offsetY: -30,
        style: {
          fontSize: "14px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Dec"
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
            return val + "%";
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
