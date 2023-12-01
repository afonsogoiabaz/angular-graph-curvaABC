import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';

import { NgApexchartsModule } from 'ng-apexcharts';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
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
    MatToolbarModule
  ],
  providers: [importProvidersFrom(HttpClientModule), HttpService, DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
