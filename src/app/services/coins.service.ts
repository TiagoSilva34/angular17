import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICoinProps } from '../../type';


/**
 * Procedimento para indicar o código de uma moeda, fazer a busca na API e exibir suas informações
*/
let coinParameter: string = '';

function setNewCoin() {
  const coinCodeList = ['CAD', 'ARS', 'GBP'];

  coinCodeList.reduce((a, b) => {
    return coinParameter = a + ',' + b;
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

  fetchCoins() {
    return this.httpClient.get<ICoinProps[]>(this.apiUrl);
  }
}
