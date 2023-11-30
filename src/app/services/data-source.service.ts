import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';
import { CurvaAbc } from '../types/curva-abc';

import { HttpService } from './http.service';
 
@Injectable()

export class DataSourceService extends DataSource<CurvaAbc> {
  relatorio = new BehaviorSubject<CurvaAbc[]>([]);
  isLoading = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpService){
    super();
  }

  override connect(): Observable<CurvaAbc[]> {
    return this.relatorio.asObservable();
  }

  override disconnect(): void {
    this.relatorio.complete();
  }

  loadRelatorio(): void {
    this.isLoading.next(true);
    this.httpService.getRelatorio().subscribe(dados =>{
      this.relatorio.next(dados);
      this.isLoading.next(false);
    })
  }
}
