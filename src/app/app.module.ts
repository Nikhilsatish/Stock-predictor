import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import {StockService} from './stock.service';
import { StockValueComponent } from './stock-value/stock-value.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
