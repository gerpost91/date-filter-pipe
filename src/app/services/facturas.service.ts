import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { }

  getFacturas() {
    return this.http.get('https://loggin-app-fa0a7.firebaseio.com/data/facturas.json');
  }


}
