import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICoinProps } from '../../type';

let urlParameter: string = '';

/**
 * Procedimento para indicar o código de uma moeda, fazer a busca na API e exibir suas informações
 */
function addNewCoin() {
  const coinCodeList = ['CAD', 'ARS', 'GBP'];

  coinCodeList.reduce((a, b) => {
    return (urlParameter = a + ',' + b);
  });
}

addNewCoin();

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  httpClient = inject(HttpClient);

  apiUrl = `https://economia.awesomeapi.com.br/last/${urlParameter}`;

  constructor() {}

  fetchCoins() {
    return this.httpClient.get<ICoinProps[]>(this.apiUrl);
  }
}
