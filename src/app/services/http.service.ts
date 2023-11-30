import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Relatorio {
  fornec_id: number,
  nome: string,
  quantidade: number,
  total: number
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) { }

  getRelatorio(): Observable<Relatorio[]> {

    return this.http.get<Relatorio[]>(this.apiUrl);
  }
}
