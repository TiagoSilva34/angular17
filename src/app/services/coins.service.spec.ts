import { provideHttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { CoinsService } from './coins.service';
import { ICoinProps } from '../../type';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { render } from '@testing-library/angular';

describe('CoinsService', () => {
  let service: any = CoinsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CoinsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('The CoinsService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check request parameters and response', async () => {
    let coinData = { code: 'ARS' };
    let url = 'https://economia.awesomeapi.com.br/last/CAD,ARS,GBP';

    service.fetchCoins().subscribe((response: ICoinProps) => {
      expect(response).toMatchObject(coinData);
    });

    // Informações da requisição
    let requestObject = {
      method: 'GET',
      urlWithParams: url,
      responseType: 'json',
      body: [],
    };

    // Para testar o retorno de erro passe algum paramêtro incorreto na url da api
    const req = controller.expectOne(url);

    waitForAsync(() => {
      expect(req.request).toMatchObject(requestObject);
    });

    req.flush(coinData);
    // Testa retorno de erro caso algum paramêtro da api esteja errado
    // req.flush({"status":404,"code":"CoinNotExists","message":"moeda nao encontrada AD-BRL"})
  });
});
