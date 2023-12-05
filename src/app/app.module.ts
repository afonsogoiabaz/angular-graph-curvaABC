import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { NgApexchartsModule } from 'ng-apexcharts';

import { CurvaAbcViewComponent } from './pages/curva-abc-view/curva-abc-view.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    CurvaAbcViewComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [importProvidersFrom(HttpClientModule), HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
