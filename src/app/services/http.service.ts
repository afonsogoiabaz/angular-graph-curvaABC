import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CurvaAbc } from '../types/curva-abc';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getRelatorio(): Observable<CurvaAbc[]> {

    return this.http.get<CurvaAbc[]>(this.apiUrl);
  }

  getFilterDATA(data_inicial: any, data_final: any): Observable<CurvaAbc[]> {

    return this.http.get<CurvaAbc[]>(`${this.apiUrl}/${data_inicial}/${data_final}`);
  }
}
