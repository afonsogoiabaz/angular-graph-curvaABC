import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

interface Relatorio {
  fornec_id: number,
  nome: string,
  quantidade: number,
  total: number
}


const ELEMENT_DATA: Relatorio[] = [
  
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {

  dados: Relatorio[] = [];

  constructor(private httpservice: HttpService){}

  ngOnInit(){
    this.httpservice.getRelatorio().subscribe({
      next: (dados) =>{
        console.log(dados);
      }
    })
  }

  displayedColumns: string[] = ['id', 'nome', 'quantidade', 'total'];
  dataSource = ELEMENT_DATA;
}
