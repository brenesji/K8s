import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class DataService {

  result:any;

  constructor(private _http: HttpClient) { }

  getPrices() {
   return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,CRC&tsyms=USD')
      //.map(result => this.result = result);
      .pipe(map(result => this.result = result));
  }

}