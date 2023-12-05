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
  templateUrl: './curva-abc-view.component.html',
  styleUrls: ['./curva-abc-view.component.scss']
})
export class CurvaAbcViewComponent{
  @ViewChild("chart", {static: false}) chart!: ChartComponent;

  public chartOptions!: ChartOptions;
  data_series: number[] = [];
  data_categories: string[] = [];

  displayedColumns: string[] = ['fornec_id', 'nome', 'quantidade', 'total'];
  dataSource: CurvaAbc[] = [];
  
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

  formattFilterDates = {
    start: '',
    end: ''
  }

  private populationGraphTable(array: CurvaAbc[] = []){
    this.data_series = [];
    this.data_categories = [];
    
    this.chartOptions.series = [
      {
        data: this.data_series
      }
    ];

    this.chartOptions.xaxis = {
      categories: this.data_categories
    };

    this.dataSource = array;
    console.log(array);

    if(array.length != 0){
      array.map(dataset=>{
      
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

  filtersData(){
    this.formattFilterDates.start = moment(this.filterDate.value.start).format( "YYYY-MM-DD");
    this.formattFilterDates.end = moment(this.filterDate.value.end).format( "YYYY-MM-DD");

    this.httpservice.getFilterDATA(this.formattFilterDates.start, this.formattFilterDates.end).subscribe(data=>{
      this.dataSource = data;
      return this.populationGraphTable(data);
    })
  }
}
