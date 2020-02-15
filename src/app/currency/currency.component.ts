import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });
  }

}
