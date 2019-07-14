import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock';
import { STOCKS } from '../stock-list';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  private currentStock : Stock;
  private pastStock : Stock [] = [];

  constructor(private stockservice: StockService) { }

  ngOnInit() {
  }
  getStock(companyName: string): void {
    this.currentStock = this.stockservice.getStock(companyName);
    this.currentStock.searchTime = (new Date()).toUTCString();
    this.pastStock.push(this.currentStock);
  }
}
