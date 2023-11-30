import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

import { NgApexchartsModule } from 'ng-apexcharts';

import { DatatableComponent } from './components/datatable/datatable.component';
import { HttpService } from './services/http.service';
import { DataSourceService } from './services/data-source.service';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [importProvidersFrom(HttpClientModule), HttpService, DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
