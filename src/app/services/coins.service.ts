import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICoinProps } from '../../type';

let coinParameter: string = '';

function setNewCoin() {
  /**
   * Procedimento para indicar o código de uma moeda, fazer a busca na API e mostrar a moeda no website
  */
  const coinCodeList = ['CAD', 'ARS', 'GBP', 'USD'];

  coinCodeList.reduce((a, b) => {
    return (coinParameter = a + ',' + b);
  });
}

setNewCoin()

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  httpClient = inject(HttpClient);

  apiUrl = `https://economia.awesomeapi.com.br/last/${coinParameter}`;

  constructor() {}

  getCoins() {
    return this.httpClient.get<ICoinProps[]>(this.apiUrl);
  }
}
