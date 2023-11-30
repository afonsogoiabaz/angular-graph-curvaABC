import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
