import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  desde = new  Date('December 25, 1995 13:30:00');
  hasta =  new Date();

  // almacena facturas
  facturas: any = [];

  constructor(private ventas: FacturasService) { }


  ver() {
    console.log('desde:', this.desde);
    console.log('hasta:', this.hasta);
  }

  ngOnInit() {
    this.ventas.getFacturas().subscribe((data: any) => {
      this.facturas = data;
      console.log('Facturas works');
      console.log('================');
      console.log(this.facturas);
    });
  }
}

