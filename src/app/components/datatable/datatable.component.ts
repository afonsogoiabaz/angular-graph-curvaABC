import { Component } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  id: number;
  quantidade: number;
  total: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome: 'Hydrogen', quantidade: 1.0079, total: 'H'},
  {id: 2, nome: 'Helium', quantidade: 4.0026, total: 'He'},
  {id: 3, nome: 'Lithium', quantidade: 6.941, total: 'Li'},
  {id: 4, nome: 'Beryllium', quantidade: 9.0122, total: 'Be'},
  {id: 5, nome: 'Boron', quantidade: 10.811, total: 'B'},
  {id: 6, nome: 'Carbon', quantidade: 12.0107, total: 'C'},
  {id: 7, nome: 'Nitrogen', quantidade: 14.0067, total: 'N'},
  {id: 8, nome: 'Oxygen', quantidade: 15.9994, total: 'O'},
  {id: 9, nome: 'Fluorine', quantidade: 18.9984, total: 'F'},
  {id: 10, nome: 'Neon', quantidade: 20.1797, total: 'Ne'},
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  displayedColumns: string[] = ['id', 'nome', 'quantidade', 'total'];
  dataSource = ELEMENT_DATA;
}
