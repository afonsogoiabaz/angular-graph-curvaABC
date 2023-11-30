import { Component  } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

interface Relatorio {
  fornec_id: number,
  nome: string,
  quantidade: number,
  total: number
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {

  dados: Relatorio[] = [
    {fornec_id: 1, nome: 'GRAM INDUSTRIA E COMERCIO LTDA', quantidade: 50745, total: 1456515.95},
    {fornec_id: 8, nome: '8 GRAM INDUSTRIA E COMERCIO LTDA', quantidade: 26048, total: 440487.59},
    {fornec_id: 5, nome: 'ANTONELLA COSMETICOS EIRELI', quantidade: 9327, total: 154559.27},
    {fornec_id: 7, nome: 'GRAM INDUSTRIA E COMERCIO LTDA', quantidade: 5368, total: 35493.2}
  ];

  constructor(private httpservice: HttpService){
    this.obterDados();
  }

  obterDados(){
    this.httpservice.getRelatorio().subscribe(data =>{
      console.log(data);
      this.dados = data;
    })
  }

  displayedColumns: string[] = ['fornec_id', 'nome', 'quantidade', 'total'];
  dataSource = this.dados;
}
