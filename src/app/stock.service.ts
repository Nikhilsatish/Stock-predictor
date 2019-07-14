import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCKS } from './stock-list';
@Injectable()
export class StockService {
  private StockData : Stock[] = STOCKS;

  constructor() { }
  getStock(companyName: string): Stock{
    for(var i = 0; i<this.StockData.length; i++)
    {
      if(this.StockData[i].companyName == companyName)
      return this.StockData[i];
    }
  }
}
