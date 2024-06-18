import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  httpClient = inject(HttpClient)

  constructor() { }

  getCoins() {
    return this.httpClient.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
  }
}
