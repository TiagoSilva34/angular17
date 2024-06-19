import { TestBed } from '@angular/core/testing';

import { CoinsService } from './coins.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { take } from 'rxjs';

describe('CoinsService', () => {
  var coinsService: any = CoinsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // !! Change to HttpClientTestingModule
      imports: [HttpClientTestingModule],
    });
    coinsService = TestBed.inject(CoinsService);
  });

  beforeEach((): void => {
    coinsService = TestBed.inject(CoinsService);
    controller = TestBed.inject(HttpTestingController);
  });

  beforeEach((): void => {
    controller.verify();
  });

  it('should be created', () => {
    expect(coinsService).toBeTruthy()
  })

  it('should handle get posts properly', (): void => {
    coinsService
      .getCoins()
      .pipe(take(1))
      .subscribe((res: any): void => {
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(1);
      });

      const BTCBRL = [{
        code: "BTC"
      }]

    const request: TestRequest = controller.expectOne({ 
      method: 'GET',
      url: coinsService.url,
    });

    request.flush(BTCBRL); // <-- this is how our response body will look like, an array with one empty object
  });
});
