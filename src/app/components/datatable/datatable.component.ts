import { Component, OnInit  } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { DataSourceService } from 'src/app/services/data-source.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  constructor(private httpservice: HttpService){}

  displayedColumns: string[] = ['fornec_id', 'nome', 'quantidade', 'total'];
  dataSource = new DataSourceService(this.httpservice);

  ngOnInit(): void {
    this.dataSource.loadRelatorio()
    console.log(this.dataSource);
  }
}
